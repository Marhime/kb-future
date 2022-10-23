import React from "react";
import Layout from "../components/Layout";

const OutdoorLiving = () => {
  return (
    <div className="w-full pt-24 | lg:pt-32 | 2xl:pt-32 bg-white">
      <div className="mt-10 | lg:mt-20">
        <div className="w-11/12 | lg:w-container mx-auto">
          <div className="px-2 lg:px-5 w-10/12 text-center mb-6 mx-auto | lg:mb-16 md:w-full"></div>
          <h1
            className="text-center text-3xl sm:text-4xl | md:text-5xl | lg:text-6xl | 2xl:text-7xl text-primary font-medium leading-tighter | md:leading-none tracking-tight
bg-white "
          >
            Outdoor Living
          </h1>
        </div>
      </div>
    </div>
  );
};

export default OutdoorLiving;

OutdoorLiving.getLayout = function getLayout(page) {
  return <Layout white>{page}</Layout>;
};
