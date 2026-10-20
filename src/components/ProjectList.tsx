"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { PORTFOLIO_DATA, Project } from "@/data/portfolio";
import { ProjectModal } from "./ProjectModal";

export function ProjectList() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showAll, setShowAll] = useState(false);

  const displayedProjects = showAll
    ? PORTFOLIO_DATA.projects
    : PORTFOLIO_DATA.projects.slice(0, 2);

  return (
    <section id="work" className="py-16 md:py-24 border-fine-b bg-white">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10">
        {/* Section Heading */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 border-fine-b">
          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-[#777777] block mb-2">
              SECTION / 02 · SELECTED PROJECTS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#111111]">
              Featured Engineering Work
            </h2>
          </div>
          <p className="text-xs md:text-sm font-mono text-[#777777] max-w-xs">
            Distributed engines, transaction ledgers, and backend developer tooling.
          </p>
        </div>

        {/* Minimal Uncluttered Project Cards */}
        <div className="divide-y divide-[#E5E5E5]">
          {displayedProjects.map((project) => (
            <article
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group py-8 md:py-12 transition-colors duration-200 hover:bg-[#FAFAFA] -mx-5 px-5 md:-mx-10 md:px-10 cursor-pointer"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
                {/* Left Column (7 cols): Clean Title, Short Subtitle, Metadata & Tags */}
                <div className="lg:col-span-7 space-y-3.5">
                  {/* Top Metadata Strip */}
                  <div className="flex items-center gap-3 font-mono text-xs text-[#777777]">
                    <span className="font-bold text-[#111111]">{project.index}</span>
                    <span className="text-[#cccccc]">·</span>
                    <span>{project.timeline}</span>
                    <span className="text-[#cccccc]">·</span>
                    <span
                      className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded font-medium text-[11px] ${
                        project.liveType === "Live"
                          ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                          : "bg-[#F4F4F1] text-[#111111] border-fine"
                      }`}
                    >
                      {project.liveType === "Live" && (
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      )}
                      {project.liveType}
                    </span>
                  </div>

                  {/* Project Title */}
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#111111] group-hover:text-black">
                      {project.title}
                    </h3>
                    <ArrowUpRight className="w-4 h-4 text-[#888888] group-hover:text-[#111111] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
                  </div>

                  {/* Short 1-2 Line Impactful Summary (No Walls of Text) */}
                  <p className="text-sm md:text-[15px] text-[#555555] leading-relaxed max-w-[560px]">
                    {project.subtitle}
                  </p>

                  {/* Clean Tags */}
                  <div className="pt-1 flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 5).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-xs font-mono bg-[#F4F4F1] border-fine text-[#111111] rounded"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 5 && (
                      <span className="px-2 py-0.5 text-xs font-mono text-[#777777]">
                        +{project.tags.length - 5} more
                      </span>
                    )}
                  </div>

                  {/* Clean Text Prompt */}
                  <div className="pt-2 text-xs font-mono text-[#777777] group-hover:text-[#111111] transition-colors flex items-center gap-1">
                    <span>Click to view technical breakdown & architecture</span>
                    <span>→</span>
                  </div>
                </div>

                {/* Right Column (5 cols): Clean Preview Image */}
                <div className="lg:col-span-5">
                  <div className="relative aspect-[16/10] w-full rounded-lg overflow-hidden border-fine bg-[#F4F4F1] group-hover:border-[#111111] transition-colors shadow-2xs">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                      sizes="(max-width: 1024px) 100vw, 440px"
                    />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Downward Arrow Button to Toggle All 4 Projects */}
        <div className="pt-10 flex justify-center border-fine-t mt-4">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border-fine bg-white hover:bg-[#F4F4F1] text-xs font-mono font-medium text-[#111111] transition-all shadow-2xs hover:-translate-y-0.5 cursor-pointer"
          >
            <span>
              {showAll
                ? "Show fewer projects"
                : `View all projects (${PORTFOLIO_DATA.projects.length - 2} more)`}
            </span>
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-300 ${
                showAll ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Pop Card / Case Study Modal with Full Bullets & Details */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
