import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper";

import "swiper/css";
import useWindowSize from "../hooks/useWindowSize";

const CarouselBig = () => {
  const { width } = useWindowSize();
  const [swiperInstance, setSwiperInstance] = useState(null);
  return (
    <Swiper
      slidesPerView={width > 768 ? 3.4 : 1.2}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => setSwiperInstance(swiper)}
    >
      <SwiperSlide>
        <div
          className="px-2 block w-full relative delay-100 | loco--fade-y is-inview"
          data-scroll=""
        >
          <a href="#" className="block w-full group pt-3">
            <div className="w-full aspect-ratio-913 relative rounded-xl overflow-hidden transition transform translate-z-0 mb-5 | lg:mb-10 |  lg:group-hover:-translate-y-2">
              <img
                src="/images/poool.avif"
                className="w-full h-full object-center object-cover absolute top-0 left-0 transition transform | lg:group-hover:scale-105"
              />
            </div>
            <div className="flex items-center justify-start">
              <div className="w-auto">
                <h2
                  className="font-sans-primary text-3xl | sm:text-3xl | md:text-3xl | 2xl:text-4xl text-primary font-normal leading-tighter | md:leading-none tracking-tight
mr-3 "
                >
                  Pool in the backyard
                </h2>
              </div>
              <div className="transition transform flex-shrink-0 | lg:group-hover:translate-x-3">
                <svg
                  viewBox="0 0 41 41"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 | lg:w-10 lg:h-10"
                >
                  <path
                    d="M21.6191 1C21.6191 1 24.8801 21.5 41 21.5L0 21.5"
                    stroke="#264347"
                    strokeWidth="3"
                    strokeMiterlimit="10"
                  ></path>
                  <path
                    d="M22.3628 40.1366C22.3628 40.1366 25.4997 21.5002 40.9992 21.5002"
                    stroke="#264347"
                    strokeWidth="3"
                    strokeMiterlimit="10"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="flex flex-wrap items-center mt-3 | lg:mt-5">
              <div className="tracking-tight | md:text-md | lg:text-lg">
                Los Angeles, CA
              </div>
              <div className="bg-tertiary w-2 h-2 rounded-full mx-2 | lg:mx-4"></div>
              <div className="tracking-tight | md:text-md | lg:text-lg">
                Winnetka
              </div>
            </div>
          </a>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="px-2 block w-full relative delay-100 | loco--fade-y is-inview"
          data-scroll=""
        >
          <a href="#" className="block w-full group pt-3">
            <div className="w-full aspect-ratio-913 relative rounded-xl overflow-hidden transition transform translate-z-0 mb-5 | lg:mb-10 |  lg:group-hover:-translate-y-2">
              <img
                src="/images/poool.avif"
                className="w-full h-full object-center object-cover absolute top-0 left-0 transition transform | lg:group-hover:scale-105"
              />
            </div>
            <div className="flex items-center justify-start">
              <div className="w-auto">
                <h2
                  className="font-sans-primary text-3xl | sm:text-3xl | md:text-3xl | 2xl:text-4xl text-primary font-normal leading-tighter | md:leading-none tracking-tight
mr-3 "
                >
                  Frontyard all inclusive
                </h2>
              </div>
              <div className="transition transform flex-shrink-0 | lg:group-hover:translate-x-3">
                <svg
                  viewBox="0 0 41 41"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 | lg:w-10 lg:h-10"
                >
                  <path
                    d="M21.6191 1C21.6191 1 24.8801 21.5 41 21.5L0 21.5"
                    stroke="#264347"
                    strokeWidth="3"
                    strokeMiterlimit="10"
                  ></path>
                  <path
                    d="M22.3628 40.1366C22.3628 40.1366 25.4997 21.5002 40.9992 21.5002"
                    stroke="#264347"
                    strokeWidth="3"
                    strokeMiterlimit="10"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="flex flex-wrap items-center mt-3 | lg:mt-5">
              <div className="tracking-tight | md:text-md | lg:text-lg">
                Los Angeles, CA
              </div>
              <div className="bg-tertiary w-2 h-2 rounded-full mx-2 | lg:mx-4"></div>
              <div className="tracking-tight | md:text-md | lg:text-lg">
                Calabasas
              </div>
            </div>
          </a>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="px-2 block w-full relative delay-100 | loco--fade-y is-inview"
          data-scroll=""
        >
          <a href="#" className="block w-full group pt-3">
            <div className="w-full aspect-ratio-913 relative rounded-xl overflow-hidden transition transform translate-z-0 mb-5 | lg:mb-10 |  lg:group-hover:-translate-y-2">
              <img
                src="/images/poool.avif"
                className="w-full h-full object-center object-cover absolute top-0 left-0 transition transform | lg:group-hover:scale-105"
              />
            </div>
            <div className="flex items-center justify-start">
              <div className="w-auto">
                <h2
                  className="font-sans-primary text-3xl | sm:text-3xl | md:text-3xl | 2xl:text-4xl text-primary font-normal leading-tighter | md:leading-none tracking-tight
mr-3 "
                >
                  Veranda ultimate number two
                </h2>
              </div>
              <div className="transition transform flex-shrink-0 | lg:group-hover:translate-x-3">
                <svg
                  viewBox="0 0 41 41"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 | lg:w-10 lg:h-10"
                >
                  <path
                    d="M21.6191 1C21.6191 1 24.8801 21.5 41 21.5L0 21.5"
                    stroke="#264347"
                    strokeWidth="3"
                    strokeMiterlimit="10"
                  ></path>
                  <path
                    d="M22.3628 40.1366C22.3628 40.1366 25.4997 21.5002 40.9992 21.5002"
                    stroke="#264347"
                    strokeWidth="3"
                    strokeMiterlimit="10"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="flex flex-wrap items-center mt-3 | lg:mt-5">
              <div className="tracking-tight | md:text-md | lg:text-lg">
                Los Angeles, CA
              </div>
              <div className="bg-tertiary w-2 h-2 rounded-full mx-2 | lg:mx-4"></div>
              <div className="tracking-tight | md:text-md | lg:text-lg">
                Landscaping
              </div>
            </div>
          </a>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="px-2 block w-full relative delay-100 | loco--fade-y is-inview"
          data-scroll=""
        >
          <a href="#" className="block w-full group pt-3">
            <div className="w-full aspect-ratio-913 relative rounded-xl overflow-hidden transition transform translate-z-0 mb-5 | lg:mb-10 |  lg:group-hover:-translate-y-2">
              <img
                src="/images/poool.avif"
                className="w-full h-full object-center object-cover absolute top-0 left-0 transition transform | lg:group-hover:scale-105"
              />
            </div>
            <div className="flex items-center justify-start">
              <div className="w-auto">
                <h2
                  className="font-sans-primary text-3xl | sm:text-3xl | md:text-3xl | 2xl:text-4xl text-primary font-normal leading-tighter | md:leading-none tracking-tight
mr-3 "
                >
                  The Alan Turing Institute
                </h2>
              </div>
              <div className="transition transform flex-shrink-0 | lg:group-hover:translate-x-3">
                <svg
                  viewBox="0 0 41 41"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 | lg:w-10 lg:h-10"
                >
                  <path
                    d="M21.6191 1C21.6191 1 24.8801 21.5 41 21.5L0 21.5"
                    stroke="#264347"
                    strokeWidth="3"
                    strokeMiterlimit="10"
                  ></path>
                  <path
                    d="M22.3628 40.1366C22.3628 40.1366 25.4997 21.5002 40.9992 21.5002"
                    stroke="#264347"
                    strokeWidth="3"
                    strokeMiterlimit="10"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="flex flex-wrap items-center mt-3 | lg:mt-5">
              <div className="tracking-tight | md:text-md | lg:text-lg">
                Los Angeles, CA
              </div>
              <div className="bg-tertiary w-2 h-2 rounded-full mx-2 | lg:mx-4"></div>
              <div className="tracking-tight | md:text-md | lg:text-lg">
                18,000 Sq ft
              </div>
            </div>
          </a>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="px-2 block w-full relative delay-100 | loco--fade-y is-inview"
          data-scroll=""
        >
          <a href="#" className="block w-full group pt-3">
            <div className="w-full aspect-ratio-913 relative rounded-xl overflow-hidden transition transform translate-z-0 mb-5 | lg:mb-10 |  lg:group-hover:-translate-y-2">
              <img
                src="/images/poool.avif"
                className="w-full h-full object-center object-cover absolute top-0 left-0 transition transform | lg:group-hover:scale-105"
              />
            </div>
            <div className="flex items-center justify-start">
              <div className="w-auto">
                <h2
                  className="font-sans-primary text-3xl | sm:text-3xl | md:text-3xl | 2xl:text-4xl text-primary font-normal leading-tighter | md:leading-none tracking-tight
mr-3 "
                >
                  The Alan Turing Institute
                </h2>
              </div>
              <div className="transition transform flex-shrink-0 | lg:group-hover:translate-x-3">
                <svg
                  viewBox="0 0 41 41"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 | lg:w-10 lg:h-10"
                >
                  <path
                    d="M21.6191 1C21.6191 1 24.8801 21.5 41 21.5L0 21.5"
                    stroke="#264347"
                    strokeWidth="3"
                    strokeMiterlimit="10"
                  ></path>
                  <path
                    d="M22.3628 40.1366C22.3628 40.1366 25.4997 21.5002 40.9992 21.5002"
                    stroke="#264347"
                    strokeWidth="3"
                    strokeMiterlimit="10"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="flex flex-wrap items-center mt-3 | lg:mt-5">
              <div className="tracking-tight | md:text-md | lg:text-lg">
                Los Angeles, CA
              </div>
              <div className="bg-tertiary w-2 h-2 rounded-full mx-2 | lg:mx-4"></div>
              <div className="tracking-tight | md:text-md | lg:text-lg">
                18,000 Sq ft
              </div>
            </div>
          </a>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default CarouselBig;
