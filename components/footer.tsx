import Image from "next/image";
import React from "react";
import {
  FiFacebook,
  FiInstagram,
  FiMail,
  FiMapPin,
  FiPhone,
  FiTwitter,
} from "react-icons/fi";

export const Footer: React.FC = () => {
  return (
    <div className="w-full footer-xi bg-cover">
      <div className="lg:container lg:p-0 lg:py-10 p-10">
        <div className="max-[640px]:items-center md:flex lg:flex-row pl-3 flex-col">
          <div className="flex flex-col flex-1">
            <Image
              width={200}
              height={2}
              src="/logo-navbar.jpeg"
              alt="Company Logo"
              className="h-10"
            />
            <div className="my-6 shrink">
              <p className="text-lg font-semibold open-sans">
                {
                  "We are a diverse IT company that has been working for almost 10 years and delivering successful IT products all around the globe with impeccable performance and satisfied clients."
                }
              </p>
            </div>

            <div className="flex">
              <a className="bg-white rounded-full p-3 cursor-pointer hover:bg-blue-400 hover:text-white mr-2">
                <FiFacebook  className="text-lg"/>
              </a>
              <a className="bg-white rounded-full p-3 cursor-pointer hover:bg-blue-400 hover:text-white mr-2">
                <FiTwitter  className="text-lg"/>
              </a>
              <a className="bg-white rounded-full p-3 cursor-pointer hover:bg-blue-400 hover:text-white mr-2">
                <FiInstagram className="text-lg" />
              </a>
            </div>
          </div>
          <div className="max-[640px]:items-center md:flex flex-col grow lg:ml-10 lg:my-0 my-10 flex-1 ">
            <p className="text-xl text-black font-semibold mb-5">
              Useful Links
            </p>
            <a href= "/" className="text-gray-600 text-lg font-semibold cursor-pointer mb-2 hover:text-blue-400">
              Home
            </a>
            <a href= "/about" className="text-gray-600 text-lg font-semibold cursor-pointer mb-2 hover:text-blue-400">
              About
            </a>
            <a href= "/services" className="text-gray-600 text-lg font-semibold cursor-pointer mb-2 hover:text-blue-400">
              Services
            </a>
          </div>
          <div className="max-[640px]:items-center md:flex flex-col grow flex-1 ">
            <p className="text-xl text-black font-semibold mb-5">
              Contact Info
            </p>

            <div className="flex items-center ">
              <FiMapPin className="mr-2 text-2xl text-indigo-700" />
              <span className="text-gray-700 text-md font-semibold open-sans">
                2nd Floor, Plot No# 71, Commercial Area, Chaklala Scheme 3,
                Rawalpindi
              </span>
            </div>

            <div className="flex items-center my-3 ">
              <FiPhone className="mr-2 text-2xl text-indigo-700" />
              <span className="text-gray-700 text-md font-semibold open-sans">+92 (51) 844-2705</span>
            </div>
            <div className="flex items-center ">
              <FiMail className="mr-2 text-2xl text-indigo-700" />
              <span className="text-gray-700 text-md font-semibold open-sans">info@xillixtech.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
