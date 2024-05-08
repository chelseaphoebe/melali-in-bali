import axios from "axios";
import { useEffect, useState } from "react";

export default function Hotels() {
	const [hotels, setHotels] = useState([]);

	const options = {
		method: "GET",
		url: "https://booking-com15.p.rapidapi.com/api/v1/hotels/searchHotels",
		params: {
			dest_id: "835",
			search_type: "region",
			arrival_date: "2024-05-08",
			departure_date: "2024-05-09",
			currency_code: "idr",
		},
		headers: {
			"X-RapidAPI-Key": "74774779a4718msh2a8ae91005c8babp1c642djsn52bf7c4e8f4d",
			"X-RapidAPI-Host": "booking-com15.p.rapidapi.com",
		},
	};

	const searchHotels = async () => {
		try {
			const response = await axios.request(options);
			setHotels(response.data.data.hotels);
			console.log(response.data.data.hotels);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		searchHotels();
	}, []);

	return (
		<div className="flex flex-col py-24 px-20">
			<div className="grid grid-cols-5 gap-4">
				{hotels.map((hotel, index) => (
					<div
						key={index}
						className={`flex flex-col justify-end shadow-lg min-h-[350px] rounded-lg bg-cover bg-center bg-no-repeat`}
						style={{
							backgroundImage: `url(https://cf.bstatic.com/xdata/images/hotel/square500/${
								typeof hotel.property.photoUrls[0] === "string"
									? hotel.property.photoUrls[0].split("square60/")[1]
									: ""
							})`,
						}}
					>
						<div className="bg-white rounded-b-lg py-3 px-5 flex justify-between min-h-24">
							<div className="flex flex-col justify-between">
								<div className="flex flex-col">
									<p className="text-xs font-semibold">{hotel.property.name}</p>
									<p className="text-md font-semibold">
										IDR.{" "}
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
		</div>
	);
}
