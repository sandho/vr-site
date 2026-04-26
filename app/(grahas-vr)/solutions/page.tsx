import { Metadata } from "next";
import WhatWeBuild from "@/components/homes/grahas-vr/WhatWeBuild";

export const metadata: Metadata = {
  title: "Solutions — GRAHAs VR",
  description:
    "Digital Twins, VR Training Simulators, and WebAR Visualization — engineered from your machinery, your SOPs, your people.",
};

export default function SolutionsPage() {
  return (
    <main id="mxd-page-content" className="mxd-page-content">
      <WhatWeBuild />
    </main>
  );
}
