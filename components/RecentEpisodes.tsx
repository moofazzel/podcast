import Image from "next/image";
import image1 from "../public/assets/images/episodes/image1.png";
import image2 from "../public/assets/images/episodes/image2.png";

import playBtn from "../public/assets/icons/playBtn.svg";
import EpisodeIcon from "../public/assets/icons/EpisodeIcon.svg";

const episodes = [
  {
    title: "Ep 1: How to build a world-class business brand",
    desc: "Lorem ipsum at vero eos et accusam et justo duo dolores et ea rebum.",
  },
  {
    title: "Ep 2: Getting the first 100 customers for your business",
    desc: "Lorem ipsum at vero eos et accusam et justo duo dolores et ea rebum.",
  },
  {
    title: "Ep 3: Should I raise money for my startup, or not?",
    desc: "Lorem ipsum at vero eos et accusam et justo duo dolores et ea rebum.",
  },
];

function RecentEpisodes() {
  return (
    <>
      <div className="container my-28">
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
              className="py-3 px-8 text-sm font-medium text-center text-white  border cursor-pointer bg-pMain border-primary-600  hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 hidden md:block"
            >
              See All Episodes
            </button>
          </div>
        </div>
        <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {episodes.map((episode, index) => (
            <div key={index} className="w-full sm:w-auto h-auto">
              <Image className="w-full" src={image1} alt="" />
              <div className="mt-8 ">
                <h2 className="text-2xl font-semibold text-pDark leading-[125%]">
                  {episode.title}
                </h2>
                <p className="text-base my-4">{episode.desc}</p>
                <button className="flex items-center  gap-2.5 font-bold text-pMain">
                  <Image src={playBtn} alt="" /> Listen Now
                </button>
              </div>
            </div>
          ))}
        </div>
        <div>
          <button
            type="submit"
            className="py-3 px-8 text-sm font-medium text-center text-white  border cursor-pointer bg-pMain border-primary-600  hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 md:hidden block"
          >
            See All Episodes
          </button>
        </div>
      </div>
    </>
  );
}

export default RecentEpisodes;
