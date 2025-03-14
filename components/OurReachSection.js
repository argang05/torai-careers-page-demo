"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Trophy, MonitorSmartphone, BookOpenText, ChartNoAxesCombined, Smile } from "lucide-react";

// Animated Counter that triggers only when in view
const AnimatedCounter = ({ from, to, suffix = "", prefix = "" }) => {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let start = from;
    const duration = 1500; // Animation duration in ms
    const steps = 60;
    const increment = (to - from) / steps;

    const interval = setInterval(() => {
      start += increment;
      setCount(Math.round(start));
      if ((increment > 0 && start >= to) || (increment < 0 && start <= to)) {
        setCount(to);
        clearInterval(interval);
      }
    }, duration / steps);

    return () => clearInterval(interval);
  }, [isInView, from, to]);

  return (
    <motion.span ref={ref} initial={{ opacity: 0 }} animate={{ opacity: isInView ? 1 : 0 }} transition={{ duration: 1 }}>
      {prefix}{count}{suffix}
    </motion.span>
  );
};

// Data for diversity achievements
const achievements = [
  {
    id: "market-leader",
    title: <AnimatedCounter from={10} to={1} prefix="#" />, // Decreasing Animation
    description: "Market Leader (Genset – India)",
    icon: <Trophy className="h-10 w-10 text-[#FF5733]" />
  },
  {
    id: "active-devices",
    title: <AnimatedCounter from={200} to={250} suffix="K+" />, // Increasing Animation
    description: "Active Devices",
    icon: <MonitorSmartphone className="h-10 w-10 text-[#FF5733]" />
  },
  {
    id: "customers",
    title: <AnimatedCounter from={50} to={100} suffix="+" />, // Increasing Animation
    description: "Customers",
    icon: <Smile className="h-10 w-10 text-[#FF5733]" />
  },
  {
    id: "employees",
    title: <AnimatedCounter from={200} to={300} suffix="+" />, // Increasing Animation
    description: "Employees",
    icon: <Users className="h-10 w-10 text-[#FF5733]" />
  },
  {
    id: "patents",
    title: <AnimatedCounter from={5} to={10} suffix="+" />, // Increasing Animation
    description: "Patents",
    icon: <BookOpenText className="h-10 w-10 text-[#FF5733]" />
  },
  {
    id: "expertise",
    title: <AnimatedCounter from={5} to={10} suffix="+" />, // Increasing Animation
    description: "Years of Expertise",
    icon: <ChartNoAxesCombined className="h-10 w-10 text-[#FF5733]" />
  }
];

export default function OurReachSection() {
  return (
    <section id="our-reach" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Our Reach
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {"We're committed to IoT innovation and delivering impactful solutions. Our achievements reflect our dedication to growth and positive impact."}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">{achievement.icon}</div>
                  <h3 className="text-3xl font-bold mb-2 text-gray-900">{achievement.title}</h3>
                  <p className="text-gray-600 text-xl font-semibold">{achievement.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
