"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, MapPin, Briefcase, Calendar } from "lucide-react";

// Jobs section component for the careers page
export default function JobsSection() {
  const [searchTerm, setSearchTerm] = useState("");
  
  // Sample job data
  const jobs = [
    {
      id: "job1",
      title: "Senior Software Engineer",
      location: "Bangalore",
      department: "Engineering",
      type: "Full-time",
      posted: "2 days ago"
    },
    {
      id: "job2",
      title: "Product Manager",
      location: "Hyderabad",
      department: "Product",
      type: "Full-time",
      posted: "1 week ago"
    },
    {
      id: "job3",
      title: "UX Designer",
      location: "Bangalore",
      department: "Design",
      type: "Full-time",
      posted: "3 days ago"
    },
    {
      id: "job4",
      title: "Technical Architect",
      location: "Mumbai",
      department: "Engineering",
      type: "Full-time",
      posted: "Just now"
    },
    {
      id: "job5",
      title: "Sales Development Representative",
      location: "Delhi",
      department: "Sales",
      type: "Full-time",
      posted: "5 days ago"
    },
    {
      id: "job6",
      title: "Customer Success Manager",
      location: "Hyderabad",
      department: "Customer Success",
      type: "Full-time",
      posted: "1 week ago"
    }
  ];

  // Filter jobs based on search term
  const filteredJobs = jobs.filter(job => 
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="jobs" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Open Positions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our team and help us build a better future for our customers
          </p>
        </motion.div>

        {/* Search and filter */}
        <div className="mb-10">
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-4 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Search for jobs by title, location, or department"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Job categories */}
        <Tabs defaultValue="all" className="mb-10">
          <TabsList className="grid grid-cols-2 md:grid-cols-5 gap-2">
            <TabsTrigger value="all">All Jobs</TabsTrigger>
            <TabsTrigger value="engineering">Engineering</TabsTrigger>
            <TabsTrigger value="sales">Sales</TabsTrigger>
            <TabsTrigger value="product">Product & Design</TabsTrigger>
            <TabsTrigger value="customer">Customer Success</TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredJobs.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-l-4 border-blue-600">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2 text-gray-900">{job.title}</h3>
                      <div className="flex items-center gap-2 text-gray-500 mb-2">
                        <MapPin className="h-4 w-4" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-500 mb-2">
                        <Briefcase className="h-4 w-4" />
                        <span>{job.department} • {job.type}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-500 mb-4">
                        <Calendar className="h-4 w-4" />
                        <span>Posted {job.posted}</span>
                      </div>
                      <Button className="w-full bg-blue-600 hover:bg-blue-700">
                        View Job
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="engineering" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredJobs
                .filter(job => job.department === "Engineering")
                .map((job, index) => (
                  <motion.div
                    key={job.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-l-4 border-blue-600">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-2 text-gray-900">{job.title}</h3>
                        <div className="flex items-center gap-2 text-gray-500 mb-2">
                          <MapPin className="h-4 w-4" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-500 mb-2">
                          <Briefcase className="h-4 w-4" />
                          <span>{job.department} • {job.type}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-500 mb-4">
                          <Calendar className="h-4 w-4" />
                          <span>Posted {job.posted}</span>
                        </div>
                        <Button className="w-full bg-blue-600 hover:bg-blue-700">
                          View Job
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
            </div>
          </TabsContent>
          {/* Similar TabsContent for other categories */}
        </Tabs>

        <div className="text-center mt-10">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg">
            View All Open Positions
          </Button>
        </div>
      </div>
    </section>
  );
} 