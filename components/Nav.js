import gsap from "gsap";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

function Nav({ white }) {
  const navRef = useRef(null);

  const [scrolledDown, setScrolledDown] = useState(false);
  const [currentScrollY, setCurrentScrollY] = useState(0);

  useEffect(() => {
    console.log("wow");
    var lastScrollTop = window.scrollTop;

    // element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
    window.addEventListener(
      "scroll",
      function () {
        // or window.addEventListener("scroll"....
        var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
        if (st > lastScrollTop) {
          setScrolledDown(true);
        } else {
          // upscroll code
          setScrolledDown(false);
        }
        setCurrentScrollY(st);
        lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
      },
      false
    );
  }, []);

  useEffect(() => {
    if (currentScrollY < window.scrollY)
      console.log("currentScrollY < window.scrollY");
  }, [currentScrollY]);

  return (
    <>
      <div
        ref={navRef}
        className={`max-w-9xl mx-auto py-4 px-8 flex items-center justify-between top-0 left-0 right-0 fixed z-50 transition duration-300 ease-in-out  ${
          currentScrollY > 1
            ? scrolledDown
              ? "-translate-y-full"
              : "bg-primary"
            : ""
        }`}
      >
        <Link href="/">
          <a className="text-6xl font-black">
            <img src="/logo.svg" className="w-16 h-16" />
          </a>
        </Link>
        <nav className="hidden lg:block">
          <ul className="flex items-center space-x-10">
            <li>
              <Link href="/landscaping">
                <a
                  className={`${
                    white && !(currentScrollY > 1)
                      ? "text-primary"
                      : "text-white"
                  } text-lg font-light`}
                >
                  Landscaping
                </a>
              </Link>
            </li>
            <li>
              <Link href="/hardscaping">
                <a
                  className={`${
                    white && !(currentScrollY > 1)
                      ? "text-primary"
                      : "text-white"
                  } text-lg font-light`}
                >
                  Hardscaping
                </a>
              </Link>
            </li>
            <li>
              <Link href="/pool-spa">
                <a
                  className={`${
                    white && !(currentScrollY > 1)
                      ? "text-primary"
                      : "text-white"
                  } text-lg font-light`}
                >
                  Pool & Spa
                </a>
              </Link>
            </li>
            <li>
              <Link href="/outdoor-living">
                <a
                  className={`${
                    white && !(currentScrollY > 1)
                      ? "text-primary"
                      : "text-white"
                  } text-lg font-light`}
                >
                  Outdoor Living
                </a>
              </Link>
            </li>
          </ul>
        </nav>
        <a
          href=""
          className={`font-medium text-lg ${
            white ? "text-white bg-primary" : "text-primary bg-white"
          } rounded-[200px] px-4 py-2`}
        >
          Menu
        </a>
      </div>
      {!white && (
        <div
          className={`${
            currentScrollY < 1 ? "opacity-100" : "opacity-0"
          } transition duration-300 ease-in-out hidden xl:block fixed bottom-0 left-0 right-0 w-full h-[5vh] bg-secondary z-50`}
        >
          <div className="text-sm w-11/12 | mx-auto flex items-center justify-center h-full text-primary space-x-5">
            <a
              href="https://www.cslb.ca.gov/onlineservices/checklicenseII/LicenseDetail.aspx?LicNum=1066105"
              className="flex items-center"
            >
              <img className="inline-block w-5 mr-2" src="/license.svg" />
              LIC # 1066105
            </a>
            <div className="w-[2px] h-5 bg-primary"></div>
            <p className="flex items-center">
              <img className="inline-block w-5 mr-2" src="/time.svg" />
              MON - FRI: 8:00 - 19:00
            </p>
            <div className="w-[2px] h-5 bg-primary"></div>
            <p className="flex items-center">
              <img className="inline-block w-5 mr-2" src="/time.svg" />
              SATURDAY : CLOSED
            </p>
            <div className="w-[2px] h-5 bg-primary"></div>
            <p className="flex items-center">
              <img className="inline-block w-5 mr-2" src="/time.svg" />
              SUNDAY: 8:00 - 19:00
            </p>
            <div className="w-[2px] h-5 bg-primary"></div>
            <a href="tel:+18189617726" className="flex items-center">
              <img className="inline-block w-5 mr-2" src="/phone.svg" />
              1-818-961-7726
            </a>
            <div className="w-[2px] h-5 bg-primary"></div>
            <a
              target="_blank"
              href="https://www.facebook.com/KB-Landscaping-Inc-109708124113366"
              className="mr-5"
            >
              <img className="inline-block w-5" src="/facebook.svg" />
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/kb_landscapinginc"
              className="mr-5"
            >
              <img className="inline-block w-5" src="/instagram.svg" />
            </a>
            <a
              target="_blank"
              href="https://www.yelp.com/biz/kb-landscaping-woodland-hills"
              className="mr-5"
            >
              <img className="inline-block w-5" src="/yelp.svg" />
            </a>
          </div>
        </div>
      )}

      <a
        href="tel:+18189617726"
        className="animate-bounce fixed left-2 bottom-2 lg:hidden w-16 h-16 bg-primary z-50 rounded-full flex items-center justify-center"
      >
        <img
          className="duration-1000 inline-block w-6"
          src="/phone-white.svg"
        />
      </a>
    </>
  );
}

export default Nav;
