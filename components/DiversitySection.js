"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Globe, Heart } from "lucide-react";

// Diversity & Inclusion section component for the careers page
export default function DiversitySection() {
  // Data for diversity initiatives
  const diversityInitiatives = [
    {
      id: "equality",
      title: "Equality for All",
      description: "We&apos;re committed to building a workplace that reflects the diverse communities we serve and where everyone feels valued, heard, and empowered to succeed.",
      icon: <Users className="h-10 w-10 text-[#FF5733]" />
    },
    {
      id: "global",
      title: "Global Representation",
      description: "We&apos;re focused on increasing representation of women, underrepresented minorities, and people from diverse backgrounds at all levels of our company.",
      icon: <Globe className="h-10 w-10 text-[#FF5733]" />
    },
    {
      id: "inclusion",
      title: "Inclusive Culture",
      description: "Our employee resource groups (ERGs) provide community, mentorship, and professional development opportunities for employees from all backgrounds.",
      icon: <Heart className="h-10 w-10 text-[#FF5733]" />
    }
  ];

  return (
    <section id="diversity" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Diversity & Inclusion
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            At Tor, equality is a core value. We believe that businesses can be powerful platforms for social change.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {diversityInitiatives.map((initiative, index) => (
            <motion.div
              key={initiative.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    {initiative.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{initiative.title}</h3>
                  <p className="text-gray-600">{initiative.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:w-1/2"
          >
            <img 
              src="https://images.unsplash.com/photo-1573164574572-cb89e39749b4?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Diverse team working together" 
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:w-1/2"
          >
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Our Commitment to Equality</h3>
            <p className="text-gray-600 mb-4">
              We believe that the business of business is to make the world a better place for all. We work to create a workplace that reflects the diverse communities we serve and where everyone feels empowered to bring their full, authentic selves to work.
            </p>
            <p className="text-gray-600 mb-6">
              Our commitment to equality extends beyond our walls. We actively work with our partners, customers, and communities to advance equality for all.
            </p>
            <Button className="bg-[#FF5733] hover:bg-[#ff5833b9] cursor-pointer text-white">
              Learn More About Our Equality Initiatives
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 