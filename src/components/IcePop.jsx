import React from "react";
import What from "./../assets/images/what_is.png";
import Slant from "./../assets/images/slant_icepop.png";
import Profile from "./../assets/images/tweet_profile.png";

export default function IcePop() {
  return (
    <section
      id="about"
      className="px-6 md:px-14 lg:px-24 py-20 flex items-center justify-center bg-white"
    >
      <div className="w-full py-20 px-6 md:px-16 container bg-white rounded-3xl md:rounded-[45px] lg:rounded-[64px] flex flex-col items-start justify-start border-4 border-black icepop_bg">
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="flex items-center gap-1.5 lg:gap-10"
        >
          <img
            src={What}
            alt="what is"
            className="h-12 md:h-16 shrink-0 lg:h-28 w-auto"
          />
          <img
            src={Slant}
            alt="$ICEPOP"
            className="h-auto w-40 shrink-0 md:w-60 lg:w-[360px]"
          />
        </div>
        <div className="flex items-center flex-wrap-reverse lg:flex-nowrap justify-between lg:gap-20 gap-6 mt-5 w-full">
          <img
            data-aos="fade-up"
            data-aos-delay="200"
            src={Profile}
            alt="Profile"
            className="h-52 shrink-0 lg:h-80 w-auto mx-auto"
          />
          <p
            data-aos="fade-up"
            data-aos-delay="250"
            className="text-lg md:text-xl lg:text-3xl content_text max-w-2xl text-center lg:text-left"
          >
            $ICEPOP is a muuvement to unite everyone in crypto. Backed by number
            go up technology, the bull born from the meme we all know and love
            is here to lead the charge. a muuvement to unite everyone in crypto.
            Backed by number go up technology, the bull born from the meme we
            all know and love is here to lead the charge.
          </p>
        </div>
      </div>
    </section>
  );
}
