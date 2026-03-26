import { Metadata } from "next";
import Team from "@/components/homes/grahas-vr/Team";
import CaseStudy from "@/components/homes/grahas-vr/CaseStudy";
import Cta from "@/components/homes/grahas-vr/Cta";

export const metadata: Metadata = {
  title: "Team — GRAHAs VR",
  description:
    "Meet the innovators behind GRAHAs VR — Srinivasan Y, Sriram Kesavan, and Dr. Rajaram V.",
};

export default function TeamPage() {
  return (
    <main id="mxd-page-content" className="mxd-page-content">
      <Team />
      <CaseStudy />
      <Cta />
    </main>
  );
}
