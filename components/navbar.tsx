import React, { useEffect, useState } from "react";
import Image from "next/image";

import {
  FiTwitter,
  FiInstagram,
  FiFacebook,
  FiMenu,
  FiPhone,
  FiMail,
} from "react-icons/fi";
import { TfiClose, TfiLocationPin } from "react-icons/tfi";
import { SideBar } from "./sidebar";

export const NavBar: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showMenuStatic, setShowMenuStatic] = useState(false);
  useEffect(() => {
    document.addEventListener("scroll", (e) => {
      setShowMenuStatic(window.scrollY > 70);
    });
  }, []);
  return (
    <div
      className={`bg-gradient-to-r from-[#03228f] to-[#0e73e4] w-full h-16 z-30 right-0 ${
        showMenuStatic ? "fixed top-0 left-0" : ""
      }`}
    >
      <div className="lg:container lg:mx-auto lg:block   hidden ">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row items-center">
            <Image
              src="/logo-navbar.jpeg"
              className="h-10 mr-10"
              alt="company logo"
              width={200}
              height={2}
            />
            <div className="pt-5">
            <NavBarButton href="/">Home</NavBarButton>
            <NavBarButton href="/about">About</NavBarButton>
            <NavBarButton href="/services">Services</NavBarButton>
            <NavBarButton href="/contact">Contact</NavBarButton>
            </div>
          </div>

          <div className="flex flex-row justify-end">
            <NavBarButton href={""}>
              <FiFacebook />
            </NavBarButton>
            <NavBarButton href={""}>
              <FiTwitter />
            </NavBarButton>
            <NavBarButton href={""}>
              <FiInstagram />
            </NavBarButton>
          </div>
        </div>
      </div>

      <div className={`flex lg:hidden justify-between p-3 items-center`}>
        <Image
          src="/logo-navbar.jpeg"
          className="h-10 mr-10"
          alt="company logo"
          width={200}
          height={2}
        />

        <button
          className="bg-transparent"
          onClick={() => setShowMenu(!showMenu)}
        >
          <FiMenu className="text-white text-2xl" />
        </button>
      </div>

      <SideBar
        open={showMenu}
        onClose={() => setShowMenu(!showMenu)}
        contentPosition="left"
      >
        <div className="">
        <Image
              src="/logo-navbar.jpeg"
              className="h-10 mr-10"
              alt="company logo"
              width={200}
              height={2}
            />
        </div>
        <button
          className="absolute top-0 m-3 right-0 p-3 bg-indigo-600 text-white rounded-lg "
          onClick={() => setShowMenu(!showMenu)}
        >
          <TfiClose className="font-extrabold text-2xl" />
        </button>

        <div className="flex flex-col items-stretch divide-y font-semibold  ">
          <a className="py-3" href="/">Home</a>
          <a className="py-3" href="/about">About</a>
          <a className="py-3" href="/services">Services</a>
          <a className="py-3" href="/contact">Contact</a>
        </div>

        <div className="flex flex-col mt-20">
          <div className="flex items-start">
            <TfiLocationPin
              className="text-lg text-blue-600 mr-3 mt-1 shrink-0"
              size={30}
              strokeWidth={0.6}
            />
            <div className="flex flex-col">
              <span className="font-bold">Address</span>
              <span>
                2nd Floor, Plot No# 71, Commercial Area, Chaklala Scheme 3,
                Rawalpind
              </span>
            </div>
          </div>

          <div className="flex items-start my-5">
            <FiPhone
              className="text-lg text-blue-600 mr-3 mt-1 shrink-0"
              size={30}
            />
            <div className="flex flex-col">
              <span className="font-bold">Phone</span>
              <span>+92 (51) 844-2705</span>
            </div>
          </div>

          <div className="flex items-start my-5">
            <FiMail
              className="text-lg text-blue-600 mr-3 mt-1 shrink-0"
              size={30}
            />
            <div className="flex flex-col">
              <span className="font-bold">Email</span>
              <span>info@xillixtech.com</span>
            </div>
          </div>
        </div>
      </SideBar>
    </div>
  );
};

const NavBarButton: React.FC<any> = ({ children, href }) => {
  return (
    <a
      href={href}
      className="cursor-pointer font-semibold text-sm bg-transparent text-white hover:text-gray-200 py-5 px-5"
    >
      {children}
    </a>
  );
};
