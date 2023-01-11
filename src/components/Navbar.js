import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavIcon from "./NavIcon";
const Navbar = () => {
  const [click, setClick] = useState(0);
  return (
    <>
      <div
        className="flex justify-end items-end sm:hidden "
        onClick={() => setClick((prev) => !prev)}
      >
        <div className=" flex flex-row justify-between items-center bg-[#4e5258]  border-none p-[10px] w-[100%] text-[#ccc7c7]">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
              <g fill="none" fill-rule="evenodd">
                <circle cx="24" cy="24" r="24" fill="#FFF" />
                <path
                  fill="#0B0D17"
                  d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
                />
              </g>
            </svg>
          </div>

          {click ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
              />
            </svg>
          )}
        </div>
      </div>

      <div>
        <nav className="pt-5 hidden sm:flex  justify-center items-center md:flex md:flex-row md:justify-around md:items-center fixed w-[100%] ml-14 pr-12">
          <div className="h-[64px] w-[64px] ml-[15px] my-[10px] flex justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
              <g fill="none" fill-rule="evenodd">
                <circle cx="24" cy="24" r="24" fill="#FFF" />
                <path
                  fill="#0B0D17"
                  d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
                />
              </g>
            </svg>
          </div>

          <ul className="flex md:flex flex-row ml-[50%] md:items-center bg-[#101010]  pl-12 pr-16">
            <li class="mx-4 my-6 md:mx-0 text-white">
              <Link to="/">
                <span class="pr-2 text-[#979797]">00</span>Home
              </Link>
            </li>
            <li class="mx-4 my-6 md:my-0 text-white">
              <Link to="/destination">
                <span class="pr-2 text-[#979797]">01</span>Destination
              </Link>
            </li>

            <li class="mx-4 my-6 md:my-0 text-white">
              <Link to="/crew">
                <span class="pr-2 text-[#979797]">02</span>Crew
              </Link>
            </li>

            <li class="mx-4 my-6 md:my-0 text-white">
              <Link to="/technology">
                <span class="pr-2 text-[#979797]">03</span>Technology
              </Link>
            </li>
          </ul>
        </nav>
        {click && <NavIcon />}
      </div>
    </>
  );
};

export default Navbar;
