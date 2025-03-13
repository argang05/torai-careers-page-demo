"use client";

import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram, Youtube } from "lucide-react";

// Footer component for the careers page
export default function Footer() {
  // Footer links
  const footerLinks = [
    {
      title: "About Salesforce",
      links: [
        { name: "Our Story", href: "#" },
        { name: "Our Values", href: "#" },
        { name: "Leadership", href: "#" },
        { name: "News", href: "#" },
        { name: "Investor Relations", href: "#" }
      ]
    },
    {
      title: "Careers",
      links: [
        { name: "Search Jobs", href: "#jobs" },
        { name: "Our Locations", href: "#locations" },
        { name: "Life at Salesforce", href: "#life" },
        { name: "Benefits", href: "#benefits" },
        { name: "University Recruiting", href: "#" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", href: "#" },
        { name: "Events", href: "#" },
        { name: "Trailhead", href: "#" },
        { name: "Customer Stories", href: "#" },
        { name: "Contact Us", href: "#" }
      ]
    }
  ];

  // Social media links
  const socialLinks = [
    { name: "Facebook", icon: <Facebook className="h-5 w-5" />, href: "#" },
    { name: "Twitter", icon: <Twitter className="h-5 w-5" />, href: "#" },
    { name: "LinkedIn", icon: <Linkedin className="h-5 w-5" />, href: "#" },
    { name: "Instagram", icon: <Instagram className="h-5 w-5" />, href: "#" },
    { name: "YouTube", icon: <Youtube className="h-5 w-5" />, href: "#" }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Footer top section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and description */}
          <div>
            <Link href="/" className="flex items-center mb-4">
              <span className="text-2xl font-bold text-blue-400">Salesforce</span>
              <span className="ml-2 text-lg font-medium">Careers</span>
            </Link>
            <p className="text-gray-400 mb-6">
              Join us and help us build a better future for our customers and communities.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                  aria-label={social.name}
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Footer links */}
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h3 className="text-lg font-semibold mb-4">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer bottom section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Salesforce, Inc. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-gray-400">
              <Link href="#" className="hover:text-white transition-colors duration-200">
                Privacy
              </Link>
              <Link href="#" className="hover:text-white transition-colors duration-200">
                Terms of Service
              </Link>
              <Link href="#" className="hover:text-white transition-colors duration-200">
                Cookie Preferences
              </Link>
              <Link href="#" className="hover:text-white transition-colors duration-200">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 