import React from 'react';
import { TeamMember } from '../types';

import NadineImg from './images/teamphoto/nadine.jpg';
import AthaImg from './images/teamphoto/atha.jpg';
import DarrylImg from './images/teamphoto/darryl.jpg';
import GammaImg from './images/teamphoto/gamma.jpg'; // Mengganti 'GammaImg'


const teamData: TeamMember[] & { photo: string }[] = [
  {
    id: '1',
    name: 'Dyandra Nadine Zahira',
    studentId: '2206028264',
    photo: NadineImg,
  },
  {
    id: '2',
    name: 'Malika Atha Indurasmi',
    studentId: '2306275203',
    photo: AthaImg,
  },
  {
    id: '3',
    name: 'Darryl Abysha Artapradana',
    studentId: '2206082846',
    photo: DarrylImg,
  },
  {
    id: '4',
    name: 'Gamma Farrel',
    studentId: '2206025035',
    photo: GammaImg,
  },
];


const getInitials = (name: string) =>
  name
    .split(' ')
    .slice(0, 2)
    .map(word => word[0])
    .join('')
    .toUpperCase();

export const Team: React.FC = () => {
  return (
    <section id="team" className="py-24 bg-bg-ghost">
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-text-main mb-4">
            Tim Kami – PPD A7
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Dibuat dengan semangat dan dedikasi! <br className="hidden md:block" />
            <span className="font-semibold text-primary">
              Fakultas Ilmu Komputer Universitas Indonesia
            </span>
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamData.map(member => (
            <div
              key={member.id}
              className="bg-white rounded-2xl p-10 text-center border border-gray-100
                        shadow-sm hover:shadow-2xl transition-all duration-300
                        hover:-translate-y-2"
            >
              {/* Photo */}
              <div className="w-28 h-28 mx-auto mb-6 rounded-full overflow-hidden
                              ring-4 ring-primary/10 shadow-lg
                              transition-transform duration-500 hover:scale-105">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Name */}
              <h3 className="text-lg font-bold text-text-main mb-2 leading-snug">
                {member.name}
              </h3>

              {/* NPM */}
              <div className="inline-block bg-gray-100 px-4 py-1.5 rounded-full">
                <p className="text-text-secondary text-sm font-mono tracking-wide">
                  {member.studentId}
                </p>
              </div>
            </div>

          ))}
        </div>

      </div>
    </section>
  );
};
