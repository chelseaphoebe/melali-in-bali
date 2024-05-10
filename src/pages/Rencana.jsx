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

const Flights = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const options = {
    method: 'GET',
    url: 'https://booking-com15.p.rapidapi.com/api/v1/flights/searchFlights',
    params: {
      fromId: 'CGK.AIRPORT',
      toId: 'DPS.AIRPORT',
      departDate: '2024-05-11',
      pageNo: '1',
      adults: '1',
      children: '0,17',
      currency_code: 'AED'
    },
    headers: {
      'X-RapidAPI-Key': 'ef2b5618e6msh9ae6a9656f7cf54p15200ajsnd6385c2fd5b0',
      'X-RapidAPI-Host': 'booking-com15.p.rapidapi.com'
    }
  };

  const searchFlights = async () => {
    try {
      setLoading(true);
      const response = await axios.request(options);
      setData(response.data.data.aggregation.airlines || []);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching flights:", error);
      setError("An error occurred while fetching flights. Please try again later.");
      setLoading(false);
    }
  };

  useEffect(() => {
    searchFlights();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !data || data.length === 0) {
    return <div>No flights found.</div>;
  }

  return (
    <div className="flex flex-col">
      <h2 className="text-4xl font-bold mb-8 text-center text-black">Flights</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {data.map((airline) => (
          <div
          key={airline.iataCode}
  className="flex flex-col justify-end shadow-lg min-h-[350px] rounded-lg bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: `url(${airline.logoUrl})`,
  }}
>
            <div className="bg-white rounded-b-lg py-3 px-5 flex justify-between min-h-24">
              <div className="flex flex-col">
                <p className="text-xs font-semibold">{airline.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
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
        'X-RapidAPI-Key': 'b3afcf9d58msha73daee51b1a2d3p19e46bjsn06e3eae5268a',
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
    frameBorder="0"
    src="https://maps.google.com/maps?q=Ubud+Bali&t=&z=13&ie=UTF8&iwloc=&output=embed"
    title="Ubud Bali Map"
  />
</div>
        <WeatherBox /> {/* Using the WeatherBox component */}
      </div>
      </div>
      <Flights />
      <Footer />
    </div>
  );
};

export default Rencana;