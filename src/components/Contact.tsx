"use client";

import React, { useState } from "react";
import { ArrowUpRight, Copy, Check, Mail } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { GithubIcon, LinkedinIcon } from "./Icons";

export function Contact() {
  const { profile } = PORTFOLIO_DATA;
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section id="contact" className="py-20 md:py-32 border-fine-b">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10">
        <div className="max-w-[800px] space-y-6">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs uppercase tracking-wider text-[#777777]">
              SECTION / 07 · CONTACT & COLLABORATION
            </span>
            <span className="text-[#cccccc]">·</span>
            <span className="inline-flex items-center gap-1.5 font-mono text-xs text-emerald-700">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
              AVAILABLE FOR HIRE
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#111111] leading-[1.08]">
            Have an interesting problem? Let’s build something meaningful.
          </h2>

          <p className="text-base sm:text-lg text-[#555555] leading-relaxed max-w-[620px]">
            Open to software engineering opportunities, distributed systems challenges, and deep technical discussions. Whether you have an open role or want to discuss queue architectures, feel free to reach out.
          </p>

          {/* Action CTAs */}
          <div className="pt-4 flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded bg-[#111111] hover:bg-black text-white text-sm font-medium transition-all group"
            >
              <Mail className="w-4 h-4" />
              <span>Email me directly</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded border-fine bg-white hover:bg-[#F4F4F1] text-xs font-mono text-[#111111] transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Email copied to clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-[#777777]" />
                  <span>Copy {profile.email}</span>
                </>
              )}
            </button>
          </div>

          {/* Connect Links */}
          <div className="pt-8 flex flex-wrap items-center gap-6 font-mono text-xs text-[#777777]">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#111111] hover:underline"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3 h-3 text-[#777777]" />
            </a>

            <span className="text-[#E5E5E5]">/</span>

            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#111111] hover:underline"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
              <ArrowUpRight className="w-3 h-3 text-[#777777]" />
            </a>

            <span className="text-[#E5E5E5]">/</span>
 
            <a
              href={profile.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#111111] hover:underline"
            >
              <span>LeetCode</span>
              <ArrowUpRight className="w-3 h-3 text-[#777777]" />
            </a>

            <span className="text-[#E5E5E5]">/</span>

            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#111111] hover:underline"
            >
              <span>CV / Résumé</span>
              <ArrowUpRight className="w-3 h-3 text-[#777777]" />
            </a>

            <span className="text-[#E5E5E5]">/</span>

            <span className="text-[#777777]">TIMEZONE: UTC+05:30 (IST)</span>
          </div>
        </div>
      </div>
    </section>
  );
}
