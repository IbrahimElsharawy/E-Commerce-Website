import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { BsFillCartFill } from "react-icons/bs";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import Login from "../buttons/Login";
import Register from "../buttons/Register";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  const handleClose = () => {
    setClick(!click);
  };
  const navlinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      color: isActive ? "rgb(59 130 246)" : "black",
    };
  };
  return (
    <div className="w-screen h-[80px] sticky top-0 bg-white drop-shadow-lg  px-4">
      <div className="px-2 flex justify-between items-center w-full h-full max-w-[1240px] mx-auto">
        <NavLink to="/" className="text-2xl uppercase hidden md:flex">
        shopping
                </NavLink>
        <div className="hidden md:flex">
          <NavLink style={navlinkStyles} className="px-4" to="/">
            Home
          </NavLink>
          <NavLink style={navlinkStyles} className="px-4" to="/products">
            Products
          </NavLink>
          <NavLink style={navlinkStyles} className="px-4" to="/about">
            About
          </NavLink>
          <NavLink style={navlinkStyles} className="px-4" to="/contact">
            Contact
          </NavLink>
        </div>

        <div
          className="md:hidden cursor-pointer text-blue-500 "
          onClick={handleClick}
        >
          {click ? <FaTimes /> : <FaBars />}
        </div>

        <div className="flex justify-center items-center">
          <div className="flex hidden md:flex ">
            <Login />
            <Register />
          </div>

          {/* shopping cart */}
          <NavLink
            to="#"
            className="rounded-full border-2 px-2 py-2 border-solid border-blue-500 relative 	"
          >
            <BsFillCartFill name="icon" className="text-blue-500" />
            <div className="absolute rounded-full px-2 text-white right-[-8px] bg-red-600">
              3
            </div>
          </NavLink>
          {/* shopping cart */}
        </div>
      </div>
      <div
        className={
          click
            ? "absolute left-0 bg-white w-full px-8 flex flex-col "
            : "hidden"
        }
      >
        <NavLink
          style={navlinkStyles}
          onClick={handleClose}
          className="border-b-2 border-zinc-300 w-full py-3 "
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          style={navlinkStyles}
          onClick={handleClose}
          className="py-3 border-b-2 border-zinc-300 w-full "
          to="/products"
        >
          Products
        </NavLink>
        <NavLink
          style={navlinkStyles}
          onClick={handleClose}
          className="border-b-2 border-zinc-300 w-full py-3  "
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          style={navlinkStyles}
          onClick={handleClose}
          className="py-3 w-full mb-3 "
          to="/contact"
        >
          Contact
        </NavLink>

        <div className="flex  justify-center  md:hidden mb-2 ">
          <Login />
          <Register />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
