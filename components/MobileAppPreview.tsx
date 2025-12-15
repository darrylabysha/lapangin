import React from 'react';
import { MapPin, User, Search, Home, Calendar, Layout, Star, ChevronRight, ArrowLeft, Mail, Lock } from 'lucide-react';
import { Logo } from './Logo';

export const SplashLoginMock = () => {
  return (
    <div className="w-full h-full bg-primary flex flex-col font-sans overflow-hidden relative">
       {/* Background pattern */}
       <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
       
       <div className="flex-1 flex flex-col items-center justify-center p-8 z-10">
          <div className="mb-8 scale-125">
            <Logo variant="white" />
          </div>
          <p className="text-blue-100 text-center text-sm mb-12">
            Solusi satu aplikasi untuk semua kebutuhan olahragamu.
          </p>

          <div className="w-full space-y-4">
             <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-3 flex items-center gap-3">
                <Mail className="text-blue-200 w-5 h-5" />
                <div className="w-full h-2 bg-white/20 rounded-full w-2/3"></div>
             </div>
             <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-3 flex items-center gap-3">
                <Lock className="text-blue-200 w-5 h-5" />
                <div className="w-full h-2 bg-white/20 rounded-full w-1/2"></div>
             </div>
             <button className="w-full bg-white text-primary font-bold py-3 rounded-xl shadow-lg mt-4">
                Masuk
             </button>
             <p className="text-center text-white/60 text-xs mt-4">
                Belum punya akun? <span className="text-white font-bold">Daftar</span>
             </p>
          </div>
       </div>
    </div>
  );
};

