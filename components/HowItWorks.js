import React, { useState } from "react";
import useWindowSize from "../hooks/useWindowSize";

const HowItWorks = () => {
  const [active, setActive] = useState(0);
  const { width } = useWindowSize();
  return (
    <div className="w-11/12 lg:w-10/12 | lg:w-container mx-auto">
      <div className="px-4 lg:flex lg:items-end lg:justify-between">
        <h2 className="text-3xl | md:text-4xl lg:text-5xl 2xl:text-6xl text-primary font-light leading-none tracking-tight loco--lines-fade-y words lines splitting">
          What we <span className="font-medium">offer</span>
        </h2>
        <a className="inline-block text-lg font-medium text-white bg-[#354432] rounded-[200px] px-4 py-2 mt-10 lg:mt-0">
          Learn more about us
        </a>
      </div>
      {/* <div className="grid lg:grid-cols-3 mt-10"> */}
      {width > 1023 ? (
        <>
          <div className="hidden lg:flex space-x-4 pr-10 justify-center mt-10 h-full pt-3">
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
            <div
              onMouseEnter={() => setActive(4)}
              className={`item-fluff h-full ${active === 4 ? "active" : ""}`}
            >
              <img
                className="w-full h-full object-cover"
                src="/images/poowow.avif"
              />
            </div>
          </div>
          <div className="grid lg:grid-cols-2 col-span-2">
            {active === 0 ? (
              <div class="px-2 lg:px-5 w-full flex mb-5 | md:mb-0  ">
                <a
                  onMouseEnter={() => setActive(0)}
                  href="https://area.co.uk/news-knowledge/eureka-moment-coworking"
                  class="block w-full group"
                >
                  <div class="w-full mb-3 mt-5">
                    <div
                      className={`text-primary border-primary transition   py-0.5 px-2 | lg:px-4 lg:text-md inline-flex rounded-full border borde-solid leading-tight tracking-tight loco--fade-y is-inview`}
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
                    Frontyard of your dreams
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
                        Hardscapes provide a permanent definition and help
                        establish a “style” to your outdoor environment.
                        Products involving rock, brick, masonry, stone, or other
                        durable materials are considered hardscapes. A few
                        examples of hardscape elements that are used in our
                        projects would be retaining walls, walkways, driveways,
                        sunken patios, steps, outdoor kitchens & more…
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            ) : null}
            {active === 1 ? (
              <div class="px-2 lg:px-5 w-full flex mb-5 | md:mb-0 ">
                <a
                  onMouseEnter={() => setActive(1)}
                  href="https://area.co.uk/news-knowledge/eureka-moment-coworking"
                  class="block w-full group"
                >
                  <div class="w-full mb-3 mt-5">
                    <div
                      className={`text-primary border-primary transition py-0.5 px-2 | lg:px-4 lg:text-md inline-flex rounded-full border borde-solid leading-tight tracking-tight loco--fade-y is-inview`}
                      data-scroll=""
                    >
                      Landscaping
                    </div>
                  </div>
                  <h2
                    class="font-sans-primary text-xl | md:text-2xl 2xl:text-2xl text-primary font-normal leading-tight tracking-tight mb-3 loco--lines-fade-y words lines splitting is-inview"
                    data-splitting="lines"
                    data-scroll=""
                  >
                    Backyard of your dreams
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
                        Landscaping beautifies your outdoor space while adding
                        value to your property. There are many different styles
                        of landscaping to choose from. Including traditional,
                        modern, drought-tolerant and more … Landscapes can be
                        purely aesthetic or serve a purpose
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            ) : null}
            {active === 2 ? (
              <div class="px-2 lg:px-5 w-full flex mb-5 | md:mb-0 ">
                <a
                  onMouseEnter={() => setActive(2)}
                  href="https://area.co.uk/news-knowledge/eureka-moment-coworking"
                  class="block w-full group"
                >
                  <div class="w-full mb-3 mt-5">
                    <div
                      className={`text-primary border-primary transition py-0.5 px-2 | lg:px-4 lg:text-md inline-flex rounded-full border borde-solid leading-tight tracking-tight loco--fade-y is-inview`}
                      data-scroll=""
                    >
                      Outdoor lighting
                    </div>
                  </div>
                  <h2
                    class="font-sans-primary text-xl | md:text-2xl 2xl:text-2xl text-primary font-normal leading-tight tracking-tight mb-3 loco--lines-fade-y words lines splitting is-inview"
                    data-splitting="lines"
                    data-scroll=""
                  >
                    Enlight your life
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
                        Outdoor lighting not only makes your property look
                        stunning. It also increases outdoor visibility & Safety.
                        Low voltage lighting is most definitely a great feature.
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            ) : null}
            {active === 3 ? (
              <div class="px-2 lg:px-5 w-full flex mb-5 | md:mb-0 ">
                <a
                  onMouseEnter={() => setActive(3)}
                  href="https://area.co.uk/news-knowledge/eureka-moment-coworking"
                  class="block w-full group"
                >
                  <div class="w-full mb-3 mt-5">
                    <div
                      className={`text-primary border-primary transition py-0.5 px-2 | lg:px-4 lg:text-md inline-flex rounded-full border borde-solid leading-tight tracking-tight loco--fade-y is-inview`}
                      data-scroll=""
                    >
                      Pool and Spa
                    </div>
                  </div>
                  <h2
                    class="font-sans-primary text-xl | md:text-2xl 2xl:text-2xl text-primary font-normal leading-tight tracking-tight mb-3 loco--lines-fade-y words lines splitting is-inview"
                    data-splitting="lines"
                    data-scroll=""
                  >
                    Pleasure first
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
                        We design & build beautiful pools, spas, and exterior
                        living spaces custom-tailored to fit your outdoor
                        lifestyle. Whether you prefer the complimentary styling
                        of an Architectural design or the look and feel of a
                        Naturalistic design. Our team is ready to transform your
                        outdoor living space into your very own personal
                        paradise.
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            ) : null}
            {active === 4 ? (
              <div class="px-2 lg:px-5 w-full flex mb-5 | md:mb-0 ">
                <a
                  onMouseEnter={() => setActive(4)}
                  href="https://area.co.uk/news-knowledge/eureka-moment-coworking"
                  class="block w-full group"
                >
                  <div class="w-full mb-3 mt-5">
                    <div
                      className={`text-primary border-primary transition py-0.5 px-2 | lg:px-4 lg:text-md inline-flex rounded-full border borde-solid leading-tight tracking-tight loco--fade-y is-inview`}
                      data-scroll=""
                    >
                      Outdoor living
                    </div>
                  </div>
                  <h2
                    class="font-sans-primary text-xl | md:text-2xl 2xl:text-2xl text-primary font-normal leading-tight tracking-tight mb-3 loco--lines-fade-y words lines splitting is-inview"
                    data-splitting="lines"
                    data-scroll=""
                  >
                    Bring life to your outside property
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
                        From outdoor kitchen islands to water and fire features,
                        there is no limit to creating your custom outdoor dream
                        space. Contact Us Today for your free in-home estimate
                        for the best prices and services.
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            ) : null}
          </div>
        </>
      ) : (
        <div className="space-y-10">
          <div className="flex flex-col">
            <img
              className="w-full h-full object-cover rounded-xl mt-10"
              src="/images/poool.avif"
            />
            <a
              href="https://area.co.uk/news-knowledge/eureka-moment-coworking"
              class="block w-full group"
            >
              <div class="w-full mb-3 mt-5">
                <div
                  className={`text-primary border-primary transition py-0.5 px-2 | lg:px-4 lg:text-md inline-flex rounded-full border borde-solid leading-tight tracking-tight loco--fade-y is-inview`}
                  data-scroll=""
                >
                  Outdoor living
                </div>
              </div>
              <h2
                class="font-sans-primary text-xl | md:text-2xl 2xl:text-2xl text-primary font-normal leading-tight tracking-tight mb-3 loco--lines-fade-y words lines splitting is-inview"
                data-splitting="lines"
                data-scroll=""
              >
                Bring life to your outside property
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
                    From outdoor kitchen islands to water and fire features,
                    there is no limit to creating your custom outdoor dream
                    space. Contact Us Today for your free in-home estimate for
                    the best prices and services.
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div className="flex flex-col">
            <img
              className="w-full h-full object-cover rounded-xl mt-10"
              src="/images/poool.avif"
            />
            <a
              href="https://area.co.uk/news-knowledge/eureka-moment-coworking"
              class="block w-full group"
            >
              <div class="w-full mb-3 mt-5 mt-3">
                <div
                  className={`text-primary border-primary transition py-0.5 px-2 | lg:px-4 lg:text-md inline-flex rounded-full border borde-solid leading-tight tracking-tight loco--fade-y is-inview`}
                  data-scroll=""
                >
                  Outdoor living
                </div>
              </div>
              <h2
                class="font-sans-primary text-xl | md:text-2xl 2xl:text-2xl text-primary font-normal leading-tight tracking-tight mb-3 loco--lines-fade-y words lines splitting is-inview"
                data-splitting="lines"
                data-scroll=""
              >
                Bring life to your outside property
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
                    From outdoor kitchen islands to water and fire features,
                    there is no limit to creating your custom outdoor dream
                    space. Contact Us Today for your free in-home estimate for
                    the best prices and services.
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div className="flex flex-col">
            <img
              className="w-full h-full object-cover rounded-xl mt-10"
              src="/images/poool.avif"
            />
            <a
              href="https://area.co.uk/news-knowledge/eureka-moment-coworking"
              class="block w-full group"
            >
              <div class="w-full mb-3 mt-5 mt-3">
                <div
                  className={`text-primary border-primary transition py-0.5 px-2 | lg:px-4 lg:text-md inline-flex rounded-full border borde-solid leading-tight tracking-tight loco--fade-y is-inview`}
                  data-scroll=""
                >
                  Outdoor living
                </div>
              </div>
              <h2
                class="font-sans-primary text-xl | md:text-2xl 2xl:text-2xl text-primary font-normal leading-tight tracking-tight mb-3 loco--lines-fade-y words lines splitting is-inview"
                data-splitting="lines"
                data-scroll=""
              >
                Bring life to your outside property
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
                    From outdoor kitchen islands to water and fire features,
                    there is no limit to creating your custom outdoor dream
                    space. Contact Us Today for your free in-home estimate for
                    the best prices and services.
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div className="flex flex-col">
            <img
              className="w-full h-full object-cover rounded-xl mt-10"
              src="/images/poool.avif"
            />
            <a
              href="https://area.co.uk/news-knowledge/eureka-moment-coworking"
              class="block w-full group"
            >
              <div class="w-full mb-3 mt-5 mt-3">
                <div
                  className={`text-primary border-primary transition py-0.5 px-2 | lg:px-4 lg:text-md inline-flex rounded-full border borde-solid leading-tight tracking-tight loco--fade-y is-inview`}
                  data-scroll=""
                >
                  Outdoor living
                </div>
              </div>
              <h2
                class="font-sans-primary text-xl | md:text-2xl 2xl:text-2xl text-primary font-normal leading-tight tracking-tight mb-3 loco--lines-fade-y words lines splitting is-inview"
                data-splitting="lines"
                data-scroll=""
              >
                Bring life to your outside property
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
                    From outdoor kitchen islands to water and fire features,
                    there is no limit to creating your custom outdoor dream
                    space. Contact Us Today for your free in-home estimate for
                    the best prices and services.
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      )}
      {/* </div> */}
    </div>
  );
};

export default HowItWorks;
