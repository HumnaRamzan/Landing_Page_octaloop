import React from "react";
import { useState } from "react";
import { cn } from "../../utils/lib";
import { FaChevronDown } from "react-icons/fa6";
const FAQItem = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="mb-4 bg-red-600/75">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 px-6 flex items-center justify-between text-left"
      >
        <span className="text-white font-medium font-zenDots ">
          {props.question}
        </span>
        <FaChevronDown
          className={cn(
            "w-5 h-5 text-red-600 transition-transform",
            isOpen && "transform rotate-180"
          )}
        />
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-300",
          isOpen ? "max-h-48" : "max-h-0"
        )}
      >
        <p className="px-6 pb-4 text-white font-interFont text-left">
          {props.answer}
        </p>
      </div>
    </div>
  );
};

export default FAQItem;
