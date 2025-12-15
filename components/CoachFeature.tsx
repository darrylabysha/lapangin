import React from 'react';
import { CheckCircle, Award, Star } from 'lucide-react';
// import { CoachScreenMock } from './MobileAppPreview';

import CoachImg from './images/coach.png';

export const CoachFeature: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Mockup Side */}
          <div className="flex-1 w-full flex justify-center lg:justify-end relative">
             <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-transparent rounded-full blur-[100px] opacity-60 pointer-events-none"></div>
             
             <div className="relative z-10 w-[300px] h-[620px] bg-white rounded-[3rem] border-[8px] border-gray-900 overflow-hidden shadow-2xl shadow-blue-900/20 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-28 h-7 bg-gray-900 rounded-b-xl z-50"></div>
                <img
                src={CoachImg}
                alt="Coach Feature Screen"
                className="w-full h-full object-cover"
                />
             </div>

             {/* Floating Badge */}
             <div className="absolute -left-4 bottom-20 bg-white p-4 rounded-xl shadow-xl border border-gray-100 animate-bounce-slow z-20 hidden sm:block">
                <div className="flex items-center gap-3">
                   <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                      <Award size={24} />
                   </div>
                   <div>
                      <p className="text-xs text-gray-500 font-bold uppercase">Terverifikasi</p>
                      <p className="text-sm font-bold text-text-main">Official Partner</p>
                   </div>
                </div>
             </div>
          </div>

          {/* Text Side */}
          <div className="flex-1">
             <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-3">Sewa Pelatih Profesional</h2>
             <h3 className="text-3xl md:text-4xl font-extrabold text-text-main mb-6 leading-tight">
               Ingin Jago Tapi Ga Tau <br /> Mulai Dari Mana?
             </h3>
             <p className="text-text-secondary text-lg mb-8 leading-relaxed">
               Temukan pelatih berlisensi resmi di sekitarmu. Lihat rating, ulasan, dan sertifikasi mereka secara transparan. Booking sesi latihan privat atau kelompok semudah belanja online.
             </p>

             <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                   <CheckCircle className="text-primary mt-1 shrink-0" size={20} />
                   <span className="text-text-secondary">Pelatih terverifikasi dengan lisensi resmi (AFC, PBSI, dll).</span>
                </li>
                <li className="flex items-start gap-3">
                   <CheckCircle className="text-primary mt-1 shrink-0" size={20} />
                   <span className="text-text-secondary">Jadwal fleksibel sesuai ketersediaan pelatih & lapangan.</span>
                </li>
                <li className="flex items-start gap-3">
                   <CheckCircle className="text-primary mt-1 shrink-0" size={20} />
                   <span className="text-text-secondary">Track record jelas dengan sistem rating & review komunitas.</span>
                </li>
             </ul>
          </div>

        </div>
      </div>
    </section>
  );
};