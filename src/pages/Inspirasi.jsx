import React from "react";
import axios from "axios";
import Footer from "../components/Footer";
import "./Inspirasi.css";
import { useEffect, useState } from "react";

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
    <section
      id="section4"
      className="max-w-6xl mx-auto my-16 flex flex-col min-h-screen"
    >
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

const Attractions = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const options = {
    method: "GET",
    url: "https://booking-com15.p.rapidapi.com/api/v1/attraction/searchAttractions",
    params: {
      id: "eyJ1ZmkiOi0yNzAxNzU3fQ==",
      page: "1",
      currency_code: "INR",
      languagecode: "en-us",
    },
    headers: {
      //"X-RapidAPI-Key": "ef2b5618e6msh9ae6a9656f7cf54p15200ajsnd6385c2fd5b0",
      "X-RapidAPI-Host": "booking-com15.p.rapidapi.com",
    },
  };

  const searchAttractions = async () => {
    try {
      setLoading(true);
      const response = await axios.request(options);
      setProducts(response.data.data.products);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching attractions:", error);
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        if (error.response.status === 429) {
          setError("Too many requests. Please try again later.");
        } else if (error.response.status === 403) {
          setError(
            "Access forbidden. Please check your API key and permissions."
          );
        } else {
          setError(`An error occurred: ${error.response.status}`);
          setError(`An error occurred: ${error.response.status}`);
        }
      } else if (error.request) {
        // The request was made but no response was received
        setError("No response from the server. Please try again later.");
      } else {
        // Something happened in setting up the request that triggered an Error
        setError("An error occurred. Please try again.");
      }
      setLoading(false);
    }
  };

  useEffect(() => {
    searchAttractions();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="flex flex-col py-24 px-20">
      <h2 className="text-4xl font-bold mb-8 text-center text-black">
        Attractions
      </h2>
      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex flex-col justify-end shadow-lg min-h-[350px] rounded-lg bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${product.primaryPhoto.small})`,
              }}
            >
              <div className="bg-white rounded-b-lg py-3 px-5 flex flex-col justify-between min-h-32">
                <div className="flex flex-col min-w-24 flex-grow">
                  <p className="text-xs font-semibold">{product.name}</p>
                  <p className="text-md font-semibold">
                    IDR{" "}
                    {new Intl.NumberFormat("id-ID").format(
                      product.representativePrice.chargeAmount
                    )}{" "}
                  </p>
                </div>
                <p className="text-xs font-medium text-gray-500">
                  {product.cityName}
                </p>
                <div className="flex gap-2">
                  <p className="text-xs font-normal uppercase text-gray-500">
                    <span className="font-bold">
                      {product.reviewsStats.combinedNumericStats.average}
                    </span>{" "}
                    ({product.reviewsStats.combinedNumericStats.total} reviews)
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>No attractions found.</div>
      )}
    </div>
  );
};
const NearbyAttractions = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [hotelId, setHotelId] = useState('10624997'); // Default hotel_id

  const options = {
    method: 'GET',
    url: 'https://booking-com15.p.rapidapi.com/api/v1/hotels/getPopularAttractionNearBy',
    params: {
      hotel_id: hotelId, // Gunakan nilai hotelId dari state
      languagecode: 'en-us'
    },
    headers: {
      //'X-RapidAPI-Key': 'ef2b5618e6msh9ae6a9656f7cf54p15200ajsnd6385c2fd5b0',
      'X-RapidAPI-Host': 'booking-com15.p.rapidapi.com'
    }
  };

  const searchAttractions = async () => {
    try {
      setLoading(true);
      const response = await axios.request(options);
      const popularLandmarks = response.data.data.popular_landmarks;
      const closestLandmarks = response.data.data.closest_landmarks;
  
      // Menggabungkan popularLandmarks dan closestLandmarks menjadi satu array
      const attractions = [...popularLandmarks, ...closestLandmarks];
  
      setProducts(attractions);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching attractions:", error);
      // Handle error
      setLoading(false);
      setError("Failed to fetch attractions data.");
    }
  };
  
  useEffect(() => {
    searchAttractions();
  }, [hotelId]); // Jalankan useEffect setiap kali nilai hotelId berubah
  
  const handleHotelIdChange = (event) => {
    setHotelId(event.target.value);
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  
  if (error) {
    return <div>Error: {error}</div>;
  }
  
  return (
    <div className="flex flex-col py-24 px-20">
      <h2 className="text-4xl font-bold mb-8 text-center text-black">
        Popular Attraction Near By Hotel
      </h2>
      <div className="mb-4 text-center">
        <label htmlFor="hotelId">Select Hotel:</label>
        <select
          id="hotelId"
          value={hotelId}
          onChange={handleHotelIdChange}
          className="ml-2 px-2 py-1 border border-gray-300 rounded-md"
        >
          <option value="10624997">Tapa Agung View</option>
          <option value="43616">Impiana Private Villas Seminyak</option>
          <option value="2277416">Imani Suites</option>
          <option value="1956935">FOX Hotel Jimbaran Beach</option>
          <option value="8131353">Su's Cottages Legian</option>
          <option value="8655686">Sumberkima Hill Retreat</option>
          <option value="10191768">Secana Beachtown</option>
          <option value="10294419">Cicada Luxury Resort - Ubud</option>
          <option value="6828337">GK Bali Resort</option>
          <option value="7864387">Campuhan Sebatu Resort</option>
          <option value="10945195">Sanna Ubud A Pramana Experience</option>
          <option value="8654546">Louka Beach Bali</option>
          <option value="254715">Taman Sari Bali Resort and Spa</option>
          <option value="8161107">Pangkung Carik Villa by Pramana Villa</option>
          <option value="8666441">North Wing Canggu Resort</option>
          <option value="8575336">Swan Paradise A Pramana Experience</option>
          <option value="1294421">The Royal Purnama - Adults Only</option>
          <option value="10079827">Villa Lembah Damai by Pramana Villas</option>
          <option value="413008">Desa Swan Villas & SPA, Keramas</option>

        </select>
      </div>
      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {products.map((attraction, index) => (
            <div key={index} className="flex flex-col justify-end shadow-lg rounded-lg bg-cover bg-center bg-no-repeat">
              <div className="bg-white rounded-b-lg py-3 px-5 flex justify-between min-h-24">
                <div className="flex flex-col">
                  <p className="text-md font-semibold">{attraction.tag}</p>
                  <p className="text-xs font-semibold">Average Rating: {attraction.average_out_of_10}</p>
                </div>
                <div className="flex flex-col">
                  <p className="text-xs font-semibold">Total Votes: {attraction.total_votes}</p>
                  <p className="text-xs font-semibold">Distance: {attraction.distance} km</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>No attractions found.</div>
      )}
    </div>
  );
};


const Inspirasi = () => {
  
  return (
    <>
      <Banner />
      <ActivitiesSection />
      <Attractions />
      <NearbyAttractions />
      <Footer />
    </>
  );
};

export default Inspirasi;
