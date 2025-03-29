"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const parallaxElements = document.querySelectorAll('.parallax');
      
      parallaxElements.forEach(element => {
        const speed = element.dataset.speed || 0.2;
        const yPos = -(scrollPosition * speed);
        element.style.transform = `translateY(${yPos}px)`;
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section 
      ref={heroRef} 
      className="relative pt-32 pb-24 overflow-hidden bg-gradient-to-b from-black to-gray-900"
    >
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 -left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl parallax" data-speed="0.1"></div>
        <div className="absolute bottom-10 -right-20 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl parallax" data-speed="0.15"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20"></div>
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-8">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-purple-900/30 border border-purple-500 text-purple-300 text-sm mb-6 backdrop-blur-sm hover:bg-purple-900/40 transition-all duration-300">
            <span className="bg-purple-400 w-2 h-2 rounded-full mr-2 animate-pulse"></span>
            start for free
          </span>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-purple-100">
          Find Peace with AI  <span className="text-purple-400">Share, Heal, and Connect</span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-2xl mb-10 leading-relaxed">
          An AI-powered platform for emotional well-being, offering a safe space to share feelings,
           receive motivation, and connect with supportive individuals in real time.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 w-full max-w-md">
            <Link href="/dashboard" className="w-full sm:w-auto">
              <Button size="lg" className="w-full px-8 py-6 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
                Get Started
              </Button>
            </Link>
            <Link href="/features" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full px-8 py-6 border-gray-700 hover:bg-gray-800/50 transition-all duration-300">
                Learn More
              </Button>
            </Link>
          </div>
          
          {/* Trust indicators */}
          <div className="mt-16 pt-8 border-t border-gray-800 flex flex-wrap justify-center gap-8 opacity-70 hover:opacity-100 transition-opacity duration-300">
            <div className="flex items-center">
              <div className="w-6 h-6 bg-gray-300 rounded-full mr-2"></div>
              <span className="text-gray-400">Trusted by 10,000+ users</span>
            </div>
            <div className="flex items-center">
              <div className="w-6 h-6 bg-gray-300 rounded-full mr-2"></div>
              <span className="text-gray-400">Bank-level security</span>
            </div>
            <div className="flex items-center">
              <div className="w-6 h-6 bg-gray-300 rounded-full mr-2"></div>
              <span className="text-gray-400">24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
    </section>
  );
};

export default HeroSection;