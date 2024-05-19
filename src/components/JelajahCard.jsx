function Card({judul, subjudul, desc, link, imageFile = "background3.jpg", className}) {
    return (
      <div className={`md:max-w-[400px] max-h-[300px] md:rounded-xl relative group overflow-hidden transition-all ${className}`}>
          <div className="absolute inset-0 z-0 transition-all">
              <img src={`../images/${imageFile}`} className="h-full w-full object-cover group-hover:brightness-50" alt="#" />
          </div>
          <div className="p-8 z-10 relative -right-full group-hover:right-0 transition-all">
              <h1 className="text-white m-0 mb-6 text-2xl">{judul}</h1>
              <p className="text-white text-lg">{subjudul}</p>
              <p className="mb-6 text-white font-normal text-sm">{desc}</p>
              <a href={link} target="_blank" className="bg-white w-full hover:bg-blue-600 hover:text-white text-gray-700 transition px-4 py-2 rounded-full font-bold uppercase">CLICK HERE</a>
          </div>
      </div>
    );
  }

  export default Card;