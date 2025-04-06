'use client'
import { useState } from "react";
import { motion } from "framer-motion";
import { X, Facebook, Twitter, Instagram, Mail, Phone, MapPin, Menu} from "lucide-react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const classes = [
  {
    title: "BALLET & POINTE",
    description:
      "Ballet classes consist of barre and center work and traveling exercises.",
    image: "/ballet.jpg",
  },
  {
    title: "BALLET/TAP COMBO",
    description: "A combination class of both Ballet and Tap for 4 & 5 yr olds.",
    image: "/ballet-tap.jpg",
  },
  {
    title: "CREATIVE MOVEMENT",
    description:
      "An introduction to the art of dance. Dancers will learn coordination and motor skills.",
    image: "/creative-movement.jpg",
  },
  {
    title: "HIP HOP",
    description: "High-energy dance style, focusing on rhythm, and freestyle movements.",
    image: "/hip-hop.jpg",
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
    img: "/path-to-image-1.jpg",
    details: "Miss Amie is an experienced director with a passion for dance.",
  },
  {
    name: "Miss Mandy",
    role: "Ballet Instructor",
    img: "/path-to-image-2.jpg",
    details:
      "Miss Mandy is originally from Sewell, NJ and began her dance training with Dance! by Debra DiNote.",
  },
  {
    name: "Miss Alyssa",
    role: "Tap Instructor",
    img: "/path-to-image-3.jpg",
    details: "Miss Alyssa has been teaching tap for over 10 years.",
  },
  {
    name: "Miss Leah",
    role: "Pre-School Class Instructor",
    img: "/path-to-image-4.jpg",
    details: "Miss Leah specializes in pre-school dance programs.",
  },
  {
    name: "Miss Sarah",
    role: "Jazz Instructor",
    img: "/path-to-image-5.jpg",
    details: "Miss Sarah has choreographed award-winning jazz performances.",
  },
];
const blogs = [
  {
    date: "01",
    month: "JUN",
    img: "/path-to-image-1.jpg",
    title: "Lorem Ipsum Dolor Sit",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
  },
  {
    date: "01",
    month: "JUN",
    img: "/path-to-image-2.jpg",
    title: "Lorem Ipsum Dolor Sit",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
  },
  {
    date: "01",
    month: "JUN",
    img: "/path-to-image-3.jpg",
    title: "Lorem Ipsum Dolor Sit",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  // const [hoveredContent, setHoveredContent] = useState("");

  return (
    <>
      <header className="w-full">
        {/* Top Bar */}
        <div className="bg-red-700 text-white text-sm py-3 px-6 md:px-12 flex justify-between items-center">
          {/* Social Icons */}
          <div className="flex space-x-3 ml-28">
            <a href="#" className="hover:text-gray-300"><Facebook size={20} /></a>
            <a href="#" className="hover:text-gray-300"><Twitter size={20} /></a>
            <a href="#" className="hover:text-gray-300"><Instagram size={20} /></a>
          </div>

          {/* Contact Info */}
          <div className="hidden sm:flex items-center space-x-2">
            <Phone size={20} />
            <span className="font-semibold">CALL US : 863.424.7355</span>
          </div>
        </div>

        {/* Navigation Bar */}
        <nav className="bg-white shadow-md px-6 py-6 md:px-12 flex justify-between items-center h-16 relative ">
          {/* Logo */}
          <div >
            <Image src="/logo.png" alt="Logo" width={100} height={20} className="rounded-xl" />
          </div>

          {/* Nav Links - Desktop */}
          <ul className="hidden md:flex space-x-6 text-black font-semibold">
            <li className="hover:text-red-600"><a href="#">HOME</a></li>
            <li className="text-red-600 border-b-2 border-red-600"><a href="/aboutus">ABOUT US</a></li>
            <li className="hover:text-red-600"><a href="/ourprojects">PROJECTS</a></li>
               <div className="flex justify-center items-center bg-gradient-to-b from-blue-400 to-white">
            <button
              onClick={() => setIsOpen(true)}
              className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition"
            >
              Contact Us
            </button>

            {isOpen && (
              <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
                <motion.div
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  className="bg-white p-6 rounded-2xl shadow-2xl w-[90%] max-w-lg"
                >
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold">Get in Touch</h2>
                    <X
                      className="cursor-pointer text-gray-500 hover:text-gray-700"
                      onClick={() => setIsOpen(false)}
                    />
                  </div>
                  <p className="text-gray-600 mb-4">Nunc erat cursus tellus gravida.</p>

                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="First Name"
                        className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <input
                        type="text"
                        placeholder="Last Name"
                        className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="email"
                        placeholder="Email"
                        className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <textarea
                      placeholder="What do you have in mind?"
                      className="p-3 border border-gray-300 rounded-lg w-full h-28 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                    <button
                      type="submit"
                      className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600 transition"
                    >
                      Submit
                    </button>
                  </form>
                </motion.div>
              </div>
            )}
          </div>
          </ul>

          {/* Burger Menu Icon - Mobile */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Slide Menu - Mobile */}
          <div className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transition-transform duration-300 z-50 ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="p-6 flex flex-col space-y-6">
              <button className="self-end" onClick={() => setMenuOpen(false)}>
                <X size={28} />
              </button>
              <a href="#" className="hover:text-red-600">HOME</a>
              <a href="#" className="text-red-600 border-b-2 border-red-600">ABOUT US</a>
              <a href="#" className="hover:text-red-600">PROJECTS</a>
              <a href="#" className="hover:text-red-600">CONTACT US</a>
            </div>
          </div>
        </nav>
      </header>
      <section
        className="relative flex items-center min-h-screen bg-cover bg-center px-4 sm:px-10 lg:px-20"
        style={{ backgroundImage: "url('/your-background.jpg')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

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
            <motion.button
              className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white text-base sm:text-lg rounded-md shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Read More
            </motion.button>
          </motion.div>
        </div>
      </section>
      
      <section className="relative py-16 px-4 sm:px-6 md:px-12 lg:px-24 bg-red-900 text-white overflow-hidden">
        {/* Background Text */}
        <h1 className="absolute top-6 sm:top-10 left-1/2 -translate-x-1/2 text-4xl sm:text-6xl lg:text-7xl text-gray-200 font-bold opacity-10 pointer-events-none whitespace-nowrap">
          Our Projects
        </h1>

        {/* Title */}
        <motion.h2
          className="text-center text-2xl sm:text-3xl md:text-4xl font-bold relative mb-4 sm:mb-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Our Projects
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-center max-w-3xl mx-auto text-sm sm:text-base md:text-lg mb-6 md:mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          At Jaguar Media & Entertainments LLP, its more than just media production…
          Its about fueling passion, creativity, and storytelling across every screen.
        </motion.p>

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
          navigation
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          className="max-w-6xl mx-auto"
        >
          {classes.map((cls, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <motion.div
               className="bg-white text-black rounded-xl overflow-hidden shadow-lg w-full max-w-xs sm:max-w-sm ml-12 sm:ml-0"
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src={cls.image}
                  alt={cls.title}
                  width={300}
                  height={200}
                  className="w-full h-48 sm:h-56 object-cover"
                />
                <div className="p-4 text-center">
                  <h3 className="text-lg sm:text-xl font-bold">{cls.title}</h3>
                  <p className="text-gray-600 text-sm sm:text-base my-2">{cls.description}</p>
                  <motion.button
                    className="mt-4 px-5 py-2 text-sm sm:text-base bg-red-600 hover:bg-red-700 text-white rounded-md"
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
      <section className="relative py-16 px-6 md:px-12 lg:px-24 bg-white text-black">
        {/* Background Text */}
        <h1 className="absolute top-10 left-1/2 -translate-x-1/2 text-7xl text-gray-300 font-bold opacity-20">
          Our Clients
        </h1>

        {/* Title */}
        <motion.h2
          className="text-center text-4xl font-bold relative mb-6 text-red-600"
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
          {clients.map((client, index) => (
            <SwiperSlide key={index} className="flex flex-col items-center">
              <motion.div
                className="relative group bg-white rounded-lg shadow-lg overflow-hidden w-60 h-80 transition-all duration-300"
              >
                {/* Image */}
                <img
                  src={client.img}
                  alt={client.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />

                {/* Default Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-4 bg-white">
                  <h3 className="text-lg font-semibold text-center">{client.name}</h3>
                  <p className="text-sm text-center text-gray-600">{client.role}</p>
                </div>

                {/* Hover Details */}
                <div className="absolute inset-0 bg-red-600 text-white flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-lg font-semibold">{client.name}</h3>
                  <p className="text-sm text-center max-w-xs">{client.details}</p>
                  <a href="#" className="mt-2 underline text-sm">
                    Read More
                  </a>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-6">
          <div className="swiper-pagination"></div>
        </div>
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
