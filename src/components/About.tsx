"use client";

import React from "react";
import { ArrowUpRight, Trophy, Code2, Users, Compass } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export function About() {
  const { about, profile } = PORTFOLIO_DATA;

  return (
    <section id="about" className="py-16 md:py-24 border-fine-b">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10">
        {/* Section Heading */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 border-fine-b">
          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-[#777777] block mb-2">
              SECTION / 06 · PERSPECTIVE & BACKGROUND
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#111111]">
              About & Engineering Philosophy
            </h2>
          </div>
          <p className="text-xs md:text-sm font-mono text-[#777777] max-w-xs">
            Why I build backend systems and what challenges keep me motivated.
          </p>
        </div>

        {/* 12-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pt-10">
          {/* Main Prose (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-[#111111] leading-snug">
              Designing software that behaves predictably under unpredictable conditions.
            </h3>

            <p className="text-base text-[#555555] leading-relaxed max-w-[650px]">
              {about.philosophy}
            </p>

            <div className="p-5 rounded-lg border-fine bg-[#FAFAFA] space-y-2">
              <span className="font-mono text-xs uppercase tracking-wider text-[#111111] font-semibold flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-[#111111]" />
                CURRENT AREAS OF EXPLORATION
              </span>
              <p className="text-sm text-[#555555] leading-relaxed">
                {about.interests}
              </p>
            </div>
          </div>

          {/* Right Column: Key Achievements & Links (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="font-mono text-xs uppercase tracking-wider text-[#777777] pb-2 border-fine-b">
              ACHIEVEMENTS & COMPETITIVE STATS
            </div>

            <div className="space-y-4">
              {about.achievements.map((ach, idx) => (
                <div key={idx} className="p-4 rounded border-fine bg-white hover:border-[#111111] transition-colors">
                  <div className="flex items-center justify-between text-xs font-mono text-[#777777] mb-1">
                    <span>{ach.platform}</span>
                    <span>0{idx + 1}</span>
                  </div>
                  <h4 className="text-base font-bold text-[#111111]">{ach.title}</h4>
                  <p className="text-xs text-[#666666] mt-1 leading-relaxed">{ach.detail}</p>
                </div>
              ))}
            </div>

            {/* Profile links */}
            <div className="pt-4 border-fine-t flex flex-wrap gap-4 text-xs font-mono">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[#111111] hover:underline"
              >
                <span>GitHub Profile</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
              <span className="text-[#cccccc]">·</span>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[#111111] hover:underline"
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
              <span className="text-[#cccccc]">·</span>
              <a
                href={profile.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[#111111] hover:underline"
              >
                <span>LeetCode</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
              <span className="text-[#cccccc]">·</span>
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[#111111] hover:underline"
              >
                <span>CV / Résumé</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
