import React, { useMemo, useState, useEffect, useRef } from "react";
import HeadBar from "./HeadBar";
import Editor from "./Editor";
import axios from "axios";
import { sublime } from "@uiw/codemirror-theme-sublime";
import { androidstudio } from "@uiw/codemirror-theme-androidstudio";
import { dracula } from "@uiw/codemirror-theme-dracula";
import {  xcodeDark } from "@uiw/codemirror-theme-xcode";
import { useParams } from "react-router-dom";
import skt from "../sockets";
import Notify from "./notification";

function Controller({ userName, setAllUsers }) {
  const [theme, setTheme] = useState(sublime);
  const [lang, setLang] = useState("cpp");
  const [editorData, setEditorData] = useState("");
  const [inputData, setInputData] = useState("");
  const [outData, setOutData] = useState("");
  const [status, setStatus] = useState("Idle");
  const { roomId } = useParams();
  const socket = useRef(null);
  const [subId, setSubId] = useState("");
  const idRef = useRef(null);
  const myInterval = useRef(null);
  idRef.current = subId;

  useEffect(() => {
    socket.current = skt();
    console.log(socket.current);
    socket.current.emit("join", roomId, userName);

    socket.current.on("codechange", (c) => {
      setEditorData(c);
    });
    socket.current.on("inputchange", (c) => {
      setInputData(c);
    });
    socket.current.on("langchange", (lang, user) => {
      if (user) {
        Notify(user + " has Changed the Language", "default");
      }
      setLang(lang);
    });

    socket.current.on("leave", (user) => {
      Notify(user + " has Left the Room.", "danger");
      setAllUsers((prev) => {
        return [...prev].filter((name) => name !== user);
      });
    });

    return () => {
      socket.current.disconnect();
      socket.current.off("newjoin");
      socket.current.off("leave");
      socket.current.off("codechange");
      socket.current.off("inputchange");
    };
  }, [roomId, setAllUsers, userName]);

  useEffect(() => {
    socket.current.off("newjoin");

    socket.current.on("newjoin", (newUser, allUsers, id) => {
      setAllUsers(allUsers);
      if (userName !== newUser) {
        Notify(newUser + " Joined the Room.", "success");
        socket.current.emit("sync", editorData, inputData, lang, id);
      }
    });
  }, [editorData, inputData, lang, setAllUsers, userName]);

  function runCode() {
    if (status !== "Idle") return;

    var source_code = "" + editorData;
    var input = "" + inputData;
    source_code = source_code.replace(/(?:\r\n|\r|\n)/g, "\n");
    input = input.replace(/(?:\r\n|\r|\n)/g, "\n");

    setStatus("running");

    const opt = {
      method: "post",
      data: {
        source_code,
        language: lang,
        input,
        api_key: "guest",
      },
    };

    axios('https://api.paiza.io/runners/create', opt)
      .then((res) => {
        setSubId(res.data.id);
        setStatus(res.data.status);

        myInterval.current = setInterval(() => {
          axios('https://api.paiza.io/runners/get_details', {
            params: {
              id: idRef.current,
              api_key: "guest",
            },
          })
            .then((res) => {
              setStatus(res.data.status);
              if (res.data.status === "completed") {
                let c = "";
                if (res.data.build_stderr !== null) c += res.data.build_stderr;
                if (res.data.build_stdout !== null) c += res.data.build_stdout;
                if (res.data.stderr !== null) c += res.data.stderr;
                if (res.data.stdout !== null) c += res.data.stdout;
                if (res.data.exit_code !== null)
                  c += "[Exit_Code: " + res.data.exit_code + " ]";
                setOutData(c);
              }
            })
            .catch((err) => console.log(err));
        }, 1000);
      })
      .catch((err) => {
        Notify("Some Error Occured", "danger");
        setStatus("error");
      });
  }

  useEffect(() => {
    if (status === "Idle") return;

    if (status === "completed") {
      clearInterval(myInterval.current);
      setStatus("Idle");
    }
  }, [status]);

  const themeMap = useMemo(() => {
    return new Map([
      [sublime, "Sublime"],
      [androidstudio, "AndroidStudio"],
      [dracula, "Dracula"],
      [xcodeDark, "XCodeDark"],
    ]);
  }, []);

  const themeMap2 = useMemo(() => {
    return new Map([
      ["Sublime", sublime],
      ["AndroidStudio", androidstudio],
      ["Dracula", dracula],
      ["XCodeDark", xcodeDark],
    ]);
  }, []);
  function setThemeHandler(theme) {
    setTheme(themeMap2.get(theme));
  }
  return (
    <div className="bg-primary h-fit p-2 border border-slate-600 px-2  rounded-lg w-full ">
      <HeadBar
        currTheme={themeMap.get(theme)}
        setThemeHandler={setThemeHandler}
        currLang={lang}
        setLangHandler={setLang}
        socket={socket}
        roomId={roomId}
        userName={userName}
        editorData={editorData}
        status={status}
        runCode={runCode}
        setOutData={setOutData}
      />

      <div className="flex h-full w-full gap-4 max-sm:flex-col">
        <div className="w-2/4 h-full max-sm:w-full ">
          <Editor
            themes={theme}
            lang={lang}
            classN='h-[62lvh]'
            readOnly={false}
            socket={socket}
            setEditorData={setEditorData}
            editorData={editorData}
            setInputData={null}
            inputData={null}
            roomId={roomId}
            outData={null}
          />
        </div>
        



        <div className="flex flex-col gap-4 max-sm:w-full w-2/4 h-[62lvh] ">
          <div className="w-full flex flex-col h-1/2">
            <div className="text-slate-200 bg-zinc-600 text-center">INPUT</div>
            <Editor
              themes={theme}
              classN='h-full'
              lang="textile"
              readOnly={false}
              socket={socket}
              setEditorData={null}
              editorData={null}
              setInputData={setInputData}
              inputData={inputData}
              roomId={roomId}
              outData={null}
            />
          </div>
          <div className="flex flex-col w-full h-1/2">
            <div className="text-slate-200 text-center bg-zinc-600">OUTPUT</div>
            <Editor
              themes={theme}
              classN="h-full"
              lang="textile"
              readOnly={true}
              socket={null}
              setEditorData={null}
              editorData={null}
              setInputData={null}
              inputData={null}
              roomId={null}
              outData={outData}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Controller;
