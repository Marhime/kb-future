import React from "react";
import HowItWorks from "../components/HowItWorks";
import Layout from "../components/Layout";
import MultipleList from "../components/MultipleList";
import WhatWeOffer from "../components/WhatWeOffer";

const Landscaping = () => {
  return (
    <>
      <div className="w-full pt-24 | lg:pt-32 | 2xl:pt-32 bg-white">
        <div className="mt-10 | lg:mt-20">
          <div className="w-11/12 | lg:w-container mx-auto">
            <div className="px-2 lg:px-5 w-10/12 text-center mb-6 mx-auto | lg:mb-16 md:w-full">
              <h1
                className="text-center text-3xl sm:text-4xl | md:text-5xl | lg:text-6xl | 2xl:text-7xl text-primary font-medium leading-tighter | md:leading-none tracking-tight
bg-white "
              >
                Landscaping
              </h1>
            </div>
          </div>
          <div className="w-11/12 lg:w-10/12 mx-auto relative z-10 delay-200 h-80">
            <img
              src="/images/poowow.avif"
              className={`w-full h-full object-cover `}
            />
          </div>
        </div>
      </div>
      <section className="w-full bg-white py-12 | md:py-24 | lg:py-32 | 2xl:py-32">
        <div className="w-11/12 lg:w-10/12 | lg:w-container mx-auto">
          <div className="px-2 lg:px-5 w-full max-w-6xl">
            <h2 className="font-sans-primary text-lg | sm:text-xl md:text-3xl xl:text-3xl 2xl:text-4xl text-primary font-normal leading-tight tracking-tight loco--lines-fade-y words lines splitting is-inview">
              Landscaping beautifies your outdoor space while adding value to
              your property. There are many different styles of landscaping to
              choose from.
            </h2>
          </div>
        </div>
      </section>
      <MultipleList />
      <section className="w-full bg-white py-12 | md:py-24 | lg:py-32 | 2xl:py-32">
        <WhatWeOffer />
      </section>
    </>
  );
};

export default Landscaping;

Landscaping.getLayout = function getLayout(page) {
  return <Layout white>{page}</Layout>;
};
