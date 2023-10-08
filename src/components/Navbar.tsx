import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

export default function Navbar() {
  const [nav, setNav] = useState<boolean>(false);

  function handleNav() {
    setNav(!nav);
  }
  return (
    <nav className=" flex justify-between px-4 mx-auto max-w-[1240px] h-24 items-center text-white">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>
      <ul className="hidden md:flex">
        <li className="p-4">Home</li>
        <li className="p-4">Company</li>
        <li className="p-4">Resources</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
      </ul>

      <div className="block md:hidden" onClick={handleNav}>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <div
        className={
          nav
            ? " ease-in-out duration-500 fixed h-full left-0 bg-[#000300] top-0 w-[60%] border-r border-r-gray-900"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full m-4 text-3xl font-bold text-[#00df9a]">REACT.</h1>

        <ul className=" p-4 uppercase ">
          <li className="p-4 border-b border-gray-600">Home</li>
          <li className="p-4 border-b border-gray-600">Company</li>
          <li className="p-4 border-b border-gray-600">Resources</li>
          <li className="p-4 border-b border-gray-600">About</li>
          <li className="p-4">Contact</li>
        </ul>
      </div>
    </nav>
  );
}
