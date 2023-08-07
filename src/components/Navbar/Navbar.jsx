import React, { useEffect, useState } from "react";
import { images } from "../../constants";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { Link } from "react-scroll";

import "./Navbar.css";

const NavLinks = () => {
  return (
    <>
      <li className="p__opensans">
        <Link to="home" smooth={true} duration={0}>
          Home
        </Link>
      </li>
      <li className="p__opensans">
        <Link to="about" smooth={true} duration={0}>
          About
        </Link>
      </li>
      <li className="p__opensans">
        <Link to="menu" smooth={true} duration={0}>
          Menu
        </Link>
      </li>
      <li className="p__opensans">
        <Link to="awards" smooth={true} duration={0}>
          Awards
        </Link>
      </li>
      <li className="p__opensans">
        <Link to="contact" smooth={true} duration={0}>
          Contact
        </Link>
      </li>
    </>
  );
};

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  useEffect(() => {
    window.onscroll = () => setToggleMenu(false);
  });
  return (
    <div className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.gericht} />
      </div>
      <ul className="app__navbar-links">
        <NavLinks></NavLinks>
      </ul>
      <div className="app__navbar-login">
        <a className="p__opensans">Log in / Registration</a>
        <div />
        <a className="p__opensans">Book Table</a>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => {
            setToggleMenu(true);
          }}
        />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center">
            <MdOutlineRestaurantMenu
              onClick={() => {
                setToggleMenu(false);
              }}
            />
            <ul className="app__navbar-smallscreen-links">
              <NavLinks></NavLinks>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