export const HomeScreenMock = () => {
  return (
    <div className="w-full h-full bg-bg-ghost flex flex-col font-sans overflow-hidden">
      {/* Header */}
      <div className="bg-primary p-6 pb-8 pt-12 text-white relative">
        <div className="flex justify-between items-start mb-6">
          <div>
            <p className="text-blue-100 text-sm mb-1">Selamat datang kembali,</p>
            <h3 className="text-2xl font-bold">Lebron James</h3>
          </div>
          <div className="w-12 h-12 rounded-full border-2 border-white/30 overflow-hidden bg-blue-800">
            <img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=200&auto=format&fit=crop" alt="Profile" className="w-full h-full object-cover" />
          </div>
        </div>
        
        <div className="absolute -bottom-6 left-6 right-6">
           <div className="bg-white rounded-xl shadow-lg p-3 flex items-center gap-3">
             <Search className="text-gray-400 w-5 h-5" />
             <input type="text" placeholder="Cari lapangan..." className="flex-1 text-sm outline-none text-text-main placeholder:text-gray-400" />
           </div>
        </div>
      </div>

      {/* Body */}
      <div className="flex-1 pt-10 px-6 overflow-hidden flex flex-col">
        {/* Menu Grid */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center gap-3 aspect-square hover:bg-gray-50 transition-colors cursor-pointer">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white shadow-lg shadow-primary/30">
              <MapPin size={24} />
            </div>
            <span className="font-bold text-text-main text-sm">Sewa Lapangan</span>
          </div>
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center gap-3 aspect-square hover:bg-gray-50 transition-colors cursor-pointer">
            <div className="w-12 h-12 bg-text-secondary rounded-full flex items-center justify-center text-white shadow-lg shadow-gray-400/30">
              <User size={24} />
            </div>
            <span className="font-bold text-text-main text-sm">Sewa Pelatih</span>
          </div>
        </div>

        {/* Recommendations */}
        <div className="flex items-center justify-between mb-4">
          <h4 className="font-bold text-text-main">Rekomendasi</h4>
          <span className="text-primary text-xs font-semibold">Lihat Semua</span>
        </div>
        
        <div className="bg-white rounded-2xl p-3 shadow-sm border border-gray-100 mb-4">
           <div className="h-32 rounded-xl overflow-hidden mb-3 relative">
             <img src="https://images.unsplash.com/photo-1574629810360-7efbbe436cd9?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover" alt="Futsal" />
             <span className="absolute top-2 right-2 bg-white px-2 py-1 rounded-lg text-xs font-bold shadow-sm">Futsal</span>
           </div>
           <div className="flex justify-between items-start">
             <div>
               <h5 className="font-bold text-text-main">GOR Pancasila</h5>
               <div className="flex items-center gap-1 text-gray-400 text-xs mt-1">
                 <MapPin size={10} />
                 <span>Tebet, Jaksel</span>
               </div>
             </div>
             <div className="flex items-center gap-1 bg-blue-50 px-2 py-1 rounded-lg">
               <Star size={12} className="text-state-yellow fill-state-yellow" />
               <span className="text-xs font-bold text-primary">4.8</span>
             </div>
           </div>
        </div>
      </div>

      {/* Bottom Nav */}
      <div className="bg-white border-t border-gray-100 p-4 flex justify-around items-center text-xs font-medium text-gray-400 relative z-10">
        <div className="flex flex-col items-center gap-1 text-primary">
          <Home size={20} />
          <span>Home</span>
        </div>
        <div className="flex flex-col items-center gap-1 hover:text-primary transition-colors">
          <Layout size={20} />
          <span>Jadwal</span>
        </div>
        <div className="flex flex-col items-center gap-1 hover:text-primary transition-colors">
           <div className="w-8 h-8 -mt-4 bg-primary rounded-full flex items-center justify-center text-white ring-4 ring-white shadow-lg">
              <span className="text-[10px] font-bold">VS</span>
           </div>
        </div>
        <div className="flex flex-col items-center gap-1 hover:text-primary transition-colors">
          <User size={20} />
          <span>Profil</span>
        </div>
      </div>
    </div>
  );
};

export const ScheduleScreenMock = () => {
  return (
    <div className="w-full h-full bg-[#222222] flex flex-col font-sans overflow-hidden text-white">
      {/* Header */}
      <div className="bg-primary p-6 pb-6 pt-12 relative rounded-b-3xl">
        <div className="flex items-center gap-4 mb-4">
          <button className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
             <ArrowLeft size={20} />
          </button>
        </div>
        <h3 className="text-2xl font-bold mb-1">Pilih Jadwal</h3>
        <p className="text-blue-100 text-sm">Brickhouse Court</p>
      </div>

      <div className="p-6 overflow-y-auto">
        {/* Date Selector */}
        <div className="flex items-center gap-2 mb-6 text-sm font-bold text-gray-300">
           <Calendar size={18} className="text-primary" />
           <span>Pilih Tanggal</span>
        </div>
        <div className="flex gap-3 mb-8 overflow-x-auto pb-2 scrollbar-hide">
           <div className="bg-blue-100 border-2 border-primary rounded-xl p-3 min-w-[80px] text-center shrink-0">
              <p className="text-primary text-xs mb-1">Hari Ini</p>
              <p className="text-primary font-bold">3 Des</p>
           </div>
           <div className="border border-gray-600 rounded-xl p-3 min-w-[80px] text-center shrink-0">
              <p className="text-gray-400 text-xs mb-1">Besok</p>
              <p className="text-white font-bold">4 Des</p>
           </div>
           <div className="border border-gray-600 rounded-xl p-3 min-w-[80px] text-center shrink-0">
              <p className="text-gray-400 text-xs mb-1">Lusa</p>
              <p className="text-white font-bold">5 Des</p>
           </div>
        </div>

        {/* Time Selector */}
        <div className="flex items-center gap-2 mb-4 text-sm font-bold text-gray-300">
           <div className="w-4 h-4 rounded-full border border-primary flex items-center justify-center">
             <div className="w-2 h-2 bg-primary rounded-full"></div>
           </div>
           <span>Pilih Jam</span>
        </div>
        
        {/* Legend */}
        <div className="flex gap-4 mb-4 text-xs">
           <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-white rounded-sm"></div>
              <span className="text-gray-300">Ada</span>
           </div>
           <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-gray-600 rounded-sm"></div>
              <span className="text-gray-300">Full</span>
           </div>
           <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-primary rounded-sm"></div>
              <span className="text-gray-300">Pilih</span>
           </div>
        </div>

        <div className="grid grid-cols-4 gap-2 mb-8">
           {['08:00','09:00','10:00','11:00','12:00','13:00','14:00','15:00'].map((time, i) => {
              const status = i === 2 || i === 6 ? 'full' : (i === 0 || i === 1 ? 'selected' : 'available');
              let bg = 'bg-white text-gray-900';
              if (status === 'full') bg = 'bg-gray-600 text-gray-400 cursor-not-allowed';
              if (status === 'selected') bg = 'bg-primary text-white ring-2 ring-primary ring-offset-2 ring-offset-[#222]';
              
              return (
                 <div key={time} className={`${bg} rounded-lg py-2 text-center text-xs font-bold transition-all`}>
                    {time}
                 </div>
              )
           })}
        </div>

        {/* Summary */}
        <div className="bg-white rounded-2xl p-4 text-gray-900 mb-20">
           <h4 className="font-bold text-sm mb-4">Detail Jadwal</h4>
           <div className="flex justify-between font-bold text-sm">
              <span>Total</span>
              <span>Rp300.000</span>
           </div>
        </div>
      </div>
    </div>
  );
};