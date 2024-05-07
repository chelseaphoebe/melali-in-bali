import React, { useState, useEffect } from 'react';
import Footer from "../components/Footer";
import './Rencana.css';
import { WeatherBox } from '../components/Footer';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

function Navbar() {
    return (
      <h1 style={{ fontSize: '36px', background: 'transparent', marginTop: '0px', fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>
      </h1>
    )
  }
const Rencana = () => {
  const [itinerary, setItinerary] = useState([]);
  const [tips, setTips] = useState([]);

  useEffect(() => {
    setItinerary([
    ]);

    setTips([

    ]);
  }, []);

  return (
    <div id="rencana">
    <h1 className="title">Rencana Perjalanan ke Bali</h1>
    <div className="content">
      <div className="itinerary-box">
        <h2></h2>
        <div className="itinerary">
          {itinerary.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
        </div>
        <div className="tips-box">
          <h2></h2>
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
