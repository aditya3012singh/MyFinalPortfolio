"use client";

import React from "react";
import { ArchitectureGraphic } from "./ArchitectureGraphic";

export function ArchitectureSection() {
  return (
    <section id="architecture" className="py-16 md:py-20 border-fine-b bg-white">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10">
        {/* Simple Section Heading */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-fine-b">
          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-[#777777] block mb-2">
              SECTION / 02 · HOW IT WORKS
            </span>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#111111]">
              How My Backend Systems Work
            </h2>
          </div>
          <p className="text-xs md:text-sm font-mono text-[#777777] max-w-sm">
            A simple walkthrough of how requests are queued and processed in the background so the website stays fast.
          </p>
        </div>

        {/* The Graphic Component */}
        <ArchitectureGraphic />
      </div>
    </section>
  );
}
