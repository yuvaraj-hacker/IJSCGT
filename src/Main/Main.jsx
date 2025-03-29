import React, { useEffect, useRef, useState } from "react";
import Header from "../Core/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Core/Footer";
import { IoIosArrowUp } from "react-icons/io";

const Main = () => {
  const [headerHeight, setHeaderHeight] = useState(0);
  const headerRef = useRef(null); // Ref for the Header
  const mainRef = useRef(null); // Ref for the main content
  const [showScroll, setShowScroll] = useState(false);


  useEffect(() => {
    // Set the initial header height when the component mounts
    const updateHeaderHeight = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight); // Get the height of the header
      }
    };

    // Run the update when the component mounts and on window resize
    updateHeaderHeight();
    window.addEventListener("resize", updateHeaderHeight);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", updateHeaderHeight);
    };
  }, []);

  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight);
    }

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <div ref={headerRef} className="bg-[#FBFCF6]   fixed top-0  w-full  z-50">
        <Header />
      </div>
      <main ref={mainRef} className=" " style={{ marginTop: `${headerHeight}px` }} >
        <Outlet />
      </main>
      <div className="">
        <Footer />
      </div>

      {showScroll && (
        <button onClick={scrollToTop} className="fixed bottom-5 right-5 bg-white  text-[ #002c2a] cursor-pointer border font-bold border-[ #002c2a] p-3 rounded-full shadow-lg transition-opacity hover:bg-opacity-80"
        >
          <IoIosArrowUp className="md:text-xl" />
        </button>
      )}
    </>
  );
};
export default Main;
