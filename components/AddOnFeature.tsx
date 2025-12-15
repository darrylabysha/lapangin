import React from 'react';
import { ShoppingBag, Camera, Users } from 'lucide-react';
import AddOnImg from './images/addon.png';

export const AddOnFeature: React.FC = () => {
  return (
    <section className="py-24 bg-primary overflow-hidden relative">
      {/* Texture Overlay */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Text Side */}
          <div className="flex-1 order-2 lg:order-1">
             <h2 className="text-blue-200 font-bold tracking-wider uppercase text-sm mb-3">Fitur Add-Ons</h2>
             <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-6 leading-tight">
               Lupa Bawa Bola? <br /> Butuh Wasit? Beres!
             </h3>
             <p className="text-blue-100 text-lg mb-8 leading-relaxed">
               LapangIn! bukan sekadar booking tempat. Lengkapi pertandinganmu dengan berbagai fasilitas tambahan langsung dari aplikasi.
             </p>

             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-lg hover:bg-white/20 transition-all group">
                   <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary mb-4 shadow-sm group-hover:scale-110 transition-transform">
                      <ShoppingBag size={24} />
                   </div>
                   <h4 className="font-bold text-lg mb-2 text-white">Sewa Peralatan</h4>
                   <p className="text-sm text-blue-100">Sewa bola, raket, sepatu, hingga jersey tim langsung di venue.</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-lg hover:bg-white/20 transition-all group">
                   <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary mb-4 shadow-sm group-hover:scale-110 transition-transform">
                      <Users size={24} />
                   </div>
                   <h4 className="font-bold text-lg mb-2 text-white">Jasa Official</h4>
                   <p className="text-sm text-blue-100">Hadirkan wasit berlisensi, ball boy, scorekeeper, hingga medis.</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-lg hover:bg-white/20 transition-all sm:col-span-2 group">
                   <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary mb-4 shadow-sm group-hover:scale-110 transition-transform">
                      <Camera size={24} />
                   </div>
                   <h4 className="font-bold text-lg mb-2 text-white">Dokumentasi</h4>
                   <p className="text-sm text-blue-100">Abadikan momen pertandingan serumu dengan fotografer olahraga profesional.</p>
                </div>
             </div>
          </div>

          {/* Mockup Side */}
          <div className="flex-1 w-full flex justify-center lg:justify-start relative order-1 lg:order-2">
             <div className="absolute inset-0 bg-gradient-to-tl from-white/20 to-transparent rounded-full blur-[100px] opacity-30 pointer-events-none"></div>
             
             <div className="relative z-10 w-[300px] h-[620px] bg-white rounded-[3rem] border-[8px] border-black-900 overflow-hidden shadow-2xl shadow-black/20 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-28 h-7 bg-black-900 rounded-b-xl z-50"></div>
                <img
                  src={AddOnImg}
                  alt="Add On Feature Screen"
                  className="w-full h-full object-cover"
                  />
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};