"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { GithubIcon } from "./Icons";

export function Hero() {
  const { profile } = PORTFOLIO_DATA;

  return (
    <section className="relative pt-12 md:pt-20 pb-16 md:pb-24 border-fine-b bg-white">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10">
        {/* 1. Editorial Identity & Status Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-8 mb-8 md:mb-12 border-fine-b">
          <div className="flex items-center gap-3.5">
            <div className="relative w-11 h-11 md:w-12 md:h-12 rounded-full overflow-hidden border-fine bg-[#F4F4F1] shrink-0">
              <Image
                src="/developer_portrait.jpeg"
                alt={profile.name}
                fill
                priority
                className="object-cover object-top"
                sizes="48px"
              />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-sm font-bold text-[#111111]">
                  {profile.name}
                </span>
                <span className="text-[#cccccc]">·</span>
                <span className="font-mono text-xs text-[#777777] uppercase tracking-wider">
                  ENGINEER / 001
                </span>
              </div>

              <p className="text-xs text-[#666666] font-mono mt-0.5">
                Backend Engineering & Distributed Systems
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border-fine bg-[#F4F4F1] text-[#111111]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
              <span>Available for SDE Roles</span>
            </div>

            <div className="hidden md:flex items-center gap-1.5 text-[#777777]">
              <span>India · UTC+05:30</span>
            </div>
          </div>
        </div>

        {/* 2. Primary Headline */}
        <div className="space-y-4 max-w-[1080px]">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[80px] font-bold tracking-tight text-[#111111] leading-[1.06]">
            I build systems, not just endpoints.
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-[#666666] font-normal tracking-tight max-w-[850px] leading-relaxed">
            Building reliable backend services, designing asynchronous
            workflows, and exploring the architectural trade-offs that
            make systems work at scale.
          </p>
        </div>

        {/* 3. Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 lg:gap-16 items-start mt-8 sm:mt-12 md:mt-16 pt-6 sm:pt-10 md:pt-12 border-fine-t">

          {/* Left Column */}
          <div className="lg:col-span-7 space-y-6">

            {/* Engineering Thesis: desktop and tablet */}
            <div className="hidden sm:block space-y-2">
              <span className="font-mono text-xs uppercase tracking-widest text-[#777777] block">
                ENGINEERING THESIS
              </span>

              <p className="text-xl sm:text-2xl font-medium tracking-tight text-[#111111] leading-snug">
                Distributed queues, transactional consistency, and
                software that remains deterministic under failure.
              </p>
            </div>

            {/* Detailed Description: desktop and tablet */}
            <p className="hidden sm:block text-sm md:text-base text-[#555555] leading-relaxed max-w-[580px]">
              Specializing in worker backpressure, idempotent mutations,
              and database query optimization. Focused on what happens
              when networks drop, databases lock, and event volumes surge.
            </p>

            {/* Metadata */}
            {/* Metadata */}
<div className="space-y-3 pt-1 sm:pt-2">
  {/* Current Designation */}
  <div className="grid grid-cols-[64px_minmax(0,1fr)] sm:grid-cols-[80px_minmax(0,1fr)] items-start gap-2 sm:gap-3 text-xs font-mono">
    <span className="text-[#888888] uppercase tracking-wider pt-2">
      Role
    </span>

    <span className="inline-flex w-fit max-w-full px-2.5 py-1.5 rounded bg-[#F4F4F1] border-fine text-[#111111] font-medium leading-relaxed">
      SDE Intern at CreditSea (FinTech)
    </span>
  </div>

  {/* Education: hidden on mobile */}
  <div className="hidden sm:grid grid-cols-[80px_minmax(0,1fr)] items-start gap-3 text-xs font-mono">
    <span className="text-[#888888] uppercase tracking-wider pt-2">
      Education
    </span>

    <span className="inline-flex w-fit max-w-full px-2.5 py-1.5 rounded bg-[#F4F4F1] border-fine text-[#111111] font-medium leading-relaxed">
      KIET Group of Institutions, Ghaziabad ’28
    </span>
  </div>

  {/* Tech Stack */}
  <div className="grid grid-cols-[64px_minmax(0,1fr)] sm:grid-cols-[80px_minmax(0,1fr)] items-start gap-2 sm:gap-3 text-xs font-mono">
    <span className="text-[#888888] uppercase tracking-wider pt-2">
      Stack
    </span>

    <div className="flex flex-wrap gap-1.5 min-w-0">
      {[
        "Java",
        "Spring Boot",
        "Node.js",
        "PostgreSQL",
        "Kafka",
        "Redis",
        "Docker",
      ].map((tech) => (
        <span
          key={tech}
          className="px-2 py-1.5 rounded bg-[#F4F4F1] border-fine text-[#111111] font-medium leading-relaxed"
        >
          {tech}
        </span>
      ))}
    </div>
  </div>
</div>

            {/* Action Buttons */}
            <div className="pt-2 sm:pt-4 flex flex-wrap items-center gap-2.5 sm:gap-3 font-mono text-xs">

              {/* Selected Work: visible everywhere */}
              <a
                href="#work"
                className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2.5 rounded bg-[#111111] hover:bg-black text-white font-medium transition-colors shadow-2xs"
              >
                <span>Selected work</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>

              {/* System Topology: desktop and tablet */}
              <a
                href="#architecture"
                className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2.5 rounded border-fine bg-white hover:bg-[#F4F4F1] text-[#111111] font-medium transition-colors"
              >
                <span>System topology</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#777777]" />
              </a>

              {/* GitHub: visible everywhere */}
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2.5 rounded border-fine bg-white hover:bg-[#F4F4F1] text-[#111111] font-medium transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#777777]" />
              </a>

              {/* Contact: visible everywhere */}
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2.5 rounded border-fine bg-white hover:bg-[#F4F4F1] text-[#111111] font-medium transition-colors"
              >
                <span>Contact</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#777777]" />
              </a>
            </div>
          </div>

          {/* Right Column: Large Portrait */}
          {/* Hidden below lg to avoid duplicating the profile image on mobile/tablet */}
          <div className="hidden lg:block lg:col-span-5">
            <div className="relative w-full aspect-[4/5] max-w-[420px] mx-auto lg:mx-0 overflow-hidden rounded-md bg-[#F4F4F1] border-fine group">
              <Image
                src="/developer_portrait.jpeg"
                alt={profile.name}
                fill
                priority
                className="object-cover object-[center_15%] filter grayscale-[10%] contrast-[103%] group-hover:grayscale-0 group-hover:scale-[1.01] transition-all duration-500 ease-out"
                sizes="(max-width: 1280px) 40vw, 460px"
              />
            </div>
          </div>
        </div>

        {/* 4. Current Focus Ticker: desktop and tablet */}
        <div className="hidden sm:grid mt-12 md:mt-16 pt-6 border-fine-t grid-cols-1 md:grid-cols-12 gap-4 items-baseline">
          <div className="md:col-span-3">
            <span className="font-mono text-xs uppercase tracking-wider text-[#777777]">
              CURRENT FOCUS
            </span>
          </div>

          <div className="md:col-span-9 flex flex-wrap gap-y-2 gap-x-6 text-xs md:text-sm text-[#444444] font-mono">
            {profile.currentFocus.map((item, idx) => (
              <span key={idx} className="flex items-center gap-2">
                <span className="text-[#111111] font-bold">
                  0{idx + 1}
                </span>
                <span>{item}</span>

                {idx < profile.currentFocus.length - 1 && (
                  <span className="text-[#d0d0d0] hidden sm:inline">
                    /
                  </span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}