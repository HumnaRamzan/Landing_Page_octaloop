import React from "react";
import CradFrame from "../../assets/card_frame.png";
const FeatureCard = (props) => {
  return (
    <div
      className="relative flex flex-col items-center justify-center p-8  bg-opacity-60  w-[250px] h-[250px]"
      style={{
        backgroundImage: `url(${CradFrame})`, // Use the background image passed through props
        backgroundSize: "cover", // Ensures the background covers the entire card
        backgroundPosition: "center", // Keeps the image centered
      }}
    >
      {/* Icon */}
      <img
        src={props.icon_image}
        alt="Feature Icon"
        className="w-16 h-16 mb-4"
      />

      {/* Text */}
      <p className="text-white text-center text-sm font-medium leading-snug">
        {props.text}
      </p>
    </div>
  );
};

export default FeatureCard;
