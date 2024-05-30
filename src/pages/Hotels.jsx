import Footer from "../components/Footer";
import axios from "axios";
import { useEffect, useState } from "react";
import dataHotels from "./dataHotels.json";

export default function Hotels() {
  // const [hotels, setHotels] = useState([]); // uncomment jika mau menyalakan API
  const [hotels, setHotels] = useState(dataHotels); // comment jika mau menyalakan API
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [score, setScore] = useState(0);

  const applyDiscount = (price) => {
    if (score === 10) {
      return price * 0.8;
    }
    return price;
  };

  useEffect(() => {
    // searchHotels(); // uncomment jika mau menyalakan API
  }, []);

  const options = {
    method: "GET",
    url: "https://booking-com15.p.rapidapi.com/api/v1/hotels/searchHotels",
    params: {
      dest_id: "835",
      search_type: "region",
      arrival_date: "2024-05-19",
      departure_date: "2024-05-20",
      currency_code: "idr",
    },
    headers: {
      // "X-RapidAPI-Key": "ef2b5618e6msh9ae6a9656f7cf54p15200ajsnd6385c2fd5b0", // uncomment jika mau menyalakan API
      "X-RapidAPI-Host": "booking-com15.p.rapidapi.com",
    },
  };

  const searchHotels = async () => {
    try {
      setLoading(true);
      const response = await axios.request(options);
      setHotels(response.data.data.hotels);
      const hotelsWithDiscount = response.data.data.hotels.map((hotel) => ({
        ...hotel,
        price: applyDiscount(hotel.property.priceBreakdown.grossPrice.value),
      }));
      setHotels(hotelsWithDiscount.splice(0, 15));
      setLoading(false);
    } catch (error) {
      console.error("Error fetching hotels:", error);
      if (error.response) {
        if (error.response.status === 429) {
          setError("Too many requests. Please try again later.");
        } else if (error.response.status === 403) {
          setError(
            "Access forbidden. Please check your API key and permissions."
          );
        } else {
          setError(`An error occurred: ${error.response.status}`);
        }
      } else if (error.request) {
        setError("No response from the server. Please try again later.");
      } else {
        setError("An error occurred. Please try again.");
      }
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <section
        id="banner"
        className="bg-[url('/public/images/hotelss.png')] bg-center bg-cover bg-no-repeat min-h-[50vh] px-10 pt-10 flex items-center justify-center"
      >
        <p className="text-white text-5xl font-semibold text-center tracking-wide">
          Penginapan Terbaik di Bali!
        </p>
      </section>
      <div className="flex flex-col p-8 md:py-24 md:px-20">
        {hotels.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {hotels.map((hotel) => (
              <div
                key={hotel.property.id}
                className="flex flex-col min-h-[350px] bg-cover bg-center bg-no-repeat h-full"
              >
                <div className="object-cover rounded-xl overflow-hidden">
                  <img
                    src={`https://cf.bstatic.com/xdata/images/hotel/square500/${
                      hotel.property.photoUrls[0]?.split("square60/")[1] || ""
                    }`}
                    alt=""
                    className="w-full h-full"
                  />
                </div>
                <div className="bg-white py-4 flex flex-col justify-between flex-grow">
                  <div className="mb-2">
                    <p className="text-base md:text-xs line-clamp-1">
                      {hotel.property.name}
                    </p>
                    <p className="text-4xl md:text-2xl font-semibold leading-tight">
                      Rp{" "}
                      {Intl.NumberFormat("id-ID").format(
                        Math.trunc(
                          hotel.property.priceBreakdown.grossPrice.value
                        )
                      )}{" "}
                      <span className="text-base md:text-xs font-normal">
                        / night
                      </span>
                    </p>
                  </div>
                  <div className="flex gap-2 text-xs font-semibold uppercase text-gray-500">
                    <p>2 Adults</p>
                    <p>•</p>
                    <p>Rating {hotel.property.reviewScore}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div>No hotels found.</div>
        )}
      </div>
      <Footer />
    </div>
  );
}
