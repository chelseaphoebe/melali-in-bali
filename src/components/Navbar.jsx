import React, { useEffect, useState } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      
      if (scrollPosition > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false); 
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <a href="/" className="logo-link">
        <img src="./images/logo.png" alt="" className="size-12" />
      </a>
      <div className="nav-links">
        <a href="/hotels" className="nav-link">Book Hotels</a>
        <a href="#" className="nav-link">Rencanakan Perjalanan</a>
		<a href="/inspirasi" className="nav-link">Inspirasi Seru</a>
        <a href="/game" className="nav-link">Game</a>
        <a href="/aboutUs" className="nav-link">Tentang Kami</a>
      </div>
    </div>
  );
}
