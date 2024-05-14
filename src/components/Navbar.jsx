import React, { useEffect, useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [topPage, setTopPage] = useState("text-white");
  const [image, setImage] = useState("./images/logo.png");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY === 0) {
        setTopPage("bg-opacity-75 bg-black text-white");
        setImage("./images/logo.png");
      } else {
        setTopPage("bg-white bg-opacity-100 text-black shadow-lg");
        setImage("./images/logoBlack.png");
      }
    });
  }, []);

  return (
    <div
      id="navBar"
      className={`${topPage} pl-14 pr-28 flex justify-between items-center fixed w-full py-3 z-20`}
    >
      <a href="/">
        <img src={image} alt="" className="size-12 logo" /> {}
      </a>
      <div className="nav-links">
        <a href="/" className="nav-link">
          Home
        </a>
        <a href="/hotels" className="nav-link">
          Hotel
        </a>
        <a href="/rencana" className="nav-link">
          Rekomendasi
        </a>
        <a href="/inspirasi" className="nav-link">
          Jelajah
        </a>
        <a href="/game" className="nav-link">
          Permainan
        </a>
        <a href="/aboutUs" className="nav-link">
          Tentang Kami
        </a>
      </div>
    </div>
  );
}
