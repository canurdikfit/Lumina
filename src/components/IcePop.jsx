import React from "react";
import Video from "./../assets/video.mp4";
import TheBox from "./../assets/images/thebox.jpeg";

export default function IcePop() {
  return (
    <section
      id="about"
      className="px-6 md:px-14 lg:px-24 py-20 flex items-center justify-center bg-white"
    >
      <div className="w-full overflow-hidden container bg-white rounded-3xl flex flex-col items-start justify-start border-4 border-black">
        <video controls loop poster={TheBox}>
          <source src={Video} type="video/mp4" />
        </video>
      </div>
    </section>
  );
}
