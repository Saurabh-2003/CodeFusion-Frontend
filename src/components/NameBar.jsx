import React from "react";
import { useParams } from "react-router-dom";
import Notify from "./notification";

function NameBar({ allUsers }) {
  const { roomId } = useParams();

  function copy() {
    navigator.clipboard.writeText(roomId);
    Notify("Successfully Copied!", "info");
  }

  return (
    <div className="bg-primary text-white flex gap-10 py-2 items-center justify-center">
      <span className=" text-slate-200">{[...allUsers].at(0)}'s Room</span>
      <button className=" text-btnHighlight px-4 py-2 border border-btnHighlight hover:text-white hover:bg-emerald-500 rounded-lg " onClick={copy}>
        Copy Room Link
      </button>
    </div>
  );
}

export default NameBar;
