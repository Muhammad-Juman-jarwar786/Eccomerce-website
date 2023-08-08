import React, { useEffect, useRef } from "react";
import anime from "animejs";
import { useState } from "react";
import {
  faBars,
  faTimes,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MenuItems from "../menuitems/MenuItems";
import { NavLink } from "react-router-dom";
import { MenuData } from "../../data/MenuData";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const menuRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    if (showMenu && menuRef.current) {
      const divElement = menuRef.current;

      divElement.style.opacity = "0";

      anime({
        targets: divElement,
        opacity: "1",
        duration: 3000,
        easing: "easeInOutQuad",
        direction: "normal",
      });
    } else if (!showMenu && menuRef.current) {
      const divElement = menuRef.current;
      divElement.style.opacity = "1";
      anime({
        targets: divElement,
        opacity: "0",
        duration: 1000,
        easing: "easeInOutQuad",
        direction: "normal",
      });
    }
  }, [toggleMenu]);

  const closeMenu = () => {
    setShowMenu(false);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const logoRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (showMenu && logoRef.current) {
      const element = logoRef.current;

      element.style.height = "11%";

      anime({
        targets: element,
        height: "70%",
        duration: 2000,
        easing: "easeInOutQuad",
        direction: "normal",
      });
    } else if (!showMenu && logoRef.current) {
      const element = logoRef.current;

      element.style.height = "70%";

      anime({
        targets: element,
        height: "11%",
        duration: 2000,
        easing: "easeInOutQuad",
      });
    }
  }, [toggleMenu]);

  useEffect(() => {
    if (logoRef.current) {
      const element = logoRef.current;

      element.style.width = "0";
      element.style.height = "11%";

      anime({
        targets: element,
        width: "100%",
        height: "11%",
        duration: 2000,
        easing: "easeInOutQuad",
        direction: "normal",
      });
    }
  }, []);

  return (
    <div>
      <nav
        ref={logoRef}
        className="NavBar fixed z-50 overflow-hidden md:flex md:justify-between bg-slate-100 w-full h-auto drop-shadow-xl"
      >
        <div className="flex justify-between">
          <div
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="2000"
            data-aos-duration="1000"
            data-aos-offset="0"
            className="LOGO w-40"
          >
            <img
              className="w-40 cursor-pointer hover:translate-x-3 ease-in-out duration-200"
              src="src/assets/logo.png"
              alt="Logo"
            />
          </div>
          <NavLink
            to="/cart"
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="2000"
            data-aos-duration="1000"
            data-aos-offset="0"
            className="md:hidden mt-8 relative cursor-pointer justify-center items-center flex"
          >
            <FontAwesomeIcon
              className="text-[1.9rem] relative"
              icon={faCartShopping}
            />
            <span className="absolute left-3 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
              {1}
            </span>
          </NavLink>
          <div
            onClick={toggleMenu}
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="2000"
            data-aos-duration="1000"
            data-aos-offset="0"
            className="text-4xl flex mt-12 w-40 text-center justify-center cursor-pointer hover:translate-y-3 ease-in-out duration-200 md:hidden"
          >
            {showMenu ? (
              <FontAwesomeIcon icon={faTimes} />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )}
          </div>
        </div>
        <div ref={menuRef} className={`mt-20 ${showMenu ? "block" : ""}`}>
          <ul className="h-full font-bold text-2xl text-center flex flex-col gap-7">
            {MenuData.map((item, i) => (
              <React.Fragment key={i}>
                <MenuItems
                  key={i}
                  closeMenuHandler={closeMenu}
                  title={item.title}
                  to={item.to}
                  pathname={item.pathname}
                  pathnamestarts={item.pathnamestarts}
                />
                <hr className="text-slate-800 border-b-2 border-slate-200 top-[-1.8rem] relative z-0" />
              </React.Fragment>
            ))}
          </ul>
        </div>

        <div className="text-2xl md:flex hidden font-semibold items-center justify-center">
          <ul className="flex flex-row gap-10 mr-[10vw]">
            {MenuData.map((item, i) => (
              <MenuItems
                key={i}
                closeMenuHandler={scrollTop}
                title={item.title}
                to={item.to}
                pathname={item.pathname}
                pathnamestarts={item.pathnamestarts}
              />
            ))}
            <NavLink
              to="/cart"
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="2000"
              data-aos-duration="1000"
              data-aos-offset="0"
              className="relative cursor-pointer"
            >
              <FontAwesomeIcon
                className="text-[1.9rem]"
                icon={faCartShopping}
              />
              <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
                {1}
              </span>
            </NavLink>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
