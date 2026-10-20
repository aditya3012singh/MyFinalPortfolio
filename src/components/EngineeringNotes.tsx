"use client";

import React, { useState } from "react";
import { ArrowUpRight, BookOpen, Clock, ChevronDown, ChevronUp, X } from "lucide-react";
import { PORTFOLIO_DATA, Article } from "@/data/portfolio";

export function EngineeringNotes() {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  return (
    <section id="notes" className="py-16 md:py-24 border-fine-b">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10">
        {/* Section Heading */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 border-fine-b">
          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-[#777777] block mb-2">
              SECTION / 03 · SYSTEMS JOURNAL
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#111111]">
              Engineering Notes & Investigations
            </h2>
          </div>
          <p className="text-xs md:text-sm font-mono text-[#777777] max-w-xs">
            Concise write-ups on failure modes, database bottlenecks, and queue mechanics.
          </p>
        </div>

        {/* Notes Rows */}
        <div className="divide-y divide-[#E5E5E5]">
          {PORTFOLIO_DATA.articles.map((article) => (
            <article
              key={article.id}
              onClick={() => setSelectedArticle(article)}
              className="group py-8 md:py-10 transition-colors duration-200 hover:bg-[#F4F4F1] -mx-5 px-5 md:-mx-10 md:px-10 cursor-pointer"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline">
                {/* Number & Category */}
                <div className="md:col-span-2 font-mono text-xs text-[#777777] flex items-center gap-3">
                  <span className="font-semibold text-[#111111]">{article.index}</span>
                  <span className="text-[#cccccc]">/</span>
                  <span className="uppercase tracking-wider">{article.category}</span>
                </div>

                {/* Title & Subtitle */}
                <div className="md:col-span-7 space-y-1.5">
                  <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-[#111111] group-hover:text-black flex items-center gap-2">
                    <span>{article.title}</span>
                    <ArrowUpRight className="w-4 h-4 text-[#888888] group-hover:text-[#111111] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </h3>
                  <p className="text-sm text-[#555555] leading-relaxed max-w-[640px]">
                    {article.subtitle}
                  </p>
                </div>

                {/* Metadata & Read time */}
                <div className="md:col-span-3 flex md:justify-end items-center gap-4 text-xs font-mono text-[#777777]">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {article.readTime}
                  </span>
                  <span>{article.date}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Article Reader Modal */}
      {selectedArticle && (
        <div
          className="fixed inset-0 z-50 overflow-y-auto bg-black/40 backdrop-blur-[2px] flex justify-center items-start p-3 sm:p-6 md:p-10 animate-in fade-in duration-200"
          onClick={() => setSelectedArticle(null)}
        >
          <div
            className="relative w-full max-w-3xl bg-white rounded-lg border-fine shadow-2xl overflow-hidden my-6 text-[#111111]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Top */}
            <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-white/95 backdrop-blur-md border-fine-b">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs uppercase tracking-wider text-[#777777]">
                  NOTE / {selectedArticle.index}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span className="font-mono text-xs text-[#111111]">{selectedArticle.category}</span>
              </div>

              <button
                onClick={() => setSelectedArticle(null)}
                className="p-1.5 rounded-md hover:bg-[#F4F4F1] text-[#777777] hover:text-[#111111] transition-colors focus:outline-none"
                aria-label="Close article"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content Container */}
            <div className="p-6 md:p-10 space-y-8">
              <div>
                <div className="flex items-center gap-3 text-xs font-mono text-[#777777] mb-3">
                  <span>{selectedArticle.date}</span>
                  <span>·</span>
                  <span>{selectedArticle.readTime}</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#111111] leading-snug">
                  {selectedArticle.title}
                </h2>
                <p className="mt-3 text-base text-[#555555] font-normal leading-relaxed">
                  {selectedArticle.summary}
                </p>
              </div>

              {/* Sections */}
              <div className="space-y-6 pt-6 border-fine-t">
                {selectedArticle.content.map((sec, idx) => (
                  <div key={idx} className="space-y-2">
                    <h3 className="text-base font-semibold text-[#111111] tracking-tight">
                      {sec.heading}
                    </h3>
                    <div className="text-sm text-[#444444] leading-relaxed whitespace-pre-line">
                      {sec.text}
                    </div>
                  </div>
                ))}
              </div>

              {/* Article Footer */}
              <div className="pt-6 border-fine-t flex items-center justify-between font-mono text-xs text-[#777777]">
                <span>AUTHOR: {PORTFOLIO_DATA.profile.name}</span>
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="px-3 py-1.5 rounded border-fine bg-[#F4F4F1] hover:bg-[#EAEAE6] text-[#111111] transition-colors"
                >
                  Done Reading
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
