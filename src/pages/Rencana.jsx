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
      method: "POST",
      url: "https://google-api31.p.rapidapi.com/map",
      headers: {
       "content-type": "application/json",
       // "X-RapidAPI-Key": "3c4ecc4659msh98585703592d74fp16a40djsn9157a658dcfa",
        "X-RapidAPI-Host": "google-api31.p.rapidapi.com",
        "content-type": "application/json",
      //  "X-RapidAPI-Key": "3c4ecc4659msh98585703592d74fp16a40djsn9157a658dcfa",
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

const Flights = () => {
  const [fromId, setFromId] = useState("CGK.AIRPORT"); // State untuk menyimpan nilai fromId yang dipilih
  const [departDate, setDepartDate] = useState(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1); // Menambahkan 1 hari ke tanggal saat ini
    return tomorrow.toISOString().slice(0, 10);
  });

  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false); // Ubah menjadi false, sehingga loading tidak langsung dimulai

  const handleFromIdChange = (e) => {
    setFromId(e.target.value);
  };

  const handleDepartDateChange = (e) => {
    setDepartDate(e.target.value);
  };

  const searchFlights = async () => {
    try {
      setLoading(true); // Mulai loading
      const response = await axios.request({
        method: "GET",
        url: "https://booking-com15.p.rapidapi.com/api/v1/flights/searchFlights",
        params: {
          fromId: fromId, // Menggunakan nilai fromId yang dipilih
          toId: "DPS.AIRPORT",
          departDate: departDate,
          pageNo: "1",
          adults: "1",
          children: "0,17",
          currency_code: "AED",
        },
        headers: {
         // "X-RapidAPI-Key":"ef2b5618e6msh9ae6a9656f7cf54p15200ajsnd6385c2fd5b0",
          "X-RapidAPI-Host": "booking-com15.p.rapidapi.com",
        },
      });
      setData(response.data.data.aggregation.airlines || []);
      setLoading(false); // Berhenti loading setelah mendapatkan data
    } catch (error) {
      console.error("Error fetching flights:", error);
      setError(
        "An error occurred while fetching flights. Please try again later."
      );
      setLoading(false); // Berhenti loading jika terjadi error
    }
  };

  return (
    <div className="flex flex-col py-24 px-20">
      <h2 className="text-4xl font-bold mb-8 text-center text-black">
        Flights
      </h2>
      <div className="mb-4">
        <label htmlFor="fromId" className="mr-2 block text-sm font-medium text-gray-700">
          From:
        </label>
        <select
          id="fromId"
          className="mb-8 block px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm"
          value={fromId}
          onChange={handleFromIdChange}
        >
          <option value="CGK.AIRPORT">
            Soekarno-Hatta International Airport
          </option>
          <option value="HLP.AIRPORT">
            Halim Perdanakusuma International Airport
          </option>
          <option value="LBJ.AIRPORT">Komodo International Airport</option>
          <option value="SUB.AIRPORT">Juanda International Airport</option>
          <option value="KNO.AIRPORT">Kualanamu International Airport</option>
          <option value="LOP.AIRPORT">Lombok International Airport</option>
          <option value="YIA.AIRPORT">Yogyakarta International Airport</option>
          <option value="UPG.AIRPORT">
            Sultan Hasanuddin International Airport
          </option>
          <option value="SRG.AIRPORT">Tambolaka Airport</option>
        </select>
      </div>
      <div className="mb-8">
        <label htmlFor="departDate" className="mr-2 block text-sm font-medium text-gray-700">
          Departure Date:
        </label>
        <input
          type="date"
          id="departDate"
          value={departDate}
          onChange={handleDepartDateChange}
          className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm"
        />
      </div>
      <div>
        <button onClick={searchFlights} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
          Search
        </button> 
      </div>
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {data.map((airline) => (
          <div
            key={airline.iataCode}
            className="flex flex-col justify-center items-center overflow-hidden rounded-2xl mx-auto text-center"
            style={{ maxWidth: "300px", height: "auto" }} // Sesuaikan ukuran kartu di sini
          >
            <div className="bg-white rounded-t-2xl overflow-hidden">
              <img
                src={airline.logoUrl}
                alt={airline.name}
                className="w-full object-cover h-48" // Sesuaikan tinggi gambar di sini
              />
            </div>
            <div className="p-4">
              <h3 className="mt-2 text-xl font-bold text-black">
                {airline.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
      {error && <div>{error}</div>}
    </div>
  );
};

const Taxi = () => {
  const [pickUpPlaceId, setPickUpPlaceId] = useState("ChIJM2khUBZE0i0RH8x73W3acd8");
  const [dropOffPlaceId, setDropOffPlaceId] = useState("");
  const [pickUpDate, setPickUpDate] = useState("");
  const [pickUpTime, setPickUpTime] = useState("");
  const [taxiData, setTaxiData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const searchTaxi = async () => {
    try {
      setLoading(true);
      const response = await axios.request({
        method: 'GET',
        url: 'https://booking-com15.p.rapidapi.com/api/v1/taxi/searchTaxi',
        params: {
          pick_up_place_id: pickUpPlaceId,
          drop_off_place_id: dropOffPlaceId,
          pick_up_date: pickUpDate,
          pick_up_time: pickUpTime,
          currency_code: 'EUR'
        },
        headers: {
          //'X-RapidAPI-Key': 'ef2b5618e6msh9ae6a9656f7cf54p15200ajsnd6385c2fd5b0',
          'X-RapidAPI-Host': 'booking-com15.p.rapidapi.com'
        }
      });
  
      if (response.data && response.data.data && response.data.data.results) {
        setTaxiData(response.data.data.results);
        setError(null);
      } else {
        setError("No taxi data available");
      }
      setLoading(false);
    } catch (error) {
      if (error.response) {
        setError(error.response.data.data.message);
      } else {
        setError("An error occurred while fetching taxi data. Please try again later.");
      }
      setTaxiData([]);
      setLoading(false);
    }
  };
  

  const handlePickUpPlaceIdChange = (e) => {
    setPickUpPlaceId(e.target.value);
  };

  const handleDropOffPlaceIdChange = (e) => {
    setDropOffPlaceId(e.target.value);
  };

  const handlePickUpDateChange = (e) => {
    setPickUpDate(e.target.value);
  };

  const handlePickUpTimeChange = (e) => {
    setPickUpTime(e.target.value);
  };

  const handleSearchClick = () => {
    searchTaxi();
  };


  return (
    <div className="flex flex-col py-24 px-20">
      <h2 className="text-4xl font-bold mb-8 text-center text-black">
        Taxi
      </h2>
      <div className="mb-4">
        {/* Pick up place */}
        <div>
          <label htmlFor="pickUpPlaceId" className="block text-sm font-medium text-gray-700">Pick Up Place:</label>
          <select
            id="pickUpPlaceId"
            value={pickUpPlaceId}
            onChange={handlePickUpPlaceIdChange}
            className="mb-8 block px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm"
          >
            {/* Pilihan tempat penjemputan */}
            <option value="ChIJ6xifn-ch0i0RtMkTgYxo5mw">Padma Resort Ubud</option>
            <option value="ChIJZ5sY9kM90i0RVsPvSxZD7LY">Monkey Forest Ubud</option>
            <option value="ChIJ7xaZgWM90i0RLUx0ltCQZxg">Maya Ubud Resort & Spa</option>
            <option value="ChIJS7J-82o90i0RMj8cKJr2zUs">Ubud Palace</option>
            <option value="ChIJM2khUBZE0i0RH8x73W3acd8">Ngurah Rai International Airport</option>
            <option value="ChIJzcxjwRpH0i0RkCvrbJ5wmL8">The Seminyak Beach Resort & Spa</option>
            <option value="ChIJKxEUpjxH0i0Rfsxhl00d0Xw">Seminyak Villa</option>
            <option value="ChIJDZSYfQ5H0i0Riwqx0-tnf6w">Alila Seminyak</option>
            <option value="ChIJT3_dVB5H0i0Ri71kc4BUQ8A">Courtyard by Marriott Bali Seminyak Resort</option>
          </select>

        </div>

        
        <div>
          <label htmlFor="dropOffPlaceId" className="block text-sm font-medium text-gray-700">Drop Off Place:</label>
          <select
            id="dropOffPlaceId"
            value={dropOffPlaceId}
            onChange={handleDropOffPlaceIdChange}
            className="mb-8 block px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm"
          >
            {/* Pilihan tempat tujuan */}
            <option value="ChIJ6xifn-ch0i0RtMkTgYxo5mw">Padma Resort Ubud</option>
            <option value="ChIJZ5sY9kM90i0RVsPvSxZD7LY">Monkey Forest Ubud</option>
            <option value="ChIJ7xaZgWM90i0RLUx0ltCQZxg">Maya Ubud Resort & Spa</option>
            <option value="ChIJS7J-82o90i0RMj8cKJr2zUs">Ubud Palace</option>
            <option value="ChIJM2khUBZE0i0RH8x73W3acd8">Airport DPS</option>
            <option value="ChIJzcxjwRpH0i0RkCvrbJ5wmL8">The Seminyak Beach Resort & Spa</option>
            <option value="ChIJKxEUpjxH0i0Rfsxhl00d0Xw">Seminyak Villa</option>
            <option value="ChIJDZSYfQ5H0i0Riwqx0-tnf6w">Alila Seminyak</option>
            <option value="ChIJT3_dVB5H0i0Ri71kc4BUQ8A">Courtyard by Marriott Bali Seminyak Resort</option>
          </select>
        </div>
        
        <div className="relative">
          <label htmlFor="pickUpDate" className="block text-sm font-medium text-gray-700">Pick Up Date:</label>
          <input
            type="date"
            id="pickUpDate"
            value={pickUpDate}
            onChange={handlePickUpDateChange}
            className="mb-8 block px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm"
          />
        </div>

        <div className="relative">
          <label htmlFor="pickUpTime" className="block text-sm font-medium text-gray-700">Pick Up Time:</label>
          <input
            type="time"
            id="pickUpTime"
            value={pickUpTime}
            onChange={handlePickUpTimeChange}
            className="mb-8 block px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm"
          />
        </div>

        <button
          onClick={handleSearchClick}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Search
        </button>

      </div>
      {loading && <div>Loading...</div>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {taxiData.length > 0 ? (
          taxiData.map((result) => (
            <div
              key={result.resultId}
              className="flex flex-col justify-center items-center overflow-hidden rounded-2xl mx-auto text-center"
              style={{ maxWidth: "300px", height: "auto" }} // Sesuaikan ukuran kartu di sini
            >
              <div className="bg-white rounded-t-2xl overflow-hidden">
                <img
                  src={result.imageUrl}
                  alt={result.supplierName}
                  className="w-full object-cover h-48" // Sesuaikan tinggi gambar di sini
                />
              </div>
              <div className="p-4">
                <h3 className="mt-2 text-xl font-bold text-black">
                  {result.supplierName}
                </h3>
                <p>Passenger Capacity: {result.passengerCapacity}</p>
              </div>
            </div>
          ))
        ) : (
          <div>No taxi data available</div>
        )}
      </div>
      {error && <div>{error}</div>}
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
      method: "POST",
      url: "https://google-api31.p.rapidapi.com/map",
      headers: {
        "content-type": "application/json",
      //  "X-RapidAPI-Key": "3c4ecc4659msh98585703592d74fp16a40djsn9157a658dcfa",
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
            Rekomendasi perjalanan di Bali
            <br /> untuk mu!
          </p>
        </div>
      </section>
      <div>
        <h1 className="title">Rencana Perjalanan ke Bali</h1>
        <div className="content">
          <div className="flex flex-wrap gap-6 justify-center">
            <RencanaCard
            imageUrl="background4.jpg"
            day="01"
            title="Tiba di Bali"
            desc="Check in Hotel"
             />
            <RencanaCard />
            <RencanaCard />
            <RencanaCard />
            <RencanaCard />
            <RencanaCard />
            <RencanaCard />
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
        <Flights />
        <Taxi />
        <Footer />
      </div>
    </>
  );
};

export default Rencana;
