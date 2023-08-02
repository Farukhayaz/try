import React, { useState } from "react";
import Data from "./Api";
const Navbar = () => {
  const [nav] = useState(Data.navbar);
  const [navbar1, setnavbar1] = useState(false);
  const handleNav = () => {
    setnavbar1(!navbar1);
  };

  
  return (
    <div className="w-full h-[90px] m-0 p-4 " style={{background:"#0B0B82" }}>
      <div className="max-w-[1240px] mx-auto  px-4 flex justify-between items-center h-full ">
        <div>
          {/* <h1 className="text-[#00d8ff]">{nav.logo}</h1> */}
          <img src={nav.logo}/>
        </div>
        <div className="hidden md:flex">
          <ul className="flex items-center text-white ">
            {/* {nav.list.map((e, i) => {
              return <li key={i} className="mr-[50px]">
                {e}

              </li>;
            })} */}
             <li className="mr-[50px]"><a href="/">Home</a></li>
    <li className="mr-[50px]"><a href="/indoor">Indoor Air Quality Solutions</a></li>
    <li className="mr-[50px]"><a href="/news">News</a></li>
    <li className="mr-[50px]"><a href="/credit">Federal Tax Credits</a></li>
      
          </ul>
        </div>
        <div onClick={handleNav} className="block text-white md:hidden">
          {navbar1 ? nav.icon2 : nav.icon}
        </div>
        <div
          className={
            navbar1
              ? "absolute w-full text-white  top-[90px] left-0 flex justify-center text-center"
              : "absolute left-[-100%]"
          }
          style={{background:"#0B0B82" }}
        >
          <ul>
        
              <li className="text-2xl mb-10"><a href="/">Home</a></li>
    <li className="text-2xl mb-10"><a href="/indoor">Indoor Air Quality Solutions</a></li>
    <li className="text-2xl mb-10"><a href="/news">News</a></li>
    <li className="text-2xl mb-10"><a href="/credit">Federal Tax Credits</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
