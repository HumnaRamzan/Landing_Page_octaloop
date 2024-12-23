import React from "react";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import image5 from "../../assets/image5.png";
import image6 from "../../assets/image6.png";
import image7 from "../../assets/image7.png";

const Gallery = () => {
  return (
    <section className="bg-black py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-6 font-zenDots">
          Popular NFT's generated by Artists
        </h2>
        <p className="text-gray-300 text-center mb-12 max-w-5xl mx-auto font-interFont">
          3dotlink's AI integration is a game-changer in the NFT art world. It
          offers a powerful canvas for artists to redefine art creation and
          innovation while preserving cultural art in an entirely new format.
          With this platform, the convergence of human ingenuity and AI
          technology is set to redefine the boundaries of artistic expression
          and creative possibilities, ushering in a digital art renaissance.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Image 1 */}
          <div className="relative overflow-hidden aspect-square transform transition-transform hover:scale-105">
            <img
              src={image1}
              alt="NFT 1"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Image 2 spans 2 rows and 2 columns */}
          <div className="relative overflow-hidden aspect-square transform transition-transform hover:scale-105 col-span-2 row-span-2">
            <img
              src={image2}
              alt="NFT 2"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Image 3 */}
          <div className="relative overflow-hidden aspect-square transform transition-transform hover:scale-105">
            <img
              src={image3}
              alt="NFT 3"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Image 4 spans 2 rows */}
          <div className="relative overflow-hidden aspect-square transform transition-transform hover:scale-105 row-span-2 col-span-1 h-[570px] w-[274px]">
            <img
              src={image4}
              alt="NFT 4"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Image 5 */}
          <div className="relative overflow-hidden aspect-square transform transition-transform hover:scale-105">
            <img
              src={image5}
              alt="NFT 5"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Image 6 */}
          <div className="relative overflow-hidden aspect-square transform transition-transform hover:scale-105">
            <img
              src={image6}
              alt="NFT 6"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Image 7 spans 2 columns */}
          <div className="relative overflow-hidden aspect-square transform transition-transform hover:scale-105 col-span-2 h-[275px] w-[570px]">
            <img
              src={image7}
              alt="NFT 7"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
