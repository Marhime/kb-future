import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full py-0 bg-primary rounded-t-xl pt-10 pb-6 | lg:pt-16 lg:pb-10">
      <div className="w-11/12 mx-auto relative z-20">
        <div className="px-4 text-center">
          <h2 className="font-sans-primary text-3xl | md:text-4xl lg:text-6xl xl:text-7xl text-white font-light leading-tighter md:leading-none tracking-tight bg-primary rounded-t-xl pt-10 pb-6 lg:pt-16 lg:pb-10">
            Great <span className="font-medium">projects </span> start with
            great <span className="font-medium">relationships</span>
          </h2>
          <a
            href="#"
            className="inline-block text-lg font-medium text-primary bg-white rounded-[200px] px-4 py-2 mt-5"
          >
            Start a project
          </a>
        </div>
        <div className="flex flex-wrap justify-center mt-10 | lg:mt-16">
          <div
            className="delay-100 w-full mb-2 text-center | md:w-auto md:mb-0 md:mx-6 lg:mx-10 loco--fade-y is-inview"
            data-scroll=""
            data-scroll-offset="-20%, 0%"
          >
            <Link href="landscaping">
              <a className="text-md text-white tracking-tight link link--secondary link--no-underline | lg:text-lg">
                Landscaping
              </a>
            </Link>
          </div>
          <div
            className="delay-200 w-full mb-2 text-center | md:w-auto md:mb-0 md:mx-6 lg:mx-10 loco--fade-y is-inview"
            data-scroll=""
            data-scroll-offset="-20%, 0%"
          >
            <Link href="hardscaping">
              <a className="text-md text-white tracking-tight link link--secondary link--no-underline | lg:text-lg">
                Hardscaping
              </a>
            </Link>
          </div>
          <div
            className="delay-300 w-full mb-2 text-center | md:w-auto md:mb-0 md:mx-6 lg:mx-10 loco--fade-y is-inview"
            data-scroll=""
            data-scroll-offset="-20%, 0%"
          >
            <Link href="pool-spa">
              <a className="text-md text-white tracking-tight link link--secondary link--no-underline | lg:text-lg">
                Pool & Spa
              </a>
            </Link>
          </div>
          <div
            className="delay-400 w-full mb-2 text-center | md:w-auto md:mb-0 md:mx-6 lg:mx-10 loco--fade-y is-inview"
            data-scroll=""
            data-scroll-offset="-20%, 0%"
          >
            <Link href="outdoor-living">
              <a className="text-md text-white tracking-tight link link--secondary link--no-underline | lg:text-lg">
                Outdoor Living
              </a>
            </Link>
          </div>
          <div
            className="delay-400 w-full mb-2 text-center | md:w-auto md:mb-0 md:mx-6 lg:mx-10 loco--fade-y is-inview"
            data-scroll=""
            data-scroll-offset="-20%, 0%"
          >
            <Link href="contact">
              <a className="text-md text-white tracking-tight link link--secondary link--no-underline | lg:text-lg">
                Contact
              </a>
            </Link>
          </div>
        </div>
        <div className="w-full flex flex-wrap items-center justify-center text-center mt-10 | md:justify-between | lg:mt-16">
          <div className="px-2 lg:px-5 flex-shrink-0 w-40 mb-4 | lg:mb-0 lg:mr-16"></div>
          <div className="px-2 lg:px-5 inline-flex flex-wrap justify-center">
            <div className="inline-flex flex-wrap">
              <a
                href="https://area.co.uk/cookie-policy"
                className="text-white text-sm link link--secondary link--no-underline"
              >
                Cookie Policy
              </a>
              <span className="mx-2 text-white">|</span>
            </div>
            <div className="inline-flex flex-wrap">
              <a
                href="https://area.co.uk/privacy-policy"
                className="text-white text-sm link link--secondary link--no-underline"
              >
                Privacy Policy
              </a>
              <span className="mx-2 text-white">|</span>
            </div>
            <div className="inline-flex flex-wrap">
              <a
                href="https://area.co.uk/quality-statement"
                className="text-white text-sm link link--secondary link--no-underline"
              >
                Quality Statement
              </a>
            </div>
          </div>
          <div className="px-2 lg:px-5 mt-4 | md:mt-0">
            <p className="text-white text-sm">MADE BY MARHIME</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
