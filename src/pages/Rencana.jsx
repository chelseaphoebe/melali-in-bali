import React, { useState, useEffect } from 'react';
import Footer from "../components/Footer";
import './Rencana.css';

function Navbar() {
    return (
      <h1 style={{ fontSize: '36px', background: 'transparent', marginTop: '0px', fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>
      </h1>
    )
  }
const WeatherBox = () => {
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchWeather = async () => {
        try {
          const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Bali,ID&appid=bd5e378503939ddaee76f12ad7a97608&units=metric`);
          const data = await response.json();
          setWeather(data);
        } catch (err) {
          setError(err);
        }
      };
  
      fetchWeather();
    }, []);
  
    if (error) {
      return <div>Error: {error.message}</div>;
    }
  
    if (!weather) {
      return <div>Loading...</div>;
    }
  
    return (
      <div className="weather-box">
        <h2>Cuaca di Bali</h2>
       <h3> <p>Suhu: {weather.main.temp}°C</p>
        <p>Kondisi: {weather.weather[0].description}</p></h3>
        <img src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`} alt="Weather Icon" />
      </div>
    );
  };

const Rencana = () => {
  const [itinerary, setItinerary] = useState([]);
  const [tips, setTips] = useState([]);

  useEffect(() => {
    setItinerary([
      "Hari 1: Tiba di Bali, check-in di hotel di Seminyak",
      "Hari 2: Mengunjungi Pura Tanah Lot dan Pantai Kuta",
      "Hari 3: Tur ke Ubud, melihat Tegalalang Rice Terraces",
      "Hari 4: Mengunjungi Pura Besakih dan Air Terjun Gitgit",
      "Hari 5: Berbelanja di Pasar Seni Ubud dan menikmati matahari terbenam di Pantai Seminyak",
      "Hari 6: Tur ke Nusa Penida",
      "Hari 7: Pulang ke rumah"
    ]);

    setTips([
      "Belajar beberapa kata dalam Bahasa Indonesia untuk berinteraksi dengan penduduk lokal",
      "Selalu tawar harga saat berbelanja di pasar tradisional",
      "Jangan lupa membawa sunscreen dan topi untuk melindungi diri dari sinar matahari",
      "Coba makanan lokal seperti nasi campur, sate, dan bakso",
      "Jangan lupa membawa uang tunai dalam Rupiah untuk membayar di tempat-tempat tertentu",
      "Bersikap sopan saat mengunjungi tempat-tempat suci dan ikuti aturan berpakaian yang berlaku"
    ]);
  }, []);

  return (
    <div>
    <h1 className="title">Rencana Perjalanan ke Bali</h1>
    <div className="content">
      <div className="itinerary-box">
        <h2>Rekomendasi Rencana Liburan</h2>
        <div className="itinerary">
          {itinerary.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
        </div>
        <div className="tips-box">
          <h2>Tips & Trik Berwisata di Bali</h2>
          <div className="tips">
            <ul>
              {tips.map((tip, index) => (
                <li key={index}>{tip}</li>
              ))}
            </ul>
          </div>
        </div>
        <WeatherBox /> {/* Using the WeatherBox component */}
      </div>

      <Footer />
    </div>
  );
};

export default Rencana;


