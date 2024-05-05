import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export default function Navbar() {

	const [topPage, setTopPage] = useState('') 

	useEffect (() => {
		window.addEventListener('scroll', ()=> {
			if(window.scrollY === 0){
				setTopPage("bg-opacity-0 text-white");
			} else {
				setTopPage("bg-white bg-opacity-100 text-black");
			}
		})}, []
	);

	return (
		<div id="navBar" className={`${topPage} text-white pl-14 pr-28  flex justify-between items-center bg-opacity-75 fixed w-full py-3`}>
			<a href="/"> 
        <img src="./images/logo.png" alt="" className="size-12"/>
      </a>
			<div className="flex gap-14">
				<a href="/hotels">Book Hotels</a>
				<button>Inspirasi Seru</button>
				<button>Rencanakan Perjalanan</button>
				<a href="/game">Game</a>
				<button>Go Explore</button>
				<button>Panduan Dasar</button>
			</div>
		</div>
	);
}