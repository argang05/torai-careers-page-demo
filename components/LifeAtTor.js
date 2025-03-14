"use client";

import { motion } from "framer-motion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Life at Tor section component for the careers page
export default function LifeAtTor() {
  // Data for life at Tor
  const lifeAtTorData = [
    {
      id: "culture",
      title: "Our Culture",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "At Tor, we believe business is the greatest platform for change. Our culture is built on our core values: Trust, Customer Success, Innovation, and Equality."
    },
    {
      id: "innovation",
      title: "Innovation",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "We're constantly pushing the boundaries of what's possible with cloud technology, AI, and customer experience. Join us to work on cutting-edge solutions."
    },
    {
      id: "giving-back",
      title: "Giving Back",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Our 1-1-1 model dedicates 1% of our equity, time, and product to help communities around the world. Employees get 7 paid volunteer days annually."
    },
    {
      id: "growth",
      title: "Growth & Learning",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "We invest in your growth with continuous learning opportunities, mentorship programs, and clear career paths to help you reach your full potential."
    },
    {
      id: "wellbeing",
      title: "Wellbeing",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Your wellbeing matters. We offer programs to support your physical, mental, and emotional health, including mindfulness sessions and wellness benefits."
    }
  ];

  return (
    <section id="life" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Life at Tor India
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience a workplace culture that celebrates innovation, equality, and giving back
          </p>
        </motion.div>

        {/* Desktop view - Grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {lifeAtTorData?.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow duration-300">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Mobile view - Carousel */}
        <div className="md:hidden">
          <Carousel className="w-full">
            <CarouselContent>
              {lifeAtTorData.map((item) => (
                <CarouselItem key={item.id}>
                  <Card className="overflow-hidden h-full">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2 text-gray-900">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
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

        <div className="text-center mt-12">
          <Button className="bg-[#FF5733] hover:bg-[#ff5833b9] text-white px-8 py-6 text-lg cursor-pointer">
            Learn More About Our Culture
          </Button>
        </div>
      </div>
    </section>
  );
} 