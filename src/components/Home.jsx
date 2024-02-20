import React from "react";
import CreateRoom from "./CreateRoom";
import EnterRoom from "./EnterRoom";

function Head({ setUserName }) {
  return (
    <div className="relative min-h-[90lvh] flex flex-col justify-center items-center  text-white font-sans">
     <div className="z-10 text-center">
        <h1 className="text-4xl font-bold mb-4 text-slate-100">Code Together, Anytime, Anywhere</h1>
        <p className="text-lg mb-8 text-slate-300">Collaborate seamlessly on code projects with real-time updates, multiple language support, and rich themes.</p>
        <div className="flex flex-col bg-primary py-20  flex-wrap items-center gap-4   mx-auto md:w-3/4 w-full">
          <EnterRoom setUserName={setUserName} />
          <div className="text-xl font-semibold">OR</div>
          <CreateRoom setUserName={setUserName} />
        </div>
      </div>
    </div>
  );
}

export default Head;
