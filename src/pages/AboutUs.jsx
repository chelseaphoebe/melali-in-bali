import Footer from "../components/Footer";
import React, { useState, useEffect } from 'react';
import './AboutUs.css';
import progIMG from '../images/dummy2.jpg'



const AboutUs = () => {
  return (
    <>
      	<section id="sectionABT">
				<div className="bg-[url('/public/images/bg_AboutUS.jpg')] bg-center bg-cover bg-no-repeat min-h-[600px] px-52 flex items-center justify-center">
					<p className="text-white text-5xl font-semibold text-left tracking-wide font-bold">
              
					</p>
				</div>
			</section>

      <section className="bg-gray-100 py-12 px-14 gap-3">

      <p className="text-dark text-5xl font-semibold text-left tracking-wide font-bold text-center pt-11">
              Anggota Kami
              </p>

          <div className="programs">

            <div className="program">
              <img src={ progIMG } alt="" />
              <div className="caption">
                <p>Austin</p>
                <p>00000096252</p>
              </div>
            </div>

            <div className="program">
              <img src={ progIMG } alt="" />
              <div className="caption">
                <p>Austin</p>
                <p>00000096252</p>
              </div>
            </div>
            
            <div className="program">
              <img src={ progIMG } alt="" />
              <div className="caption">
                <p>Austin</p>
                <p>00000096252</p>
              </div>
            </div>

            <div className="program">
              <img src={ progIMG } alt="" />
              <div className="caption">
                <p>Joshua Wijaya</p>
                <p>00000094196</p>
              </div>
            </div>
          </div>
      </section>

      


      <Footer />
    </>
  );
};

export default AboutUs;