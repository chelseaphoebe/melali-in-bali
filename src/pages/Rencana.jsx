import React, { useState, useEffect } from 'react';
import Footer from "../components/Footer";
import './Rencana.css';
import { WeatherBox } from '../components/Footer';
import axios from 'axios';

const Destination = () => {
  const [destinationData, setDestinationData] = useState({});

  useEffect(() => {
    const options = {
      method: 'POST',
      url: 'https://google-api31.p.rapidapi.com/map',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': '3c4ecc4659msh98585703592d74fp16a40djsn9157a658dcfa',
        'X-RapidAPI-Host': 'google-api31.p.rapidapi.com'
      },
      data: {
        text: 'Ubud',
        place: 'Bali',
        street: '',
        city: '',
        country: '',
        state: '',
        postalcode: '',
        latitude: '',
        longitude: '',
        radius: ''
      }
    };

    axios.request(options)
      .then(response => {
        setDestinationData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>Recommended Destination in Bali</h1>
      {destinationData.geometry && (
        <>
          <h2>{destinationData.name}</h2>
          <p>Address: {destinationData.formatted_address}</p>
          <p>Latitude: {destinationData.geometry.location.lat}</p>
          <p>Longitude: {destinationData.geometry.location.lng}</p>
        </>
      )}
    </div>
  );
};

const Rencana = () => {
  const [itinerary, setItinerary] = useState([]);
  const [tips, setTips] = useState([]);
  const [mapData, setMapData] = useState({});

  useEffect(() => {
    setItinerary([
      // isi itinerary disini
    ]);

    setTips([
      // isi tips disini
    ]);

    const options = {
      method: 'POST',
      url: 'https://google-api31.p.rapidapi.com/map',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': '3c4ecc4659msh98585703592d74fp16a40djsn9157a658dcfa',
        'X-RapidAPI-Host': 'google-api31.p.rapidapi.com'
      },
      data: {
        text: 'Ubud',
        place: 'Bali',
        street: '',
        city: '',
        country: '',
        state: '',
        postalcode: '',
        latitude: '',
        longitude: '',
        radius: ''
      }
    };

    axios.request(options)
      .then(response => {
        setMapData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div id="rencana">
      <h1 className="title">Rencana Perjalanan ke Bali</h1>
      <div className="content">
      <div className="tips-box-and-itinerary-box">
        <div className="itinerary-box">
          <div className="itinerary">
            {itinerary.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
        </div>
        <div className="tips-box">
            <div className="tips">
              <ul>
                {tips.map((tip, index) => (
                  <li key={index}>{tip}</li>
                ))}
              </ul>
            </div>
            </div>
            </div>
        <div className="weather-box-and-map-box">
          <div className="map-box">
            <h2>One of the Favorite Destinastion in Bali</h2>
            {mapData.geometry && (
              <>
                <p>Latitude: {mapData.geometry.location.lat}</p>
                <p>Longitude: {mapData.geometry.location.lng}</p>
              </>
            )}
            {/* tambahkan komponen map disini */}
            <iframe
              width="100%"
              height="300"
              frameborder="0"
              src={`https://maps.google.com/maps?q=Ubud+Bali&t=&z=13&ie=UTF8&iwloc=&output=embed`}
            />
          </div>
        <WeatherBox /> {/* Using the WeatherBox component */}
      </div>
      </div>

      <Footer />
    </div>
  );
};

export default Rencana;