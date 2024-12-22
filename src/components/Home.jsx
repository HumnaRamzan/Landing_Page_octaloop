import React from "react";
import Hero from "./HomeComponents/Hero";
import LINE from "../assets/line1.png";
import BANNER_LINES from "../assets/banner_libes.mp4";
import Features from "./HomeComponents/Features";
import Gallery from "./HomeComponents/Gallery";
import Roadmap from "./HomeComponents/Roadmap";
import Faq from "./HomeComponents/Faq";
const Home = () => {
  return (
    <main>
      <Hero />
      <div>
        <img src={LINE} />
      </div>
      <Features />
      <div className="w-full overflow-hidden">
        <video
          className="w-[140%] h-auto object-cover"
          src={BANNER_LINES}
          autoPlay
          loop
          muted
        />
      </div>
      <Gallery />
      <Roadmap />
      <Faq />
    </main>
  );
};

export default Home;
