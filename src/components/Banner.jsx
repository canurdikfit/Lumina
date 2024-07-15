import React, { useEffect, useState } from "react";
import Icepop from "./../assets/images/icepop.png";
import CopyToClipboard from "react-copy-to-clipboard";

export default function Banner() {
  const Value = "CA: VF28FRB3219UHF04RIF2BI2Q4I9BFIFBYVFU";
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (copied) {
      setTimeout(() => {
        setCopied(false);
      }, "3000");
    }
  }, []);

  return (
    <section className="min-h-[550px] md:min-h-[500px] lg:min-h-[600px] bg-[#73EFDF] flex items-end justify-center lg:pb-28 pb-20 px-4 md:px-12 lg:px-20">
      <div className="flex flex-col text-center items-center justify-center max-w-5xl gap-5">
        <div data-aos="fade-up">
          <img
            src={Icepop}
            className="h-16 md:h-28 lg:h-36 w-auto"
            alt="Icepop"
          />
        </div>
        <p
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-base md:text-xl max-w-3xl lg:text-2xl text-black content_text"
        >
          $ICEPOP is a muuvement to unite everyone in crypto. Backed by number
          go up technology, the bull born from the meme we all know and love is
          here to lead the charge.
        </p>
        <div className="flex flex-row flex-wrap justify-center items-center gap-5">
          <div data-aos="fade-up" data-aos-delay="200" className="relative">
            <div className="h-12 lg:h-20 z-20 rounded-full border-4 border-black flex flex-row items-center justify-center px-14 bg-[#9959BA] relative">
              <p className="text-xs md:text-lg lg:text-[25px] text-white font-bold">
                {Value}
              </p>
            </div>
            <div className="absolute h-full w-full top-1 left-0.5 border-4 border-black rounded-full bg-black" />
          </div>

          <CopyToClipboard
            data-aos="fade-up"
            data-aos-delay="300"
            className="relative hover:scale-90"
            text={Value}
            onCopy={() => setCopied(true)}
          >
            <span>
              <div className="h-12 md:h-16 lg:h-20 z-20 rounded-full border-4 border-black flex flex-row items-center justify-center px-10 bg-[#9959BA] relative">
                <p className="text-xs md:text-lg lg:text-[25px] text-white text-stroked">
                  COPY
                </p>
              </div>
              <div className="absolute h-full w-full top-1 left-0.5 border-4 border-black rounded-full bg-black" />
            </span>
          </CopyToClipboard>
        </div>
      </div>
      <div
        className={`fixed bottom-5 transition-transform ${
          copied ? "translate-y-0" : "translate-y-[50vh]"
        } z-40 ease-in-out duration-500`}
      >
        <div className="relative">
          <div className="h-12 lg:h-20 z-20 rounded-full border-4 border-black flex flex-row items-center justify-center px-14 bg-[#9959BA] relative">
            <p className="text-xs md:text-lg lg:text-[25px] text-white font-bold">
              COPIED
            </p>
          </div>
          <div className="absolute h-full w-full top-1 left-0.5 border-4 border-black rounded-full bg-black" />
        </div>
      </div>
    </section>
  );
}
