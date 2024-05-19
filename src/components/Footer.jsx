import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";

export default function Footer() {
  return (
    <footer className="bg-[#091426] px-10 md:px-40 py-20">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="flex flex-col gap-8 md:gap-4">
          <p className="font-bold font-sans text-4xl text-white text-center md:text-left py-5">
            Mela<span className="text-yellow-300">li.</span>
          </p>
          <div className="flex justify-center gap-6 md:gap-4">
            <a href="https://www.instagram.com/chelseaarantza/" target="_blank">
              <Icon
                icon="ic:baseline-facebook"
                className="w-[30px] h-[30px]"
                style={{ color: "white" }}
              />
            </a>
            <a href="https://www.instagram.com/chelseaarantza/" target="_blank">
              <Icon
                icon="mdi:twitter"
                className="w-[30px] h-[30px]"
                style={{ color: "white" }}
              />
            </a>
            <a href="https://www.instagram.com/chelseaarantza/" target="_blank">
              <Icon
                icon="mdi:instagram"
                className="w-[30px] h-[30px]"
                style={{ color: "white" }}
              />
            </a>
            <a href="https://www.instagram.com/chelseaarantza/" target="_blank">
              <Icon
                icon="mdi:youtube"
                className="w-[30px] h-[30px]"
                style={{ color: "white" }}
              />
            </a>
            <a href="https://www.instagram.com/chelseaarantza/" target="_blank">
              <Icon
                icon="ic:baseline-tiktok"
                className="w-[30px] h-[30px]"
                style={{ color: "white" }}
              />
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-8 md:gap-4 items-center md:items-stretch">
          <p className="text-yellow-300 font-semibold text-sm md:text-2xl text-center md:text-right mt-5 md:mt-0">
            Kunjungi Situs Lainnya
          </p>
          <div className="flex gap-4 text-white">
            <a
              href="/cookiepolicy"
              className="underline font-thin text-xs text-center text-white md:text-sm"
            >
              Kebijakan Cookie
            </a>
            <a
              href="#"
              className="underline font-thin text-xs text-center text-white md:text-sm"
            >
              Kebijakan Privasi
            </a>
            <a
              href="#"
              className="underline font-thin text-xs text-center text-white md:text-sm"
            >
              Syarat dan Ketentuan
            </a>
            <a
              href="#"
              className="underline font-thin text-xs text-center text-white md:text-sm"
            >
              Hubungi Kami
            </a>
          </div>
        </div>
      </div>
      <hr className="h-px my-5 md:my-10 bg-[#112443] border-0"></hr>
      <p className="text-white text-xs font-light text-center">
        Situs ini merupakan situs resmi Kementerian Pariwisata dan Ekonomi
        Kreatif Republik Indonesia. Semua isi yang tercantum di dalam situs ini
        bertujuan untuk memberikan informasi dan bukan sebagai tujuan komersial.
        Penjualan yang ditampilkan merupakan tanda kemitraan yang akan
        menghubungkan Anda kepada Mitra Kami.
      </p>
    </footer>
  );
}
