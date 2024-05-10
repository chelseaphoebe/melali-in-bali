import React from "react";
import axios from "axios";
import Footer from "../components/Footer";
import "./Inspirasi.css";

const Banner = () => {
  return (
    <section
      id="banner"
      className="bg-[url('/public/images/banner-jelajah.jpg')] bg-center bg-cover bg-no-repeat min-h-[740px] px-10 flex items-center justify-center"
    >
      <p className="text-white text-5xl font-semibold text-center tracking-wide">
        Temukan kebahagiaan mu di Bali!
      </p>
    </section>
  );
};

const ActivitiesSection = () => {
  const handleNatureClick = () => {
    window.open(
      "https://www.discoverbali.com/id/15-hiking-dan-trekking-terbaik-di-bali-yang-bersentuhan-dengan-alam/",
      "_blank"
    );
  };

  const handleCultureClick = () => {
    window.open(
      "https://salutbali.com/id/9-tradisi-bali-upacara-festival-dan-seni-lokal/",
      "_blank"
    );
  };

  const handleCulinaryClick = () => {
    window.open(
      "https://salutbali.com/id/kuliner-di-bali-10-makanan-lokal-yang-harus/",
      "_blank"
    );
  };

  return (
    <section id="section4" className="max-w-6xl mx-auto my-16 flex flex-col min-h-screen">
      <h2 className="text-4xl font-bold mb-8 text-center text-black">
        What To Do in Bali?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-auto">
        <div className="experience-card">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleNatureClick}
            data-hover-text="Rekomendasi Tempat Untuk Mendaki Dan Jalan Di Alam"
          >
            Jelajahi Aktivitas Alam
          </button>
        </div>
        <div className="experience-card1">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleCultureClick}
            data-hover-text="Tradisi Beserta Festival Bali Yang Tidak Bisa Dilewatkan"
          >
            Jelajahi Wisata Budaya
          </button>
        </div>
        <div className="experience-card2">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleCulinaryClick}
            data-hover-text="Kuliner Bali Yang Wajib Dicobai Minimal Sekali"
          >
            Jelajahi Kuliner
          </button>
        </div>
      </div>
    </section>
  );
};

const Inspirasi = () => {
  return (
    <>
      <Banner />
      <ActivitiesSection />
      <Footer />
    </>
  );
};

export default Inspirasi;