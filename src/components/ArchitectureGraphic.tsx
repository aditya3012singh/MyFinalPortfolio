"use client";

import React, { useState } from "react";
import { ArrowRight, CheckCircle2, Zap } from "lucide-react";

export function ArchitectureGraphic() {
  const [trafficMode, setTrafficMode] = useState<"normal" | "spike">("normal");

  return (
    <div className="w-full border-fine bg-[#FAFAFA] rounded-lg p-5 md:p-6 my-6">
      {/* Top Header & Simple Traffic Switch */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 mb-5 border-fine-b">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs uppercase tracking-wider text-[#777777]">
            HOW A REQUEST FLOWS THROUGH THE SYSTEM
          </span>
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] font-mono bg-white border-fine text-[#111111]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            INTERACTIVE
          </span>
        </div>

        {/* Simple 2-Option Traffic Toggle */}
        <div className="flex items-center gap-1 bg-white p-1 rounded border-fine text-xs font-mono">
          <button
            onClick={() => setTrafficMode("normal")}
            className={`px-3 py-1 rounded transition-colors ${
              trafficMode === "normal"
                ? "bg-[#111111] text-white"
                : "text-[#777777] hover:text-[#111111]"
            }`}
          >
            Normal Traffic
          </button>
          <button
            onClick={() => setTrafficMode("spike")}
            className={`px-3 py-1 rounded transition-colors ${
              trafficMode === "spike"
                ? "bg-[#111111] text-white"
                : "text-[#777777] hover:text-[#111111]"
            }`}
          >
            Sudden Traffic Spike
          </button>
        </div>
      </div>

      {/* 4 Simple Sequential Steps */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 relative">
        {/* Step 1: User Request */}
        <div className="bg-white border-fine rounded p-4 flex flex-col justify-between hover:border-[#111111] transition-colors">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-[11px] text-[#777777]">STEP 01</span>
              <span className="px-1.5 py-0.5 rounded bg-[#F4F4F1] border-fine font-mono text-[10px] text-[#111111]">
                Node.js API
              </span>
            </div>
            <h4 className="text-sm font-bold text-[#111111]">User Request</h4>
            <p className="text-xs text-[#555555] mt-1.5 leading-relaxed">
              A user clicks a button or sends data. The server instantly acknowledges it so the user never waits.
            </p>
          </div>
          <div className="mt-4 pt-2.5 border-t border-[#f0f0f0] font-mono text-[11px]">
            {trafficMode === "normal" ? (
              <span className="text-emerald-700 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" /> Response time: &lt; 20ms
              </span>
            ) : (
              <span className="text-emerald-700 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" /> Accepts all incoming traffic
              </span>
            )}
          </div>
        </div>

        {/* Step 2: The Queue */}
        <div className="bg-white border-fine rounded p-4 flex flex-col justify-between hover:border-[#111111] transition-colors">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-[11px] text-[#777777]">STEP 02</span>
              <span className="px-1.5 py-0.5 rounded bg-[#F4F4F1] border-fine font-mono text-[10px] text-[#111111]">
                Redis / BullMQ
              </span>
            </div>
            <h4 className="text-sm font-bold text-[#111111]">Task Queue</h4>
            <p className="text-xs text-[#555555] mt-1.5 leading-relaxed">
              Instead of doing heavy calculations immediately, tasks line up neatly in a queue so the site never freezes.
            </p>
          </div>
          <div className="mt-4 pt-2.5 border-t border-[#f0f0f0] font-mono text-[11px]">
            {trafficMode === "normal" ? (
              <span className="text-[#555555]">Queue: 5 tasks waiting</span>
            ) : (
              <span className="text-[#111111] font-semibold flex items-center gap-1">
                <Zap className="w-3 h-3 text-amber-600" /> Buffers 10,000 tasks safely
              </span>
            )}
          </div>
        </div>

        {/* Step 3: Background Workers */}
        <div className="bg-white border-fine rounded p-4 flex flex-col justify-between hover:border-[#111111] transition-colors">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-[11px] text-[#777777]">STEP 03</span>
              <span className="px-1.5 py-0.5 rounded bg-[#F4F4F1] border-fine font-mono text-[10px] text-[#111111]">
                Workers / Docker
              </span>
            </div>
            <h4 className="text-sm font-bold text-[#111111]">Background Helpers</h4>
            <p className="text-xs text-[#555555] mt-1.5 leading-relaxed">
              Independent worker programs pick up tasks from the queue one by one, process them, and retry if something fails.
            </p>
          </div>
          <div className="mt-4 pt-2.5 border-t border-[#f0f0f0] font-mono text-[11px]">
            {trafficMode === "normal" ? (
              <span className="text-[#555555]">Workers: 4 active helpers</span>
            ) : (
              <span className="text-[#111111] font-semibold">
                Auto-scales to finish backlog
              </span>
            )}
          </div>
        </div>

        {/* Step 4: Safe Database */}
        <div className="bg-white border-fine rounded p-4 flex flex-col justify-between hover:border-[#111111] transition-colors">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-[11px] text-[#777777]">STEP 04</span>
              <span className="px-1.5 py-0.5 rounded bg-[#F4F4F1] border-fine font-mono text-[10px] text-[#111111]">
                PostgreSQL
              </span>
            </div>
            <h4 className="text-sm font-bold text-[#111111]">Safe Database</h4>
            <p className="text-xs text-[#555555] mt-1.5 leading-relaxed">
              The finished results are saved cleanly in the database in batches, keeping database storage fast and protected.
            </p>
          </div>
          <div className="mt-4 pt-2.5 border-t border-[#f0f0f0] font-mono text-[11px]">
            {trafficMode === "normal" ? (
              <span className="text-emerald-700">Healthy & fast (&lt; 25ms)</span>
            ) : (
              <span className="text-emerald-700 font-semibold flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" /> Zero crashes or lockouts
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Simple Plain-English Takeaway */}
      <div className="mt-4 pt-3 border-fine-t flex items-start gap-2 text-xs text-[#666666] font-mono leading-relaxed">
        <ArrowRight className="w-3.5 h-3.5 text-[#111111] shrink-0 mt-0.5" />
        {trafficMode === "normal" ? (
          <span>
            <strong className="text-[#111111]">Everyday Flow:</strong> When a user takes an action, the site stays fast because all heavy work is handed off to background queues and workers.
          </span>
        ) : (
          <span>
            <strong className="text-[#111111]">Traffic Spike Flow:</strong> Even if 10,000 requests arrive at once, the queue acts like a shock absorber. It holds the work in line so the database and website never crash.
          </span>
        )}
      </div>
    </div>
  );
}
