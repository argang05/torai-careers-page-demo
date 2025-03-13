"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

// Hero section component for the careers page
export default function HeroSection() {
  return (
    <section className="relative h-[50vh] sm:h-[80vh] overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1596079890744-c1a0462d0975?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          filter: "brightness(0.7)"
        }}
      />
      
      {/* Content overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0D1D45] to-transparent" />
      
      {/* Hero content */}
      <div className="relative h-full container mx-auto px-4 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl text-white"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Join Tor India
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Be part of a team that&apos;s changing the way the world does business
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-[#FF5733] hover:bg-[#ff583392] text-white px-8 py-6 text-lg cursor-pointer">
              Explore Jobs
            </Button>
            <Button variant="outline" className="bg-transparent border-white text-white hover:bg-[#E0E1DD] px-8 py-6 text-lg cursor-pointer">
              Learn About Us
            </Button>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <div className="w-8 h-12 border-2 border-white rounded-full flex justify-center">
          <motion.div 
            className="w-2 h-2 bg-white rounded-full mt-2"
            animate={{ y: [0, 16, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          />
        </div>
      </motion.div>
    </section>
  );
} 