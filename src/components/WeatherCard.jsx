import React from "react";

export const WeatherCard = ({ day, high, low, text }) => {
  // const image = require(`/public/images/${imageUrl}`);
  return (
    <div
      className="rounded-lg p-6 justify-center items-center bg-cover
       bg-center bg-no-repeat shadow-md  m-1 bg-[#fff7f7] flex flex-col"
    >
      <p className="text-center font-normal">{day}</p>
      <img src="./images/cloudIcon.png" className="w-20 justify-center" alt="" />
        <p className="font-bold mt-4">{text}</p>
      <div className="flex gap-2 text-sm">
        <p className="font-normal text-gray-600">{low}°C</p>
        <p className="font-normal text-gray-400">{high}°C</p>

      </div>
    </div>
  );
};
