import React, { useState, useEffect } from "react";
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

const ExperienceSection = () => {
  const [attractions, setAttractions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAttractions = async () => {
      const options = {
        method: "GET",
        url: "https://booking-com15.p.rapidapi.com/api/v1/attraction/searchAttractions",
        params: {
          id: 'eyJ1ZmkiOi0yMDkyMTc0fQ==', // This ID should be dynamically set based on the location, here it's set as an example
          page: '1',
          currency_code: 'INR',
          languagecode: 'en-us'
        },
        headers: {
          "content-type": "application/json",
          "X-RapidAPI-Key": "460949832bmshd0c1aa23bac549dp15fef7jsn0b3bd45d545b",
          "X-RapidAPI-Host": "booking-com15.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        console.log("API Response:", response.data);
        if (response.data.data) {
          setAttractions(response.data.data);
        } else {
          setError("No attractions found.");
        }
      } catch (error) {
        console.error("API Error:", error.response);
        setError("Failed to fetch attractions.");
      }
      setLoading(false);
    };

    fetchAttractions();
  }, []);

  return (
    <section
      id="section4"
      className="max-w-6xl mx-auto my-16 flex flex-col min-h-screen"
    >
      <h2 className="text-4xl font-bold mb-8 text-center text-black">
        What To Do in Bali?
      </h2>
      <div className="mt-8">
        <h3 className="text-2xl font-bold mb-4">Attractions in Bali</h3>
        {loading ? (
          <p>Loading attractions...</p>
        ) : error ? (
          <p>{error}</p>
        ) : attractions && attractions.length > 0 ? (
          <ul>
            {attractions.map((attraction) => (
              <li key={attraction.id}>
                <a href={attraction.url} target="_blank" rel="noopener noreferrer">
                  {attraction.name}
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p>No attractions available.</p>
        )}
      </div>

      <Footer className="mt-auto" />
    </section>
  );
};

const Inspirasi = () => {
  return (
    <>
      <Banner />
      <ExperienceSection />
    </>
  );
};

export default Inspirasi;