import "./AboutUs.css";
import Footer from "../components/Footer";
import { Icon } from "@iconify/react";

const AboutUs = () => {
  return (
    <>
      <section
        id="banner"
        className="bg-[url('/public/images/banner-aboutUS.jpg')] bg-center bg-cover bg-no-repeat min-h-[750px] px-10 flex items-center justify-center"
      >
        <p className="text-white text-8xl font-semibold text-center tracking-wide">
          <span className="text-4xl">We Are</span>
          <br />
          Mela<span className="text-yellow-300">li.</span>
        </p>
      </section>
      <div className="">
        <div className="flex flex-col justify-center items-center">
          <div className="bg-slate-900 w-full min-h-36 py-16 px-24">
            <div className="flex justify-center items-center gap-8 max-w-screen-md mx-auto">
              <div className="text-white font-medium text-7xl">VISI</div>
              <div className="flex flex-col gap-4">
                <p className="text-white text-2xl">
                  Menjadi portal informasi wisata terpercaya dan inspiratif
                  untuk pengguna.
                </p>
                <hr class="w-full h-[1px] mx-auto bg-gray-600 border-0 rounded md-1"></hr>
                <p className="text-white font-light text-base">
                  Menjadi portal informasi wisata terpercaya yang menginspirasi
                  dan memudahkan pengguna dalam menjelajahi berbagai destinasi
                  wisata di seluruh dunia dengan informasi akurat, rekomendasi
                  menarik, dan panduan perjalanan yang bermanfaat.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-slate-800 w-full min-h-36 py-16 px-24">
            <div className="flex justify-center items-center gap-8 max-w-screen-md mx-auto">
              <div className="flex flex-col gap-4">
                <p className="text-white text-right text-2xl">
                  Informasi wisata lengkap dan fitur perencanaan interaktif.
                </p>
                <hr class="w-full h-[1px] mx-auto bg-gray-600 border-0 rounded md-1"></hr>
                <p className="text-white font-light text-base text-right">
                  Menyediakan informasi lengkap dan akurat tentang destinasi
                  wisata, meliputi atraksi, akomodasi, transportasi, dan tips
                  perjalanan. Menawarkan fitur perencanaan perjalanan yang
                  intuitif dan interaktif, membantu pengguna merencanakan
                  liburan dengan mudah dan menyenangkan.
                </p>
              </div>
              <div className="text-white font-medium text-7xl">MISI</div>
            </div>
          </div>
        </div>
      </div>
      <section className="py-20 px-10 gap-4 pt-14 grid grid-cols-4">
        <div className="flex min-h-[450px] max-w-[380px] justify-between overflow-hidden rounded-3xl">
          <div className="bg-[url('/public/images/chelsea.jpeg')] bg-cover flex items-end group bg-center">
            <div className="bg-gradient-to-b from-[#091426]/0 to-[#091426] p-4">
              <p className="text-3xl text-white">Chelsea</p>
              <p className="text-xl font-semibold text-white">00000096816</p>
              <p className="text-sm font-normal text-white line-clamp-2 group-hover:line-clamp-none">
                Chelsea Arantza Phoebe adalah seorang mahasiswa semester 2 di
                Universitas Multimedia Nusantara, jurusan Informatika. Dia
                adalah seorang perempuan yang berbakat dalam bermain musik dan
                memiliki ketertarikan yang besar dalam pembuatan web.
                Kreativitasnya tak terbatas, dan dia selalu bersemangat untuk
                menggabungkan kecintaannya pada musik dengan keahliannya dalam
                teknologi untuk menciptakan web yang menarik dan inovatif.
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
          <div className="bg-[url('/public/images/austin.png')] bg-cover flex items-end group bg-center">
            <div className="bg-gradient-to-b from-[#091426]/0 to-[#091426] p-4">
              <p className="text-3xl text-white">Austin</p>
              <p className="text-xl font-semibold text-white">00000096252</p>
              <p className="text-sm font-normal text-white line-clamp-2 group-hover:line-clamp-none">
                Austin Gilbert Liwanto adalah seorang mahasiswa semester 2
                jurusan Informatika di Universitas Multimedia Nusantara. Dia
                merupakan orang yang penuh semangat dan ketertarikan dalam
                menjelajahi pengalaman baru baik itu hal akademik maupun
                non-akademik.
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
          <div className="bg-[url('/public/images/feli.png')] bg-cover flex items-end group bg-center">
            <div className="bg-gradient-to-b from-[#091426]/0 to-[#091426] p-4">
              <p className="text-3xl text-white">Felicia</p>
              <p className="text-xl font-semibold text-white">00000096911</p>
              <p className="text-sm font-normal text-white line-clamp-2 group-hover:line-clamp-none">
                Felicia Annabel adalah seorang mahasiswi semester 2 jurusan
                Informatika di Universitas Multimedia Nusantara, di dalam waktu
                yang bersamaan menjalani karirnya dalam Marketing yaitu Social
                Media Specialist. Dia orang yang suka bekerja dan
                melakukan petualangan.
              </p>
              <div className="flex gap-6 md:gap-4 mt-4">
                <a href="https://www.instagram.com/flciar/" target="_blank">
                  <Icon
                    icon="mdi:instagram"
                    className="w-[30px] h-[30px]"
                    style={{ color: "white" }}
                  />
                </a>
                <a href="https://www.instagram.com/flciar/">
                  <Icon
                    icon="mdi:twitter"
                    className="w-[30px] h-[30px]"
                    style={{ color: "white" }}
                  />
                </a>
                <a href="https://www.instagram.com/flciar/">
                  <Icon
                    icon="mdi:youtube"
                    className="w-[30px] h-[30px]"
                    style={{ color: "white" }}
                  />
                </a>
                <a href="https://www.instagram.com/flciar/">
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
          <div className="bg-[url('/public/images/josh.png')] bg-cover flex items-end group bg-center">
            <div className="bg-gradient-to-b from-[#091426]/0 to-[#091426] p-4">
              <p className="text-3xl text-white">Joshua</p>
              <p className="text-xl font-semibold text-white">00000094196</p>
              <p className="text-sm font-normal text-white line-clamp-2 group-hover:line-clamp-none">
                Joshua wijaya adalah seorang mahasiswa semester 2 jurusan
                Informatika di Universitas Multimedia Nusantara. Dia merupakan
                orang yang suka berolahraga dan beraktivitas fisik.
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
      </section>

      <Footer />
    </>
  );
};

export default AboutUs;
