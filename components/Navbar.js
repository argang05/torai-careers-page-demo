"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Navbar component for the careers page
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Navigation links for the navbar
  const navLinks = [
    { name: "Our Locations", href: "#locations" },
    { name: "Life at Salesforce", href: "#life" },
    { name: "Benefits", href: "#benefits" },
    { name: "Diversity & Inclusion", href: "#diversity" },
    { name: "Jobs", href: "#jobs" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-blue-600">Salesforce</span>
            <span className="ml-2 text-lg font-medium">Careers</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
            <Button className="bg-blue-600 hover:bg-blue-700">
              Search Jobs
            </Button>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block text-gray-700 hover:text-blue-600 transition-colors duration-200 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Button className="w-full bg-blue-600 hover:bg-blue-700">
              Search Jobs
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
} 