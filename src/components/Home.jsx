
import Features from "./home-panels/Features";
import { Hero } from "./home-panels/Hero";
import { Testimonials } from "./home-panels/Testimonials";


function Head({ setUserName }) {
  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center text-white font-sans">

      <Hero/>
      <Features/>
      <Testimonials/>
    </div>
  );
}

export default Head;
