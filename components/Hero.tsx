import React from 'react';
import { PlayCircle, ArrowRight, Star } from 'lucide-react';
import { Button } from './Button';
import { HomeScreenMock, ScheduleScreenMock, SplashLoginMock } from './MobileAppPreview';

import SplashImg from './images/splash.png';
import RentImg from './images/rent.png';
import LandingImg from './images/landing.png';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-bg-ghost">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-[800px] h-[800px] bg-blue-100 rounded-full blur-[100px] z-0 opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-accent-wheat/20 rounded-full blur-3xl z-0 pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left z-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full mb-6 font-semibold text-sm animate-fade-in-up border border-primary/20">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
              </span>
              #1 Ekosistem Olahraga Digital
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-extrabold text-text-main leading-[1.1] mb-6 tracking-tight">
              Mau olahraga? <br />
              <span className="text-primary italic">
                LapangIn! aja!
              </span>
            </h1>
            
            <p className="text-lg text-text-secondary leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
              Solusi satu aplikasi untuk <strong>booking lapangan</strong>, <strong>sewa pelatih</strong>, dan <strong>cari teman sparring</strong> di Jabodetabek. Tinggalkan cara lama yang ribet, beralih ke LapangIn!
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-8">
              <Button size="lg" className="w-full sm:w-auto group shadow-primary/30">
                Unduh Sekarang
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto group bg-white hover:bg-gray-50 border-gray-200"
                onClick={() =>
                  window.open(
                    'https://www.figma.com/proto/81nydAaHMNwvLEGN0lw2Fk/PPD?node-id=319-730&t=NVtEnqqsNP2SYIWc-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=319%3A730',
                    '_blank'
                  )
                }
              >
                <PlayCircle className="mr-2 w-5 h-5" />
                Cara Kerja
              </Button>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-4">
               <div className="flex -space-x-3">
                  {[1,2,3,4].map(i => (
                    <img key={i} src={`https://picsum.photos/seed/${i + 50}/100/100`} className="w-10 h-10 rounded-full border-2 border-white" alt="User" />
                  ))}
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-600">+2k</div>
               </div>
               <div className="text-sm">
                  <div className="flex items-center gap-1 text-state-yellow">
                     <Star size={14} fill="currentColor" />
                     <Star size={14} fill="currentColor" />
                     <Star size={14} fill="currentColor" />
                     <Star size={14} fill="currentColor" />
                     <Star size={14} fill="currentColor" />
                  </div>
                  <p className="text-text-secondary font-medium">Dipercaya komunitas olahraga</p>
               </div>
            </div>
          </div>

          {/* 3-Phone Mockup Composition */}
          <div className="flex-1 w-full flex justify-center items-center relative min-h-[500px] lg:min-h-[700px]">
             {/* Left Phone (Splash) - Rotated & Back */}
             <div className="absolute left-0 lg:left-10 top-20 transform -rotate-12 scale-90 opacity-90 z-10 hover:z-30 transition-all duration-500 hover:scale-100 hover:rotate-0 hidden md:block">
              <div className="w-[280px] h-[580px] bg-black rounded-[2.5rem] border-[6px] border-gray-900 overflow-hidden shadow-2xl">
                <img
                  src={SplashImg}
                  alt="Splash Screen"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>


             {/* Right Phone (Schedule) - Rotated & Back */}
             <div className="absolute right-0 lg:right-10 top-20 transform rotate-12 scale-90 opacity-90 z-10 hover:z-30 transition-all duration-500 hover:scale-100 hover:rotate-0 hidden md:block">
              <div className="w-[280px] h-[580px] bg-black rounded-[2.5rem] border-[6px] border-gray-900 overflow-hidden shadow-2xl">
                <img
                  src={RentImg}
                  alt="Rent Screen"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>


             {/* Center Phone (Home) - Main Focus */}
             <div className="relative z-20 transform hover:-translate-y-4 transition-transform duration-500">
              <div className="w-[300px] h-[620px] bg-white rounded-[3rem] border-[8px] border-gray-900 overflow-hidden shadow-2xl shadow-blue-900/30">
                
                {/* Notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-28 h-7 bg-gray-900 rounded-b-xl z-50" />

                <img
                  src={LandingImg}
                  alt="Landing Screen"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Rating */}
              <div className="absolute -left-12 bottom-32 bg-white/90 backdrop-blur-md p-3 rounded-xl shadow-lg border border-gray-100 animate-bounce-slow hidden sm:block">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                    <Star size={20} fill="currentColor" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-bold">Rating Venue</p>
                    <p className="text-lg font-bold text-text-main">4.9/5.0</p>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
};