import { useState } from "react";

import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo.png";

import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

import NavbarMobile from "../navbarMobile/NavbarMobile";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="w-full h-auto flex justify-center items-center font-normal ">
      <div className="w-[90%] h-auto flex justify-between items-center border-b border-gray-200">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="block w-[100px] pl-5" />
        </div>
        <div className="max-xl:hidden">
          <ul className="flex">
            <li className="pr-5">
              <Link to="/" className="block  hover:underline">
                Home
              </Link>
            </li>
            <li className="pr-5">
              <Link to="products" className="block  hover:underline">
                Produtos
              </Link>
            </li>
            <li>
              <Link to="car" className="block  hover:underline">
                Carrinho
              </Link>
            </li>
          </ul>
        </div>
        <div className="max-xl:hidden">
          <ul className="flex items-center">
            <li>
              <Link to="login" className="flex items-center  hover:underline">
                Login
              </Link>
            </li>
            <li>
              <Link
                to="register"
                className="inline-flex items-center text-white bg-blue-700 py-2 px-3 rounded shadow-md hover:bg-blue-900 active:bg-blue-800 transition-colors mx-5"
              >
                Registre-se
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {menuOpen ? (
        <div>
          <NavbarMobile />
          <button
            onClick={toggleMenu}
            className="xl:hidden block top-0 right-0"
          >
            <AiOutlineClose size={25} />
          </button>
        </div>
      ) : (
        <button onClick={toggleMenu} className="xl:hidden block top-0 right-0">
          <GiHamburgerMenu size={25} />
        </button>
      )}
    </nav>
  );
};

export default Navbar;
