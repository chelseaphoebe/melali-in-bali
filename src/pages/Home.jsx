import Footer from "../components/Footer";
import { DestinationCard } from "../components/DestinationCard";
import { NewsCard } from "../components/NewsCard";
import { useEffect, useState } from "react";
import axios from "axios";



export default function Home() {
	const [weather, setWeather] = useState([]);
	const [news, setNews] = useState([]);
	const url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=e05fe913877d4698b7a221862ff21aa4";

	const options = {
		method: 'GET',
		url: 'https://yahoo-weather5.p.rapidapi.com/weather',
		headers: {
			'X-RapidAPI-Key': '6b6820ab3amshabcae9596a9c461p194024jsn8b72f13050bb',
			'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
 		 }
	};

	async function fetchWeather() {
		try {
			const response = await axios.request(url);
			console.log(response.data);
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
				<div className="bg-[url('/public/images/background.jpg')] bg-center bg-cover bg-no-repeat min-h-[600px] px-52 flex items-center justify-center">
					<p className="text-white text-5xl font-semibold text-center tracking-wide">
						Jelajahi Ribuan Destinasi Bali dengan Kami!
					</p>
				</div>
			</section>
			<section>
				<div className="flex justify-center">
					<img src="/images/rain.png" width={250} height={250} alt="" />
				</div>
				<div>
					<h1 className="text-black font-semibold text-center text-5xl">
						haloo
					</h1>
				</div>
				<div>
					<p className="text-black font-semibold text-center text-3xl">
						Bali
					</p>
				</div>
			</section>
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
          <NewsCard key={index} imageUrl={data.urlToImage} title={data.title} description={data.description} link={data.url} />
       ))}
      </section>
			<Footer />
		</>
	);
}
