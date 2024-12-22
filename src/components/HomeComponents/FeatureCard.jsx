import React from "react";
import CradFrame from "../../assets/card_frame.png";
const FeatureCard = (props) => {
  return (
    <div className="relative flex flex-col items-center justify-center p-6 rounded-lg bg-black bg-opacity-60 border-2 border-red-600 w-[250px] h-[250px]">
      {/* Decorative Frame */}
      <div
        className="absolute inset-0 border border-red-600 pointer-events-none"
        style={{
          clipPath:
            "polygon(10% 0%, 90% 0%, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0% 90%, 0% 10%)",
        }}
      ></div>

      {/* Icon */}
      <img
        src={props.icon_image}
        alt="Feature Icon"
        className="w-12 h-12 mb-4"
      />

      {/* Text */}
      <p className="text-white text-center text-sm font-medium leading-snug">
        {props.text}
      </p>
    </div>
  );
};

export default FeatureCard;
