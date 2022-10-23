import gsap from "gsap";
import Head from "next/head";
import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import CarouselBig from "../components/CarouselBig";
import HowItWorks from "../components/HowItWorks";
import Layout from "../components/Layout";
import MultipleList from "../components/MultipleList";
import VideoHome from "../components/VideoHome";
import WhatWeOffer from "../components/WhatWeOffer";
import WhyChooseUs from "../components/WhyChooseUs";

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
            <div className="px-4 lg:flex lg:items-end lg:justify-between">
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
        <WhyChooseUs />
        <section className="w-full bg-white py-12 | md:py-24 | lg:py-32 | 2xl:py-32">
          <WhatWeOffer />
        </section>
        <section className="w-full bg-white py-12 | md:py-24 | lg:py-32 | 2xl:py-32">
          <HowItWorks />
        </section>
      </main>
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
