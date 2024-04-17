'use client'
import Image from "next/image";
import NavBar from "./Components/NavBar";
import TopBar from "./Components/TopBar";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";
import ImageCarousel from "./Components/ImageCarousel";
import '@/app/globals.css'
export default function Home() {
  return (
    <div className="mx-20">
      <title>University of Tlemcen - CS Department</title>
      <TopBar />
      <NavBar />
      <Hero />

      <Footer />

    </div>
  );
}
