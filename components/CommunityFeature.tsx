import React from 'react';
import { Users, Zap, Search, Trophy } from 'lucide-react';
// import { CommunityScreenMock, SparringScreenMock } from './MobileAppPreview';

import CommunityImg from './images/community.png';
import SparImg from './images/spar.png';


export const CommunityFeature: React.FC = () => {
  return (
    <section id="community" className="py-24 bg-gradient-to-b from-white to-red-50 overflow-hidden relative">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-100 rounded-full blur-[120px] opacity-40 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-12">
          
           {/* Visual Mockups Side - Overlapping Phones */}
           <div className="flex-1 w-full flex justify-center lg:justify-end relative min-h-[500px] md:min-h-[600px]">
             
             {/* Phone 1: Sparring (Back/Left) */}
             <div className="absolute left-0 sm:left-10 top-12 transform -rotate-6 scale-90 opacity-90 hover:scale-100 hover:rotate-0 hover:z-30 hover:opacity-100 transition-all duration-500 z-10">
                <div className="w-[280px] h-[600px] bg-[#483d8b] rounded-[2.5rem] border-[6px] border-[#333] overflow-hidden shadow-2xl">
                   <img
                    src={SparImg}
                    alt="Sparring Feature"
                    className="w-full h-full object-cover"
                    />

                </div>
             </div>

             {/* Phone 2: Community (Front/Right) */}
             <div className="absolute right-0 sm:right-10 top-0 transform rotate-3 hover:rotate-0 transition-transform duration-500 z-20">
                <div className="w-[280px] h-[600px] bg-[#3D2525] rounded-[2.5rem] border-[6px] border-[#333] overflow-hidden shadow-2xl shadow-red-900/20">
                   <img
                    src={CommunityImg}
                    alt="Community Feature"
                    className="w-full h-full object-cover"
                    />

                </div>
             </div>

             {/* Floating Badge */}
             <div className="absolute bottom-20 right-1/2 transform translate-x-1/2 z-30 bg-white p-4 rounded-2xl shadow-xl border border-red-100 animate-bounce-slow flex items-center gap-3">
                 <div className="bg-red-50 p-2 rounded-full">
                    <Trophy className="text-red-500 w-6 h-6" />
                 </div>
                 <div>
                    <p className="text-[10px] text-gray-400 font-bold uppercase">Komunitas Aktif</p>
                    <p className="text-sm font-bold text-gray-900">1,200+ Member</p>
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