import React from 'react';
import { Feature } from '../types';
import { MapPin, Search, Users, UserCheck, ShoppingBag } from 'lucide-react';

const featuresData: Feature[] = [
  {
    id: '1',
    title: 'Booking Lapangan',
    description: 'Akses ribuan lapangan olahraga di Jabodetabek dengan status ketersediaan real-time.',
    icon: MapPin,
  },
  {
    id: '2',
    title: 'Sewa Pelatih Pro',
    description: 'Tingkatkan skill dengan memesan sesi latihan bersama pelatih profesional terverifikasi.',
    icon: UserCheck,
  },
  {
    id: '3',
    title: 'Komunitas & Sparring',
    description: 'Cari lawan tanding seimbang atau teman bermain baru di sekitarmu dengan mudah.',
    icon: Users,
  },
  {
    id: '4',
    title: 'Sewa Alat',
    description: 'Tidak punya raket atau bola? Sewa perlengkapan langsung saat booking lapangan.',
    icon: ShoppingBag,
  },
];

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-white relative">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-3">Kenapa LapangIn?</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-text-main mb-6">
            Ekosistem Olahraga Terlengkap
          </h3>
          <p className="text-text-secondary text-lg">
            Kami menjawab tantangan industri olahraga dengan teknologi. Tidak perlu lagi beralih aplikasi untuk kebutuhan yang berbeda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuresData.map((feature, index) => (
            <div 
              key={feature.id}
              className="group bg-bg-ghost p-8 rounded-3xl border border-gray-100 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-2"
            >
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-md text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <feature.icon size={28} strokeWidth={1.5} />
              </div>
              <h4 className="text-xl font-bold text-text-main mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h4>
              <p className="text-text-secondary text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};