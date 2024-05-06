import React from "react";

export const WeatherCard = ({ imageUrl, title }) => {
  const image = require(`/public/images/${imageUrl}`);
  return (
    <div
      className="rounded-lg p-7 justify-center items-end bg-cover
       bg-center bg-no-repeat shadow-md  m-2 bg-[#fff7f7]"
    >
      <p className="text-center font-normal">Monday</p>
      <img src="./images/cloudIcon.png" alt="" />
      <div className="flex gap-2">
        <p className="font-normal">26°</p>
        <p className="text-[#c8cfcf] font-normal">26°</p>
      </div>
    </div>
  );
};
