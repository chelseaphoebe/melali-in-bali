import "./RencanaCard.css";

function RencanaCard() {
  return (
    <div className="section bg-white min-w-[320px] min-h-[400px] rounded-tr-[45px] rounded-bl-[45px] relative group overflow-hidden transition-all">
      <div className="absolute inset-0 z-0 transition-all"></div>
      <div className="section min-w-[290px] min-h-[370px] bottom-0 right-0 z-10 absolute">
        <div className="section max-w-[80px] min-h-[50px] top-0 left-0 flex justify-center items-center">
          <p className="font-bold text-2xl">01</p>
        </div>

        <div className="px-6 py-4">
          <p className="text-black text-2xl">Tiba di Bali</p>
          <p className="mb-6 text-black font-normal text-sm">Check-in hotel di Seminyak</p>
        </div>
      </div>
    </div>
  );
}

export default RencanaCard;
