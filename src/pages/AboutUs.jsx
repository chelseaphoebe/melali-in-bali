import React, { useState, useEffect } from 'react';
import './AboutUs.css';
import Footer from "../components/Footer";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import bg_AboutUS1 from '../images/visi.png';
import bg_AboutUS3 from '../images/misi.png';
import { Icon } from "@iconify/react";


const AboutUs = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [bg_AboutUS1, bg_AboutUS3]; // Array of image URLs

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(currentImageIndex => (currentImageIndex + 1) % images.length);
    }, 10000); // Change image every 10 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <>
      <section
        id="banner"
        className="bg-[url('/public/images/banner-aboutUS.jpg')] bg-center bg-cover bg-no-repeat min-h-[700px] px-10 flex items-center justify-center"
      >
        <p className="text-white text-8xl font-semibold text-center tracking-wide">
          <span className="text-4xl">We Are</span>
          <br />
          Mela<span className="text-yellow-300">li.</span>
        </p>
      </section>
      <section className="py-12 px-10 gap-4  pt-14 flex">
        <div className="flex min-h-[450px] max-w-[380px] justify-between overflow-hidden rounded-3xl">
          <div className="bg-[url('/public/images/austin.png')] bg-cover flex items-end">
            <div className="bg-gradient-to-b from-[#091426]/0 to-[#091426] p-4">
              <p className="text-3xl text-white">Austin</p>
              <p className="text-xl font-semibold text-white">00000096252</p>
              <p className="text-sm font-normal text-white">
                Austin Gilbert Liwanto adalah seorang mahasiswa semester 2
                jurusan Informatika di Universitas Multimedia Nusantara. Dia
                merupakan orang yang penuh semangat dan ketertarikan dalam
                menjelajahi pengalaman baru baik itu hal akademik
                maupun non-akademik.
              </p>
              <div className="flex gap-6 md:gap-4 mt-4">
                <a
                  href="https://www.instagram.com/austingilbert.l/"
                  target="_blank"
                >
                  <Icon
                    icon="mdi:instagram"
                    className="w-[30px] h-[30px]"
                    style={{ color: "white" }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex min-h-[450px] max-w-[380px] justify-between overflow-hidden rounded-3xl">
          <div className="bg-[url('/public/images/austin.png')] bg-cover flex items-end">
            <div className="bg-gradient-to-b from-[#091426]/0 to-[#091426] p-4">
              <p className="text-3xl text-white">Chelsea</p>
              <p className="text-xl font-semibold text-white">00000096816</p>
              <p className="text-sm font-normal text-white">
                Austin Gilbert Liwanto adalah seorang mahasiswa semester 2
                jurusan Informatika di Universitas Multimedia Nusantara. Dia
                merupakan orang yang penuh semangat dan ketertarikan dalam
                menjelajahi pengalaman baru baik itu hal akademik
                maupun non-akademik.
              </p>
              <div className="flex gap-6 md:gap-4 mt-4">
                <a
                  href="https://www.instagram.com/chelseaarantza/"
                  target="_blank"
                >
                  <Icon
                    icon="mdi:instagram"
                    className="w-[30px] h-[30px]"
                    style={{ color: "white" }}
                  />
                </a>
                <a
                  href="https://www.instagram.com/chelseaarantza/"
                  target="_blank"
                >
                  <Icon
                    icon="mdi:twitter"
                    className="w-[30px] h-[30px]"
                    style={{ color: "white" }}
                  />
                </a>
                <a
                  href="https://www.instagram.com/chelseaarantza/"
                  target="_blank"
                >
                  <Icon
                    icon="mdi:youtube"
                    className="w-[30px] h-[30px]"
                    style={{ color: "white" }}
                  />
                </a>
                <a
                  href="https://www.instagram.com/chelseaarantza/"
                  target="_blank"
                >
                  <Icon
                    icon="ic:baseline-tiktok"
                    className="w-[30px] h-[30px]"
                    style={{ color: "white" }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex min-h-[450px] max-w-[380px] justify-between overflow-hidden rounded-3xl">
          <div className="bg-[url('/public/images/austin.png')] bg-cover flex items-end">
            <div className="bg-gradient-to-b from-[#091426]/0 to-[#091426] p-4">
              <p className="text-3xl text-white">Austin</p>
              <p className="text-xl font-semibold text-white">00000096252</p>
              <p className="text-sm font-normal text-white">
                Austin Gilbert Liwanto adalah seorang mahasiswa semester 2
                jurusan Informatika di Universitas Multimedia Nusantara. Dia
                merupakan orang yang penuh semangat dan ketertarikan dalam
                menjelajahi pengalaman baru baik itu hal akademik
                maupun non-akademik.
              </p>
              <div className="flex gap-6 md:gap-4 mt-4">
                <a
                  href="https://www.instagram.com/austingilbert.l/"
                  target="_blank"
                >
                  <Icon
                    icon="mdi:instagram"
                    className="w-[30px] h-[30px]"
                    style={{ color: "white" }}
                  />
                </a>
                <a href="https://www.instagram.com/austingilbert.l/">
                  <Icon
                    icon="mdi:twitter"
                    className="w-[30px] h-[30px]"
                    style={{ color: "white" }}
                  />
                </a>
                <a href="https://www.instagram.com/austingilbert.l/">
                  <Icon
                    icon="mdi:youtube"
                    className="w-[30px] h-[30px]"
                    style={{ color: "white" }}
                  />
                </a>
                <a href="https://www.instagram.com/austingilbert.l/">
                  <Icon
                    icon="ic:baseline-tiktok"
                    className="w-[30px] h-[30px]"
                    style={{ color: "white" }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex min-h-[450px] max-w-[380px] justify-between overflow-hidden rounded-3xl">
          <div className="bg-[url('/public/images/austin.png')] bg-cover flex items-end">
            <div className="bg-gradient-to-b from-[#091426]/0 to-[#091426] p-4">
              <p className="text-3xl text-white">Austin</p>
              <p className="text-xl font-semibold text-white">00000096252</p>
              <p className="text-sm font-normal text-white">
                Austin Gilbert Liwanto adalah seorang mahasiswa semester 2
                jurusan Informatika di Universitas Multimedia Nusantara. Dia
                merupakan orang yang penuh semangat dan ketertarikan dalam
                menjelajahi pengalaman baru baik itu hal akademik
                maupun non-akademik.
              </p>
              <div className="flex gap-6 md:gap-4 mt-4">
                <a
                  href="https://www.instagram.com/austingilbert.l/"
                  target="_blank"
                >
                  <Icon
                    icon="mdi:instagram"
                    className="w-[30px] h-[30px]"
                    style={{ color: "white" }}
                  />
                </a>
                <a href="https://www.instagram.com/austingilbert.l/">
                  <Icon
                    icon="mdi:twitter"
                    className="w-[30px] h-[30px]"
                    style={{ color: "white" }}
                  />
                </a>
                <a href="https://www.instagram.com/austingilbert.l/">
                  <Icon
                    icon="mdi:youtube"
                    className="w-[30px] h-[30px]"
                    style={{ color: "white" }}
                  />
                </a>
                <a href="https://www.instagram.com/austingilbert.l/">
                  <Icon
                    icon="ic:baseline-tiktok"
                    className="w-[30px] h-[30px]"
                    style={{ color: "white" }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* 

          <div className="program">
            <div className="caption">
              <p>Austin</p>
              <p>00000096252</p>
            </div>
            <img src={card_AboutUS1} alt="Austin" />
          </div>

          <div className="program">
            <div className="caption">
              <p>Felicia</p>
              <p>00000096911</p>
            </div>
            <img src={card_AboutUS2} alt="Feli" />
          </div>

          <div className="program">
            <div className="caption">
              <p>Joshua Wijaya</p>
              <p>00000094196</p>
            </div>
            <img src={card_AboutUS3} alt="Josh" />
          </div>

          <div className="program">
            <div className="caption">
              <p>Chelsea</p>
              <p>00000096816</p>
            </div>
            <img src={card_AboutUS4} alt="Chelsea" />
          </div> */}
      </section>
        <div className="carousel px-14 mt-4 ">
          <TransitionGroup className="carousel">
            <CSSTransition
              key={currentImageIndex}
              timeout={500}
              classNames="slide"
            >
              <img
                src={images[currentImageIndex]}
                alt="Carousel Image"
                className="carousel-image"
              />
            </CSSTransition>
          </TransitionGroup>
        </div>

      <Footer />
    </>
  );
};

export default AboutUs;