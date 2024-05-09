import Footer from "../components/Footer";
import { NewsCard } from "../components/NewsCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { WeatherCard } from "../components/WeatherCard";
import JelajahCard from "../components/JelajahCard";

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
      "X-RapidAPI-Key": "3c4ecc4659msh98585703592d74fp16a40djsn9157a658dcfa",
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
      let articles = response.data.articles.slice(0, 5);
      setNews(articles);
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
          <p
            className="text-white text-5xl font-semibold text-center tracking-wide banner-text"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
          >
            Jelajahi Ribuan Destinasi Bali
            <br /> dengan kami!
          </p>
        </div>
      </section>
      <div className="flex justify-center my-14">
        <div className="flex w-5/6">
          <div className="bg-[#fff7f7] w-2/6 p-12 rounded-l-3xl ">
            <p className="text-3xl">
              {weather.location ? weather.location.city : 0}, Bali
            </p>
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
              <span className="text-gray-400"> 00:23</span>
            </p>
          </div>
          <div className="bg-[#f5f5f5] w-4/6 p-12 rounded-r-3xl">
            <p className="text-3xl">Weekly</p>
            <div className="flex flex-row gap-2 mt-5 overflow-x-scroll">
              {/* {weather.forecasts
                ? weather.forecasts.map((data, index) => (
                    <WeatherCard
                      key={index}
                      day={data.day}
                      high={data.high}
                      low={data.low}
                      text={data.text}
                    />
                  ))
                : null} */}
              <WeatherCard day="Mon" high="23" low="21" text="Sunny" />
              <WeatherCard day="Mon" high="23" low="21" text="Sunny" />
              <WeatherCard day="Mon" high="23" low="21" text="Sunny" />
              <WeatherCard day="Mon" high="23" low="21" text="Sunny" />
              <WeatherCard day="Mon" high="23" low="21" text="Sunny" />
              <WeatherCard day="Mon" high="23" low="21" text="Sunny" />
              <WeatherCard day="Mon" high="23" low="21" text="Sunny" />
              <WeatherCard day="Mon" high="23" low="21" text="Sunny" />
              <WeatherCard day="Mon" high="23" low="21" text="Sunny" />
              <WeatherCard day="Mon" high="23" low="21" text="Sunny" />
              <WeatherCard day="Mon" high="23" low="21" text="Sunny" />
              <WeatherCard day="Mon" high="23" low="21" text="Sunny" />
              <WeatherCard day="Mon" high="23" low="21" text="Sunny" />
              <WeatherCard day="Mon" high="23" low="21" text="Sunny" />
            </div>
          </div>
        </div>
      </div>
      <div>
        
        <div className="flex flex-wrap justify-center gap-6 overflow-hidden">
          <JelajahCard
            imageFile="lempuyang.jpg"
            judul="Lempuyang Temple"
            subjudul="Pura Lempuyang, known as the 'Gateway to Heaven'"
            desc="Our fave for ultimate wow-factor,
            the oldest Hindu temple in Bali.
            This temple is perched on top of Mount Lempuyang in 
            Karangasem, with a succession of seven ascending temples 
            along the mountain side."
            link="https://www.tripadvisor.co.id/Attraction_Review-g608484-d18922428-Reviews-Gates_of_Heaven-Karangasem_Bali.html"
          />
          <JelajahCard
            imageFile="bambuIndah.jpg"
            judul="Bambu Indah"
            subjudul="The bamboo wonderland at Bambu Indah - Ubud"
            desc="Eco-travellers, trust us when we say you'll want to spend the day at Bambu Indah"
            link="https://www.bambuindah.com/"
          />
          <JelajahCard
            imageFile="bedugul.jpg"
            judul="Danau Beratan"
            subjudul="The sacred Bali lakes - Bedugul"
            desc="One of the most breathtaking spots in the north-west Bali: the mystical floating temple on Danau Beratan.
             The main highlight here is the Pura Ulun Danu Beratan temple in the centre of the lake. "
            link="https://id.wikipedia.org/wiki/Danau_Bratan"
          />
          <JelajahCard
            imageFile="besakih.jpg"
            judul="Besakih"
            subjudul="The sea of golden marigolds - Besakih"
            desc="Flower power! Marigolds are pivotal in Balinese culture,
             and these golden blooms are used during all important Hindu ceremonies. 
             They are therefore grown in many different areas across Bali's highlands, 
             with plenty of small golden fields lining the roadsides. "
            link="https://theworldtravelguy.com/bali-marigold-fields-info-location-season/"
          />
          <JelajahCard
            imageFile="buleleng.jpg"
            judul="West Bali National Park"
            subjudul="The grazing wildlife in the West Bali National Park - Buleleng"
            desc="Get away from the hustle and bustle of South Bali and head up north to the Taman Nasional
             Bali Barat, AKA the West Bali National Park. "
            link="https://en.wikipedia.org/wiki/West_Bali_National_Park"
          />
          <JelajahCard
            imageFile="kintamani.jpg"
            judul="Mount Batur"
            subjudul="Start your day with a sunrise hike to Bali's most accessible volanco"
            desc="Mount Batur is just one of many spectacular active volcanoes in Bali, and it is easily the most popular day trip for a sunrise hike. 
            The trip begins early at around 3am, where you'll be picked up."
            link="https://www.balitrekkingtour.com/mount-batur-trekking/"
          />
          <JelajahCard
            imageFile="kuta.jpg"
            judul="Kuta"
            subjudul="The sunsets on the south-west coast - Kuta, Seminyak & Canggu"
            desc="It wouldn't be a trip to Bali without catching 
            a candy-coloured sunset. Bali sunsets are famous around the world,
             with their fiery red hues merging with multi-coloured fluffy clouds."
            link="https://www.indonesia.travel/id/id/destinasi/bali-nusa-tenggara/kuta.html"
          />
          <JelajahCard
            imageFile="nusaPenida.jpg"
            judul="Kelingking Beach"
            subjudul="The world's most stunning beaches."
            desc="There's no question that Bali boasts some of the world's most stunning beaches. Pristine white sands, clear sparkling water – all of those paradise must-haves. 
            But there's one beach in particular that's garnered global 
            fame - the ever-stunning Kelingking Beach. "
            link="https://id.wikipedia.org/wiki/Nusa_Penida"
          />
          <JelajahCard
            imageFile="sidemen.jpg"
            judul="Sidemen"
            subjudul="The rolling hillside of Sidemen Valley - Sidemen"
            desc="A far cry from the hustle and bustle of South Bali's beach clubs and bars, 
            Sidemen Valley is a relatively undiscovered landscape and traditional village 
            located in Bali's eastern region. "
            link="https://www.tripadvisor.co.id/Attraction_Review-g608484-d18922428-Reviews-Gates_of_Heaven-Karangasem_Bali.html"
          />
        </div>
      </div>

      {/* <section id="section2" className="max-w-xs md:max-w-6xl mx-auto my-16">
        <p className="text-4xl font-bold">Destination Choices</p>
        <div className="grid grid-cols-5 gap-7 mt-5">
          {Array.from({ length: 10 }, (_, i) => (
            <DestinationCard key={i} imageUrl={"bali.jpeg"} title={"Bali"} />
          ))}
        </div>
      </section> */}

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
