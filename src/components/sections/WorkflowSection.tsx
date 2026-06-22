import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const workflowSteps = [
  "Target input",
  "Computational screening",
  "Candidate ranking",
  "Optimization",
  "Validation support",
];

export function WorkflowSection() {
  return (
    <section className="overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 py-24 text-white">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionHeading
            align="left"
            theme="dark"
            eyebrow="Workflow"
            title="From target definition to candidate insight."
            description="MOLwise supports the discovery process with clear computational stages, helping teams move from raw inputs to organized, research-ready outputs."
            />

          <div className="rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur">
            <div className="space-y-4">
              {workflowSteps.map((step, index) => (
                <div
                  key={step}
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/10 p-4"
                >
                  <div>
                    <p className="text-sm text-blue-200">0{index + 1}</p>
                    <p className="mt-1 font-semibold">{step}</p>
                  </div>

                  {index < workflowSteps.length - 1 && (
                    <ArrowRight className="h-5 w-5 text-blue-200" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}