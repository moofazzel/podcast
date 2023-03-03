import Image from "next/image";
import Link from "next/link";
import logoWhite from "../../public/logoWhite.svg";

import ApplePodcast from "../../public/assets/icons/ApplePodcast.svg";
import GooglePodcast from "../../public/assets/icons/GooglePodcast.svg";
import Soundcloud from "../../public/assets/icons/Soundcloud.svg";
import Spotify from "../../public/assets/icons/Spotify.svg";

import BottomFooter from "./BottomFooter";
import OurSponsors from "./OurSponsors";

function Footer() {
  return (
    <>
      <footer className="bg-pDark pb-6 md:pb-10 pt-24 md:pt-32 lg:pt-40 relative mt-60 md:mt-[303px] ">
        <OurSponsors />
        <div className="container px-5 md:px-0">
          <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-4">
            <div className="col-span-full lg:col-span-1 mb-4 lg:mb-0">
              <Link href="/" className="mb-3 inline-block max-w-[160px] ">
                <Image src={logoWhite} alt="#" className="max-w-full" />
              </Link>
            </div>

            <div className=" text-white">
              <h4 className="text-dark mb-7 text-xl font-bold">Pages</h4>
              <ul>
                <li>
                  <a
                    href="#"
                    className="hover:text-pMain transition-all duration-300 mb-2 inline-block text-base leading-loose"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-pMain transition-all duration-300 mb-2 inline-block text-base leading-loose"
                  >
                    Podcast
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-pMain transition-all duration-300 mb-2 inline-block text-base leading-loose"
                  >
                    Host
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-pMain transition-all duration-300 mb-2 inline-block text-base leading-loose"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            <div className=" text-white">
              <h4 className="text-dark mb-7 text-xl font-bold">Reach Us</h4>
              <ul>
                <li>
                  <a
                    href="#"
                    className="hover:text-pMain transition-all duration-300 mb-2 inline-block text-base leading-loose"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-pMain transition-all duration-300 mb-2 inline-block text-base leading-loose"
                  >
                    about
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-span-full lg:col-span-1 text-white lg:ml-10 mt-4 lg:mt-0">
              <h4 className="text-xl font-bold mb-7">Subscribe</h4>

              <div className="mb-6 flex gap-5 flex-col lg:items-start">
                <a href="#">
                  <Image src={ApplePodcast} alt="#" />
                </a>
                <a href="#">
                  <Image src={GooglePodcast} alt="#" />
                </a>
                <a href="#">
                  <Image src={Soundcloud} alt="#" />
                </a>
                <a href="#">
                  <Image src={Spotify} alt="#" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <BottomFooter />
    </>
  );
}

export default Footer;
