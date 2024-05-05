import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './CookiePolicy.css';

export default function CookiePolicy() {
  return (
    <div className="cookie-policy-container">
      <Navbar />
      <div className="content">
        <h1>Kebijakan Cookie</h1>
        <p>Selamat datang di situs web kami yang memberikan informasi seputar tempat wisata dan perjalanan di Bali. Kami ingin memberikan informasi mengenai kebijakan penggunaan cookie di situs web kami.</p>
        <ol>
          <li>
            <h2>Penggunaan Cookie</h2>
            <p>
              Kami menggunakan cookie untuk meningkatkan pengalaman pengguna di situs web kami. Cookie adalah file kecil yang disimpan pada perangkat Anda ketika Anda mengunjungi situs web kami. Cookie membantu kami untuk mengenali perangkat Anda dan menyimpan preferensi serta riwayat penggunaan Anda di situs web kami.
            </p>
          </li>
          <li>
            <h2>Jenis Cookie yang Kami Gunakan</h2>
            <p>
              <strong>Cookie Navigasi:</strong> Cookie ini diperlukan untuk memungkinkan Anda mengakses dan menggunakan fitur-fitur dasar di situs web kami, seperti navigasi antar halaman dan akses ke area yang aman.<br />
              <strong>Cookie Analitik:</strong> Kami menggunakan cookie analitik untuk memantau bagaimana pengunjung menggunakan situs web kami, termasuk jumlah pengunjung, halaman yang paling sering dikunjungi, dan waktu yang dihabiskan di setiap halaman. Informasi ini membantu kami untuk memahami minat dan kebutuhan pengguna sehingga kami dapat meningkatkan kualitas konten dan layanan kami.<br />
              <strong>Cookie Fungsionalitas:</strong> Cookie ini memungkinkan situs web kami untuk menyimpan preferensi pengguna seperti bahasa atau pengaturan lainnya, sehingga pengalaman pengguna dapat disesuaikan sesuai dengan preferensi individu.<br />
              <strong>Cookie Pihak Ketiga:</strong> Situs web kami mungkin menggunakan layanan pihak ketiga yang menggunakan cookie untuk menyediakan layanan tertentu, seperti layanan analitik dari Google Analytics. Cookie pihak ketiga ini diatur oleh penyedia layanan tersebut dan bukan oleh kami, dan informasi yang dikumpulkan oleh cookie tersebut diatur oleh kebijakan privasi penyedia layanan.
            </p>
          </li>
          <li>
            <h2>Pengelolaan Cookie</h2>
            <p>
              Anda dapat mengatur preferensi cookie Anda melalui pengaturan browser Anda. Sebagian besar browser mengizinkan Anda untuk menghapus cookie, menolak semua cookie, atau menerima cookie hanya dari situs web tertentu. Namun, perlu diingat bahwa memblokir cookie dapat memengaruhi pengalaman penggunaan situs web kami, dan beberapa fitur mungkin tidak berfungsi dengan baik tanpa cookie.
            </p>
          </li>
          <li>
            <h2>Persetujuan Anda</h2>
            <p>
              Dengan melanjutkan penggunaan situs web kami, Anda setuju dengan penggunaan cookie sesuai dengan kebijakan ini. Jika Anda tidak setuju dengan penggunaan cookie, Anda dapat mengatur preferensi cookie Anda seperti yang dijelaskan di atas atau berhenti menggunakan situs web kami.
            </p>
          </li>
          <li>
            <h2>Perubahan Kebijakan</h2>
            <p>
              Kami dapat mengubah kebijakan cookie ini dari waktu ke waktu dengan memperbarui halaman ini. Kami menyarankan Anda untuk secara berkala memeriksa halaman ini untuk memastikan bahwa Anda memahami kebijakan cookie kami yang terbaru.
            </p>
          </li>
        </ol>
        <p>
          Jika Anda memiliki pertanyaan atau kekhawatiran mengenai kebijakan cookie kami, jangan ragu untuk menghubungi kami melalui informasi kontak yang tersedia di situs web kami.
        </p>
        <p>
          Terima kasih atas kunjungan Anda dan kami berharap Anda menikmati pengalaman menjelajahi situs web kami!
        </p>
      </div>
      <Footer />
    </div>
  );
}
