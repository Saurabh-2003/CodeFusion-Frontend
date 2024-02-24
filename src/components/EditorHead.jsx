import React, { useEffect, useRef, useState } from "react";
import Controller from "./Controller";
import ActiveUsers from "./ActiveUsers";
import NameBar from "./NameBar";
import Loading from "./Loading";
import skt from "../sockets";

function EditorHead({ userName }) {
  const [allUsers, setAllUsers] = useState([userName]);
  const [loading, setLoading] = useState(true);
  const socket = useRef(null);

  useEffect(() => {
    socket.current = skt();

    socket.current.on("connect", () => {
      setLoading(false);
    });
  }, [socket]);

  return (
    <>
      {loading ? ( 
        <Loading />
      ) : (
        <>
          <NameBar allUsers={allUsers} />
          <div className="flex max-sm:flex-col mx-4 my-4 h-full ">
            <ActiveUsers allUsers={allUsers} />
            <Controller userName={userName} setAllUsers={setAllUsers} socket={socket} /> {/* Corrected: Passed socket */}
          </div>
        </>
      )}
    </>
  );
}
export default EditorHead;
