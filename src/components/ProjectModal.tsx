"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  X,
  ArrowUpRight,
  Check,
  Copy,
  AlertCircle,
  Cpu,
  Layers,
  Database,
  ShieldAlert,
} from "lucide-react";
import { Project } from "@/data/portfolio";
import { GithubIcon } from "./Icons";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!project) return;

    // Pause Lenis and prevent body scroll while modal is open
    const lenis = (window as unknown as { __lenis?: { stop: () => void; start: () => void } }).__lenis;
    lenis?.stop();
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      lenis?.start();
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  if (!project) return null;

  const handleCopyCode = () => {
    if (project.codeSnippet?.code) {
      navigator.clipboard.writeText(project.codeSnippet.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div
      data-lenis-prevent
      className="fixed inset-0 z-50 overflow-y-auto bg-black/40 backdrop-blur-[2px] flex justify-center items-start p-3 sm:p-6 md:p-10 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-white rounded-lg border-fine shadow-2xl overflow-hidden my-6 text-[#111111]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-white/95 backdrop-blur-md border-fine-b">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-wider text-[#777777]">
              CASE STUDY / {project.index}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span className="font-mono text-xs text-[#111111]">{project.status}</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-md hover:bg-[#F4F4F1] text-[#777777] hover:text-[#111111] transition-colors focus:outline-none"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body Content */}
        <div className="p-6 md:p-10 space-y-10">
          {/* Header & Subtitle */}
          <div>
            <div className="font-mono text-xs text-[#777777] mb-2">PROJECT NO. {project.index}</div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#111111]">
              {project.title}
            </h2>
            <p className="text-base sm:text-lg text-[#555555] mt-2 font-normal">
              {project.subtitle}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mt-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 text-xs font-mono bg-[#F4F4F1] text-[#111111] rounded border-fine"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Quick Metrics Bar */}
            <div className="mt-5 p-3.5 bg-[#FAFAFA] rounded border-fine font-mono text-xs text-[#333333] flex items-center gap-2">
              <span className="font-semibold text-[#111111]">VERIFIED METRICS:</span>
              <span>{project.metrics}</span>
            </div>

            {/* Project Image Preview */}
            {project.image && (
              <div className="relative aspect-[16/9] w-full rounded-lg overflow-hidden border-fine bg-[#F4F4F1] mt-5">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 850px"
                />
              </div>
            )}

            {/* Core Deliverables / Bullet points */}
            {project.bulletPoints && project.bulletPoints.length > 0 && (
              <div className="mt-6 p-5 rounded-lg border-fine bg-[#FAFAFA] space-y-3">
                <span className="font-mono text-xs uppercase tracking-wider text-[#777777] block font-semibold">
                  DELIVERABLES & TECHNICAL ACCOMPLISHMENTS
                </span>
                <ul className="space-y-2 text-sm text-[#444444] leading-relaxed">
                  {project.bulletPoints.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#111111] mt-2 shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Section: Problem vs Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-fine-t">
            <div className="p-5 rounded bg-[#FAFAFA] border-fine">
              <div className="font-mono text-xs uppercase tracking-wider text-[#777777] mb-2 flex items-center gap-1.5">
                <AlertCircle className="w-3.5 h-3.5 text-amber-600" />
                THE PROBLEM & BOTTLENECK
              </div>
              <p className="text-sm text-[#444444] leading-relaxed">{project.problem}</p>
            </div>

            <div className="p-5 rounded bg-[#FAFAFA] border-fine">
              <div className="font-mono text-xs uppercase tracking-wider text-[#777777] mb-2 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-emerald-600" />
                THE ARCHITECTURAL SOLUTION
              </div>
              <p className="text-sm text-[#444444] leading-relaxed">{project.solution}</p>
            </div>
          </div>

          {/* Section: Architecture Layers */}
          <div className="space-y-4 pt-4 border-fine-t">
            <div className="flex items-center justify-between">
              <h3 className="font-mono text-xs uppercase tracking-wider text-[#777777] flex items-center gap-1.5">
                <Database className="w-3.5 h-3.5 text-[#111111]" />
                SYSTEM ARCHITECTURE BREAKDOWN
              </h3>
              <span className="font-mono text-[11px] text-[#888888]">
                {project.architectureDetails.length} SUBSYSTEMS
              </span>
            </div>

            <div className="grid grid-cols-1 gap-3">
              {project.architectureDetails.map((layer, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded border-fine bg-white hover:border-[#111111] transition-colors"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-mono text-[11px] text-[#777777]">0{idx + 1} /</span>
                    <h4 className="text-sm font-semibold text-[#111111]">{layer.layer}</h4>
                  </div>
                  <p className="text-xs sm:text-sm text-[#555555] leading-relaxed pl-5">
                    {layer.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Trade-offs Considered */}
          <div className="space-y-4 pt-4 border-fine-t">
            <h3 className="font-mono text-xs uppercase tracking-wider text-[#777777] flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-[#111111]" />
              KEY ARCHITECTURAL TRADE-OFFS & DECISIONS
            </h3>

            <div className="space-y-4">
              {project.tradeoffs.map((item, idx) => (
                <div key={idx} className="border-fine rounded p-5 bg-[#FAFAFA]">
                  <div className="font-semibold text-sm text-[#111111] mb-2">
                    Decision: {item.decision}
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3 text-xs font-mono">
                    <div className="p-2.5 rounded bg-white border-fine">
                      <span className="text-emerald-700 font-bold block mb-1">✓ CHOSEN PATH</span>
                      <span className="text-[#111111]">{item.chosen}</span>
                    </div>
                    <div className="p-2.5 rounded bg-white border-fine">
                      <span className="text-[#777777] font-bold block mb-1">✕ ALTERNATIVE</span>
                      <span className="text-[#555555]">{item.alternative}</span>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                    <strong className="text-[#111111]">Rationale: </strong>
                    {item.reasoning}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Failure Modes & Edge Cases */}
          <div className="space-y-4 pt-4 border-fine-t">
            <h3 className="font-mono text-xs uppercase tracking-wider text-[#777777] flex items-center gap-1.5">
              <ShieldAlert className="w-3.5 h-3.5 text-rose-600" />
              EDGE CASES & SYSTEM FAILURE SCENARIOS
            </h3>

            <div className="space-y-3">
              {project.failureScenarios.map((item, idx) => (
                <div key={idx} className="border-fine rounded p-4 bg-white">
                  <div className="flex items-baseline justify-between mb-1.5">
                    <span className="text-sm font-semibold text-[#111111]">
                      {idx + 1}. {item.failure}
                    </span>
                  </div>
                  <div className="text-xs text-[#777777] mb-2 font-mono">
                    <span className="font-semibold text-rose-700">Impact: </span>
                    {item.impact}
                  </div>
                  <div className="text-xs sm:text-sm text-[#333333] bg-[#F4F4F1] p-2.5 rounded">
                    <span className="font-semibold text-[#111111]">Mitigation: </span>
                    {item.resolution}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Code Snippet */}
          {project.codeSnippet && (
            <div className="space-y-3 pt-4 border-fine-t">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-wider text-[#777777]">
                  IMPLEMENTATION DETAIL / CODE SNIPPET
                </span>
                <button
                  onClick={handleCopyCode}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded border-fine bg-white hover:bg-[#F4F4F1] text-[11px] font-mono text-[#111111] transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-600" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3 text-[#777777]" />
                      <span>Copy Snippet</span>
                    </>
                  )}
                </button>
              </div>

              <div className="border-fine rounded-lg overflow-hidden bg-[#111111] text-[#ECECEC]">
                <div className="px-4 py-2 border-b border-[#262626] flex items-center justify-between text-xs font-mono text-[#888888]">
                  <span>{project.codeSnippet.title}</span>
                  <span className="uppercase text-[10px]">{project.codeSnippet.language}</span>
                </div>
                <pre className="p-4 overflow-x-auto text-xs font-mono leading-relaxed text-[#DCDCDC]">
                  <code>{project.codeSnippet.code}</code>
                </pre>
              </div>
            </div>
          )}

          {/* Links & Close Footer */}
          <div className="pt-6 border-fine-t flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded bg-[#111111] hover:bg-black text-white text-xs font-mono transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>View Repository</span>
                <ArrowUpRight className="w-3 h-3 text-[#aaaaaa]" />
              </a>

              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded border-fine bg-white hover:bg-[#F4F4F1] text-xs font-mono text-[#111111] transition-colors"
                >
                  <span>Live Telemetry / Demo</span>
                  <ArrowUpRight className="w-3 h-3 text-[#777777]" />
                </a>
              )}
            </div>

            <button
              onClick={onClose}
              className="text-xs font-mono text-[#777777] hover:text-[#111111] px-3 py-1.5"
            >
              Close [ESC]
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
