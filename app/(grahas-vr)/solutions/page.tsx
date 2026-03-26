import { Metadata } from "next";
import About from "@/components/homes/grahas-vr/About";
import WhatWeBuild from "@/components/homes/grahas-vr/WhatWeBuild";
import Industries from "@/components/homes/grahas-vr/Industries";

export const metadata: Metadata = {
  title: "Solutions — GRAHAs VR",
  description:
    "Digital Twins, VR Training Simulators, and WebAR Visualization — engineered from your machinery, your SOPs, your people.",
};

export default function SolutionsPage() {
  return (
    <main id="mxd-page-content" className="mxd-page-content">
      <About />
      <WhatWeBuild />
      <Industries />
    </main>
  );
}
