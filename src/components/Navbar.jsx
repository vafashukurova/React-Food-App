import React, { useState } from "react";
import {
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineSearch,
  AiFillTag,
} from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { FaWallet, FaUserFriends } from "react-icons/fa";
import { MdHelp, MdFavorite } from "react-icons/md";

export default function Navbar() {
  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <div className="max-w-[1240px] mx-auto  flex justify-between items-center px-4 py-9">
      <div className="flex items-center">
        <div className="cursor-pointer">
          <AiOutlineMenu size={30} onClick={handleClick} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
          Best <span className="font-bold">Eats</span>
        </h1>
        <div className="hidden lg:flex items-center bg-gray-200 p-1 rounded-full text-[14px] ml-5">
          <p className="bg-black rounded-full text-white p-2 cursor-pointer">
            Delivery
          </p>
          <p className="p-2 cursor-pointer">Pickup</p>
        </div>
      </div>
      <div className="bg-gray-200 rounded-full flex items-center px-3 w-[200px] sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch size={25} />
        <input
          className="bg-transparent p-2 focus:outline-none w-full"
          type="text"
          placeholder="Search foods"
        />
      </div>
      <button className="bg-black text-white hidden md:flex items-center py-2 rounded-full">
        <BsFillCartFill size={20} className="mr-2" /> Cart
      </button>

      {nav ? (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : (
        ""
      )}

      <div
        className={
          nav
            ? "bg-white h-screen w-[300px]  fixed top-0 left-0 z-10 duration-300"
            : "bg-white h-screen w-[300px] fixed top-0 left-[-100%] z-10 duration-300"
        }
      >
        <AiOutlineClose
          size={30}
          className="absolute right-4 top-4 cursor-pointer"
          onClick={handleClick}
        />
        <h2 className="text-2xl p-4">
          Best <span className="font-bold">Eats</span>
        </h2>
        <nav>
          <ul className="flex flex-col p-4 text-gray-800">
            <li className="flex flex-row items-center text-xl py-4 cursor-pointer">
              <TbTruckDelivery size={25} className="mr-4" />
              Orders
            </li>
            <li className="flex flex-row items-center text-xl py-4 cursor-pointer">
              <MdFavorite size={25} className="mr-4" />
              Favorites
            </li>
            <li className="flex flex-row items-center text-xl py-4 cursor-pointer">
              <FaWallet size={25} className="mr-4" />
              Wallet
            </li>
            <li className="flex flex-row items-center text-xl py-4 cursor-pointer">
              <MdHelp size={25} className="mr-4" />
              Help
            </li>
            <li className="flex flex-row items-center text-xl py-4 cursor-pointer">
              <AiFillTag size={25} className="mr-4" />
              Promotions
            </li>
            <li className="flex flex-row items-center text-xl py-4 cursor-pointer">
              <BsFillSaveFill size={25} className="mr-4" />
              Best Ones
            </li>
            <li className="flex flex-row items-center text-xl py-4 cursor-pointer">
              <FaUserFriends size={25} className="mr-4" />
              Invite Friends
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
