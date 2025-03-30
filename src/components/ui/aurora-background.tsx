"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Heart, Shield, Users } from "lucide-react";


const AuroraBackground = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const parallaxElements = document.querySelectorAll('.parallax');
      
      parallaxElements.forEach(element => {
        const speed = (element as HTMLElement).dataset.speed || 0.2;
        const yPos = -(scrollPosition * Number(speed));
        (element as HTMLElement).style.transform = `translateY(${yPos}px)`;
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-6">
        <div className="flex items-center">
          <Link href="#" className="flex items-center gap-1 font-bold text-white">
            <span className="text-2xl">clam</span>
            <span className="text-blue-400 text-xl">★</span>
          </Link>
          
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm">
          <Link href="#features" className="text-gray-400 hover:text-white transition-colors">
            Features
          </Link>
          <Link href="#how-it-works" className="text-gray-400 hover:text-white transition-colors">
            How It Works
          </Link>
          <Link href="#community" className="text-gray-400 hover:text-white transition-colors">
            Community
          </Link>
        </div>

        <Link href="/sign-up" className="hidden md:block">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6">
            Get Started
          </Button>
        </Link>
      </nav>

      {/* Hero Section */}
      <section 
        ref={heroRef} 
        className="relative pt-20 md:pt-32 pb-24 overflow-hidden"
      >
        {/* Background elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 -left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl parallax" data-speed="0.1"></div>
          <div className="absolute bottom-10 -right-20 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl parallax" data-speed="0.15"></div>
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>
        
        <div className="container relative z-10 mx-auto px-4">
          <div className="flex flex-col items-center text-center mb-12">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-900/30 border border-blue-500 text-blue-300 text-sm mb-6 backdrop-blur-sm">
              <span className="bg-blue-400 w-2 h-2 rounded-full mr-2 animate-pulse"></span>
              Your AI Companion
            </span>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-blue-100">
              Find Peace with <span className="text-blue-400">Clam</span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-2xl mb-10 leading-relaxed">
              An AI-powered emotional support companion that adapts to your needs, providing comfort and connection when you need it most.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 w-full max-w-md">
              <Link href="/get-started" className="w-full sm:w-auto">
                <Button size="lg" className="w-full px-8 py-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
                  Start Your Journey
                </Button>
              </Link>
              <Link href="/learn-more" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full px-8 py-6 border-gray-700 hover:bg-gray-800/50 transition-all duration-300 text-blue-600">
                  <span  className="text-blue-600">Learn More </span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Decorative element */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How <span className="text-blue-400">Clam</span> Supports You</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Our AI companion uses advanced technology to provide personalized emotional support tailored to your unique needs.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Feature 1 */}
            <div className="bg-gray-900/60 rounded-xl p-6 border border-gray-800 hover:border-blue-500/50 transition-all duration-300">
              <div className="bg-blue-500/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Emotional Support</h3>
              <p className="text-gray-400">Receive compassionate support through AI that adapts to your emotional state, offering comfort when you need it most.</p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-gray-900/60 rounded-xl p-6 border border-gray-800 hover:border-blue-500/50 transition-all duration-300">
              <div className="bg-purple-500/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Community Connection</h3>
              <p className="text-gray-400">Join supportive groups where you can share experiences and connect with others who understand what you&apos;re going through.</p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-gray-900/60 rounded-xl p-6 border border-gray-800 hover:border-blue-500/50 transition-all duration-300">
              <div className="bg-blue-500/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Safe Space</h3>
              <p className="text-gray-400">Express yourself freely in a private, judgment-free environment designed to support your emotional wellbeing.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-40 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container relative z-10 mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How <span className="text-blue-400">Clam</span> Works</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Our advanced AI learns from your interactions to provide increasingly personalized support.</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-gray-900/40 backdrop-blur-sm p-8 rounded-xl border border-gray-800">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <span className="bg-blue-500/20 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-blue-400">1</span>
                  Adaptive AI Technology
                </h3>
                <p className="text-gray-400 mb-4">Our AI analyzes speech patterns and emotional cues to understand your current state.</p>
                <p className="text-gray-400">It then adapts its tone and responses to best match what you need in the moment.</p>
              </div>
              
              <div className="bg-gray-900/40 backdrop-blur-sm p-8 rounded-xl border border-gray-800">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <span className="bg-blue-500/20 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-blue-400">2</span>
                  Community Support
                </h3>
                <p className="text-gray-400 mb-4">Connect with others in similar situations through our carefully moderated support groups.</p>
                <p className="text-gray-400">Share experiences and build meaningful connections in a safe environment.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonial Section */}
      <section id="community" className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The <span className="text-blue-400">Clam</span> Community</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Join thousands who have found comfort and connection.</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-900/60 rounded-xl p-8 border border-gray-800">
              <div className="flex flex-col items-center text-center">
                <p className="text-xl text-gray-300 mb-6">
                  &ldquo;Clam has been my companion through some of the hardest moments of my life. Having a space to express myself without judgment has made all the difference.&rdquo;
                </p>
                <div className="w-14 h-14 bg-blue-500/20 rounded-full mb-2"></div>
                <p className="font-medium">Jamie L.</p>
                <p className="text-sm text-gray-400">Clam Community Member</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-xl p-10 border border-blue-500/20 backdrop-blur-sm text-center">
            <h2 className="text-3xl font-bold mb-4">Begin Your Healing Journey Today</h2>
            <p className="text-gray-300 mb-8">Take the first step toward emotional wellbeing with Clam by your side.</p>
            <Link href="/get-started">
              <Button size="lg" className="px-8 py-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
                Start Your Free Trial
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-12 bg-black border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <Link href="#" className="flex items-center gap-1 font-bold text-white">
                <span className="text-2xl">clam</span>
                <span className="text-blue-400 text-xl">★</span>
              </Link>
              <p className="text-gray-400 text-sm mt-2">Your AI companion for emotional support</p>
            </div>
            
            <div className="flex flex-col md:flex-row gap-4 md:gap-8">
              <Link href="#features" className="text-gray-400 hover:text-white transition-colors">
                Features
              </Link>
              <Link href="#how-it-works" className="text-gray-400 hover:text-white transition-colors">
                How It Works
              </Link>
              <Link href="#community" className="text-gray-400 hover:text-white transition-colors">
                Community
              </Link>
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy
              </Link>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800">
            <p className="text-gray-500 text-sm text-center">© 2025 Clam. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AuroraBackground;