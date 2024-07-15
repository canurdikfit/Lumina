import React from "react";
import Tokenomic from "./../assets/images/tokenomics.png";
import ProgressBar from "@ramonak/react-progress-bar";

export default function Tokenomics() {
  return (
    <section
      id="token"
      className="flex items-center justify-center pb-20 -mt-2 bg-white"
    >
      <div className="container px-10 md:px-16 lg:px-20">
        <img
          data-aos="fade-up"
          src={Tokenomic}
          alt="Tokenomics"
          className="h-20 md:h-28 lg:h-36 w-auto"
        />
        <div className="px-6 md:px-14 lg:px-20 flex flex-col gap-6 md:gap-12 lg:gap-16 mt-8">
          <div data-aos="fade-up" data-aos-delay="100">
            <h4 className="text-black text-lg md:text-xl lg:text-3xl content_text font-semibold">
              LP - 65%
            </h4>
            <ProgressBar
              completed={65}
              className="rounded-full border-4 lg:border-[6px] border-black"
              barContainerClassName="bg-black"
              completedClassName="bg-[#9959BA] rounded-full w-[65%] h-4 md:h-6 lg:h-8"
              isLabelVisible={false}
              transitionDuration="3s"
              animateOnRender={true}
            />
          </div>
          <div data-aos="fade-up" data-aos-delay="150">
            <h4 className="text-black text-lg md:text-xl lg:text-3xl content_text font-semibold">
              TREASURY - 30%
            </h4>
            <ProgressBar
              completed={30}
              className="rounded-full border-4 lg:border-[6px] border-black"
              barContainerClassName="bg-black"
              completedClassName="bg-[#9959BA] rounded-full w-[30%] h-4 md:h-6 lg:h-8"
              isLabelVisible={false}
              transitionDuration="3s"
              animateOnRender={true}
            />
          </div>
          <div data-aos="fade-up" data-aos-delay="200">
            <h4 className="text-black text-lg md:text-xl lg:text-3xl content_text font-semibold">
              CEX WALLET - 10%
            </h4>
            <ProgressBar
              completed={40}
              className="rounded-full border-4 lg:border-[6px] border-black"
              barContainerClassName="bg-black"
              completedClassName="bg-[#9959BA] rounded-full w-[10%] h-4 md:h-6 lg:h-8"
              isLabelVisible={false}
              transitionDuration="3s"
              animateOnRender={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
