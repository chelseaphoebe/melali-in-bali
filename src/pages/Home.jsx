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
    url: "https://api.openweathermap.org/data/2.5/weather",
    params: {
      lat: "8.4095",
      lon: "115.1889",
      units: "metric",
      lang: "id",
      appid: "9d73156923533bd41a4b3fcc9c7f8925",
    },
  };

  const d = new Date();
  let day = d.toLocaleDateString("id-ID", { weekday: "long" });
  var time = d.toLocaleTimeString();

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
      let articles = response.data.articles.slice(0, 10);
      setNews(articles);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchNews();
    fetchWeather();
  }, []);

  function toTitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }

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
      <div className="flex justify-center my-14 p-10">
        <div className="flex">
          <div className="bg-[#091426] p-10 gap-20 rounded-3xl flex justify-center">
            <div>
              <p className="text-3xl text-white">Bali,</p>
              {weather.weather && (
                <img
                  src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                  alt=""
                  className="size-36"
                />
              )}
            </div>
            <div className="flex">
              <div className="flex flex-col justify-center gap-2">
                <p className="text-7xl font-normal text-white">
                  {weather.main ? Math.round(weather.main.temp) : 0}°
                  <span className="font-light text-gray-400">c</span>
                </p>
                <p className="text-white">
                  {weather.weather
                    ? toTitleCase(weather.weather[0].description)
                    : 0}
                </p>
                <p className="font-normal text-white">
                  {day},
                  <span className="text-gray-400 font-normal"> {time}</span>
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center gap-3">
              <div className="flex justify-between gap-16">
                <p className="text-white font-normal">Temperatur Terendah</p>
                <p className="text-white">
                  {weather.main ? weather.main.temp_min : ""}
                </p>
              </div>
              <div className="flex justify-between">
                <hr class="w-72 h-[1px] mx-auto bg-gray-100 border-0 rounded md-10 dark:bg-gray-700"></hr>
              </div>
              <div className="flex justify-between gap-16">
                <p className="text-white font-normal">Temperatur Tertinggi</p>
                <p className="text-white">
                  {weather.main ? weather.main.temp_max : ""}
                </p>
              </div>
              <div className="flex justify-between">
                <hr class="w-72 h-[1px] mx-auto bg-gray-100 border-0 rounded md-10 dark:bg-gray-700"></hr>
              </div>
              <div className="flex justify-between gap-16">
                <p className="text-white font-normal">Angin</p>
                <p className="text-white">
                  {weather.wind ? weather.wind.speed : ""}
                </p>
              </div>
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
      <div id="section3" className="flex mt-20">
        <div className="w-2/3">
          <div className="max-w-xs md:max-w-6xl mx-auto my-10 lg:px-10 px-28 flex flex-wrap gap-16">
            {news.map((data, index) => (
              <NewsCard
                key={index}
                imageUrl={data.urlToImage}
                title={data.title}
                description={data.description}
                link={data.url}
              />
            ))}
          </div>
        </div>
        <div
          className="w-1/3 h-screen top-0 sticky bg-[url('/public/images/bgNews1.png')] bg-cover bg-blend-darken flex justify-center items-center flex-col"
          alt=""
        >
          <h1 className="text-white text-3xl text-center mb-2 mx-12">
            Berita Terkini
          </h1>
          <p className="text-white text-base text-center font-normal mx-10">
            Dapatkan update terbaru tentang destinasi, acara, tren perjalanan,
            dan kebijakan pariwisata. <br />
            Informasi terkini dan terpercaya untuk menjaga Anda selalu
            terinformasi.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
