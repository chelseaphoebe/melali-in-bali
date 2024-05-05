import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export default function Navbar() {
  const [topPage, setTopPage] = useState('') 

	useEffect (() => {
		window.addEventListener('scroll', ()=> {
			if(window.scrollY === 0){
				setTopPage("bg-opacity-75 bg-black text-white");
			} else {
				setTopPage("bg-white bg-opacity-100 text-black shadow-lg");
			}
		})}, []
	);

	return (
		<div id="navBar" className={`${topPage} pl-14 pr-28 flex justify-between items-center fixed w-full py-3`}>
			<a href="/"> 
        <img src="./images/logo.png" alt="" className="size-12" />
      </a>
      <div className="nav-links w-2/4 flex justify-between">
        <a href="/hotels" className="nav-link">
          Book Hotels
        </a>
        <a href="/rencana" className="nav-link">
          Rencanakan Perjalanan
        </a>
        <a href="/inspirasi" className="nav-link">
          Inspirasi Seru
        </a>
        <a href="/game" className="nav-link">
          Game
        </a>
        <a href="/aboutUs" className="nav-link">
          Tentang Kami
        </a>
      </div>
    </div>
  );
}
