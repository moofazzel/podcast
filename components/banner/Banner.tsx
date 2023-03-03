import Image from "next/image";

import audioTrack from "../../public/assets/images/AudioTrack.svg";
import PodcastTypes from "./PodcastTypes";

function Banner() {
  return (
    <>
      <div className="container flex-col-reverse lg:flex-row flex gap-[50px] lg:gap-[106px] justify-center items-center px-[50px] lg:px-[135px] pt-[50px] pb-10 lg:py-[100px] ">
        <div className="flex-1">
          <div>
            <h1 className="text-pDark text-2xl sm:text-4xl md:text-5xl leading-[110%] font-bold">
              Become The Hero Of Your Own Story
            </h1>
            <p className="my-5 sm:my-8">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat.
            </p>
          </div>
          <form action="#">
            <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
              <div className="relative w-full">
                <input
                  className="block p-3 pl-4 w-full text-base bg-[#f4f2ff] border-none  focus-visible:ring-red-600 focus-visible:border-none outline-none"
                  placeholder="Enter Your Email Id"
                  type="email"
                  id="email"
                  required
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="py-3 px-8 w-full text-sm font-medium text-center text-white  border cursor-pointer bg-pMain border-primary-600  hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 hover:bg-pBlue transition-all duration-300"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </form>
        </div>

        <div className="flex-1">
          <Image src={audioTrack} alt="Audio track" />
        </div>
      </div>
      <PodcastTypes />
    </>
  );
}

export default Banner;
