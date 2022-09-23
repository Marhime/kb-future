import gsap from "gsap";
import Head from "next/head";
import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import CarouselBig from "../components/CarouselBig";
import HowItWorks from "../components/HowItWorks";
import MultipleList from "../components/MultipleList";
import VideoHome from "../components/VideoHome";

export default function Home() {
  return (
    <>
      <Head>
        <title>KB Landscaping</title>
        <meta name="description" content="KB Landscaping" />
      </Head>

      <main className="relative">
        <VideoHome />
        <section className="w-full bg-white py-12 | md:py-24 | lg:py-32 | 2xl:py-32">
          <div className="w-11/12 lg:w-10/12 | lg:w-container mx-auto">
            <div className="max-w-2xl | lg:max-w-5xl px-4">
              <h2 className="text-4xl">
                At KB Landscaping we are experts in creating bespoke lifespace
                environments, delivering high-quality, high-performing solutions
                across Los Angeles.
              </h2>
              <div className="flex items-center gap-8 mt-10 md:mt-8 xl:mt-10">
                <p className="text-lg">And that's not all</p>{" "}
                <a className="text-lg font-semibold text-white bg-[#354432] rounded-[200px] px-4 py-2">
                  Contact us
                </a>
              </div>
            </div>
          </div>
        </section>
        <section>
          <MultipleList />
        </section>
        <section className="w-full bg-white py-12 | md:py-24 | lg:py-32 | 2xl:py-32">
          <div className="w-11/12 lg:w-10/12 | lg:w-container mx-auto">
            <div className="px-4 lg:flex lg:items-center lg:justify-between">
              <h2 className="text-3xl | md:text-4xl lg:text-5xl 2xl:text-6xl text-primary font-light leading-none tracking-tight loco--lines-fade-y words lines splitting">
                <span className="font-medium">Creating</span> spaces that
                <br />
                bring <span className="font-medium">life</span>
              </h2>
              <a className="inline-block text-lg font-medium text-white bg-[#354432] rounded-[200px] px-4 py-2 mt-10 lg:mt-0">
                View all case studies
              </a>
            </div>
          </div>
          <div className="mt-10">
            <div className="w-11/12 ml-auto relative mt-5 md:mt-10">
              <CarouselBig />
            </div>
          </div>
        </section>
        <section className="w-full py-12 | md:py-24 | lg:py-32 | 2xl:py-32 relative">
          <div className="w-11/12 mx-auto relative z-20">
            <div className="px-4 text-center">
              <h2 className="font-sans-primary text-3-5xl | sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white font-light leading-tighter md:leading-none tracking-tight">
                <span className="font-medium">Why </span> choose
                <span className="font-medium"> us</span>
              </h2>
              <div className="mt-5 mb-5 mx-auto px-4 max-w-lg | md:mt-10 md:mb-10 md:px-0 | lg:max-w-xl">
                <p className="w-full leading-relaxed tracking-tight text-base mb-3 md:mb-6 | md:text-md 3xl:text-lg text-white">
                  Licensed and bonded company we do everything outdoors – from
                  custom landscaping hardscaping to swimming pools and spas,
                  patios, driveways, outdoor kitchens, walkways, water features,
                  and more! Whether you’re looking for a small addition to your
                  front or back yard, or you have a blank slate that needs a
                  full design, let our experience and creativity work to create
                  your dream outdoor space.
                </p>
                <div className="lg:flex items-center justify-between mt-10 lg:mt-20 lg:space-x-6">
                  <div className="flex flex-col justify-center items-center text-white">
                    <img className="w-20 mb-6" src="secure.svg" />
                    <p className="font-medium">Safe &amp; Secure</p>
                    <p className="mt-2 font-light">
                      Working with us means you are working with a licensed
                      contractor
                    </p>
                  </div>
                  <div className="flex flex-col justify-center items-center text-white mt-10 lg:mt-0">
                    <img className="w-20 mb-6" src="budget-friendly.svg" />
                    <p className="font-medium">Budget Friendly</p>
                    <p className="mt-2 font-light">
                      Working with us means there is no middleman, we are the
                      source for all your landscaping needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full bg-white py-12 | md:py-24 | lg:py-32 | 2xl:py-32">
          <HowItWorks />
        </section>
      </main>

      <footer></footer>
    </>
  );
}
