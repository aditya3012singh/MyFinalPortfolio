"use client";

import React from "react";
import { Building2, GraduationCap, CheckCircle } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export function ExperienceSection() {
  const { experience, education } = PORTFOLIO_DATA;

  return (
    <section id="experience" className="py-16 md:py-24 border-fine-b">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10">
        {/* Section Heading */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 border-fine-b">
          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-[#777777] block mb-2">
              SECTION / 04 · BACKGROUND & ROLES
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#111111]">
              Experience & Education
            </h2>
          </div>
          <p className="text-xs md:text-sm font-mono text-[#777777] max-w-xs">
            Demonstrated engineering contributions and academic foundation.
          </p>
        </div>

        {/* 2-Column or Editorial Timeline Layout */}
        <div className="pt-10 space-y-16">
          {/* Work Experience Block */}
          <div>
            <div className="flex items-center gap-2 mb-8">
              <Building2 className="w-4 h-4 text-[#111111]" />
              <h3 className="font-mono text-xs uppercase tracking-wider text-[#111111] font-semibold">
                WORK EXPERIENCE
              </h3>
            </div>

            <div className="space-y-12">
              {experience.map((exp, idx) => (
                <div
                  key={idx}
                  className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start pb-10 border-fine-b last:border-b-0"
                >
                  {/* Left Column: Period & Company info */}
                  <div className="md:col-span-4 space-y-1">
                    <span className="font-mono text-xs text-[#777777] block">{exp.period}</span>
                    <h4 className="text-xl font-bold text-[#111111]">{exp.company}</h4>
                    <p className="font-mono text-xs text-[#555555]">
                      {exp.type} · {exp.location}
                    </p>
                  </div>

                  {/* Right Column: Role & Key Contributions */}
                  <div className="md:col-span-8 space-y-4">
                    <h5 className="text-lg font-semibold text-[#111111]">{exp.role}</h5>
                    <ul className="space-y-2.5">
                      {exp.contributions.map((point, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2.5 text-sm text-[#555555] leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#111111] mt-2 shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech stack tags */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {exp.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 text-xs font-mono bg-[#F4F4F1] text-[#333333] rounded border-fine"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Block */}
          <div className="pt-8 border-fine-t">
            <div className="flex items-center gap-2 mb-8">
              <GraduationCap className="w-4 h-4 text-[#111111]" />
              <h3 className="font-mono text-xs uppercase tracking-wider text-[#111111] font-semibold">
                FORMAL EDUCATION
              </h3>
            </div>

            <div className="space-y-8">
              {education.map((edu, idx) => (
                <div key={idx} className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                  {/* Left Column: Period & Institution */}
                  <div className="md:col-span-4 space-y-1">
                    <span className="font-mono text-xs text-[#777777] block">{edu.period}</span>
                    <h4 className="text-xl font-bold text-[#111111]">{edu.institution}</h4>
                    <p className="font-mono text-xs text-[#555555]">{edu.degree}</p>
                  </div>

                  {/* Right Column: Coursework & Focus */}
                  <div className="md:col-span-8 space-y-3">
                    <p className="text-sm text-[#555555] leading-relaxed">{edu.details}</p>
                    <div className="pt-2">
                      <span className="font-mono text-xs text-[#777777] block mb-2 uppercase">
                        Core Systems Focus & Coursework:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {edu.focus.map((item, fIdx) => (
                          <div
                            key={fIdx}
                            className="flex items-center gap-2 p-2.5 rounded bg-[#FAFAFA] border-fine text-xs font-mono text-[#333333]"
                          >
                            <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
