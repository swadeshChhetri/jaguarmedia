'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const categories = [
  'All',
  'Web Design',
  'Branding & Identity',
  'Digital Marketing & Strategy',
  'Content Creation',
];

const projects = [
  {
    title: 'Learnify',
    category: 'Branding & Identity',
    description: 'Crafting a distinct and memorable visual identity that resonates with the brand’s audience.',
    image: '/projects/project1.jpg',
  },
  {
    title: 'Café Connect',
    category: 'Content Creation',
    image: '/projects/project2.jpg',
  },
  {
    title: 'Study Hive',
    category: 'Web Design',
    image: '/projects/project3.jpg',
  },
  {
    title: 'Festival Hype',
    category: 'Digital Marketing & Strategy',
    image: '/projects/project4.jpg',
  },
];

export default function ProjectsPage() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All'
    ? projects
    : projects.filter(p => p.category === active);

  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-semibold">
          Our <span className="italic">Projects</span>
        </h1>
        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
          Whether you’re looking for innovative web designs, impactful branding, or immersive digital experiences,
          you’ll find a selection of our finest work categorized for easy navigation.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-5 py-2 rounded-full text-sm border transition ${
              active === cat
                ? 'bg-orange-100 text-orange-600 border-orange-200'
                : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-100'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {filtered.map((project, i) => (
          <div
            key={i}
            className="relative rounded-2xl overflow-hidden shadow hover:shadow-xl transition"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={800}
              height={500}
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6 text-white">
              <h3 className="text-lg font-semibold">{project.title}</h3>
              {project.description && (
                <p className="text-sm opacity-90 mt-1">{project.description}</p>
              )}
              <div className="mt-3">
                <ArrowRight className="w-5 h-5 bg-white text-black rounded-full p-1 inline-block" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center text-sm text-gray-500 mt-10">
        {filtered.length} from {projects.length} projects
      </div>
    </div>
  );
}
