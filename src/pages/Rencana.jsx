import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import "./Rencana.css";
import { WeatherBox } from "../components/Footer";
import axios from "axios";
import RencanaCard from "../components/RencanaCard";



const Destination = () => {
  const [destinationData, setDestinationData] = useState({});

  useEffect(() => {
    const options = {
      method: "POST",
      url: "https://google-api31.p.rapidapi.com/map",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": "3c4ecc4659msh98585703592d74fp16a40djsn9157a658dcfa",
        "X-RapidAPI-Host": "google-api31.p.rapidapi.com",
      },
      data: {
        text: "Ubud",
        place: "Bali",
        street: "",
        city: "",
        country: "",
        state: "",
        postalcode: "",
        latitude: "",
        longitude: "",
        radius: "",
      },
    };

    axios
      .request(options)
      .then((response) => {
        setDestinationData(response.data);
      })
      .catch((error) => {
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
      method: "POST",
      url: "https://google-api31.p.rapidapi.com/map",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": "3c4ecc4659msh98585703592d74fp16a40djsn9157a658dcfa",
        "X-RapidAPI-Host": "google-api31.p.rapidapi.com",
      },
      data: {
        text: "Ubud",
        place: "Bali",
        street: "",
        city: "",
        country: "",
        state: "",
        postalcode: "",
        latitude: "",
        longitude: "",
        radius: "",
      },
    };

    axios
      .request(options)
      .then((response) => {
        setMapData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
     <>
     <section>
        <div className="bg-[url('/public/images/nusaPenida.jpg')] bg-center bg-cover bg-no-repeat min-h-[750px] px-52 flex items-center justify-center">
          <p
            className="text-white text-5xl font-semibold text-center tracking-wide banner-text"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
          >
            Rekomendasi perjalanan Bali
            <br /> untuk mu!
          </p>
        </div>
      </section>
    <div>
      <h1 className="title">Rencana Perjalanan ke Bali</h1>
      <div className="flex justify-center">
        <RencanaCard />
      </div>
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
              frameborder="5"
              src={`https://maps.google.com/maps?q=Ubud+Bali&t=&z=13&ie=UTF8&iwloc=&output=embed`}
            />
          </div>
          <WeatherBox /> {/* Using the WeatherBox component */}
        </div>
      </div>

      <Footer />
    </div>
    </>
  );
};

export default Rencana;
