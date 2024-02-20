import React from "react";
import { v4 as rand } from "uuid";
import "animate.css";

function ActiveUsers({ allUsers }) {
  let animateClass = "total-name animate__animated ";
  let cr = Math.floor(Math.random() * 8);

  if (cr === 0) animateClass += "animate__rubberBand";
  else if (cr === 1) animateClass += "animate__bounce";
  else if (cr === 2) animateClass += "animate__heartBeat";
  else if (cr === 3) animateClass += "animate__jello";
  else if (cr === 4) animateClass += "animate__wobble";
  else if (cr === 5) animateClass += "animate__tada";
  else if (cr === 6) animateClass += "animate__flip";
  else if (cr === 7) animateClass += "animate__zoomInDown";

  return (
    <div className=" bg-primary mx-2 w-32 max-sm:mb-6 rounded-xl max-sm:w-full border border-slate-700 overflow-hidden ">
      <div className="text-slate-100 sm:mb-6  text-center pt-4 pb-4 bg-emerald-600">Connected</div>
      <div className="items-center gap-6 justify-center w-full overflow-y-scroll sm:h-[63lvh] max-sm:overflow-x-scroll flex flex-col max-sm:flex-row max-sm:py-2">
        {allUsers.map((item) => (
          <div className={`${animateClass}  mx-auto flex flex-col items-center justify-center`}key={rand()}>
            <div className="text-lg text-white bg-emerald-500 rounded-full w-12 h-12 grid place-items-center ">{String(item).charAt(0)}</div>
            <div className="text-sm    text-slate-100">{item}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ActiveUsers;
