import React, { useEffect, useState } from "react";

export default function Navbar() {
  const [topPage, setTopPage] = useState("text-white");
  const [image, setImage] = useState("./images/logo.png");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY === 0) {
        setTopPage("bg-white/0 text-white");
        setImage("./images/logo.png");
      } else {
        setTopPage("bg-white bg-opacity-100 text-black shadow-lg");
        setImage("./images/logoBlack.png");
      }
    });
  }, []);

  return (
    <div className={`fixed z-50 navbar ${topPage} transition-all`}>
      <div className="navbar-start">
        <a href="/">
          <img src={image} alt="" className="size-12" /> {}
        </a>
      </div>
      <div className="navbar-end w-full">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 text-black rounded-box w-52 gap-2  "
          >
            <li>
              <a href="/" className="nav-link">
                Home
              </a>
            </li>
            <li>
              <a href="/hotels" className="nav-link">
                Hotel
              </a>
            </li>
            <li>
              <a href="/rencana" className="nav-link">
                Rekomendasi
              </a>
            </li>
            <li>
              <a href="/inspirasi" className="nav-link">
                Jelajah
              </a>
            </li>
            <li>
              <a href="/game" className="nav-link">
                Permainan
              </a>
            </li>
            <li>
              <a href="/aboutUs" className="nav-link">
                Tentang Kami
              </a>
            </li>
          </ul>
        </div>
        <ul className="menu menu-horizontal hidden px-1 lg:flex">
          <li>
            <a href="/" className="nav-link">
              Home
            </a>
          </li>
          <li>
            <a href="/hotels" className="nav-link">
              Hotel
            </a>
          </li>
          <li>
            <a href="/rencana" className="nav-link">
              Rekomendasi
            </a>
          </li>
          <li>
            <a href="/inspirasi" className="nav-link">
              Jelajah
            </a>
          </li>
          <li>
            <a href="/game" className="nav-link">
              Permainan
            </a>
          </li>
          <li>
            <a href="/aboutUs" className="nav-link">
              Tentang Kami
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
