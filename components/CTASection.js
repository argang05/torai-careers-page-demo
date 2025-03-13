"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

// Call to Action section component for the careers page
export default function CTASection() {
  return (
    <section className="py-20 bg-blue-600 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:w-1/2 mb-8 md:mb-0"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to make an impact?
            </h2>
            <p className="text-xl text-blue-100 mb-6">
              Join Salesforce India and be part of a team that&apos;s changing the way the world does business. We&apos;re looking for talented individuals who are passionate about innovation and customer success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg">
                Explore Open Positions
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-blue-700 px-8 py-6 text-lg">
                Join Our Talent Network
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:w-2/5"
          >
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Salesforce team members" 
              className="rounded-lg shadow-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
} 