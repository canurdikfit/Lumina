import TwitterBtn from "./../assets/imgs/buttons/twitter.svg";
import YoutubeBtn from "./../assets/imgs/buttons/youtube.svg";
import LinkedInBtn from "./../assets/imgs/buttons/linkedin.svg";
import InstagramBtn from "./../assets/imgs/buttons/instagram.svg";
import CulangexLogo from "./../assets/imgs/culangex.png";

export default function Footer() {
  return (
    <section className="px-6 md:px-14 lg:px-20 py-5 bg-[#1A1F37]">
      <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 items-center justify-between">
        <div className="flex items-center justify-center md:justify-start">
          <a href="" className="shrink-0">
            <img src={TwitterBtn} alt="Twitter Icon" className="h-24 w-auto" />
          </a>
          <a href="" className="shrink-0 -ms-5">
            <img src={YoutubeBtn} alt="Youtube Icon" className="h-24 w-auto" />
          </a>
          <a href="" className="shrink-0 -ms-5">
            <img
              src={LinkedInBtn}
              alt="LinkedIn Icon"
              className="h-24 w-auto"
            />
          </a>
          <a href="" className="shrink-0 -ms-5">
            <img
              src={InstagramBtn}
              alt="Instagram Icon"
              className="h-24 w-auto"
            />
          </a>
          <a
            href=""
            className="ms-2 underline text-[#B6F6FF] underline-offset-1 hidden md:inline-block"
          >
            Careers
          </a>
        </div>
        <div className="flex flex-col gap-5 items-center justify-center xl:justify-center md:justify-end -order-last md:order-1">
          <img src={CulangexLogo} alt="Logo Icon" className="w-20 h-auto" />
          <a
            href=""
            className="ms-2 underline text-[#B6F6FF] underline-offset-1 md:hidden block"
          >
            Careers
          </a>
        </div>
        <div className="md:col-span-2 xl:col-span-1 md:order-2">
          <h6 className="text-sm md:text-base lg:text-lg text-center xl:text-end">
            All Rights Reserved {new Date().getFullYear()} | culangex
          </h6>
        </div>
      </div>
    </section>
  );
}
