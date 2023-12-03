"use client"
import Link from "next/link";
import React, { useState } from "react";
import {
    FiSearch,
    AiOutlineInfoCircle,
    IoIosLogOut,
    BiMenu,
    AiOutlineHome,
    FiUser,
  } from "@/assets/icons";
const Header = () => {
    const isLogin = true;
    const [menuShow, setMenuShow] = useState(false);
    const HanldeMenuShow = () => {
      if(menuShow != true){
        setMenuShow(true)
      }else{
        setMenuShow(false)
      }
    }
  return (
    <header>
      <nav>
        <div className="w-[90%] md:w-[80%] m-auto flex justify-between items-center  md:h-[100px] py-2 md:py-1">
          <div className="logo md:flex items-center md:justify-evenly md:gap-2">
            <Link href="/">
              <h1 className="font-outfits md:text-4xl font-black text-3xl text-[#5c9af0]">
                EXANIME
              </h1>
            </Link>
            <div className="menu hidden md:flex justify-evenly items-center w-[400px]">
              <a
                href="/ongoing"
                className="text-white text-sm font-medium hover:text-[#5c9af0] duration-200">
                Ongoing
              </a>
              <a
                href="/complete"
                className="text-white text-sm font-medium hover:text-[#5c9af0] duration-200">
                Complete
              </a>
              <a
                href="/all-anime"
                className="text-white text-sm font-medium hover:text-[#5c9af0] duration-200">
                All Anime
              </a>
              {/* <a
                href="/anime"
                className="text-white text-sm font-medium hover:text-[#5c9af0] duration-200">
                Anime
              </a> */}
            </div>
          </div>
        </div>
      </nav>
      <div
        id="navbarForMobile"
        className="flex sm:hidden z-50 items-center gap-2  fixed right-6 bottom-10"
      >
        <div
          className={`${
            menuShow ? "flex" : "hidden"
          } gap-4 bg-[#272931] text-xs items-center  py-2 px-4 rounded-md`}
        >
          <a
            href="/"
            className="flex flex-col items-center gap-1 font-medium"
          >
            <AiOutlineHome className="text-white text-xl" />
            <span className="text-white text-[13px] block">Home</span>
          </a>
          <a
            href="/ongoing"
            className="flex flex-col items-center gap-1 font-medium"
          >
            <AiOutlineInfoCircle className="text-white text-xl" />
            <span className="text-white text-[13px] block">Ongoing</span>
          </a>
          <a
            href="/complete"
            className="flex flex-col items-center gap-1 font-medium"
          >
            <AiOutlineInfoCircle className="text-white text-xl" />
            <span className="text-white text-[13px] block">Complete</span>
          </a>
          <a
            href="/all-anime"
            className="flex flex-col items-center gap-1 font-medium"
          >
            <AiOutlineInfoCircle className="text-white text-xl" />
            <span className="text-white text-[13px] block">All Anime</span>
          </a>
          
        </div>
        <div
          className="hamburgerMenu px-2 py-2 rounded-md bg-[#272931]"
          onClick={HanldeMenuShow}
        >
          <BiMenu className="text-4xl text-[#5c9af0]" />
        </div>
      </div>
    </header>
  );
};
export default Header;
