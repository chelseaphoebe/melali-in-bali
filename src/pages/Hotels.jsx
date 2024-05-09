import axios from "axios";
import { useEffect, useState } from "react";

export default function Hotels() {
  const [hotels, setHotels] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const options = {
    method: "GET",
    url: "https://booking-com15.p.rapidapi.com/api/v1/hotels/searchHotels",
    params: {
      dest_id: "835",
      search_type: "region",
      arrival_date: "2024-05-09",
      departure_date: "2024-05-10",
      currency_code: "idr",
    },
    headers: {
      "X-RapidAPI-Key": "c9fffc0902msh361547e98d0e612p1e51aajsn1b625713f0f5",
      "X-RapidAPI-Host": "booking-com15.p.rapidapi.com",
    },
  };

  const searchHotels = async () => {
    try {
      setLoading(true);
      const response = await axios.request(options);
      setHotels(response.data.data.hotels);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching hotels:", error);
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    searchHotels();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="flex flex-col py-24 px-20">
      {hotels.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {hotels.map((hotel) => (
            <div
              key={hotel.property.id}
              className="flex flex-col justify-end shadow-lg min-h-[350px] rounded-lg bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(https://cf.bstatic.com/xdata/images/hotel/square500/${
                  hotel.property.photoUrls[0]?.split("square60/")[1] || ""
                })`,
              }}
            >
              <div className="bg-white rounded-b-lg py-3 px-5 flex justify-between min-h-24">
                <div className="flex flex-col justify-between">
                  <div className="flex flex-col">
                    <p className="text-xs font-semibold">
                      {hotel.property.name}
                    </p>
                    <p className="text-md font-semibold">
                      IDR{" "}
                      {new Intl.NumberFormat("id-ID").format(
                        hotel.property.priceBreakdown.grossPrice.value
                      )}{" "}
                      / night
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <p className="text-xs font-semibold">2 Adults</p>
                    <p className="text-xs font-semibold">
                      Rating {hotel.property.reviewScore}
                    </p>
                  </div>
                </div>
                <p className="text-xs font-medium text-gray-500">Bali</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>No hotels found.</div>
      )}
    </div>
  );
}
