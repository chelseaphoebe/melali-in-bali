import Footer from "../components/Footer";
import React, { useState, useEffect } from 'react';
import './AboutUs.css';



const AboutUs = () => {
  return (
    <>
      	<section id="sectionABT">
				<div className="bg-[url('/public/images/bg_AboutUS.jpg')] bg-center bg-cover bg-no-repeat min-h-[600px] px-52 flex items-center justify-center">
					<p className="text-white text-5xl font-semibold text-left tracking-wide font-bold">
              
					</p>
				</div>
			</section>

      <section className="bg-gray-100 py-12 px-14">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-center">Melali</h3>
              <p>
                Melali is a company dedicated to providing exceptional travel experiences. We are committed to helping you explore thousands of destinations in Bali with ease and convenience.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4 text-center">Founded in 2024</h3>
              <p>
                Established in 2024, Melali has quickly become a trusted name in the travel industry. Our team of experienced professionals is passionate about creating unforgettable journeys for our clients.
              </p>
            </div>
          </div>
      </section>

      


      <Footer />
    </>
  );
};

export default AboutUs;