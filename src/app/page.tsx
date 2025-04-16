'use client'
import { useState } from "react";
import { motion } from "framer-motion";
import { X, Facebook, Twitter, Instagram, Mail, Phone, MapPin, Menu } from "lucide-react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/pagination';
import Link from "next/link";


const classes = [
  {
    title: "BALLET & POINTE",
    description:
      "Ballet classes consist of barre and center work and traveling exercises.",
    image: "/p1.jpg",
  },
  {
    title: "BALLET/TAP COMBO",
    description: "A combination class of both Ballet and Tap for 4 & 5 yr olds.",
    image: "/p2.jpg",
  },
  {
    title: "CREATIVE MOVEMENT",
    description:
      "An introduction to the art of dance. Dancers will learn coordination and motor skills.",
    image: "/p3.png",
  },
  {
    title: "HIP HOP",
    description: "High-energy dance style, focusing on rhythm, and freestyle movements.",
    image: "/p4.jpg",
  },
];
const videos = [
  { title: "PEDC Company Auditions", url: "https://www.youtube.com/embed/VIDEO_ID_1" },
  { title: "PEDC Company Auditions", url: "https://www.youtube.com/embed/VIDEO_ID_2" },
  { title: "PEDC Company Auditions", url: "https://www.youtube.com/embed/VIDEO_ID_3" },
  { title: "PEDC Performance", url: "https://www.youtube.com/embed/VIDEO_ID_4" },
];
const clients = [
  {
    name: "Miss Amie",
    role: "Owner/Director",
    img: "/c1.jpg",
    details: "Miss Amie is an experienced director with a passion for dance.",
  },
  {
    name: "Miss Mandy",
    role: "Ballet Instructor",
    img: "/c2.jpg",
    details:
      "Miss Mandy is originally from Sewell, NJ and began her dance training with Dance! by Debra DiNote.",
  },
  {
    name: "Miss Alyssa",
    role: "Tap Instructor",
    img: "/c3.jpg",
    details: "Miss Alyssa has been teaching tap for over 10 years.",
  },
  {
    name: "Miss Leah",
    role: "Pre-School Class Instructor",
    img: "/c4.jpg",
    details: "Miss Leah specializes in pre-school dance programs.",
  },
  {
    name: "Miss Sarah",
    role: "Jazz Instructor",
    img: "/c5.jpg",
    details: "Miss Sarah has choreographed award-winning jazz performances.",
  },
];
const blogs = [
  {
    date: "01",
    month: "JUN",
    img: "/c6.jpg",
    title: "Lorem Ipsum Dolor Sit",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
  },
  {
    date: "01",
    month: "JUN",
    img: "/c7.jpg",
    title: "Lorem Ipsum Dolor Sit",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
  },
  {
    date: "01",
    month: "JUN",
    img: "/c8.jpg",
    title: "Lorem Ipsum Dolor Sit",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
  },
];

