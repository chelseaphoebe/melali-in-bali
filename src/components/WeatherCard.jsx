import React from "react";

export const WeatherCard = ({ day, high, low, text }) => {
  // const image = require(`/public/images/${imageUrl}`);
  return (
    <div
      className="rounded-lg p-7 justify-center items-end bg-cover
       bg-center bg-no-repeat shadow-md  m-2 bg-[#fff7f7]"
    >
      <p className="text-center font-normal">{day}</p>
      <img src="./images/cloudIcon.png" alt="" />
      <div className="flex gap-2">
        <p className="font-normal">{high}°</p>
        <p className="text-[#c8cfcf] font-normal">{low}°</p>
        <p className="text-[#c8cfcf] font-normal">{text}</p>

      </div>
    </div>
  );
};
