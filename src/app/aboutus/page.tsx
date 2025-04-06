// pages/about.tsx (or app/about/page.tsx if using the App Router)
"use client"

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react'; // Example icon from lucide-react

type AboutProps = object;

const About: React.FC<AboutProps> = () => {
  return (
    <main className="min-h-screen w-full">
      {/* Section 1: Banner */}
      <section className="relative w-full h-[400px] overflow-hidden bg-gray-100 flex items-center justify-center">
        <Image
          src="/path/to/banner-image.jpg"
          alt="Banner Image"
          fill
          className="object-cover object-center z-0"
        />
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="relative z-20 text-center">
          <h1 className="text-white text-4xl font-bold">About</h1>
        </div>
      </section>

      {/* Section 2: Quality Items */}
      <section className="max-w-6xl mx-auto py-16 px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Our Roots */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-semibold mb-4">Our Roots</h2>
            <p className="text-gray-600">
              We began with a passion for creating the best possible experience
              for families. Our story is built on love and dedication.
            </p>
          </motion.div>

          {/* Our Mission */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-600">
              To provide quality, comfort, and confidence to every parent and
              family, supporting them through each step of their journey.
            </p>
          </motion.div>

          {/* Our Name */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-semibold mb-4">Our Name</h2>
            <p className="text-gray-600">
              Inspired by the warmth and connection of family, our name is a
              tribute to the bonds we form and nurture every day.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 3: Image Left, Text Right */}
      <section className="max-w-6xl mx-auto py-16 px-4 flex flex-col md:flex-row items-center gap-8">
        <div className="relative w-full md:w-1/2 h-64 md:h-96">
          <Image
            src="/path/to/main-image.jpg"
            alt="Main"
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">A Letter from Our Founder</h2>
          <p className="text-gray-600 mb-4">
            Hi there! I’m so glad you’ve found our little corner of the world.
            This company was born from my own experience as a mom who struggled
            to find the perfect products that combined quality, comfort, and a
            touch of style.
          </p>
          <p className="text-gray-600">
            From our family to yours, we’re honored to be part of your story.
            We’re here to support you, encourage you, and help make your journey
            a bit brighter.
          </p>
          <div className="mt-4 flex items-center gap-2">
            <span className="font-semibold">Warmly,</span>
            <ArrowRight className="w-4 h-4" />
            <span className="italic">Denisse</span>
          </div>
        </div>
      </section>

      {/* Section 4: Title + 3 Images */}
      <section className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">More to Explore</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="relative w-full h-48 mb-4">
              <Image
                src="/path/to/image-1.jpg"
                alt="Shop Best Sellers"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <h3 className="text-xl font-semibold">Shop Best Sellers</h3>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="relative w-full h-48 mb-4">
              <Image
                src="/path/to/image-2.jpg"
                alt="Careers"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <h3 className="text-xl font-semibold">Careers</h3>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="relative w-full h-48 mb-4">
              <Image
                src="/path/to/image-3.jpg"
                alt="Giving Back"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <h3 className="text-xl font-semibold">Giving Back</h3>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default About;
