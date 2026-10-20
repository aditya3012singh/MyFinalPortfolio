"use client";

import React from "react";
import { ArrowUp, ArrowUpRight } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export function Footer() {
  const { profile } = PORTFOLIO_DATA;

  const scrollToTop = () => {
    const lenis = (
      window as unknown as {
        __lenis?: { scrollTo: (target: number, options?: { duration?: number }) => void };
      }
    ).__lenis;
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.2 });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="py-8 border-fine-t bg-white">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
        {/* Copyright */}
        <div className="text-[#777777]">
          © 2026 {profile.name}.
        </div>

        {/* Clean Profiles & Back to Top */}
        <div className="flex flex-wrap items-center gap-5 text-[#555555]">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#111111] hover:underline flex items-center gap-1 transition-colors"
          >
            <span>GitHub</span>
            <ArrowUpRight className="w-3 h-3 text-[#888888]" />
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#111111] hover:underline flex items-center gap-1 transition-colors"
          >
            <span>LinkedIn</span>
            <ArrowUpRight className="w-3 h-3 text-[#888888]" />
          </a>

          <a
            href={profile.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#111111] hover:underline flex items-center gap-1 transition-colors"
          >
            <span>LeetCode</span>
            <ArrowUpRight className="w-3 h-3 text-[#888888]" />
          </a>

          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#111111] hover:underline flex items-center gap-1 transition-colors"
          >
            <span>CV</span>
            <ArrowUpRight className="w-3 h-3 text-[#888888]" />
          </a>

          <a
            href={`mailto:${profile.email}`}
            className="hover:text-[#111111] hover:underline transition-colors"
          >
            <span>Email</span>
          </a>

          <span className="text-[#E5E5E5] hidden sm:inline">|</span>

          <button
            onClick={scrollToTop}
            className="hover:text-[#111111] hover:underline flex items-center gap-1 transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>
      </div>
    </footer>
  );
}
