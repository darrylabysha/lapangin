import React from 'react';
import { Users, Zap, Search, Trophy } from 'lucide-react';

import CommunityImg from './images/community.png';
import SparImg from './images/spar.png';


export const CommunityFeature: React.FC = () => {
  return (
    <section id="community" className="py-24 bg-gradient-to-b from-white to-red-50 overflow-hidden relative">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-100 rounded-full blur-[120px] opacity-40 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-12">
          
           {/* Visual Mockups Side - Side-by-side / Fanned out */}
           <div className="flex-1 w-full flex justify-center items-center lg:justify-end relative min-h-[400px] sm:min-h-[550px] md:min-h-[600px]">
             
             {/* Phone 1: Sparring (Back/Left) */}
             <div className="absolute left-1/2 top-1/2 lg:top-12 lg:left-10
                             transform -translate-x-[75%] -translate-y-1/2 lg:translate-x-0 lg:translate-y-0
                             -rotate-12 lg:-rotate-6 
                             scale-[0.6] sm:scale-75 lg:scale-90 
                             opacity-90 
                             z-10 origin-center lg:origin-bottom transition-all duration-500 hover:z-30 hover:opacity-100 hover:scale-[0.65] lg:hover:scale-100">
                <div className="w-[280px] h-[580px] bg-[#483d8b] rounded-[2.5rem] border-[6px] border-[#333] overflow-hidden shadow-2xl">
                   <img
                    src={SparImg}
                    alt="Sparring Feature"
                    className="w-full h-full object-cover"
                    />
                </div>
             </div>

             {/* Phone 2: Community (Front/Right) */}
             <div className="absolute left-1/2 top-1/2 lg:top-0 lg:left-auto lg:right-10
                             transform -translate-x-[25%] -translate-y-1/2 lg:translate-x-0 lg:translate-y-0
                             rotate-6 lg:rotate-3 
                             scale-[0.6] sm:scale-75 lg:scale-90 
                             z-20 origin-center lg:origin-bottom transition-transform duration-500 hover:z-30 hover:scale-[0.65] lg:hover:scale-100">
                <div className="w-[280px] h-[580px] bg-[#3D2525] rounded-[2.5rem] border-[6px] border-[#333] overflow-hidden shadow-2xl shadow-red-900/20">
                   <img
                    src={CommunityImg}
                    alt="Community Feature"
                    className="w-full h-full object-cover"
                    />
                </div>
             </div>

             {/* Floating Badge - Centered below on mobile */}
             <div className="absolute bottom-4 sm:bottom-20 left-1/2 lg:right-1/2 
                             transform -translate-x-1/2 lg:translate-x-1/2 
                             z-30 bg-white p-3 sm:p-4 rounded-2xl shadow-xl border border-red-100 animate-bounce-slow flex items-center gap-3 w-max max-w-[90%]">
                 <div className="bg-red-50 p-2 rounded-full shrink-0">
                    <Trophy className="text-red-500 w-5 h-5 sm:w-6 sm:h-6" />
                 </div>
                 <div>
                    <p className="text-[10px] text-gray-400 font-bold uppercase">Komunitas Aktif</p>
                    <p className="text-sm font-bold text-text-main">1,200+ Member</p>
                 </div>
             </div>
          </div>

          {/* Text Content Side */}
          <div className="flex-1 lg:pl-10">
             <h2 className="text-[#5C2E2E] font-bold tracking-wider uppercase text-sm mb-3">Komunitas & Sparring</h2>
             <h3 className="text-3xl md:text-4xl font-extrabold text-text-main mb-6 leading-tight">
               Cari Lawan Tanding? <br />
               <span className="text-[#E53E3E]">Gabung Klub Favoritmu!</span>
             </h3>
             <p className="text-text-secondary text-lg mb-8 leading-relaxed">
               Olahraga lebih seru bareng teman baru. Temukan lawan sparring yang seimbang atau gabung komunitas olahraga di sekitarmu.
             </p>

             <div className="space-y-8">
                <div className="flex gap-5">
                   <div className="w-12 h-12 bg-red-100 rounded-2xl flex items-center justify-center text-red-600 shrink-0">
                      <Zap size={24} />
                   </div>
                   <div>
                      <h4 className="font-bold text-lg mb-2 text-gray-900">Cari Lawan Sparring</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">
                         Buat "Open Sparring" atau gabung ke pertandingan yang sudah ada. Filter berdasarkan level skill (Fun Match, Competitive, Pemula).
                      </p>
                   </div>
                </div>

                <div className="flex gap-5">
                   <div className="w-12 h-12 bg-red-100 rounded-2xl flex items-center justify-center text-red-600 shrink-0">
                      <Users size={24} />
                   </div>
                   <div>
                      <h4 className="font-bold text-lg mb-2 text-gray-900">Gabung Komunitas</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">
                         Temukan klub olahraga lokal. Dari "Purr Tennis Club" sampai komunitas sepeda santai. Lihat jadwal latihan rutin dan join langsung.
                      </p>
                   </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};