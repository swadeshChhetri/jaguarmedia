'use client'
import Image from "next/image";

const testimonials = [
  {
    name: "Nat Reynolds",
    role: "Chief Accountant",
    image: "/testimonials/person1.jpg",
    quote:
      "Vitae suscipit tellus mauris a diam maecenas sed enim ut. Mauris augue neque gravida in fermentum. Praesent semper feugiat nibh sed pulvinar proin.",
  },
  {
    name: "Celia Almeda",
    role: "Secretary",
    image: "/testimonials/person2.jpg",
    quote:
      "Pharetra vel turpis nunc eget lorem. Quisque id diam vel quam elementum pulvinar etiam. Urna porttitor rhoncus dolor purus non enim praesent elementum.",
  },
  {
    name: "Bob Roberts",
    role: "Sales Manager",
    image: "/testimonials/person3.jpg",
    quote:
      "Mauris augue neque gravida in fermentum. Praesent semper feugiat nibh sed pulvinar proin. Nibh nisl dictumst vestibulum rhoncus est pellentesque elit.",
  },
  {
    name: "Nat Reynolds",
    role: "Chief Accountant",
    image: "/testimonials/person1.jpg",
    quote:
      "Vitae suscipit tellus mauris a diam maecenas sed enim ut. Mauris augue neque gravida in fermentum. Praesent semper feugiat nibh sed pulvinar proin.",
  },
  {
    name: "Celia Almeda",
    role: "Secretary",
    image: "/testimonials/person2.jpg",
    quote:
      "Pharetra vel turpis nunc eget lorem. Quisque id diam vel quam elementum pulvinar etiam. Urna porttitor rhoncus dolor purus non enim praesent elementum.",
  },
  {
    name: "Bob Roberts",
    role: "Sales Manager",
    image: "/testimonials/person3.jpg",
    quote:
      "Mauris augue neque gravida in fermentum. Praesent semper feugiat nibh sed pulvinar proin. Nibh nisl dictumst vestibulum rhoncus est pellentesque elit.",
  },
  {
    name: "Nat Reynolds",
    role: "Chief Accountant",
    image: "/testimonials/person1.jpg",
    quote:
      "Vitae suscipit tellus mauris a diam maecenas sed enim ut. Mauris augue neque gravida in fermentum. Praesent semper feugiat nibh sed pulvinar proin.",
  },
  {
    name: "Celia Almeda",
    role: "Secretary",
    image: "/testimonials/person2.jpg",
    quote:
      "Pharetra vel turpis nunc eget lorem. Quisque id diam vel quam elementum pulvinar etiam. Urna porttitor rhoncus dolor purus non enim praesent elementum.",
  },
  {
    name: "Bob Roberts",
    role: "Sales Manager",
    image: "/testimonials/person3.jpg",
    quote:
      "Mauris augue neque gravida in fermentum. Praesent semper feugiat nibh sed pulvinar proin. Nibh nisl dictumst vestibulum rhoncus est pellentesque elit.",
  },
];

export default function TestimonialsPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-20 text-center">
      {/* Heading Section */}
      <h3 className="text-sm uppercase tracking-widest text-gray-500">Testimonials</h3>
      <h1 className="text-4xl font-bold text-green-700 mt-2 mb-4">What Clients Say</h1>
      <p className="text-gray-600 max-w-2xl mx-auto">
        We place huge value on strong relationships and have seen the benefit they bring to our business. 
        Customer feedback is vital in helping us to get it right.
      </p>

      {/* Testimonial Cards */}
      <div className="grid md:grid-cols-3 gap-6 mt-12">
        {testimonials.map((testimonial, idx) => (
          <div key={idx} className="bg-gray-100 p-6 rounded-lg text-left shadow-sm">
            <div className="flex justify-center mb-4">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={70}
                height={70}
                className="rounded-full border-2 border-white"
              />
            </div>
            <p className="text-sm text-gray-700 mb-4 relative before:content-['“'] after:content-['”']">
              {testimonial.quote}
            </p>
            <h3 className="text-green-700 font-semibold">{testimonial.name}</h3>
            <p className="text-sm text-gray-500">{testimonial.role}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
