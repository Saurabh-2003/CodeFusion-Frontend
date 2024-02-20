import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function EnterRoom({ setUserName }) {
  const [roomId, setRoomId] = useState("");
  const navigate = useNavigate();

  return (
    <form
      className="flex flex-col gap-4 w-3/4"
      onSubmit={(e) => {
        e.preventDefault();
        navigate("/editor/" + roomId);
      }}
    >
      <input
       className="px-2 py-2 rounded-sm text-slate-800"
        placeholder="Enter Room Code"
        onChange={(e) => {
          setRoomId(e.target.value);
        }}
        required
      />
      <input
        className="px-2 py-2 rounded-sm text-slate-800"
        placeholder="Enter Your Name"
        onChange={(e) => {
          setUserName(e.target.value);
        }}
        required
      />
      <button className="bg-emerald-500 py-2 rounded-lg transition-transform 
                          transform-gpu hover:scale-105 focus:outline-none">
        Join
      </button>


    </form>
  );
}

export default EnterRoom;
