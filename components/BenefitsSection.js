"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Award, BookOpen, Clock, Briefcase, Smile } from "lucide-react";

// Benefits section component for the careers page
export default function BenefitsSection() {
  // Data for benefits
  const benefits = [
    {
      id: "health",
      title: "Health & Wellness",
      description: "Comprehensive medical, dental, and vision coverage for you and your family. Access to wellness programs and mental health resources.",
      icon: <Heart className="h-10 w-10 text-[#FF5733]" />
    },
    {
      id: "financial",
      title: "Financial Benefits",
      description: "Competitive salary, performance bonuses, and equity awards. Retirement plans with company matching to help you save for the future.",
      icon: <Award className="h-10 w-10 text-[#FF5733]" />
    },
    {
      id: "learning",
      title: "Learning & Development",
      description: "Continuous learning opportunities through Trailhead, tuition reimbursement, and professional development programs.",
      icon: <BookOpen className="h-10 w-10 text-[#FF5733]" />
    },
    {
      id: "time-off",
      title: "Time Off",
      description: "Generous paid time off, holidays, and volunteer time off (VTO) to give back to your community.",
      icon: <Clock className="h-10 w-10 text-[#FF5733]" />
    },
    {
      id: "work-life",
      title: "Work-Life Balance",
      description: "Flexible work arrangements, parental leave, and programs to support your work-life integration.",
      icon: <Briefcase className="h-10 w-10 text-[#FF5733]" />
    },
    {
      id: "perks",
      title: "Perks & Discounts",
      description: "Employee discounts, transportation benefits, and special perks to enhance your everyday life.",
      icon: <Smile className="h-10 w-10 text-[#FF5733]" />
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
    <section id="benefits" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Benefits & Perks
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We take care of our employees so they can focus on taking care of our customers
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.id}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-t-4 border-[#0D1D45]">
                <CardContent className="p-6">
                  <div className="mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-16 bg-[#02040F] rounded-lg p-8 text-white text-center"
        >
          <h3 className="text-2xl font-bold mb-4">We invest in your wellbeing</h3>
          <p className="text-lg mb-0">
            Our benefits are designed to help you thrive both personally and professionally.
          </p>
        </motion.div>
      </div>
    </section>
  );
} 