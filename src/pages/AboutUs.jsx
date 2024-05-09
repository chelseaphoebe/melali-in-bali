import React, { useState, useEffect } from 'react';
import './AboutUs.css';
import Footer from "../components/Footer";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import card_AboutUS1 from '../images/3.png';
import card_AboutUS2 from '../images/2.png';
import card_AboutUS3 from '../images/1.png';
import card_AboutUS4 from '../images/3.png';
import bg_AboutUS1 from '../images/background2.jpg';
import bg_AboutUS3 from '../images/background3.jpg';

const AboutUs = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [bg_AboutUS1, bg_AboutUS3]; // Array of image URLs

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(currentImageIndex => (currentImageIndex + 1) % images.length);
    }, 5000); // Change image every 3 seconds

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
        <br />Mela<span className="text-yellow-300">li.</span>
      </p>
  
    </section>

      <section className="py-12 px-10 gap-4  pt-14">

        <div className="programs">

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
              <p>Joshua</p>
              <p>00000094196</p>
            </div>
            <img src={card_AboutUS3} alt="Josh" />
          </div>

          <div className="program">
            <div className="caption">
              <p>Chelsea</p>
              <p>00000094196</p>
            </div>
            <img src={card_AboutUS4} alt="Joshua Wijaya" />
          </div>
          
        </div>

        <div className="carousel px-14 mt-4 ">
          <TransitionGroup className="carousel">
            <CSSTransition
              key={currentImageIndex}
              timeout={500}
              classNames="slide"
            >
              <img src={images[currentImageIndex]} alt="Carousel Image" className="carousel-image" />
            </CSSTransition>
          </TransitionGroup>
        </div>

      </section>


      <Footer />
    </>
  );
};

export default AboutUs;