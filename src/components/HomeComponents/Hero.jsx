import React, { useState } from "react";
import HERO_BG from "../../assets/hero_bg.mp4";
import Sound_Icon from "../../assets/sound.png";
import Unmute_Icon from "../../assets/unmute.png";
const Hero = () => {
  const [isMuted, setIsMuted] = useState(true);

  const toggleSound = () => {
    const video = document.querySelector("video");
    if (isMuted) {
      video.muted = false;
      setIsMuted(false);
    } else {
      video.muted = true;
      setIsMuted(true);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-start overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-10" />
        <video
          src={HERO_BG}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        ></video>
        <div className="absolute bottom-4 right-8 z-20 flex items-center gap-2 p-2 rounded-lg">
          <button
            onClick={toggleSound}
            className="text-white flex items-center justify-center w-10 h-10 bg-gray-400 bg-opacity-50 hover:bg-gray-500 hover:bg-opacity-70 rounded-full"
          >
            {isMuted ? (
              <img src={Sound_Icon} alt="Muted Icon" className="w-10 h-10" />
            ) : (
              <img
                src={Unmute_Icon}
                alt="Unmuted Icon"
                className="w-8 h-8 text-white"
              />
            )}
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-4xl px-6 lg:px-12 pt-24">
        <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6  font-zenDots text-left leading-tight">
          Generate with AI, Scan, Mint, Sell
          <br /> & Trade
        </h1>
        <p className="text-xl text-gray-200 mb-8 max-w-2xl text-left font-interFont leading-relaxed">
          Explore 3dotlink, where Web3 meets cultural legacy, and
          <br /> AI breathes life into NFTs
        </p>
        <div className="flex justify-start">
          <button className="bg-red-600 hover:bg-red-700 text-white text-lg rounded-2xl px-12 py-4 font-interFont">
            Buy NFT'S
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
