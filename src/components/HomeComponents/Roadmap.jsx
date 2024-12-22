import React from "react";
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
    <section className="bg-black py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-4 font-zenDots">
          Road<span className="text-red-600">map</span>
        </h2>
        <p className="text-gray-300 text-center mb-12 font-interFont">
          Guiding the fusion of culture, AI, and Web3 innovation
        </p>

        <div className="relative space-y-12">
          {phases.map((phase, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center gap-6"
            >
              {/* Phase Header */}
              <h3
                className={`text-2xl font-bold text-red-600 bg-red-600/20 px-4 py-2 font-zenDots shadow-md z-10 relative left-0 w-[200px] ${
                  index === 1 || index === 3 ? "text-left" : "text-right"
                }`}
              >
                {phase.phase}
              </h3>

              {/* List and Image Container */}
              <div
                className={`relative w-[1050px] mx-auto bg-red-600 py-6 px-8 rounded-lg shadow-lg flex ${
                  index === 1 || index === 3
                    ? "lg:flex-row"
                    : "lg:flex-row-reverse justify-start text-left"
                } items-center gap-6`}
              >
                {/* Image Positioned Relative to UL */}
                <div className="relative w-48 h-48 flex-shrink-0">
                  <img
                    src={phase.image}
                    alt={phase.phase}
                    className="w-full h-full object-cover rounded-full shadow-lg"
                  />
                </div>

                {/* Text List */}
                <ul
                  className={`list-disc list-inside text-white text-lg font-interFont space-y-2 text-left ${
                    index === 1 || index === 3 ? "pl-6" : "ml-0"
                  }`}
                >
                  {phase.items.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
