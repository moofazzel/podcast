import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Autoplay } from "swiper";

import logo5 from "../../public/assets/sponsors/Logo5.svg";
import logo1 from "../../public/assets/sponsors/Logo1.svg";
import logo2 from "../../public/assets/sponsors/Logo2.svg";
import logo3 from "../../public/assets/sponsors/Logo3.svg";
import logo4 from "../../public/assets/sponsors/Logo4.svg";

function OurSponsors() {
  return (
    <div className="w-full lg:max-w-5xl xl:max-w-7xl bg-pMain p-14 lg:p-[72px] absolute -mt-[180px] top-0 left-1/2 -translate-x-1/2 ">
      <h4 className="text-white text-2xl sm:text-[2rem] font-bold text-center pb-[40px] md:pb-[55px] ">
        Our Sponsors
      </h4>

      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        freeMode={true}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.0": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Autoplay]}
      >
        {[logo4, logo1, logo2, logo3, logo5].map((logo, index) => (
          <SwiperSlide>
            <Image
              className="m-auto w-full"
              key={index}
              src={logo}
              alt="Our Sponsors"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default OurSponsors;
