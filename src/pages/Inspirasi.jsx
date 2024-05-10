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

const Attractions = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const options = {
    method: 'GET',
    url: 'https://booking-com15.p.rapidapi.com/api/v1/attraction/searchAttractions',
    params: {
      id: 'eyJ1ZmkiOi0yNzAxNzU3fQ==',
      page: '1',
      currency_code: 'INR',
      languagecode: 'en-us'
    },
    headers: {
      'X-RapidAPI-Key': 'ef2b5618e6msh9ae6a9656f7cf54p15200ajsnd6385c2fd5b0',
      'X-RapidAPI-Host': 'booking-com15.p.rapidapi.com'
    }
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
          setError("Access forbidden. Please check your API key and permissions.");
        } else {
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
    <div className="flex flex-col">
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
            <div className="bg-white rounded-b-lg py-3 px-5 flex justify-between min-h-[6rem]">
              <div className="flex flex-col">
                <p className="text-xs font-semibold">{product.name}</p>
                <p className="text-md font-semibold">
                  IDR{' '}
                  {new Intl.NumberFormat('id-ID').format(product.representativePrice.chargeAmount)}{' '}
                </p>

              </div>
              <p className="text-xs font-medium text-gray-500">{product.cityName}</p>
              <div className="flex gap-2">
                <p>
                  {product.reviewsStats.combinedNumericStats.average} ({product.reviewsStats.combinedNumericStats.total} reviews)
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

const Inspirasi = () => {
  
  return (
    <>
      <Banner />
      <ActivitiesSection />
      <Attractions />
      <Footer />
    </>
  );
};

export default Inspirasi;