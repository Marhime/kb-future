import gsap from "gsap";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

function Nav() {
  const navRef = useRef(null);

  const [scrolledDown, setScrolledDown] = useState(false);
  const [currentScrollY, setCurrentScrollY] = useState(0);

  useEffect(() => {
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
      <a className="text-6xl font-black">
        <img src="/logo.svg" className="w-16 h-16" />
      </a>
      <nav className="hidden lg:block">
        <ul className="flex items-center space-x-10">
          <li>
            <a className="text-white text-lg font-light" href="">
              Home
            </a>
          </li>
          <li>
            <a className="text-white text-lg font-light" href="">
              Services
            </a>
          </li>
          <li>
            <a className="text-white text-lg font-light" href="">
              About us
            </a>
          </li>
        </ul>
      </nav>
      <a
        href=""
        className="font-medium text-lg text-black bg-white rounded-[200px] px-4 py-2"
      >
        Menu
      </a>
    </div>
  );
}

export default Nav;
