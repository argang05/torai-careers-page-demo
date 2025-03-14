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
import Image from "next/image";

// Navbar component for the careers page
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Navigation links for the navbar
  const navLinks = [
    { name: "Our Locations", href: "#locations" },
    { name: "Life at Tor", href: "#life" },
    { name: "Benefits", href: "#benefits" },
    { name: "Our Reach", href: "#our-reach" },
    // { name: "Jobs", href: "#jobs" },
  ];

  return (
    <nav className="sticky top-0 h-[62px] z-50 bg-[#02040F] shadow-sm">
      <div className="container mx-auto px-[26px] py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center">
            <Image src="/tor_logo.png" width={70} height={70} alt="logo"/>
            {/* <span className="text-2xl text-[#F5F5F5] font-bold">Tor</span> */}
            <span className="ml-2 text-xl text-[#F5F5F5] font-medium">Careers</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden text-[#F5F5F5] md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
              >
                <span className="text-[#F5F5F5] hover:text-[#F6490D] transition-colors duration-200 font-bold text-lg">{link.name}</span>
              </Link>
            ))}
            <Link href="#jobs">
            <Button className="bg-[#FF5733] hover:bg-[#ff583392] cursor-pointer text-lg">
              Search Jobs
            </Button>
            </Link>
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
                <X className="h-6 w-6 text-[#F5F5F5]" />
              ) : (
                <Menu className="h-6 w-6 text-[#F5F5F5]" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4 bg-[#02040f44]">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="block text-[#F5F5F5] hover:text-[#FF5733] transition-colors duration-200 py-2 font-bold">
                {link.name}
                </span>
              </Link>
            ))}
            <Link href="#jobs">
            <Button className="bg-[#FF5733] hover:bg-[#ff583392] cursor-pointer">
              Search Jobs
            </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
} 