import { useState } from 'react';
import {
  faBars,
  faTimes,
  faCartShopping,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MenuItems from '../menuitems/MenuItems';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div>
      <nav className="fixed z-50 overflow-hidden md:flex md:justify-between bg-slate-50 w-full h-auto drop-shadow-xl">
        <div className="flex justify-between">
          <div className="w-40">
            <img
              className="w-40 cursor-pointer hover:translate-x-3 ease-in-out duration-200"
              src="src/assets/logo.png"
              alt="Logo"
            />
          </div>
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
          <ul className="font-bold text-2xl text-center flex flex-col gap-10">
            <MenuItems title="Home" to="/" pathname="/" pathnamestarts="/" />
            <hr className="text-slate-800" />
            <MenuItems
              title="Shop"
              to="/shop"
              pathname="/shop"
              pathnamestarts="/shop"
            />
            <hr className="text-slate-800" />
            <MenuItems
              title="Blog"
              to="/blog"
              pathname="/blog"
              pathnamestarts="/blog"
            />
            <hr className="text-slate-800" />
            <MenuItems
              title="About"
              to="/about"
              pathname="/about"
              pathnamestarts="/about"
            />
            <hr className="text-slate-800" />
            <MenuItems
              title="Contact"
              to="/contact"
              pathname="/contact"
              pathnamestarts="/contact"
            />
            <hr className="text-slate-800" />
          </ul>
        </div>

        <div className="text-2xl md:flex hidden font-semibold items-center justify-center">
          <ul className="flex flex-row gap-10 mr-[10vw]">
            <MenuItems title="Home" to="/" pathname="/" pathnamestarts="/" />
            <MenuItems
              title="Shop"
              to="/shop"
              pathname="/shop"
              pathnamestarts="/shop"
            />
            <MenuItems
              title="Blog"
              to="/blog"
              pathname="/blog"
              pathnamestarts="/blog"
            />
            <MenuItems
              title="About"
              to="/about"
              pathname="/about"
              pathnamestarts="/about"
            />
            <MenuItems
              title="Contact"
              to="/contact"
              pathname="/contact"
              pathnamestarts="/contact"
            />
            <li className="relative cursor-pointer">
              <FontAwesomeIcon
                className="text-[1.9rem]"
                icon={faCartShopping}
              />
              <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
                {1}
              </span>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
