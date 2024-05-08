function Card({judul, subjudul, desc, link, imageFile = "background3.jpg"}) {
    return (
      <div className="max-w-[400px] max-h-[300px] rounded-xl relative group overflow-hidden transition-all">
          <div className="absolute inset-0 z-0 transition-all">
              <img src={`../images/${imageFile}`} className="h-full w-full object-cover group-hover:brightness-50" alt="#" />
          </div>
          <div className="p-8 z-10 relative -right-96 group-hover:right-0 transition-all">
              <h1 className="m-0 mb-6 text-2xl">{judul}</h1>
              <p className="text-white text-lg">{subjudul}</p>
              <p className="mb-6 text-white font-normal text-base text-sm">{desc}</p>
              <a href={link} target="_blank" className="bg-white w-full hover:bg-blue-600 hover:text-white text-gray-700 transition px-4 py-2 rounded-full font-bold uppercase">CLICK HERE</a>
          </div>
      </div>
    );
  }

  export default Card;