"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Brain, Dna, LineChart } from "lucide-react";

const steps = [
  {
    label: "Input",
    title: "DNA / Molecular Input",
    description: "Candidate sequences and molecular data enter the workflow.",
    Icon: Dna,
  },
  {
    label: "Analyze",
    title: "AI Screening",
    description: "Computational models scan for meaningful interaction patterns.",
    Icon: Brain,
  },
  {
    label: "Rank",
    title: "Candidate Ranking",
    description: "Promising candidates are prioritized for research decisions.",
    Icon: LineChart,
  },
];

export function DnaAnimation() {
  const [activeStep, setActiveStep] = useState(0);
  const ActiveIcon = steps[activeStep].Icon;

  function nextStep() {
    setActiveStep((current) => (current + 1) % steps.length);
  }

  return (
    <motion.button
      type="button"
      onClick={nextStep}
      whileHover="hover"
      initial="rest"
      animate="rest"
      className="group relative mx-auto block w-full max-w-[600px] rounded-[2rem] border border-cyan-200/70 bg-slate-950 p-4 text-left shadow-2xl shadow-cyan-950/30 outline-none transition focus:ring-4 focus:ring-cyan-300/40"
      aria-label="Interactive MOLwise discovery workflow. Click to change step."
    >
      <motion.div
        className="absolute -inset-4 rounded-[2.5rem] bg-cyan-300/25 blur-3xl"
        variants={{
          rest: { opacity: 0.6, scale: 1 },
          hover: { opacity: 1, scale: 1.05 },
        }}
      />

      <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.22),rgba(15,23,42,1)_55%)] p-5 text-white sm:p-6">
        <div className="absolute right-[-5rem] top-[-5rem] h-56 w-56 rounded-full bg-cyan-300/20 blur-3xl" />
        <div className="absolute bottom-[-5rem] left-[-5rem] h-56 w-56 rounded-full bg-sky-300/20 blur-3xl" />

        <div className="relative z-10 flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-200">
              MOLwise Discovery Workflow
            </p>
            <h3 className="mt-2 text-2xl font-bold tracking-tight text-white">
              From DNA data to ranked candidates
            </h3>
          </div>

          {/* <div className="hidden items-center gap-2 rounded-full border border-cyan-200/30 bg-cyan-300/10 px-3 py-2 text-xs font-semibold text-cyan-100 sm:flex">
            <MousePointerClick className="h-4 w-4" />
            Click
          </div> */}
        </div>

        <div className="relative z-10 mt-8 grid gap-4 md:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.Icon;
            const isActive = index === activeStep;

            return (
              <motion.div
                key={step.title}
                onMouseEnter={() => setActiveStep(index)}
                className={`relative rounded-3xl border p-5 transition ${
                  isActive
                    ? "border-cyan-200 bg-cyan-300/15 shadow-lg shadow-cyan-500/20"
                    : "border-white/10 bg-white/5 hover:border-cyan-200/40 hover:bg-white/10"
                }`}
                variants={{
                  rest: { y: 0 },
                  hover: { y: isActive ? -6 : 0 },
                }}
              >
                <div
                  className={`mb-4 flex h-12 w-12 items-center justify-center rounded-2xl ${
                    isActive
                      ? "bg-cyan-300 text-slate-950"
                      : "bg-white/10 text-cyan-100"
                  }`}
                >
                  <Icon className="h-6 w-6" />
                </div>

                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
                  {step.label}
                </p>

                <h4 className="mt-2 text-base font-bold text-white">
                  {step.title}
                </h4>

                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {step.description}
                </p>

                {index < steps.length - 1 && (
                  <div className="absolute -right-4 top-1/2 hidden h-px w-8 bg-cyan-200/40 md:block" />
                )}
              </motion.div>
            );
          })}
        </div>

        <div className="relative z-10 mt-8 rounded-3xl border border-cyan-200/20 bg-slate-950/70 p-5 backdrop-blur">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-4">
              <motion.div
                key={steps[activeStep].title}
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-cyan-300 text-slate-950 shadow-lg shadow-cyan-300/30"
              >
                <ActiveIcon className="h-7 w-7" />
              </motion.div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-200">
                  Active stage
                </p>
                <motion.h4
                  key={steps[activeStep].title}
                  initial={{ y: 8, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="mt-1 text-xl font-bold text-white"
                >
                  {steps[activeStep].title}
                </motion.h4>
                <motion.p
                  key={steps[activeStep].description}
                  initial={{ y: 8, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="mt-2 text-sm leading-6 text-slate-300"
                >
                  {steps[activeStep].description}
                </motion.p>
              </div>
            </div>

            <div className="min-w-32">
              <div className="mb-2 flex justify-between text-xs font-medium text-cyan-100">
                <span>Progress</span>
                <span>{activeStep === 0 ? "33%" : activeStep === 1 ? "66%" : "100%"}</span>
              </div>

              <div className="h-2 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  key={activeStep}
                  className="h-full rounded-full bg-cyan-300"
                  initial={{ width: "0%" }}
                  animate={{
                    width:
                      activeStep === 0
                        ? "33%"
                        : activeStep === 1
                          ? "66%"
                          : "100%",
                  }}
                  transition={{ duration: 0.4 }}
                />
              </div>
            </div>
          </div>
        </div>

        <motion.div
          className="relative z-10 mt-6 flex justify-center"
          variants={{
            rest: { opacity: 0.85 },
            hover: { opacity: 1 },
          }}
        >
          {/* <div className="rounded-full border border-cyan-200/30 bg-white/5 px-4 py-2 text-xs font-medium text-cyan-100">
            Hover a stage or click the visual to explore the workflow
          </div> */}
        </motion.div>
      </div>
    </motion.button>
  );
}