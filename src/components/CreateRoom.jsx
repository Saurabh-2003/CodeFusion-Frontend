import React from "react";
import { v4 as rand } from "uuid";
import { useNavigate } from "react-router-dom";
import {PlusCircle} from 'lucide-react'

function CreateRoom({ setUserName }) {
  const navigate = useNavigate();

  return (
    <form
      className="flex flex-col  gap-4 w-3/4"
      onSubmit={(e) => {
        e.preventDefault();
        navigate("/editor/" + rand());
      }}
    >
      <input
        className="px-2 py-2 rounded-sm text-slate-800"
        placeholder="Enter Your Name"
        onChange={(e) => {
          setUserName(e.target.value);
        }}
        required
      />
      <button className="bg-emerald-600 flex items-center justify-center gap-2 text-stone-100 border-2 border-emerald-500 py-2 rounded-lg transition-transform 
                transform-gpu hover:scale-105 focus:outline-none">
                  <PlusCircle/>Create</button>
    </form>
  );
}

export default CreateRoom;
