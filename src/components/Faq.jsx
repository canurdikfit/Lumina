import React, { useState } from "react";
import Footer_tweet from "./../assets/images/tweet_footer.png";
import Faqs from "./../assets/images/faq.png";
import Accoridion from "./Accoridion";
import Icepop from "./../assets/images/tweet_profile.png";
import { FaTelegramPlane, FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Faq() {
  const [open, setOpen] = useState(999);
  return (
    <section
      id="faq"
      className="relative pt-7 -mt-2 bg-white flex flex-col items-center"
    >
      <div className="container px-10 flex flex-wrap-reverse lg:flex-nowrap gap-10 justify-center lg:justify-between items-center">
        <img
          src={Footer_tweet}
          alt="Faq Tweet Profile"
          className="h-[300px] md:h-[400px] lg:h-[500px] shrink-0 w-auto"
        />
        <div className="flex flex-col lg:flex-row items-center max-w-xl w-full relative z-20">
          <div className="relative lg:absolute left-0 lg:-left-[220px] xl:-left-[280px] rotate-[80deg] lg:rotate-0">
            <img
              src={Faqs}
              alt="FAQ"
              className="w-40 md:w-64 shrink-0 lg:w-[300px] xl:w-[350px] h-auto "
            />
          </div>
          <div className=" w-full gap-2 flex flex-col">
            {Questions.map((items, idx) => (
              <button
                key={idx}
                className={`transition-all ease-in-out ${
                  open === idx
                    ? "bg-[#9959ba] p-2 border-[6px] border-black h-48 "
                    : "h-14"
                } duration-500 rounded-3xl`}
                onClick={() => {
                  if (open !== idx) {
                    setOpen(idx);
                  } else {
                    setOpen(999);
                  }
                }}
              >
                <Accoridion
                  question={items.question}
                  answer={items.answer}
                  true={open === idx ? true : false}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="relative py-10 w-full flex flex-col items-center justify-center bg-[#9959BA] -mt-12 md:-mt-16 lg:-mt-20 z-10">
        <img src={Icepop} alt="ICEPOP" className="h-14 w-auto" />
        <div className="flex items-center gap-5 mt-4">
          <a
            href="/"
            className="text-3xl text-white hover:text-[#73EFDF] transition-colors ease-in-out duration-300"
          >
            <FaTelegramPlane />
          </a>
          <a
            href="/"
            className="text-3xl text-white hover:text-[#73EFDF] transition-colors ease-in-out duration-300"
          >
            <FaDiscord />
          </a>
          <a
            href="https://x.com/icepopcoin?s=11"
            className="text-3xl text-white hover:text-[#73EFDF] transition-colors ease-in-out duration-300"
          >
            <FaXTwitter />
          </a>
        </div>
      </div>
    </section>
  );
}

const Questions = [
  {
    question: "What chain is ICEPOP on?",
    answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. ",
  },
  {
    question: "Who is the Team?",
    answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. ",
  },
  {
    question: "How can I buy $ICEPOP",
    answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. ",
  },
  {
    question: "Wen launch",
    answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. ",
  },
];