export default function Home() {

  // const [hoveredContent, setHoveredContent] = useState("");

  return (
    <>

      <section
        className="relative flex items-center min-h-screen bg-cover bg-center px-4 sm:px-10 lg:px-20"
        style={{ backgroundImage: "url('/hero.jpg')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <motion.div
          className="relative z-10 text-white text-left max-w-3xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Jaguar Media & Entertainment LLP <br />
            <span className="text-red-500">Crafting Stories That Move</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mt-4">
            Inspiring Creators, Entertaining Generations
          </p>

          <motion.button
            className="mt-6 px-5 py-3 bg-red-600 hover:bg-red-700 text-white text-base sm:text-lg rounded-md shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Register Now
          </motion.button>
        </motion.div>
      </section>

      <section className="relative py-16 px-4 sm:px-6 md:px-12 lg:px-24 overflow-hidden">
        {/* Background Text */}
        <h1 className="absolute top-6 sm:top-10 left-1/2 -translate-x-1/2 text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gray-200 font-bold opacity-10 pointer-events-none whitespace-nowrap">
          About Us
        </h1>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left Side - Image */}
          <motion.div
            className="relative pt-12 sm:pt-16 md:pt-24"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/aboutus.png"
              alt="Dancer"
              width={500}
              height={500}
              className="w-full max-w-md mx-auto md:mx-0 object-cover"
            />
          </motion.div>

          {/* Right Side - Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <h2 className="text-2xl sm:text-3xl text-red-500 font-semibold mb-4">
              JAGUAR MEDIA & ENTERTAINMENTS LLP
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6 text-base sm:text-lg">
              At Jaguar Media & Entertainments LLP, its more than just media production…
              It’s about fueling passion, creativity, and storytelling across every screen.
              From aspiring performers to seasoned artists, we provide a dynamic platform
              where talent meets opportunity. Whether youre stepping into the spotlight for
              the first time or building your professional journey, Jaguar is here to amplify
              your vision and voice.
            </p>

            {/* Read More Button */}
            <Link href="/aboutus">
              <motion.button
                className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white text-base sm:text-lg rounded-md shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Read More
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="relative py-16 px-6 sm:px-8 lg:px-24 bg-red-900 text-white overflow-hidden">
        {/* Faint Background Heading */}
        <h1 className="absolute top-8 left-1/2 -translate-x-1/2 text-5xl sm:text-6xl lg:text-7xl text-gray-200 font-bold opacity-10 pointer-events-none whitespace-nowrap z-0">
          Our Projects
        </h1>

        {/* Main Title */}
        <motion.h2
          className="relative text-center text-3xl sm:text-4xl md:text-5xl font-bold mb-6 z-10"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Our Projects
        </motion.h2>

        {/* Description */}
        <motion.p
          className="relative max-w-3xl mx-auto text-center text-base sm:text-lg md:text-xl mb-10 z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          At Jaguar Media & Entertainments LLP, it’s more than just media production… it's about fueling passion, creativity, and storytelling across every screen.
        </motion.p>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          className="relative max-w-7xl mx-auto px-2 z-10"
        >
          {classes.map((cls, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <motion.div
                className="bg-white text-black rounded-2xl shadow-md overflow-hidden w-full max-w-xs sm:max-w-sm transition-transform"
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src={cls.image}
                  alt={cls.title}
                  width={400}
                  height={250}
                  className="w-full h-48 sm:h-56 object-cover"
                  loading="lazy"
                />
                <div className="p-5 text-center">
                  <h3 className="text-xl font-semibold mb-2">{cls.title}</h3>
                  <p className="text-gray-600 text-sm sm:text-base mb-4">{cls.description}</p>
                  <motion.button
                    className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white text-sm rounded-md transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Read More
                  </motion.button>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Optional: Accessible Nav Controls (can style these later) */}
        <div className="swiper-button-prev" aria-label="Previous slide"></div>
        <div className="swiper-button-next" aria-label="Next slide"></div>
      </section>


      <section className="relative py-16 px-6 md:px-12 lg:px-24 bg-gray-900 text-white">
        {/* Background Text */}
        <h1 className="absolute top-10 left-1/2 -translate-x-1/2 text-7xl text-gray-600 font-bold opacity-20">
          Media
        </h1>

        {/* Title */}
        <motion.h2
          className="text-center text-4xl font-bold relative mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Media
        </motion.h2>

        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          navigation={{ nextEl: ".next-button", prevEl: ".prev-button" }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          className="max-w-6xl mx-auto"
        >
          {videos.map((video, index) => (
            <SwiperSlide key={index} className="flex flex-col items-center">
              <motion.div className="bg-white rounded-lg overflow-hidden shadow-lg max-w-md">
                <iframe
                  src={video.url}
                  className="w-full h-56"
                  allowFullScreen
                  title={video.title}
                ></iframe>
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold text-black">{video.title}</h3>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <div className="flex justify-between max-w-6xl mx-auto mt-4">
          <button className="prev-button bg-gray-700 hover:bg-gray-800 text-white p-3 rounded-full">
            ❮
          </button>
          <button className="next-button bg-gray-700 hover:bg-gray-800 text-white p-3 rounded-full">
            ❯
          </button>
        </div>

        {/* View All Button */}
        <div className="text-center mt-8">
          <motion.button
            className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-md text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All
          </motion.button>
        </div>
      </section>

      <section className="relative bg-gray-100 py-16 px-6 md:px-12 lg:px-24 overflow-hidden">
  {/* Background Text */}
  <h1 className="absolute top-10 left-1/2 -translate-x-1/2 text-7xl text-gray-300 font-bold opacity-20">
    Our Clients
  </h1>

  {/* Left-side Image */}
  <div className="absolute left-0 bottom-0 w-48 md:w-64 lg:w-72 -z-10">
    <Image
      src="/path-to-side-image.png"
      alt="Side Image"
      width={500}
      height={500}
      className="object-contain"
    />
  </div>

  {/* Title */}
  <motion.h2
    className="text-center text-4xl font-bold text-red-600 relative mb-6"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    Our Clients
  </motion.h2>

  {/* Swiper Slider */}
  <Swiper
    modules={[Pagination, Autoplay]}
    spaceBetween={20}
    slidesPerView={1}
    breakpoints={{
      640: { slidesPerView: 2 },
      768: { slidesPerView: 3 },
      1024: { slidesPerView: 4 },
    }}
    pagination={{ clickable: true }}
    autoplay={{ delay: 4000, disableOnInteraction: false }}
    className="max-w-6xl mx-auto"
  >
    {clients.map((blog, index) => (
      <SwiperSlide key={index}>
        <motion.div
          className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.2 }}
        >
          <Image
            src={blog.img}
            alt={blog.name}
            width={400}
            height={250}
            className="w-full h-48 object-cover"
          />
        </motion.div>
      </SwiperSlide>
    ))}
  </Swiper>
</section>

     
      <section className="relative bg-gray-100 py-16 px-6 md:px-12 lg:px-24 overflow-hidden">
        {/* Background Text */}
        <h1 className="absolute top-10 left-1/2 -translate-x-1/2 text-7xl text-gray-300 font-bold opacity-20">
          Recent Blog
        </h1>

        {/* Left-side Image */}
        <div className="absolute left-0 bottom-0 w-48 md:w-64 lg:w-72 -z-10">
          <Image
            src="/path-to-side-image.png"
            alt="Side Image"
            width={500}
            height={500}
            className="object-contain"
          />
        </div>

        {/* Title */}
        <motion.h2
          className="text-center text-4xl font-bold text-red-600 relative mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Recent Blog
        </motion.h2>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {blogs.map((blog, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              {/* Blog Image */}
              <div className="relative">
                <Image
                  src={blog.img}
                  alt={blog.title}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-0 left-0 bg-red-600 text-white p-2 text-center w-14">
                  <p className="text-lg font-bold">{blog.date}</p>
                  <p className="text-xs">{blog.month}</p>
                </div>
              </div>

              {/* Blog Content */}
              <div className="p-4">
                <h3 className="text-lg font-semibold">{blog.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{blog.description}</p>
                <a href="#" className="text-red-600 mt-3 inline-block font-semibold">
                  READ MORE
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <footer className="bg-white text-black py-10 px-6 md:px-12 lg:px-24 border-t">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Social Icons */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <Image src="/logo.png" alt="Logo" width={150} height={80} />
            <div className="flex space-x-3">
              <a href="#" className="text-black hover:text-gray-600">
                <Facebook size={28} />
              </a>
              <a href="#" className="text-black hover:text-gray-600">
                <Twitter size={28} />
              </a>
              <a href="#" className="text-black hover:text-gray-600">
                <Instagram size={28} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">QUICK LINKS</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-black">Download PEDC Brochure</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">2017-2018 Schedule</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">2017-2018 Calendar</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Account Access</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">After School Pickup</a></li>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-4">NAVIGATION</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-black">Home</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">About</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Classes</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Media</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Contact</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-lg font-semibold mb-4">CONTACT DETAILS</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <MapPin size={20} />
                <p className="text-gray-600">2629 Waverly Barn Road Suite 125, Davenport, FL 33897</p>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={20} className="text-red-600" />
                <p className="text-red-600">863.424.7355</p>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={20} />
                <p className="text-gray-600">http://www.jaguarmedia.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-500 text-sm mt-8">
          © JAGUAR MEDIA AND ENTERTAINMENTS LLP .2019
        </div>
      </footer>
    </>
  );
}
