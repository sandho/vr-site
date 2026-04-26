import { Metadata } from "next";
import Projects from "@/components/homes/grahas-vr/Projects";

export const metadata: Metadata = {
  title: "Work — GRAHAs VR",
  description:
    "Selected XR projects — Digital Twins, VR Training Simulators, and AR experiences built for real enterprise problems.",
};

export default function WorkPage() {
  return (
    <main id="mxd-page-content" className="mxd-page-content">
      <Projects />
    </main>
  );
}
