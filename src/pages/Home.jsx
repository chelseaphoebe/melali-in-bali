import Footer from "../components/Footer";
import { DestinationCard } from "../components/DestinationCard";
import { NewsCard } from "../components/NewsCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { WeatherCard } from "../components/WeatherCard";

export default function Home() {
  const [weather, setWeather] = useState([]);
  const [news, setNews] = useState([]);
  const url =
    "https://newsapi.org/v2/top-headlines?country=us&apiKey=e05fe913877d4698b7a221862ff21aa4";

  const options = {
    method: "GET",
    url: "https://yahoo-weather5.p.rapidapi.com/weather",
    params: {
      location: "Ubud",
      format: "json",
      u: "f",
    },
    headers: {
      "X-RapidAPI-Key": "6b6820ab3amshabcae9596a9c461p194024jsn8b72f13050bb",
      "X-RapidAPI-Host": "yahoo-weather5.p.rapidapi.com",
    },
  };

  async function fetchWeather() {
    try {
      const response = await axios.request(options);
      console.log(response.data);
      setWeather(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  async function fetchNews() {
    try {
      const response = await axios.get(url);
      setNews(response.data.articles);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchNews();
    fetchWeather();
  }, []);

  return (
    <>
      {/* Content goes here */}
      <section id="section1">
        <div className="bg-[url('/public/images/background.jpg')] bg-center bg-cover bg-no-repeat min-h-[750px] px-52 flex items-center justify-center">
          <p className="text-white text-5xl font-semibold text-center tracking-wide">
            Jelajahi Ribuan Destinasi Bali dengan Kami!
          </p>
        </div>
      </section>
      <div className="flex justify-center my-14">
        <div className="flex w-5/6">
          <div className="bg-[#fff7f7] w-2/6 p-12 rounded-l-3xl ">
            <p>{weather.location ? weather.location.city : 0}, Bali</p>
            <div className="flex justify-center">
              <img src="/images/cloudIcon.png" alt="" className="size-36" />
            </div>
            <p className="text-4xl font-normal">
              {weather.current_observation
                ? Math.round(
                    (weather.current_observation.condition.temperature - 32) *
                      (5 / 9)
                  )
                : 0}
              °C
            </p>
            <p>
              {weather.current_observation
                ? weather.current_observation.condition.text
                : 0}
            </p>
            <p>
              {weather.forecasts ? weather.forecasts[0].day : 0},
              <span className="text-[#c8cfcf]"> 00:23</span>
            </p>
          </div>
          <div className="bg-[#f5f5f5] w-4/6 p-12 rounded-r-3xl">
            <p>Weekly</p>
            <div className="flex flex-row gap-2 mt-5 overflow-x-scroll">
              {Array.from({ length: 10 }, (_, i) => (
                <WeatherCard key={i} imageUrl={"bali.jpeg"} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <section id="section2" className="max-w-xs md:max-w-6xl mx-auto my-16">
        <p className="text-4xl font-bold">Destionation Choices</p>
        <div className="grid grid-cols-5 gap-7 mt-5">
          {Array.from({ length: 10 }, (_, i) => (
            <DestinationCard key={i} imageUrl={"bali.jpeg"} title={"Bali"} />
          ))}
        </div>
      </section>
      <section id="section3" className="max-w-xs md:max-w-6xl mx-auto my-10">
        {news.map((data, index) => (
          <NewsCard
            key={index}
            imageUrl={data.urlToImage}
            title={data.title}
            description={data.description}
            link={data.url}
          />
        ))}
      </section>
      <Footer />
    </>
  );
}
