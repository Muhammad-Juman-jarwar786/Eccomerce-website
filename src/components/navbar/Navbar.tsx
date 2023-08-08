import React, { useEffect, useRef } from 'react';
import anime from 'animejs';
import { useState } from 'react';
import {
  faBars,
  faTimes,
  faCartShopping,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MenuItems from '../menuitems/MenuItems';
import { NavLink } from 'react-router-dom';
import { MenuData } from '../../data/MenuData';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  const logoRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (logoRef.current) {
      const element = logoRef.current;

      // Get the full width of the element
      const fullWidth = element.clientWidth;

      // Set the initial width of the element to 0
      element.style.width = '0';

      anime({
        targets: element,
        width: '100%',
        duration: 1000,
        easing: 'easeInOutQuad',
        direction: 'normal',
      });
    }
  }, []);

  return (
    <div>
      <nav
        ref={logoRef}
        className="NavBar fixed z-50 overflow-hidden md:flex md:justify-between bg-slate-50 w-full h-auto drop-shadow-xl"
      >
        <div className="flex justify-between">
          <div className="LOGO w-40">
            <img
              className="w-40 cursor-pointer hover:translate-x-3 ease-in-out duration-200"
              src="src/assets/logo.png"
              alt="Logo"
            />
          </div>
          <NavLink
            to="/cart"
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
            className="text-4xl flex mt-12 w-40 text-center justify-center cursor-pointer hover:translate-y-3 ease-in-out duration-200 md:hidden"
          >
            {showMenu ? (
              <FontAwesomeIcon icon={faTimes} />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )}
          </div>
        </div>
        <div className={`mt-20 ${showMenu ? 'block' : 'hidden'}`}>
          <ul className="font-bold text-2xl text-center flex flex-col gap-7">
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
            <NavLink to="/cart" className="relative cursor-pointer">
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
