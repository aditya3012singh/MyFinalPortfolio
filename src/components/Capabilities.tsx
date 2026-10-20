import React from "react";
import { Server, Database, Code, Radio, ShieldCheck, Activity, Sliders } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export function Capabilities() {
  const { capabilities } = PORTFOLIO_DATA;

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Languages":
        return <Code className="w-4 h-4 text-[#111111]" />;
      case "Backend Engineering":
        return <Server className="w-4 h-4 text-[#111111]" />;
      case "Databases & In-Memory":
        return <Database className="w-4 h-4 text-[#111111]" />;
      case "Messaging & Event Streaming":
        return <Radio className="w-4 h-4 text-[#111111]" />;
      case "Systems Architecture":
        return <ShieldCheck className="w-4 h-4 text-[#111111]" />;
      case "Observability & DevOps":
        return <Activity className="w-4 h-4 text-[#111111]" />;
      default:
        return <Sliders className="w-4 h-4 text-[#111111]" />;
    }
  };

  return (
    <section id="capabilities" className="py-16 md:py-24 border-fine-b bg-white">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10">
        {/* Section Heading */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 border-fine-b">
          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-[#777777] block mb-2">
              SECTION / 05 · SYSTEM DOMAINS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#111111]">
              Technical Capabilities
            </h2>
          </div>
          <p className="text-xs md:text-sm font-mono text-[#777777] max-w-xs">
            Languages, frameworks, databases, messaging brokers, and observability.
          </p>
        </div>

        {/* 6 Clean Capability Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-10">
          {capabilities.map((cat, idx) => (
            <div
              key={idx}
              className="p-6 md:p-8 rounded-lg border-fine bg-white hover:border-[#111111] transition-all duration-200 space-y-4"
            >
              <div className="flex items-center justify-between pb-3 border-fine-b">
                <div className="flex items-center gap-2.5">
                  {getCategoryIcon(cat.category)}
                  <h3 className="font-bold text-base md:text-lg text-[#111111]">
                    {cat.category}
                  </h3>
                </div>
                <span className="font-mono text-xs text-[#888888]">0{idx + 1}</span>
              </div>

              <p className="text-xs sm:text-sm text-[#666666] leading-relaxed">
                {cat.description}
              </p>

              {/* Skills Badges */}
              <div className="flex flex-wrap gap-2 pt-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs font-mono bg-[#F4F4F1] hover:bg-[#EAEAE6] text-[#111111] rounded border-fine transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
