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
  const [selectedTab, setSelectedTab] = useState("all");

  // Sample job data
  const jobs = [
    { id: "job1", title: "Area Sales Manager", location: "Pune", department: "Sales", type: "Full-time", posted: "2 days ago" },
    { id: "job2", title: "Associate Product Manager", location: "Pune", department: "Product", type: "Full-time", posted: "1 week ago" },
    { id: "job3", title: "Graduate Engineer Trainee", location: "Pune", department: "Engineering", type: "Full-time", posted: "3 days ago" },
    { id: "job4", title: "Program Manager", location: "Pune", department: "Engineering", type: "Full-time", posted: "Just now" },
    { id: "job5", title: "Customer Support Executive", location: "Pune", department: "Strategic Partnership", type: "Full-time", posted: "5 days ago" },
    { id: "job6", title: "Embedded Developer", location: "Pune", department: "Engineering", type: "Full-time", posted: "1 week ago" }
  ];

  // Function to filter jobs based on search term and selected department
  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          job.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          job.department.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesTab = selectedTab === "all" || 
                      (selectedTab === "product" && (job.department === "Product" || job.department === "Design")) ||
                      (selectedTab === "engineering" && job.department === "Engineering") ||
                      (selectedTab === "sales" && job.department === "Sales") ||
                      (selectedTab === "customer" && job.department === "Strategic Partnership");

    return matchesSearch && matchesTab;
  });

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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Open Positions</h2>
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
        <Tabs defaultValue="all" className="mb-10" onValueChange={setSelectedTab}>
          <TabsList className="flex w-full bg-[#0D1D45] text-[#F5F5F5] px-4 py-4 sm:py-4 rounded-lg gap-4">
            <div className="flex overflow-x-auto scrollbar-hide space-x-2 py-4">
              <TabsTrigger value="all" className="flex-shrink-0 px-4 py-2">All Jobs</TabsTrigger>
              <TabsTrigger value="engineering" className="flex-shrink-0 px-4 py-2">Engineering</TabsTrigger>
              <TabsTrigger value="sales" className="flex-shrink-0 px-4 py-2">Sales</TabsTrigger>
              <TabsTrigger value="product" className="flex-shrink-0 px-4 py-2">Product & Design</TabsTrigger>
              <TabsTrigger value="customer" className="flex-shrink-0 px-4 py-2">Strategic Partnership</TabsTrigger>
            </div>
          </TabsList>


          <TabsContent value={selectedTab} className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredJobs.length > 0 ? (
                filteredJobs.map((job, index) => (
                  <motion.div
                    key={job.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-l-4 border-[#0D1D45]">
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
                        <Button className="w-full bg-[#FF5733] hover:bg-[#ff5833b9] cursor-pointer">
                          Apply
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))
              ) : (
                <p className="text-center text-gray-600 col-span-3">No jobs found</p>
              )}
            </div>
          </TabsContent>
        </Tabs>

        <div className="text-center mt-10">
          <Button className="bg-[#FF5733] hover:bg-[#ff5833b9] cursor-pointer text-white px-8 py-6 text-lg">
            View All Open Positions
          </Button>
        </div>
      </div>
    </section>
  );
}
