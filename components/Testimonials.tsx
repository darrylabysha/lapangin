import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Luhur Billy",
    role: "Mahasiswa & Ketua UKM Futsal",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=200&auto=format&fit=crop",
    quote: "Fitur sparring-nya juara! Dulu susah cari lawan tanding buat UKM kampus, sekarang tinggal buat open sparring, langsung dapet lawan seimbang.",
  },
  {
    name: "Wati Setiawan",
    role: "Ibu Rumah Tangga",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
    quote: "Anak saya mau les bulutangkis tapi saya bingung cari pelatih di mana. Di LapangIn bisa filter pelatih sesuai domisili dan lihat sertifikasinya.",
  },
  {
    name: "Andi Pratama",
    role: "Karyawan Swasta",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    quote: "Pulang kerja pengen main basket tapi males ngecek lapangan satu-satu. LapangIn ngebantu banget liat jadwal real-time, jadi ga takut double booking.",
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-bg-ghost overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
           <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-3">Apa Kata Mereka?</h2>
           <h3 className="text-3xl md:text-4xl font-extrabold text-text-main">
             Pengalaman Pengguna LapangIn!
           </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {testimonials.map((t, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 relative hover:-translate-y-2 transition-transform duration-300">
                 <Quote className="absolute top-8 right-8 text-primary/10 w-16 h-16 transform rotate-12" fill="currentColor" />
                 
                 <div className="flex items-center gap-4 mb-6 relative z-10">
                    <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-primary/20">
                       <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                       <h4 className="font-bold text-lg text-text-main leading-tight">{t.name}</h4>
                       <p className="text-xs text-primary font-medium">{t.role}</p>
                    </div>
                 </div>
                 
                 <p className="text-text-secondary leading-relaxed italic relative z-10">
                    "{t.quote}"
                 </p>
              </div>
           ))}
        </div>
      </div>
    </section>
  );
};