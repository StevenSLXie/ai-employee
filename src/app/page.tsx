"use client";

import { LanguageProvider } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Vision from "@/components/sections/Vision";
import Capabilities from "@/components/sections/Capabilities";
import Scenarios from "@/components/sections/Scenarios";
import Architecture from "@/components/sections/Architecture";
import Market from "@/components/sections/Market";
import Warmth from "@/components/sections/Warmth";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <LanguageProvider>
      <Navbar />
      <main>
        <Hero />
        <Vision />
        <Capabilities />
        <Scenarios />
        <Architecture />
        <Market />
        <Warmth />
        <CTA />
      </main>
      <Footer />
    </LanguageProvider>
  );
}
