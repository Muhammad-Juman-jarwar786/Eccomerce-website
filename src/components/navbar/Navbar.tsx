import {
  faBars,
  faCartShopping,
  faCircle,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MenuItems from '../menuitems/MenuItems';

const Navbar = () => {
  return (
    <div>
      <nav className="overflow-hidden flex flex-row bg-slate-50 w-full h-24 justify-between drop-shadow-xl">
        <div className="justify-center align-middle">
          <img
            className="w-40 md:w-fit cursor-pointer hover:translate-x-3 ease-in-out duration-200"
            src="src/assets/logo.png"
            alt="Logo"
          />
        </div>
        <div className="text-4xl flex items-center justify-center w-full md:hidden cursor-pointer">
          <FontAwesomeIcon icon={faBars} />
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
