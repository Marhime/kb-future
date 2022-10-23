import React from "react";

const WhyChooseUs = () => {
  return (
    <section className="w-full py-12 | md:py-24 | lg:py-32 | 2xl:py-32 relative">
      <div className="w-11/12 mx-auto relative z-20">
        <div className="px-4 text-center">
          <h2 className="text-3xl | sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white font-light leading-tighter md:leading-none tracking-tight">
            <span className="font-medium">Why </span> choose
            <span className="font-medium"> us</span>
          </h2>
          <div className="mt-5 mb-5 mx-auto px-4 max-w-lg | md:mt-10 md:mb-10 md:px-0 | lg:max-w-xl">
            <p className="w-full leading-relaxed tracking-tight text-base mb-3 md:mb-6 | md:text-md 3xl:text-lg text-white">
              Licensed and bonded company we do everything outdoors – from
              custom landscaping hardscaping to swimming pools and spas, patios,
              driveways, outdoor kitchens, walkways, water features, and more!
              Whether you’re looking for a small addition to your front or back
              yard, or you have a blank slate that needs a full design, let our
              experience and creativity work to create your dream outdoor space.
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
                  Working with us means there is no middleman, we are the source
                  for all your landscaping needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
