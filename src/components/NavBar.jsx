import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavBar() {
  const location = useLocation();

  // Check if the current location matches "/editor/:roomId"
  if (location.pathname.startsWith("/editor")) {
    // If it matches, return null to hide the NavBar
    return null;
  }

  // If the location doesn't match, render the NavBar
  return (
    <ul className="flex py-4 justify-center gap-10 items-center text-white bg-primary">
      <Link to="/">
        <li className="transition-colors duration-300 ease-in-out hover:bg-gray-800 px-4 py-2 border-b-2 border-emerald-500">
          Home
        </li>
      </Link>
      <Link to="/create">
        <li className="transition-all duration-300 ease-in-out bg-emerald-600 hover:bg-transparent hover:text-emerald-500 hover:border-emerald-500 px-4 py-2 border border-emerald-500 rounded-full">
          Get Started
        </li>
      </Link>
    </ul>
  );
}

export default NavBar;
