"use client"

import Image from 'next/image';

const images = [
  'img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg',
  'img5.jpg', 'img6.jpg', 'img7.jpg', 'img8.jpg',
  'img9.jpg', 'img10.jpg', 'img11.jpg', 'img12.jpg',
  'img13.jpg', 'img14.jpg', 'img15.jpg', 'img16.jpg',
];

export default function GalleryPage() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-96 bg-black text-white">
        <Image
          src="/gallery/hero.jpg"
          alt="Hero"
          fill
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10">
          <h1 className="text-4xl font-semibold mb-4">A Look Inside</h1>
          <p className="max-w-xl text-gray-200">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
          </p>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-6xl mx-auto py-16 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((img, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <div className="relative w-full h-52">
              <Image
                src={`/gallery/${img}`}
                alt={`Gallery image ${idx + 1}`}
                layout="fill"
                className="object-cover rounded"
              />
            </div>
            <div className="w-16 h-0.5 bg-gray-300 mt-3" />
          </div>
        ))}
      </div>
    </div>
  );
}
