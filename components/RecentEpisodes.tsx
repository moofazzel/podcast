import Image from "next/image";
import image1 from "../public/assets/images/episodes/image1.png";
import image2 from "../public/assets/images/episodes/image2.png";
import image3 from "../public/assets/images/episodes/image3.png";

import playBtn from "../public/assets/icons/playBtn.svg";
import EpisodeIcon from "../public/assets/icons/EpisodeIcon.svg";

const episodes = [
  {
    title: "Ep 1: How to build a world-class business brand",
    desc: "Lorem ipsum at vero eos et accusam et justo duo dolores et ea rebum.",
    image: image1,
  },
  {
    title: "Ep 2: Getting the first 100 customers for your business",
    desc: "Lorem ipsum at vero eos et accusam et justo duo dolores et ea rebum.",
    image: image2,
  },
  {
    title: "Ep 3: Should I raise money for my startup, or not?",
    desc: "Lorem ipsum at vero eos et accusam et justo duo dolores et ea rebum.",
    image: image3,
  },
];

function RecentEpisodes() {
  return (
    <>
      <div className="container mb-20 md:my-28">
        <div className="flex justify-between items-end mb-14">
          <div className="w-96">
            <h3 className="flex text-[2rem] font-bold text-pDark mb-4">
              Recent Episodes
            </h3>
            <p>
              Apparently we had reached a great height in the atmosphere, for
              the sky was a dead black.
            </p>
          </div>
          <div>
            <button
              type="submit"
              className="py-3 px-8 text-sm font-medium text-center text-white  border cursor-pointer bg-pMain border-primary-600  hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 hidden md:block hover:bg-pBlue transition-all duration-300"
            >
              See All Episodes
            </button>
          </div>
        </div>
        <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {episodes.map((episode, index) => (
            <div key={index} className="w-full sm:w-auto h-auto">
              <div className="relative">
                <Image className="w-full" src={episode.image} alt="" />
                <Image
                  className="absolute top-4 right-4 cursor-pointer"
                  src={EpisodeIcon}
                  alt=""
                />
              </div>
              <div className="mt-8 ">
                <h2 className="text-2xl font-semibold text-pDark leading-[125%]">
                  {episode.title}
                </h2>
                <p className="text-base my-4">{episode.desc}</p>
                <button className="flex items-center  gap-2.5 font-bold text-pMain hover:text-pBlue transition-all duration-300">
                  <Image src={playBtn} alt="" /> Listen Now
                </button>
              </div>
            </div>
          ))}
        </div>
        <div>
          <button
            type="submit"
            className="py-3 px-8 mt-8 mx-auto text-xs font-medium text-center text-white border cursor-pointer bg-pMain border-primary-600 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 md:hidden block hover:text-pBlue transition-all duration-300"
          >
            See All Episodes
          </button>
        </div>
      </div>
    </>
  );
}

export default RecentEpisodes;
