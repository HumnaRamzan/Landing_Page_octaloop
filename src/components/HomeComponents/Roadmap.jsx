import React from "react";
import RoadmapPhase from "./RoadmapPhase";
import person1 from "../../assets/person1.png";
import person2 from "../../assets/person2.png";
import person3 from "../../assets/person3.png";
import person4 from "../../assets/person4.png";
const Roadmap = () => {
  const phases = [
    {
      phase: "Phase - I",
      items: [
        "Goal Defining",
        "Market Research",
        "Whitepaper v1",
        "Initial Funding Secured",
      ],
      image: person1,
    },
    {
      phase: "Phase II",
      items: [
        "AI Generative System Development",
        "Early AI Generative System Testing",
        "Preparing for NFT Mask Collection Launch",
        "Website launch V1",
        "Whitelisting",
      ],
      image: person2,
    },
    {
      phase: "Phase III",
      items: [
        "NFT Minting",
        "3dotlink NFT Collection Launch",
        "Active Marketing Campaigns",
        "Community Engagement Initiatives",
        "3dotlink Marketplace Launch",
      ],
      image: person3,
    },
    {
      phase: "Phase IV",
      items: [
        "Collaborations & Partnerships",
        "Enhanced AI Generative System",
        "Global Outreach Marketing",
        "Staking",
      ],
      image: person4,
    },
  ];

  return (
    <div>
      <section className="bg-black py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-white text-center mb-4">
            Road <span className="text-red-600">map</span>
          </h2>
          <p className="text-gray-300 text-center mb-12">
            Guiding the fusion of culture, AI, and Web3 innovation
          </p>

          <div className="relative">
            <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-red-500/30" />
            {phases.map((phase, index) => (
              <RoadmapPhase key={index} {...phase} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Roadmap;
