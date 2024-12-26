// pages/index.js

import Link from 'next/link';

const HomePage = () => {
  return (
    <div>
      <h1>Selamat datang di Website Guest House</h1>
      <p>Silakan pilih menu berikut:</p>
      <ul>
        <li><Link href="/booking">Pemesanan Kamar</Link></li>
        <li><Link href="/reports">Laporan Pemesanan</Link></li>
      </ul>
    </div>
  );
};

export default HomePage;
