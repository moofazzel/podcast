import Image from "next/image";

import ApplePodcast1 from "../../public/assets/icons/Apple Podcast1.svg";
import GooglePodcast2 from "../../public/assets/icons/Google Podcast1.svg";
import Soundcloud3 from "../../public/assets/icons/Soundcloud1.svg";
import Spotify4 from "../../public/assets/icons/Spotify1.svg";

function PodcastTypes() {
  return (
    <div className="container md:p-0 my-10">
      <div className="lg:flex items-center justify-center lg:justify-between gap-10">
        <h3 className="flex flex-shrink-0 text-2xl lg:text-xl xl:text-2xl font-bold text-pDark mb-6 lg:mb-0">
          Podcast Available On
        </h3>

        <div className="grid gap-4 lg:gap-[3rem] grid-cols-2 md:grid-cols-2 lg:grid-cols-4 items-start lg:items-center">
          <Image className=" h-[36px] " src={ApplePodcast1} alt="# " />
          <Image className=" h-[36px] " src={Soundcloud3} alt="# " />
          <Image className=" h-[36px] " src={GooglePodcast2} alt="# " />
          <Image
            className="w-[70%]f md:w-auto h-[36px] "
            src={Spotify4}
            alt="# "
          />
        </div>
      </div>
    </div>
  );
}

export default PodcastTypes;
