import React from "react";
import { Link, useParams } from "react-router-dom";
import Notify from "./notification";

function NameBar({ allUsers }) {
  const { roomId } = useParams();

  function copy() {
    navigator.clipboard.writeText(roomId);
    Notify("Successfully Copied!", "info");
  }
  function logOut() {
    Notify("Logged Out Successfully!", "info");
  }

  return (
    <div className="bg-primary border-2 border-neutral-800 text-white flex gap-10 py-2 items-center justify-center">
      <span className="text-slate-200 font-bold border-2 py-2 px-4 rounded-xl select-none">
        Admin - {Array.from(allUsers)[0].toUpperCase()}
      </span>
      <button className=" text-emerald-500 px-4 py-2 border border-emerald-500 hover:text-white hover:bg-emerald-500 rounded-lg " onClick={copy}>
        Copy Room Link
      </button>
      <Link to='/'>
      <div className=" text-red-500 px-4 py-2 border border-red-500 hover:text-white hover:bg-red-500 rounded-lg " onClick={logOut} >
        Log Out
      </div>
      </Link>
    </div>
  );
}

export default NameBar;
