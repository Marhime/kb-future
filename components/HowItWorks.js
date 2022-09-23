import React, { useState } from "react";

const HowItWorks = () => {
  const [active, setActive] = useState(0);
  return (
    <div className="w-11/12 lg:w-10/12 | lg:w-container mx-auto">
      <div className="px-4 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl | md:text-4xl lg:text-5xl 2xl:text-6xl text-primary font-light leading-none tracking-tight loco--lines-fade-y words lines splitting">
          What we <span className="font-medium">offer</span>
        </h2>
        <a className="inline-block text-lg font-medium text-white bg-[#354432] rounded-[200px] px-4 py-2 mt-10 lg:mt-0">
          Learn more about us
        </a>
      </div>
      <div className="grid lg:grid-cols-3 mt-10">
        <div className="hidden lg:flex space-x-2 pr-10 justify-center mt-10 h-full">
          <div
            onMouseEnter={() => setActive(0)}
            className={`overflow-hidden item-fluff h-full ${
              active === 0 ? "active" : ""
            }`}
          >
            <img
              className="w-full h-full object-cover"
              src="/images/poool.avif"
            />
          </div>

          <div
            onMouseEnter={() => setActive(1)}
            className={`item-fluff h-full ${active === 1 ? "active" : ""}`}
          >
            <img
              className="w-full h-full object-cover"
              src="/images/lux-house.avif"
            />
          </div>
          <div
            onMouseEnter={() => setActive(2)}
            className={`item-fluff h-full ${active === 2 ? "active" : ""}`}
          >
            <img
              className="w-full h-full object-cover"
              src="/images/villa-pool.avif"
            />
          </div>
          <div
            onMouseEnter={() => setActive(3)}
            className={`item-fluff h-full ${active === 3 ? "active" : ""}`}
          >
            <img
              className="w-full h-full object-cover"
              src="/images/poowow.avif"
            />
          </div>
        </div>
        <div className="grid lg:grid-cols-2 col-span-2">
          <div class="px-2 lg:px-5 w-full flex mb-5 | md:mb-0  ">
            <a
              onMouseEnter={() => setActive(0)}
              href="https://area.co.uk/news-knowledge/eureka-moment-coworking"
              class="block w-full group"
            >
              <div class="w-full rounded-xl aspect-ratio-4/3 relative overflow-hidden mb-5 transition transform translate-z-0 | lg:group-hover:-translate-y-2 | lg:mb-10 | 2xl:aspect-ratio-3/4">
                <div class="w-full h-full absolute top-0 left-0 transition transform | lg:group-hover:scale-105"></div>
              </div>
              <div class="w-full mb-3">
                <div
                  className={`${
                    active === 0
                      ? "bg-secondary text-white border-secondary"
                      : "text-primary border-primary"
                  } transition   py-0.5 px-2 | lg:px-4 lg:text-md inline-flex rounded-full border borde-solid leading-tight tracking-tight loco--fade-y is-inview`}
                  data-scroll=""
                >
                  Hardscaping
                </div>
              </div>
              <h2
                class="font-sans-primary text-xl | md:text-2xl 2xl:text-2xl text-primary font-normal leading-tight tracking-tight mb-3 loco--lines-fade-y words lines splitting is-inview"
                data-splitting="lines"
                data-scroll=""
              >
                Everything starts with a meeting on site
              </h2>
              <div
                class="line-clamp-2 delay-200 text-ellipsis | loco--fade-y is-inview"
                data-scroll=""
              >
                <div
                  class="w-full -mb-3 md:-mb-6 | loco--lines-fade-y is-inview"
                  data-scroll=""
                >
                  <p class="w-full leading-relaxed tracking-tight text-base mb-6 | 3xl:text-md text-primary">
                    Hardscapes provide a permanent definition and help establish
                    a “style” to your outdoor environment. Products involving
                    rock, brick, masonry, stone, or other durable materials are
                    considered hardscapes. A few examples of hardscape elements
                    that are used in our projects would be retaining walls,
                    walkways, driveways, sunken patios, steps, outdoor kitchens
                    & more…
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div class="px-2 lg:px-5 w-full flex mb-5 | md:mb-0 ">
            <a
              onMouseEnter={() => setActive(1)}
              href="https://area.co.uk/news-knowledge/eureka-moment-coworking"
              class="block w-full group"
            >
              <div class="w-full rounded-xl aspect-ratio-4/3 relative overflow-hidden mb-5 transition transform translate-z-0 | lg:group-hover:-translate-y-2 | lg:mb-10 | 2xl:aspect-ratio-3/4">
                <div class="w-full h-full absolute top-0 left-0 transition transform | lg:group-hover:scale-105"></div>
              </div>
              <div class="w-full mb-3">
                <div
                  className={`${
                    active === 1
                      ? "bg-secondary text-white border-white"
                      : "text-primary border-primary"
                  } transition py-0.5 px-2 | lg:px-4 lg:text-md inline-flex rounded-full border borde-solid leading-tight tracking-tight loco--fade-y is-inview`}
                  data-scroll=""
                >
                  Estimation
                </div>
              </div>
              <h2
                class="font-sans-primary text-xl | md:text-2xl 2xl:text-2xl text-primary font-normal leading-tight tracking-tight mb-3 loco--lines-fade-y words lines splitting is-inview"
                data-splitting="lines"
                data-scroll=""
              >
                Landscaping
              </h2>
              <div
                class="line-clamp-2 delay-200 text-ellipsis | loco--fade-y is-inview"
                data-scroll=""
              >
                <div
                  class="w-full -mb-3 md:-mb-6 | loco--lines-fade-y is-inview"
                  data-scroll=""
                >
                  <p class="w-full leading-relaxed tracking-tight text-base mb-6 | 3xl:text-md text-primary">
                    Landscaping beautifies your outdoor space while adding value
                    to your property. There are many different styles of
                    landscaping to choose from. Including traditional, modern,
                    drought-tolerant and more … Landscapes can be purely
                    aesthetic or serve a purpose
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div class="px-2 lg:px-5 w-full flex mb-5 | md:mb-0 ">
            <a
              onMouseEnter={() => setActive(2)}
              href="https://area.co.uk/news-knowledge/eureka-moment-coworking"
              class="block w-full group"
            >
              <div class="w-full rounded-xl aspect-ratio-4/3 relative overflow-hidden mb-5 transition transform translate-z-0 | lg:group-hover:-translate-y-2 | lg:mb-10 | 2xl:aspect-ratio-3/4">
                <div class="w-full h-full absolute top-0 left-0 transition transform | lg:group-hover:scale-105"></div>
              </div>
              <div class="w-full mb-3">
                <div
                  className={`${
                    active === 2
                      ? "bg-secondary text-white border-white"
                      : "text-primary border-primary"
                  } transition py-0.5 px-2 | lg:px-4 lg:text-md inline-flex rounded-full border borde-solid leading-tight tracking-tight loco--fade-y is-inview`}
                  data-scroll=""
                >
                  OUTDOOR LIGHTING
                </div>
              </div>
              <h2
                class="font-sans-primary text-xl | md:text-2xl 2xl:text-2xl text-primary font-normal leading-tight tracking-tight mb-3 loco--lines-fade-y words lines splitting is-inview"
                data-splitting="lines"
                data-scroll=""
              >
                The 3D Design of your dream.
              </h2>
              <div
                class="line-clamp-2 delay-200 text-ellipsis | loco--fade-y is-inview"
                data-scroll=""
              >
                <div
                  class="w-full -mb-3 md:-mb-6 | loco--lines-fade-y is-inview"
                  data-scroll=""
                >
                  <p class="w-full leading-relaxed tracking-tight text-base mb-6 | 3xl:text-md text-primary">
                    Outdoor lighting not only makes your property look stunning.
                    It also increases outdoor visibility & Safety. Low voltage
                    lighting is most definitely a great feature
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div class="px-2 lg:px-5 w-full flex mb-5 | md:mb-0 ">
            <a
              onMouseEnter={() => setActive(3)}
              href="https://area.co.uk/news-knowledge/eureka-moment-coworking"
              class="block w-full group"
            >
              <div class="w-full rounded-xl aspect-ratio-4/3 relative overflow-hidden mb-5 transition transform translate-z-0 | lg:group-hover:-translate-y-2 | lg:mb-10 | 2xl:aspect-ratio-3/4">
                <div class="w-full h-full absolute top-0 left-0 transition transform | lg:group-hover:scale-105"></div>
              </div>
              <div class="w-full mb-3">
                <div
                  className={`${
                    active === 3
                      ? "bg-secondary text-white border-white"
                      : "text-primary border-primary"
                  } transition py-0.5 px-2 | lg:px-4 lg:text-md inline-flex rounded-full border borde-solid leading-tight tracking-tight loco--fade-y is-inview`}
                  data-scroll=""
                >
                  POOL AND SPA
                </div>
              </div>
              <h2
                class="font-sans-primary text-xl | md:text-2xl 2xl:text-2xl text-primary font-normal leading-tight tracking-tight mb-3 loco--lines-fade-y words lines splitting is-inview"
                data-splitting="lines"
                data-scroll=""
              >
                POOL AND SPA
              </h2>
              <div
                class="line-clamp-2 delay-200 text-ellipsis | loco--fade-y is-inview"
                data-scroll=""
              >
                <div
                  class="w-full -mb-3 md:-mb-6 | loco--lines-fade-y is-inview"
                  data-scroll=""
                >
                  <p class="w-full leading-relaxed tracking-tight text-base mb-6 | 3xl:text-md text-primary">
                    We design & build beautiful pools, spas, and exterior living
                    spaces custom-tailored to fit your outdoor lifestyle.
                    Whether you prefer the complimentary styling of an
                    Architectural design or the look and feel of a Naturalistic
                    design. Our team is ready to transform your outdoor living
                    space into your very own personal paradise.
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
