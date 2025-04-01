import { Sling as Hamburger } from 'hamburger-react'
import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutDropDownOpen, setAboutDropDownOpen] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const dropdownRef = useRef(null);
  const location = useLocation();
  const isActive = (path) => {
    // First check for direct path match
    if (location.pathname === path) {
      return true;
    }
    // Then find the nav item with this path
    const navItem = navLinks.find(link => link.to === path);
    // If nav item has dropdown, check if current path is in the dropdown
    if (navItem && navItem.dropdown) {
      return navItem.dropdown.some(item => location.pathname === item.to);
    }
    return false;
  };
  const navLinks = [
    { to: "/", label: "Home" },
    {
      to: "/about",
      label: "About Journal",
      dropdown: [
        {
          to: "/about",
          label: "About ",
        },
        {
          to: "/aim-and-scope",
          label: "Aim and Scope",
        },
        {
          to: "/editorial-board",
          label: "Editorial Board",
        },
        {
          to: "/issues",
          label: "Issues",
        },
        {
          to: "/author-guidelines",
          label: "Author Guidelines",
        },
        {
          to: "/copyrights",
          label: "Copyrights",
        },
      ],
    },
    {
      to: " ",
      label: "Overview",
      dropdown: [
        {
          to: "/Peer-Review-Process",
          label: "Peer Review process",

        },
        {
          to: "/Publication-ethics",
          label: "Publication Ethics",

        },
        {
          to: "/abstracting-and-indexing",
          label: "Abstracting and Indexing",

        },
        {
          to: "/article-processing",
          label: "Article Processing",

        },

      ],
    },
    {
      to: "",
      label: "Policy",
      dropdown: [
        {
          to: "/plagiarism",
          label: "Plagiarism",

        },
        {
          to: "/malpractice",
          label: "Malpractice",

        },
        {
          to: "/correction",
          label: "Corretion",

        },
        {
          to: "/publication-policy",
          label: "Publication Rights",

        },

      ],
    },
    { to: "/contact", label: "Contact" },
  ];
  const toggleDropdown = (label) => {
    setAboutDropDownOpen(aboutDropDownOpen === label ? null : label);
  };
  useEffect;

  const handleMouseEnter = (category) => {
    setHoveredCategory(category);
  };

  const handleMouseLeave = () => {
    setHoveredCategory(null);
  };

  return (
    <>
      <section className="p-2 py-4  md:border-none  shadow-md md:shadow-none">
        <section className="   bg-[#FBFCF6]">
          <div className="max-w-[90rem] mx-auto md:px-5  px-1 ">
            <div className="flex items-center justify-between   lg:gap-0  gap-5  ">
              <Link to="/">
                <div className="w-[200px]">
                  <div className="bg-[#FBFCF6]">
                    {/* <p className="  py-4 font-bold text-[ #002c2a]" >IJSCGT</p> */}
                    <img className=" font-bold text-[#002c2a]" src="/assets/Images/IJSCGT.png" alt="" />
                  </div>
                </div>
              </Link>
              <div className="md:block hidden xl:text-2xl text-xl font-bold  merry">
                International Journal of Sustainable Computing and Green Technologies
              </div>
              <div>
              </div>
              <div className="md:hidden block">
                <Hamburger toggled={menuOpen} toggle={setMenuOpen} />
              </div>
            </div>
          </div>
        </section>
      </section>
      {/* <div className={` ${menuOpen ? "" : ""}`}>
        {menuOpen && (
          <div className=" flex flex-col items-center space-y-4 w-full text-center bg-white py-2 shadow-lg">
            {navLinks.map(
              (link) =>
                !link.desktopOnly && (
                  <div key={link.to} to={link.to} className="relative   ">
                    <Link onClick={() =>  link.dropdown && toggleDropdown(link.label) }
                      className="text-black " >
                      {link.label}
                    </Link>
                    {link.dropdown && aboutDropDownOpen === link.label && (
                      <div className="     mt-3   bg-white   text-black border-gray-200 z-10 ">
                        {link.dropdown.map((dropdownlink) => (
                          <Link
                            key={dropdownlink.to}
                            to={dropdownlink.to}
                            className="block px-4 py-2 text-black hover:bg-gray-100"
                          >
                            {dropdownlink.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )
            )}
          </div>
        )}
      </div> */}
      <section className={`bg-primary border-[#002c2a] border  ${menuOpen ? " block" : " md:block hidden"}`}>
        <header className="max-w-[90rem] mx-auto px-5 bg-primary ">
          <div className="flex  md:justify-between flex-wrap items-center md:flex-row flex-col  py-1">
            <nav ref={dropdownRef}>
              <div className={`md:space-x-7 py-4 md:block max-w-[65rem] mx-auto relative    ${menuOpen ? "flex flex-col space-y-4" : " "}`}>
                {navLinks.map((link) => (
                  <div
                    key={link.to}
                    className=" inline-block   "
                    // onMouseEnter={() => handleMouseEnter(link.label)}
                    // onMouseLeave={handleMouseLeave}
                    onMouseEnter={() => window.innerWidth >= 768 && handleMouseEnter(link.label)}
                    onMouseLeave={() => window.innerWidth >= 768 && handleMouseLeave()}  >
                    <Link to={link.to}
                      className={` border-[#002c2a] text-white   md:flex-row  flex-col  flex    transition-all duration-300 ease-in-out  relative    lg:text-base md:text-sm  items-center    gap-2 ${hoveredCategory === link.label ? 'md:bg-[#002c2a] text-[#002c2a] md:text-white' : ' '} `}
                      onClick={(e) => {
                        if (link.dropdown) {
                          e.preventDefault();
                          setHoveredCategory((prev) => (prev === link.label ? null : link.label));
                        } else {
                          setMenuOpen(false);
                        }
                      }}>
                      <div className=' flex gap-2 items-center  '>
                        {link.label}
                         {link.dropdown && (
                          <i className={`fi fi-rr-caret-down flex items-center  transition-all duration-300 ease-in-out  text-white ${hoveredCategory === link.label ? 'bg-[#002c2a] text-white rotate-180 duration-100' : ' '} `}></i>
                        )}
                      </div>
                      {hoveredCategory === link.label && link.dropdown && (
                        <div className="md:absolute left-0   top-full w-[200px]  md:bg-[#AECC53] md:border-none border transition-all duration-300 ease-in-out opacity-100 scale-y-100 origin-top  grid md:grid-cols-1  rounded-xl   z-10">
                          {link.dropdown.map((dropdownlink) => (
                            <Link key={dropdownlink.to} to={dropdownlink.to}
                              className="block   py-2  text-white  md:text-start text-center underline underline-offset-2 md:text-[#002c2a]"
                              onClick={() => { setHoveredCategory(null); setMenuOpen(false); }}>
                              <p className="md:hover:border-l-4 border-l-[#002C2A] px-5 text-center">
                                {dropdownlink.label}
                              </p>
                            </Link>
                          ))}
                        </div>
                      )}
                    </Link>
                  </div>
                ))}
              </div>
            </nav>
            <a href="https://ijscgt.com/Ijscgt/index.php/ijscgt/about/submissions" target="_blank" rel="noopener noreferrer" className="w-fit  block  md:mb-0 mb-5 " >
              <button className=" bg-[#AECC53] md:p-3 p-2 rounded-full text-[#002C2A] md:text-base text-sm  font-semibold cursor-pointer">
                Submit Your Manuscript
              </button>
            </a>
          </div>
        </header>
      </section>
    </>
  );
};

export default Header;
