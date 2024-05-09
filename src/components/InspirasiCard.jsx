import React from "react";


export const InspirasiCard = ({ imageUrl, title }) => {
  const image = require(`/public/images/${imageUrl}`);
  return (
    <div
      style={{ backgroundImage: `url(${image})` }}
      className="rounded-lg min-h-64 w-50 flex p-7 justify-center items-end bg-cover bg-center bg-no-repeat shadow-md"
    >
      <p className="text-white font-semibold text-lg">{title}</p>
    </div>
  );
};
