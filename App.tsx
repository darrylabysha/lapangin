import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Features } from './components/Features';
import { CoachFeature } from './components/CoachFeature';
import { AddOnFeature } from './components/AddOnFeature';
import { Testimonials } from './components/Testimonials';
import { Team } from './components/Team';
import { Footer } from './components/Footer';
import { ScheduleScreenMock } from './components/MobileAppPreview';

import RentImg from './components/images/rent.png';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-text-main bg-bg-ghost">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Stats />
        <Features />

        {/* How It Works Section */}
        <section id="how-it-works" className="py-24 bg-[#111] text-white overflow-hidden relative">
           <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary rounded-full blur-[150px] opacity-20 pointer-events-none"></div>
           <div className="container mx-auto px-6 lg:px-12 relative z-10">
              <div className="flex flex-col lg:flex-row items-center gap-16">
                 {/* Visual Mockup */}
                 <div className="flex-1 w-full flex justify-center order-2 lg:order-1">
                    <div className="w-[320px] h-[680px] bg-[#222] rounded-[2.5rem] border-[8px] border-gray-800 overflow-hidden shadow-2xl relative transform rotate-3 hover:rotate-0 transition-transform duration-500">
                       {/* Notch */}
                       <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-800 rounded-b-xl z-50"></div>
                       <img
                        src={RentImg}
                        alt="Rent Feature Screen"
                        className="w-full h-full object-cover"
                        />
                    </div>
                 </div>

                 {/* Content */}
                 <div className="flex-1 order-1 lg:order-2">
                    <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-3">Cara Kerja</h2>
                    <h3 className="text-3xl md:text-4xl font-extrabold mb-8">
                       Booking Lapangan Hanya Dalam 3 Langkah
                    </h3>
                    
                    <div className="space-y-12">
                       <div className="flex gap-6 group">
                          <div className="w-14 h-14 rounded-2xl bg-gray-800 flex items-center justify-center text-primary font-bold text-xl shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">1</div>
                          <div>
                             <h4 className="text-xl font-bold mb-2 text-white">Cari Lapangan</h4>
                             <p className="text-gray-400 leading-relaxed">Temukan lapangan terdekat atau favoritmu dengan fitur pencarian pintar berdasarkan lokasi dan jenis olahraga.</p>
                          </div>
                       </div>
                       <div className="flex gap-6 group">
                          <div className="w-14 h-14 rounded-2xl bg-gray-800 flex items-center justify-center text-primary font-bold text-xl shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">2</div>
                          <div>
                             <h4 className="text-xl font-bold mb-2 text-white">Pilih Jadwal</h4>
                             <p className="text-gray-400 leading-relaxed">Lihat ketersediaan real-time. Slot abu-abu berarti penuh, slot putih berarti tersedia. Klik untuk memilih.</p>
                          </div>
                       </div>
                       <div className="flex gap-6 group">
                          <div className="w-14 h-14 rounded-2xl bg-gray-800 flex items-center justify-center text-primary font-bold text-xl shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">3</div>
                          <div>
                             <h4 className="text-xl font-bold mb-2 text-white">Mainkan!</h4>
                             <p className="text-gray-400 leading-relaxed">Lakukan pembayaran aman via E-Wallet/QRIS. Tiket digital langsung terbit. Saatnya bertanding!</p>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>
        
        {/* New Sections */}
        <CoachFeature />
        <AddOnFeature />
        

        <Testimonials />

        {/* CTA Strip */}
        <section className="bg-primary py-20 relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
           {/* Decor Circles */}
           <div className="absolute -left-20 -bottom-20 w-60 h-60 bg-white/10 rounded-full blur-2xl"></div>
           <div className="absolute -right-20 -top-20 w-60 h-60 bg-white/10 rounded-full blur-2xl"></div>

           <div className="container mx-auto px-6 text-center relative z-10">
              <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">Siap Untuk Pertandingan Berikutnya?</h2>
              <p className="text-blue-100 mb-10 max-w-2xl mx-auto text-lg">Bergabunglah dengan ribuan penggiat olahraga lainnya. Download aplikasi LapangIn! sekarang.</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                 <button className="bg-white text-primary font-bold py-4 px-8 rounded-xl shadow-xl hover:bg-gray-100 hover:scale-105 transition-all flex items-center justify-center gap-3">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.23-3.14-2.43-1.7-2.45-3-6.24-1.22-9.33 1.77-3.09 4.93-3.77 4.93-3.77 1.32-.05 2.55.88 3.35.88.8 0 2.3-.85 3.86-.73.66.03 2.52.26 3.7 2-.03.02-2.23 1.3-2.2 3.85.02 2.55 2.23 3.75 2.23 3.75zM13 3.5c.73-.83 1.21-1.96 1.07-3.09-1.05.06-2.3.7-3.03 1.58-.67.77-1.24 2.03-1.09 3.12 1.17.09 2.34-.78 3.05-1.61z"/></svg>
                    <div className="text-left">
                       <p className="text-[10px] leading-none uppercase">Download on the</p>
                       <p className="text-sm leading-none font-bold">App Store</p>
                    </div>
                 </button>
                 <button className="bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-xl hover:bg-white/10 hover:scale-105 transition-all flex items-center justify-center gap-3">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M3,20.5V3.5C3,2.91,3.34,2.39,3.84,2.15L13.69,12L3.84,21.85C3.34,21.6,3,21.09,3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08,20.75,11.5,20.75,12C20.75,12.5,20.5,12.92,20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" /></svg>
                    <div className="text-left">
                       <p className="text-[10px] leading-none uppercase">Get it on</p>
                       <p className="text-sm leading-none font-bold">Google Play</p>
                    </div>
                 </button>
              </div>
           </div>
        </section>

        <Team />
      </main>
      <Footer />
    </div>
  );
}

export default App;