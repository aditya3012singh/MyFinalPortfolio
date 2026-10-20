"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X, FileText } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Work", href: "#work" },
    // { label: "Architecture", href: "#architecture" },
    { label: "Notes", href: "#notes" },
    { label: "Experience", href: "#experience" },
    { label: "Capabilities", href: "#capabilities" },
    { label: "About", href: "#about" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-sm border-fine-b">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10 h-16 md:h-[72px] flex items-center justify-between">
        {/* Brand / Monogram */}
        <Link
          href="/"
          className="flex items-center gap-3 group focus:outline-none focus:ring-1 focus:ring-[#111111] rounded"
        >
          <span className="font-mono text-base font-bold tracking-tight text-[#111111] group-hover:text-black">
            {PORTFOLIO_DATA.profile.initials}
          </span>
          <span className="hidden sm:inline-block w-px h-4 bg-[#E5E5E5]" />
          <span className="hidden sm:inline-block font-mono text-[11px] uppercase tracking-wider text-[#777777] group-hover:text-[#111111] transition-colors">
            SYSTEMS ARCHITECTURE
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[13px] text-[#777777] hover:text-[#111111] transition-colors font-medium relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-[#111111] transition-all duration-200 group-hover:w-full" />
            </a>
          ))}

          <span className="w-px h-4 bg-[#E5E5E5]" />

          {/* Contact & Resume Link */}
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="text-[13px] text-[#111111] hover:text-black font-semibold flex items-center gap-1 group"
            >
              Contact
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <a
              href={PORTFOLIO_DATA.profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded border-fine bg-[#F4F4F1] hover:bg-[#EAEAE6] text-xs font-mono text-[#111111] transition-colors"
            >
              <FileText className="w-3 h-3" />
              <span>CV / Résumé</span>
            </a>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#111111] hover:bg-[#F4F4F1] rounded transition-colors focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-fine-t bg-white px-5 py-6 space-y-4">
          <div className="flex flex-col space-y-3 font-mono text-sm">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#777777] hover:text-[#111111] py-1 border-b border-[#f4f4f1]"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#111111] font-bold py-1 flex items-center justify-between"
            >
              <span>Contact</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href={PORTFOLIO_DATA.profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center justify-center gap-2 px-4 py-2 mt-2 rounded border-fine bg-[#F4F4F1] text-xs font-mono text-[#111111]"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Download CV / Résumé</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
