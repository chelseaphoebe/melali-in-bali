export default function Navbar() {
	return (
		<div className="bg-black text-white pl-14 pr-28  flex justify-between items-center bg-opacity-75 fixed w-full py-3">
			<a href="/"> 
        <img src="./images/logo.png" alt="" className="size-12"/>
      </a>
			<div className="flex gap-14">
				<a href="/hotels">Book Hotels</a>
				<button>Inspirasi Seru</button>
				<button>Rencanakan Perjalanan</button>
				<button>Go Explore</button>
				<button>Panduan Dasar</button>
			</div>
		</div>
	);
}
