'use client'
import React from 'react'
import { useState } from "react";
import { motion } from "framer-motion";
import { X, Facebook, Twitter, Instagram, Mail, Phone, MapPin, Menu } from "lucide-react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { usePathname } from "next/navigation";

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


const Header = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
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
      <ul className="hidden md:flex space-x-6 text-black font-semibold items-center">
        <li className={`${pathname === '/' ? 'text-red-600 border-b-2 border-red-600' : 'hover:text-red-600'}`}><a href="#">Home</a></li>
        <li className={`${pathname === '/aboutus' ? 'text-red-600 border-b-2 border-red-600' : 'hover:text-red-600'}`}><a href="/aboutus">About Us</a></li>
        <li className={`${pathname === '/services&products' ? 'text-red-600 border-b-2 border-red-600' : 'hover:text-red-600'}`}><a href="/ourprojects">Services / Products</a></li>
        <li className={`${pathname === '/ourprojects' ? 'text-red-600 border-b-2 border-red-600' : 'hover:text-red-600'}`}><a href="/ourprojects">Projects</a></li>
        <li className={`${pathname === '/blogs&news' ? 'text-red-600 border-b-2 border-red-600' : 'hover:text-red-600'}`}><a href="/ourprojects">Blog / News</a></li>
        <div className="flex justify-center items-center bg-gradient-to-b to-white">
          <button
            onClick={() => setIsOpen(true)}
            className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg shadow-lg transition"
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
                      className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="email"
                      placeholder="Email"
                      className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                  <textarea
                    placeholder="What do you have in mind?"
                    className="p-3 border border-gray-300 rounded-lg w-full h-28 focus:outline-none focus:ring-2 focus:ring-red-500"
                  ></textarea>
                  <button
                    type="submit"
                    className="w-full py-3 bg-red-500 text-white font-semibold rounded-lg shadow-lg hover:bg-red-600 transition"
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
  )
}

export default Header