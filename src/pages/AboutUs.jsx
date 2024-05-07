import React, { useState, useEffect } from 'react';
import './AboutUs.css';
import Footer from "../components/Footer";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import bg_AboutUS from '../images/dummy2.jpg';
import bg_AboutUS1 from '../images/background2.jpg';
import bg_AboutUS2 from '../images/baliwisata.jpg';
import bg_AboutUS3 from '../images/background3.jpg';

const AboutUs = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [bg_AboutUS1, bg_AboutUS2, bg_AboutUS3]; // Array of image URLs

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(currentImageIndex => (currentImageIndex + 1) % images.length);
    }, 5000); // Change image every 3 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <>

      <section className="py-12 px-14 gap-4 pt-14">
        <p className="text-dark text-5xl font-semibold text-left tracking-wide font-bold text-center pt-14 pb-14">
          Anggota Kami
        </p>

        <div className="programs">
          <div className="program">
            <img src={bg_AboutUS} alt="Austin" />
            <div className="caption">
              <p>Austin</p>
              <p>00000096252</p>
            </div>
          </div>

          <div className="program">
            <img src={bg_AboutUS} alt="Austin" />
            <div className="caption">
              <p>Austin</p>
              <p>00000096252</p>
            </div>
          </div>

          <div className="program">
            <img src={bg_AboutUS} alt="Austin" />
            <div className="caption">
              <p>Austin</p>
              <p>00000096252</p>
            </div>
          </div>

          <div className="program">
            <img src={bg_AboutUS} alt="Joshua Wijaya" />
            <div className="caption">
              <p>Joshua Wijaya</p>
              <p>00000094196</p>
            </div>
          </div>
        </div>
      </section>


      <section className="py-13 gap-4 pt-14 mt-4">

        <div className="carousel px-14 mb-4 ">
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