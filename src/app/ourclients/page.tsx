// app/team/page.tsx
"use client"
import React from 'react';
import Image from 'next/image';
import {
  Facebook,
  Twitter,
  Linkedin,
  Youtube
} from 'lucide-react';

const teamMembers = [
  {
    name: 'Ronald B. Holland',
    role: 'Line erector',
    image: '/images/ronald.jpg',
  },
  {
    name: 'Evan J. Rauch',
    role: 'Oral surgeon',
    image: '/images/evan.jpg',
  },
  {
    name: 'Dick C. Tatum',
    role: 'Government accountant',
    image: '/images/dick.jpg',
  },
  {
    name: 'Ray S. Good',
    role: 'Finance Manager',
    image: '/images/ray.jpg',
  },
  {
    name: 'Richard H. Allen',
    role: 'Line erector',
    image: '/images/richard.jpg',
  },
  {
    name: 'James M. Bell',
    role: 'Hearing officer',
    image: '/images/james.jpg',
  },
];

const TeamPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f5f7ff] to-white py-16 px-4">
      <h1 className="text-3xl font-bold text-center mb-12">Theme One: Grid</h1>
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {teamMembers.map((member, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
              <Image
                src={member.image}
                alt={member.name}
                width={96}
                height={96}
                className="object-cover w-full h-full"
              />
            </div>
            <h2 className="text-lg font-semibold">{member.name}</h2>
            <p className="text-sm text-blue-600 mb-2">{member.role}</p>
            <p className="text-gray-600 text-sm mb-4">
              Quisque id odio. Praesent blandit laoreet nibh. Praesent ac sem eget est egestas volutpat.
            </p>
            <div className="flex justify-center space-x-4 text-blue-600">
              <Facebook className="w-4 h-4 hover:text-blue-800 cursor-pointer" />
              <Twitter className="w-4 h-4 hover:text-blue-500 cursor-pointer" />
              <Linkedin className="w-4 h-4 hover:text-blue-700 cursor-pointer" />
              <Youtube className="w-4 h-4 hover:text-red-600 cursor-pointer" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamPage;