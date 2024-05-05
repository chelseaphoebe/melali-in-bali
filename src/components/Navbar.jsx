export default function Navbar() {
	return (
	  <div className="bg-black text-white pl-14 pr-28 flex justify-between items-center bg-opacity-75 fixed w-full py-3">
		<a href="/" className="logo-link">
		  <img src="./images/logo.png" alt="" className="size-12" />
		</a>
		<div className="flex gap-14">
		  <a href="/hotels" className="nav-link">Book Hotels</a>
		  <a href="/inspirasi">Inspirasi Seru</a>
		  <a href="#" className="nav-link-placeholder">Rencanakan Perjalanan</a>
		  <a href="#" className="nav-link-placeholder">Inspirasi Seru</a>
		  <a href="/game" className="nav-link">Game</a>
		  <a href="/aboutUs" className="nav-link-placeholder">Tentang Kami</a>
		</div>
	  </div>
	);
  }
  
