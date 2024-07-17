import React from "react";
import Video from "./../assets/video.mp4";
import TheBox from "./../assets/images/thebox.png";

export default function IcePop() {
  return (
    <section
      id="about"
      className="px-6 md:px-14 lg:px-24 pt-20 flex items-center justify-center bg-white"
    >
      <div className="w-fit mx-auto overflow-hidden container rounded-2xl">
        <video
          controls
          playsInline
          poster={TheBox}
          className="w-auto h-[550px]"
        >
          <source src={Video} type="video/mp4" />
        </video>
      </div>
    </section>
  );
}
