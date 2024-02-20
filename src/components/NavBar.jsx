import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <ul className="flex py-4 justify-center gap-10 items-center text-white bg-slate-900">
      <li className="transition-colors duration-300 ease-in-out hover:bg-gray-800 px-4 py-2 border-b-2 border-emerald-500">
        <Link to="/">Home</Link>
      </li>
      <li className="transition-colors duration-300 ease-in-out hover:bg-gray-800  px-4 py-2 border-b-2 border-emerald-500 ">
        <Link to="/create">Create Room</Link>
      </li>
      <li className="transition-all duration-300 ease-in-out bg-emerald-500 hover:bg-transparent hover:text-emerald-500 hover:border-emerald-500 px-4 py-2 border border-emerald-500 rounded-full">
        <Link to="/join">Join Room</Link>
      </li>
    </ul>
  );
}

export default NavBar;
