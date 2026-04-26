import { Metadata } from "next";
import CaseStudy from "@/components/homes/grahas-vr/CaseStudy";

export const metadata: Metadata = {
  title: "TVS Case Study — GRAHAs VR",
  description:
    "40% faster training: see how Real Talent Engineering, TVS Group moved from manual SOPs to immersive VR.",
};

export default function CaseStudyPage() {
  return (
    <main id="mxd-page-content" className="mxd-page-content">
      <CaseStudy />
    </main>
  );
}
