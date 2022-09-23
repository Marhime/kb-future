import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { EffectFade } from "swiper";

import "swiper/css";
import "swiper/css/effect-fade";
function MultipleList() {
  const title = useRef(null);

  const [active, setActive] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState(null);

  return (
    <div className="relative flex items-center h-[75vh] lg:h-[95vh]">
      <div className="w-full h-full z-0 relative overflow-hidden">
        <Swiper
          modules={[EffectFade]}
          effect="fade"
          className="w-full h-full"
          slidesPerView={1}
          onSlideChange={() => setActive(swiperInstance.activeIndex)}
          onSwiper={(swiper) => setSwiperInstance(swiper)}
        >
          <SwiperSlide>
            {({ isActive }) => (
              <div
                className={`w-full h-full absolute inset-0 transition duration-300 ease-in-out ${
                  isActive ? "opacity-100 scale-100" : "opacity-0 scale-105"
                }`}
              >
                <img
                  src="/images/poowow.avif"
                  className={`absolute inset-0 w-full h-full object-cover `}
                />
                <div className="absolute inset-0 w-full h-full z-10 bg-gradient-to-r from-black opacity-40"></div>
              </div>
            )}
          </SwiperSlide>
          <SwiperSlide>
            {({ isActive }) => (
              <div
                className={`w-full h-full absolute inset-0 transition duration-300 ease-in-out ${
                  isActive ? "opacity-100 scale-100" : "opacity-0 scale-105"
                }`}
              >
                <img
                  src="/images/villa-pool.avif"
                  className={`absolute inset-0 w-full h-full object-cover `}
                />
                <div className="absolute inset-0 w-full h-full z-10 bg-gradient-to-r from-black opacity-40"></div>
              </div>
            )}
          </SwiperSlide>
          <SwiperSlide>
            {({ isActive }) => (
              <div
                className={`w-full h-full absolute inset-0 transition duration-300 ease-in-out ${
                  isActive ? "opacity-100 scale-100" : "opacity-0 scale-105"
                }`}
              >
                <img
                  src="/images/poool.avif"
                  className={`absolute inset-0 w-full h-full object-cover `}
                />
                <div className="absolute inset-0 w-full h-full z-10 bg-gradient-to-r from-black opacity-40"></div>
              </div>
            )}
          </SwiperSlide>
          <SwiperSlide>
            {({ isActive }) => (
              <div
                className={`w-full h-full absolute inset-0 transition duration-300 ease-in-out ${
                  isActive ? "opacity-100 scale-100" : "opacity-0 scale-105"
                }`}
              >
                <img
                  src="/images/lux-house.avif"
                  className={`absolute inset-0 w-full h-full object-cover `}
                />
                <div className="absolute inset-0 w-full h-full z-10 bg-gradient-to-r from-black opacity-40"></div>
              </div>
            )}
          </SwiperSlide>
        </Swiper>
      </div>
      {swiperInstance && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center z-30">
          <div className="px-4 w-11/12 lg:w-10/12 mx-auto space-y-6">
            <div
              className={`flex items-center space-x-6 cursor-pointer inline-block px-2 lg:px-5 group flex-1 | lg:flex-none | ${
                active === 0 ? "opacity-100" : "opacity-60"
              }`}
              onMouseEnter={() => swiperInstance.slideTo(0)}
            >
              <p className="text-4xl text-white mb-2 tracking-tight transition transform | lg:text-9xl | group-hover:translate-x-1">
                Landscape
              </p>
              <span
                className={` transition duration-300 | ${
                  active === 0
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-6"
                }`}
              >
                <img className="w-12 lg:w-auto" src="/arrow-right.svg" />
              </span>
            </div>
            <div
              className={`flex items-center space-x-6 cursor-pointer inline-block px-2 lg:px-5 group flex-1 | lg:flex-none | ${
                active === 1 ? "opacity-100" : "opacity-60"
              }`}
              onMouseEnter={() => swiperInstance.slideTo(1)}
            >
              <p className="text-4xl text-white mb-2 tracking-tight transition transform | lg:text-9xl | group-hover:translate-x-1">
                Hardscape
              </p>
              <span
                className={`block w-full h-10 transition duration-300 | ${
                  active === 1
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-8"
                }`}
              >
                <img className="w-12 lg:w-auto" src="/arrow-right.svg" />
              </span>
            </div>
            <div
              className={`flex items-center space-x-6 cursor-pointer inline-block px-2 lg:px-5 group flex-1 | lg:flex-none | ${
                active === 2 ? "opacity-100" : "opacity-60"
              }`}
              onMouseEnter={() => swiperInstance.slideTo(2)}
            >
              <p className="text-4xl text-white mb-2 tracking-tight transition transform | lg:text-9xl | group-hover:translate-x-1">
                Pool
              </p>
              <span
                className={` transition duration-300 | ${
                  active === 2
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-12"
                }`}
              >
                <img className="w-12 lg:w-auto" src="/arrow-right.svg" />
              </span>
            </div>
            <div
              className={`flex items-center space-x-6 cursor-pointer inline-block px-2 lg:px-5 group flex-1 | lg:flex-none | ${
                active === 3 ? "opacity-100" : "opacity-60"
              }`}
              onMouseEnter={() => swiperInstance.slideTo(3)}
            >
              <p className="text-4xl text-white mb-2 tracking-tight transition transform | lg:text-9xl | group-hover:translate-x-1">
                Outdoor living
              </p>
              <span
                className={` transition duration-300 | ${
                  active === 3
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-12"
                }`}
              >
                <img className="w-12 lg:w-auto" src="/arrow-right.svg" />
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MultipleList;
