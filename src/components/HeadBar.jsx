import React from "react";
import Notify from "./notification";

function HeadBar({
  currTheme,
  setThemeHandler,
  currLang,
  setLangHandler,
  socket,
  roomId,
  userName,
  editorData,
  status,
  runCode,
  setOutData,
}) {
  let statusClass = " px-4 py-1 rounded-md ";
  if (status === "Idle") statusClass += "border-emerald-500 border text-emerald-500";
  else statusClass += "border-red-500 border text-red-500";

  return (
    <div className="flex flex-wrap mt-2  items-center bg-slate-800 mb-4 px-6 py-2 justify-between  gap-x-10 gap-y-2">
     

      <div className="flex gap-2">
            <button
              className="px-4 py-1 bg-emerald-500 hover:-translate-y-1 transition-transform text-white rounded-md 
              "
              onClick={() => {
                setOutData("Running...");
                runCode();
              }}
            >
              Run
            </button>

            <select
              name="theme"
              id="theme"
              onChange={(e) => {
                setThemeHandler(e.target.value);
              }}
              value={currTheme}
              className=" py-[6px] bg-slate-600 text-white rounded-md "
            >
              <option value="Sublime">Sublime</option>
              <option value="AndroidStudio">Android Studio</option>
              <option value="Dracula">Dracula</option>
              <option value="XCodeDark">XCode Dark</option>
            </select>

            <select
              name="lang"
              id="lang"
              onChange={(e) => {
                if (currLang === e.target.value) return;
                setLangHandler(e.target.value);
                socket.current.emit("langchange", e.target.value, userName, roomId);
              }}
              value={currLang}
              className="py-[6px] bg-slate-600 text-white rounded-md "
            >
              <option value="c">C</option>
              <option value="cpp">C++</option>
              <option value="python">Python</option>
              <option value="javascript">Javascript</option>
              <option value="java">Java</option>
              <option value="rust">Rust</option>
              <option value="kotlin">Kotlin</option>
              <option value="php">php</option>
              <option value="mysql">MySql</option>
            </select>

      </div>


      <div className="flex flex-wrap">
        <button type="button" className={statusClass}>
          Status - {status}
        </button>

        <button
          type="button"
          className="px-4 py-1 bg-emerald-500 hover:-translate-y-1 transition-transform text-white rounded-md ml-2"
          onClick={() => {
            window.navigator.clipboard.writeText(editorData);
            Notify("Code Copied Successfully!", "success");
          }}
        >
          Copy Code
        </button>
      </div>
    </div>
  );
}

export default HeadBar;
