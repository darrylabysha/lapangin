import React from 'react';

export const Stats: React.FC = () => {
  const stats = [
    { label: 'Venue Olahraga', value: '500+', desc: 'Tersebar di Jabodetabek' },
    { label: 'Pengguna Aktif', value: '10k+', desc: 'Siap diajak sparring' },
    { label: 'Pelatih Pro', value: '150+', desc: 'Tersertifikasi & Berpengalaman' },
    { label: 'Komunitas', value: '50+', desc: 'Bergabung sekarang' },
  ];

  return (
    <section className="bg-primary py-12 border-y border-white/10 relative overflow-hidden">
       {/* Pattern overlay */}
       <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
       
       <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white divide-x divide-white/20">
             {stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col items-center px-4">
                   <h3 className="text-4xl lg:text-5xl font-extrabold mb-2">{stat.value}</h3>
                   <p className="text-lg font-bold text-blue-200 mb-1">{stat.label}</p>
                   <p className="text-xs text-blue-100/70">{stat.desc}</p>
                </div>
             ))}
          </div>
       </div>
    </section>
  );
};