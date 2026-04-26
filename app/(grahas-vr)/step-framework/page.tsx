import { Metadata } from "next";
import StepFramework from "@/components/homes/grahas-vr/StepFramework";

export const metadata: Metadata = {
  title: "STEP Framework™ — GRAHAs VR",
  description:
    "Story, Tension, Emotion, Place — our proprietary cognitive model that engineers retention, not just visuals. Knowledge that transfers from simulation to real practice.",
};

export default function StepFrameworkPage() {
  return (
    <main id="mxd-page-content" className="mxd-page-content">
      <StepFramework />
    </main>
  );
}
