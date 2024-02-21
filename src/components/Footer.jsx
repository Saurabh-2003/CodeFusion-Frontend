import React from "react";
import { useLocation } from "react-router-dom";

function Footer() {
  const location = useLocation();

  // Check if the current location matches "/editor/:roomId"
  if (location.pathname.startsWith("/editor")) {
    // If it matches, return null to hide the NavBar
    return null;
  }
  return (
    <footer className="bg-primary text-stone-400 py-4 text-center">
      <p className="text-sm">
        © {new Date().getFullYear()} Saurabh Thapliyal. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
