import { Metadata } from "next";

import Hero from "@/components/homes/grahas-vr/Hero";
import SocialProof from "@/components/homes/grahas-vr/SocialProof";
import WhatWeBuild from "@/components/homes/grahas-vr/WhatWeBuild";
import Projects from "@/components/homes/grahas-vr/Projects";
import CaseStudy from "@/components/homes/grahas-vr/CaseStudy";
import Platforms from "@/components/homes/grahas-vr/Platforms";
import StepFramework from "@/components/homes/grahas-vr/StepFramework";
import Partners from "@/components/homes/grahas-vr/Partners";
import Industries from "@/components/homes/grahas-vr/Industries";
import Team from "@/components/homes/grahas-vr/Team";

export const metadata: Metadata = {
  title: "GRAHAs VR — Engineering-Grade XR for Industry",
  description:
    "We build high-fidelity XR solutions that solve real enterprise problems. Digital Twins, Training Simulators, and AR experiences — specific to your SOPs.",
  icons: {
    icon: "/img/favicon/apple-touch-icon.png",
    apple: "/img/favicon/apple-touch-icon.png",
  },
};

export default function GrahasVRPage() {
  return (
    <main id="mxd-page-content" className="mxd-page-content">
      <Hero />
      <SocialProof />
      <WhatWeBuild />
      <Projects />
      <Platforms />
      <CaseStudy />
      <StepFramework />
      <Partners />
      <Industries />
      <Team />
    </main>
  );
}
