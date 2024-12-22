import React from "react";

const RoadmapPhase = (props) => {
  return (
    <div className="relative flex items-center gap-6 mb-12">
      <div className="absolute left-2 w-4 h-4 bg-red-600 rounded-full" />
      <div className="ml-12 flex-1">
        <h3 className="text-2xl font-bold text-red-600 mb-4">{props.phase}</h3>
        <div className="bg-red-500/10 rounded-lg p-6">
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            {props.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="hidden lg:block w-64 h-64">
        <img
          src={props.image}
          alt={props.phase}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default RoadmapPhase;
