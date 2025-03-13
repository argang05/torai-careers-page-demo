"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

// Locations section component for the careers page
export default function LocationsSection() {
  // Data for India locations
  const indiaLocations = [
    {
      id: "bangalore",
      name: "Bangalore",
      image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Our largest R&D center outside the US, the Bangalore office is home to teams across all Salesforce clouds.",
      address: "Bagmane Tech Park, CV Raman Nagar, Bangalore"
    },
    {
      id: "hyderabad",
      name: "Hyderabad",
      image: "https://images.unsplash.com/photo-1551161242-b5af797b7233?q=80&w=2051&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Our Hyderabad center focuses on product development, customer success, and global support functions.",
      address: "Raheja Mindspace IT Park, HITEC City, Hyderabad"
    },
    {
      id: "mumbai",
      name: "Mumbai",
      image: "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?q=80&w=2065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Our Mumbai office houses sales, marketing, and customer success teams serving the western region.",
      address: "Lotus Corporate Park, Goregaon East, Mumbai"
    },
    {
      id: "delhi",
      name: "Delhi",
      image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Our Delhi office serves as a hub for sales and customer success teams in the northern region.",
      address: "DLF Cyber City, Gurugram, Delhi NCR"
    }
  ];

  // Animation variants for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5
      }
    })
  };

  return (
    <section id="locations" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Our Locations in India
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our vibrant offices across India where innovation happens every day
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {indiaLocations.map((location, index) => (
            <motion.div
              key={location.id}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
            >
              <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow duration-300">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={location.image} 
                    alt={location.name} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{location.name}</h3>
                  <p className="text-gray-600 mb-4">{location.description}</p>
                  <div className="flex items-start gap-2 text-gray-500 mb-4">
                    <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span>{location.address}</span>
                  </div>
                  <Button variant="outline" className="w-full bg-[#FF5733] hover:bg-[#ff5833b9] cursor-pointer text-[#F5F5F5] hover:text-[#F5F5F5]">View Jobs</Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 