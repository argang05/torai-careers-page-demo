"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

// Testimonials section component for the careers page
export default function TestimonialsSection() {
  // Data for testimonials
  const testimonials = [
    {
      id: "testimonial1",
      quote: "Working at Salesforce has been the most rewarding experience of my career. The culture of innovation, the focus on customer success, and the opportunities for growth are unparalleled.",
      name: "Priya Sharma",
      title: "Senior Software Engineer",
      location: "Bangalore",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: "testimonial2",
      quote: "The best thing about Salesforce is the people. I&apos;m surrounded by brilliant minds who challenge me to grow every day. The company truly lives its values of trust, customer success, innovation, and equality.",
      name: "Rahul Patel",
      title: "Product Manager",
      location: "Hyderabad",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: "testimonial3",
      quote: "Salesforce has given me the opportunity to work on cutting-edge technology while making a positive impact on our customers and communities. The work-life balance and benefits are amazing too!",
      name: "Ananya Desai",
      title: "Solution Architect",
      location: "Mumbai",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2961&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Hear from Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our employees share their experiences working at Salesforce India
          </p>
        </motion.div>

        {/* Desktop view */}
        <div className="hidden md:block">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex justify-center mb-6">
                      <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-blue-600">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="flex justify-center mb-4 text-blue-600">
                      <Quote className="h-8 w-8" />
                    </div>
                    <p className="text-gray-600 mb-6 text-center italic">
                      &quot;{testimonial.quote}&quot;
                    </p>
                    <div className="text-center">
                      <h3 className="text-lg font-bold text-gray-900">{testimonial.name}</h3>
                      <p className="text-gray-500">{testimonial.title}</p>
                      <p className="text-gray-500">{testimonial.location}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile view - Carousel */}
        <div className="md:hidden">
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id}>
                  <Card className="h-full">
                    <CardContent className="p-6">
                      <div className="flex justify-center mb-6">
                        <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-blue-600">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="flex justify-center mb-4 text-blue-600">
                        <Quote className="h-8 w-8" />
                      </div>
                      <p className="text-gray-600 mb-6 text-center italic">
                        &quot;{testimonial.quote}&quot;
                      </p>
                      <div className="text-center">
                        <h3 className="text-lg font-bold text-gray-900">{testimonial.name}</h3>
                        <p className="text-gray-500">{testimonial.title}</p>
                        <p className="text-gray-500">{testimonial.location}</p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-4">
              <CarouselPrevious className="mr-2" />
              <CarouselNext />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
} 