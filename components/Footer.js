"use client";

import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram, Youtube } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const footerLinks = [
    {
      title: "About Tor",
      links: [
        { name: "Our Story", href: "#" },
        { name: "Our Values", href: "#" },
        { name: "Leadership", href: "#" },
        { name: "News", href: "#" },
        { name: "Investor Relations", href: "#" },
      ],
    },
    {
      title: "Careers",
      links: [
        { name: "Search Jobs", href: "#jobs" },
        { name: "Our Locations", href: "#locations" },
        { name: "Life at Tor", href: "#life" },
        { name: "Benefits", href: "#benefits" },
        { name: "University Recruiting", href: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", href: "#" },
        { name: "Events", href: "#" },
        { name: "Trailhead", href: "#" },
        { name: "Customer Stories", href: "#" },
        { name: "Contact Us", href: "#" },
      ],
    },
  ];

  const socialLinks = [
    { name: "Facebook", icon: <Facebook className="h-5 w-5" />, href: "#" },
    { name: "Twitter", icon: <Twitter className="h-5 w-5" />, href: "#" },
    { name: "LinkedIn", icon: <Linkedin className="h-5 w-5" />, href: "#" },
    { name: "Instagram", icon: <Instagram className="h-5 w-5" />, href: "#" },
    { name: "YouTube", icon: <Youtube className="h-5 w-5" />, href: "#" },
  ];

  return (
    <footer className="relative text-white">
      {/* Background Image with Translucent Overlay */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat before:backdrop-blur-sm"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          filter: "brightness(0.7)"
        }}
      />
            {/* Content overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#02040F] to-transparent" />

      {/* Footer Content */}
      <div className="relative container mx-auto px-4 py-12">
        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <div>
            <Link href="/" className="flex items-center mb-4">
              <Image src="/tor_logo.png" width={60} height={60} alt="logo"/>
              <span className="ml-2 text-lg text-white font-medium">Careers</span>
            </Link>
            <p className="text-white mb-6">
              Join us and help us build a better future for our customers and communities.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  
                  aria-label={social.name}
                >
                  <span className="text-white hover:text-white transition-colors duration-200">
                  {social.icon}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Footer Links Section */}
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h3 className="text-lg font-semibold mb-4">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                    >
                      <span className="text-gray-300 hover:text-white transition-colors duration-200">
                      {link.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer Bottom Section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Tor, Inc. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <Link href="#">
                <span className="text-gray-300 hover:text-white transition-colors duration-200">
                Privacy
                </span>
              </Link>
              <Link href="#">
                <span className="text-gray-300 hover:text-white transition-colors duration-200">
                Terms of Service
                </span>
              </Link>
              <Link href="#">
                <span className="text-gray-300 hover:text-white transition-colors duration-200">
                Cookie Preferences
                </span>
              </Link>
              <Link href="#">
                <span className="text-gray-300 hover:text-white transition-colors duration-200">
                Accessability
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
