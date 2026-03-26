import { Metadata } from "next";

import Hero from "@/components/homes/grahas-vr/Hero";
import Stats from "@/components/homes/grahas-vr/Stats";
import About from "@/components/homes/grahas-vr/About";
import WhatWeBuild from "@/components/homes/grahas-vr/WhatWeBuild";
import Projects from "@/components/homes/grahas-vr/Projects";
import CaseStudy from "@/components/homes/grahas-vr/CaseStudy";
import Platforms from "@/components/homes/grahas-vr/Platforms";
import StepFramework from "@/components/homes/grahas-vr/StepFramework";
import Industries from "@/components/homes/grahas-vr/Industries";
import Team from "@/components/homes/grahas-vr/Team";
import Cta from "@/components/homes/grahas-vr/Cta";

export const metadata: Metadata = {
  title: "GRAHAs VR — Engineering-Grade XR for Industry",
  description:
    "We build high-fidelity XR solutions that solve real enterprise problems. Digital Twins, Training Simulators, and AR experiences — specific to your SOPs.",
};

export default function GrahasVRPage() {
  return (
    <main id="mxd-page-content" className="mxd-page-content">
      <Hero />
      <Stats />
      <About />
      <WhatWeBuild />
      <Projects />
      <CaseStudy />
      <Platforms />
      <StepFramework />
      <Industries />
      <Team />
      <Cta />
    </main>
  );
}
