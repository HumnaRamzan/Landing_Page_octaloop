import React from "react";
import featuresData from "../../constants/featuresData";
import FeatureCard from "./FeatureCard";
import BGVIDEO from "../../assets/cards_bg.mp4";
const Features = () => {
  const featuresComponent = featuresData.map((item, index) => {
    return (
      <FeatureCard key={index} icon_image={item.icon_image} text={item.text} />
    );
  });
  return (
    <section className="relative bg-black py-24 px-6 lg:px-12 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-[1088px]">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={BGVIDEO}
          autoPlay
          loop
          muted
        />
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      {/* Features Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 max-w-7xl mx-auto">
        {featuresComponent}
      </div>
    </section>
  );
};

export default Features;
