import Image from "next/image";
import shape from "../public/assets/icons/Shapes.svg";
import bitcoins from "../public/assets/images/airticles/bitcoins.png";
import desk from "../public/assets/images/airticles/desk.png";

const airticles = [
  {
    title: "Ep 1: How to build a world-class business brand",
    desc: "Lorem ipsum at vero eos et accusam et justo duo dolores et ea rebum.",
    image: bitcoins,
  },
  {
    title: "Ep 2: Getting the first 100 customers for your business",
    desc: "Lorem ipsum at vero eos et accusam et justo duo dolores et ea rebum.",
    image: desk,
  },
];

function AirticleNews() {
  return (
    <div className="container mb-40">
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-[#f4f2ff] ">
          <div className="p-8 md:p-10">
            <h3 className="flex text-[2rem] font-bold text-pDark mb-3">
              Read our <br />
              articles & news
            </h3>
            <button className="flex items-center  gap-2.5 font-bold text-pMain hover:text-pBlue transition-all duration-300">
              See More
            </button>
          </div>
          <div>
            <Image
              src={shape}
              alt="airticleNews"
              className="w-full md:w-auto"
            />
          </div>
        </div>
        {airticles.map((airticle, index) => (
          <div key={index} className="w-full sm:w-auto h-auto">
            <Image className="w-full" src={airticle.image} alt="" />
            <div className="mt-8 ">
              <h2 className="text-2xl font-semibold text-pDark leading-[125%]">
                {airticle.title}
              </h2>
              <p className="text-base my-4">{airticle.desc}</p>
              <button className="flex items-center  gap-2.5 font-bold text-pMain hover:text-pBlue transition-all duration-300">
                Read Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AirticleNews;
