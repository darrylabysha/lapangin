import React from 'react';
import { TeamMember } from '../types';

const teamData: TeamMember[] = [
  { id: '1', name: 'Dyandra Nadine Zahira', studentId: '2206028264' },
  { id: '2', name: 'Malika Atha Indurasmi', studentId: '2306275203' },
  { id: '3', name: 'Darryl Abysha Artapradana', studentId: '2206082846' },
  { id: '4', name: 'Gamma Farrel', studentId: '2206025035' },
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
              className="bg-white rounded-2xl p-8 text-center border border-gray-100
                         shadow-md hover:shadow-xl transition-all duration-300
                         hover:-translate-y-1"
            >
              {/* Initials Avatar */}
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/10
                              flex items-center justify-center text-primary
                              font-extrabold text-xl tracking-wide">
                {getInitials(member.name)}
              </div>

              {/* Name */}
              <h3 className="text-lg font-bold text-text-main mb-2">
                {member.name}
              </h3>

              {/* NPM */}
              <div className="inline-block bg-gray-100 px-4 py-1 rounded-full">
                <p className="text-text-secondary text-sm font-mono">
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
