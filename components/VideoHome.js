import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { EffectFade, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/effect-fade";
function VideoHome() {
  const title = useRef(null);

  const [active, setActive] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState(null);

  // useLayoutEffect(() => {
  //   gsap.from(title.current, { delay: 5, duration: 1, y: 50, autoAlpha: 0 });
  // }, [title]);

  return (
    <div className="relative flex items-center h-[75vh] lg:h-[95vh]">
      <div className="w-full h-full z-0 relative overflow-hidden">
        <Swiper
          modules={[EffectFade, Autoplay]}
          effect="fade"
          autoplay={{ delay: 3250, disableOnInteraction: false }}
          className="w-full h-full"
          slidesPerView={1}
          onSlideChange={() => setActive(swiperInstance.activeIndex)}
          onSwiper={(swiper) => setSwiperInstance(swiper)}
        >
          <SwiperSlide className="pointer-events-none">
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
                <div className="absolute inset-0 w-full h-full z-10 bg-gradient-to-r from-black opacity-60"></div>
              </div>
            )}
          </SwiperSlide>
          <SwiperSlide className="pointer-events-none">
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
                <div className="absolute inset-0 w-full h-full z-10 bg-gradient-to-r from-black opacity-60"></div>
              </div>
            )}
          </SwiperSlide>
          <SwiperSlide className="pointer-events-none">
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
                <div className="absolute inset-0 w-full h-full z-10 bg-gradient-to-r from-black opacity-60"></div>
              </div>
            )}
          </SwiperSlide>
          {/* <SwiperSlide className="pointer-events-none">
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
                <div className="absolute inset-0 w-full h-full z-10 bg-gradient-to-r from-black opacity-60"></div>
              </div>
            )}
          </SwiperSlide> */}
        </Swiper>
      </div>
      {swiperInstance && (
        <div className="absolute bottom-12 left-0 w-full z-30 | lg:bottom-20">
          <div className="px-4 w-11/12 lg:w-10/12 mx-auto flex items-center">
            <div
              className="cursor-pointer inline-block px-2 lg:px-5 group flex-1 | lg:flex-none lg:w-72 | js-slideshow-heroSlideshow__select"
              onClick={() => swiperInstance.slideTo(0)}
              onMouseEnter={() => swiperInstance.slideTo(0)}
            >
              <p className="text-base font-light text-white mb-2 tracking-tight transition transform | md:text-lg | lg:text-xl | group-hover:translate-x-1">
                Landscape
              </p>
              <div className="w-full bg-white bg-opacity-20 h-0.5 relative">
                <div
                  className={`absolute top-0 left-0 h-0.5 transition bg-white duration-1000 | ${
                    active === 0 ? "show-progress" : ""
                  }`}
                ></div>
              </div>
            </div>
            <div
              className="cursor-pointer inline-block px-2 lg:px-5 group flex-1 | lg:flex-none lg:w-72 | js-slideshow-heroSlideshow__select"
              onClick={() => swiperInstance.slideTo(1)}
              onMouseEnter={() => swiperInstance.slideTo(1)}
            >
              <p className="text-base font-light text-white mb-2 tracking-tight transition transform | md:text-lg | lg:text-xl | group-hover:translate-x-1">
                Hardscape
              </p>
              <div className="w-full bg-white bg-opacity-20 h-0.5 relative">
                <div
                  className={`absolute top-0 left-0 h-0.5 transition bg-white duration-1000 | ${
                    active === 1 ? "show-progress" : ""
                  }`}
                ></div>
              </div>
            </div>
            <div
              className="cursor-pointer inline-block px-2 lg:px-5 group flex-1 | lg:flex-none lg:w-72 | js-slideshow-heroSlideshow__select"
              onClick={() => setActiswiperInstance.slideTove(2)}
              onMouseEnter={() => swiperInstance.slideTo(2)}
            >
              <p className="text-base font-light text-white mb-2 tracking-tight transition transform | md:text-lg | lg:text-xl | group-hover:translate-x-1">
                Pool
              </p>
              <div className="w-full bg-white bg-opacity-20 h-0.5 relative">
                <div
                  className={`absolute top-0 left-0 h-0.5 transition bg-white duration-1000 | ${
                    active === 2 ? "show-progress" : ""
                  }`}
                ></div>
              </div>
            </div>
            {/* <div
              className="cursor-pointer inline-block px-2 lg:px-5 group flex-1 | lg:flex-none lg:w-72 | js-slideshow-heroSlideshow__select"
              onClick={() => setActiswiperInstance.slideTove(3)}
              onMouseEnter={() => swiperInstance.slideTo(3)}
            >
              <p className="text-base font-light text-white mb-2 tracking-tight transition transform | md:text-lg | lg:text-xl | group-hover:translate-x-1">
                Outdoor living
              </p>
              <div className="w-full bg-white bg-opacity-20 h-0.5 relative">
                <div
                  className={`absolute top-0 left-0 h-0.5 transition bg-white duration-1000 | ${
                    active === 3 ? "show-progress" : ""
                  }`}
                ></div>
              </div>
            </div> */}
          </div>
        </div>
      )}
      <div className="absolute top-0 left-0 w-full h-full flex items-center z-30 pointer-events-none">
        <h1
          ref={title}
          className="text-4xl xl:text-8xl px-4 text-white font-light w-11/12 lg:w-10/12 mx-auto "
        >
          <b className="font-medium">Nature</b> <span>never goes</span> <br />
          <span>out of</span> <b className="font-medium">style</b>
        </h1>
      </div>
    </div>
  );
}

export default VideoHome;
