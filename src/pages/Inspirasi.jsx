import Footer from "../components/Footer";
import React from "react";
import "./Inspirasi.css";

const Banner = () => {
  return (
    <section
      id="banner"
      className="bg-[url('/src/images/banner-ins.jpg')] bg-center bg-cover bg-no-repeat min-h-[600px] px-10 flex items-center justify-center"
    >
      <p className="text-white text-5xl font-semibold text-center tracking-wide">
        Temukan kebahagiaan mu di Bali!
      </p>
    </section>
  );
};

const ExperienceSection = () => {
  const handleNatureClick = () => {
    window.open(
      "https://www.bing.com/ck/a?!&&p=475c31dddcc73f65JmltdHM9MTcxNDc4MDgwMCZpZ3VpZD0xNzZmYTI4OS01ZDBmLTYwZGItMWVhNy1iMWVkNWM5MzYxZTUmaW5zaWQ9NTE5Ng&ptn=3&ver=2&hsh=3&fclid=176fa289-5d0f-60db-1ea7-b1ed5c9361e5&psq=Nikmati+keindahan+alam+Bali+dengan+melakukan+aktivitas+seperti+hiking+di+pegunungan%2c+snorkeling+di+pantai+yang+indah%2c+atau+mengeksplorasi+hutan+hujan+tropis.&u=a1aHR0cHM6Ly93d3cuZGlzY292YWJhbGkuY29tL2lkLzE1LWhpa2luZy1kYW4tdHJla2tpbmctdGVyYmFpay1kaS1iYWxpLXlhbmctYmVyc2VudHVoYW4tZGVuZ2FuLWFsYW0v&ntb=1",
      "_blank"
    );
  };

  const handleCultureClick = () => {
    window.open(
      "https://www.bing.com/ck/a?!&&p=668bd241e294e938JmltdHM9MTcxNDc4MDgwMCZpZ3VpZD0xNzZmYTI4OS01ZDBmLTYwZGItMWVhNy1iMWVkNWM5MzYxZTUmaW5zaWQ9NTIxNA&ptn=3&ver=2&hsh=3&fclid=176fa289-5d0f-60db-1ea7-b1ed5c9361e5&psq=Selami+budaya+Bali+yang+kaya+dengan+mengunjungi+kuil-kuil+bersejarah%2c+menyaksikan+pertunjukan+tari+tradisional%2c+atau+berpartisipasi+dalam+upacara+adat.&u=a1aHR0cHM6Ly9zYWx1dGJhbGkuY29tL2lkLzktdHJhZGlzaS1iYWxpLXVwYWNhcmEtZmVzdGl2YWwtZGFuLXNlbmktbG9rYWwv&ntb=1",
      "_blank"
    );
  };

  const handleCulinaryClick = () => {
    window.open(
      "https://www.bing.com/ck/a?!&&p=ea06ad22e29a4fb6JmltdHM9MTcxNDc4MDgwMCZpZ3VpZD0xNzZmYTI4OS01ZDBmLTYwZGItMWVhNy1iMWVkNWM5MzYxZTUmaW5zaWQ9NTIzMg&ptn=3&ver=2&hsh=3&fclid=176fa289-5d0f-60db-1ea7-b1ed5c9361e5&psq=Nikmatilah+cita+rasa+autentik+Bali+dengan+mencoba+berbagai+hidangan+lokal+yang+lezat%2c+dari+makanan+tradisional+hingga+makanan+jalanan+yang+menggugah+selera.&u=a1aHR0cHM6Ly9zYWx1dGJhbGkuY29tL2lkL2t1bGluZXItZGktYmFsaS0xMC1tYWthbmFuLWxva2FsLXlhbmctaGFydXMv&ntb=1",
      "_blank"
    );
  };

  return (
    <section
      id="section4"
      className="max-w-6xl mx-auto my-16 flex flex-col min-h-screen"
    >
      <h2 className="text-4xl font-bold mb-8 text-center">
        What To Do in Bali?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-auto">
        <div className="experience-card">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleNatureClick}
          >
            Jelajahi Aktivitas Alam
          </button>
        </div>
        <div className="experience-card1">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleCultureClick}
          >
            Jelajahi Wisata Budaya
          </button>
        </div>
        <div className="experience-card2">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleCulinaryClick}
          >
            Jelajahi Kuliner
          </button>
        </div>
      </div>
      <Footer className="mt-auto" />
    </section>
  );
};

const Inspirasi = () => {
  return (
    <>
      <Banner />
      <ExperienceSection />
    </>
  );
};

export default Inspirasi;
