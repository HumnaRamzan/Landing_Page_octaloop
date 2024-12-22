import React from "react";
import FAQItem from "./FAQItem";
import { cn } from "../../utils/lib";
import faq_person from "../../assets/faq_person.png";
import smokeEffect from "../../assets/smoke_effect.png";
const Faq = () => {
  const faqItems = [
    {
      question: "How do I create NFT's on 3dotlink?",
      answer:
        "Artists and creators can use our AI-integrated platform to generate NFTs by providing specific inputs, such as the desired features and elements for their digital artwork.",
    },
    {
      question: "What kind of art does 3dotlink support?",
      answer:
        "3dotlink supports a wide range of digital art formats, with a focus on AI-generated and culturally inspired artwork.",
    },
    {
      question: "How are digital artworks verified for authenticity?",
      answer:
        "Each artwork is verified through blockchain technology and our proprietary AI verification system.",
    },
    {
      question: "Can artists access and manage their collections on 3dotlink?",
      answer:
        "Yes, artists have full control over their collections through our user-friendly dashboard.",
    },
  ];
  return (
    <section className="bg-black py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12">
          <div>
            <h2 className="text-4xl font-bold text-white mb-4 font-zenDots text-left">
              Have any question?
            </h2>
            <p className="text-gray-300 mb-8 font-interFont text-left">
              Curious about 3dotlink? Explore our frequently asked questions to
              find answers
            </p>

            <div className="flex gap-4 mb-8">
              {["General", "Pre ICO", "Token", "Client", "Legal"].map((tab) => (
                <button
                  key={tab}
                  className={cn(
                    "px-4 py-2 text-sm font-zenDots transition-colors",
                    tab === "General"
                      ? "bg-red-600 text-white"
                      : " text-white hover:text-gray-400"
                  )}
                >
                  {tab}
                </button>
              ))}
            </div>
            <div className="bg-red-500/5 rounded-lg">
              {faqItems.map((item, index) => (
                <FAQItem key={index} {...item} />
              ))}
            </div>
          </div>
          <div
            className="relative bg-cover bg-center bg-repeat"
            style={{ backgroundImage: `url(${smokeEffect})` }}
          >
            <img
              src={faq_person}
              className="relative z-10 w-auto h-auto"
              alt="FAQ Person"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
