import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaSun, FaMoon } from 'react-icons/fa';
import logo from './../assets/img/ajbn8-o7aix.svg';
import "./../assets/style.css";

const NavBar = ({ showSubMenu, toggleSubMenu }) => {
  const [isFirstGradient, setIsFirstGradient] = useState(true);
  const [showMenu, setShowMenu] = useState(false);

  const toggleTheme = () => {
    setIsFirstGradient(!isFirstGradient);
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  useEffect(() => {
    const body = document.body;
    if (isFirstGradient) {
      body.style.background = "linear-gradient(90deg, rgb(77, 25, 146) 0%, rgb(88, 55, 124) 30%, rgb(192, 54, 0) 83%)";
    } else {
      body.style.background = "black";
    }
  }, [isFirstGradient]);

  return (
    <div className="navtop">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between flex-wrap">
        <div className="flex items-center">
          <Link to="/" className="text-white text-xl font-semibold">
            <img src={logo} className="h-8 w-auto" alt="Logo da Empresa" />
          </Link>
          <div className="ml-4 text-white">
            <button onClick={toggleTheme} className="focus:outline-none">
              {isFirstGradient ? <FaMoon size={24} /> : <FaSun size={24} />}
            </button>
          </div>
        </div>
        <div className="block lg:hidden">
          <button onClick={toggleMenu} className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium focus:outline-none">
            Menu
          </button>
        </div>
        <div className={`w-full lg:flex lg:items-center lg:w-auto ${showMenu ? 'block' : 'hidden'}`}>
          <div className="text-sm lg:flex-grow lg:text-center">
            <NavLink to="/" activeclassname="active" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200 lg:mx-4 uppercase text-base nav-link" onClick={closeMenu}>
              Home
            </NavLink>
            <NavLink to="/quem-somos" activeclassname="active" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200 lg:mx-4 uppercase text-base nav-link" onClick={closeMenu}>
              Quem Somos
            </NavLink>
            <div className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200 lg:mx-4 uppercase text-base nav-link">
              <button onClick={toggleSubMenu} className="focus:outline-none">
                COMO PARTICIPAR
              </button>
              {showSubMenu && (
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-48 bg-white rounded-md shadow-lg submenu" style={{ zIndex: 99999999999 }}>
                  <NavLink to="/codigo-de-conduta" className="block px-4 py-2 text-gray-800 hover:bg-gray-200" onClick={closeMenu}>Código de Conduta</NavLink>
                  <NavLink to="/quero-associar" className="block px-4 py-2 text-gray-800 hover:bg-gray-200" onClick={closeMenu}>Quero ser Associar</NavLink>
                </div>
              )}
            </div>
          </div>
          <br></br>
          {/* <div className="ml-4 text-white">
            <button onClick={toggleTheme} className="focus:outline-none">
              {isFirstGradient ? <FaMoon size={24} /> : <FaSun size={24} />}
            </button>
          </div> */}
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
