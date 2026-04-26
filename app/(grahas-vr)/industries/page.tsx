import { Metadata } from "next";
import Industries from "@/components/homes/grahas-vr/Industries";

export const metadata: Metadata = {
  title: "Industries — GRAHAs VR",
  description:
    "Deploying XR across 10+ sectors including IT/ITeS, manufacturing, shipping, farming, pharma, life sciences, hospitality, and e-commerce.",
};

export default function IndustriesPage() {
  return (
    <main id="mxd-page-content" className="mxd-page-content">
      <Industries />
    </main>
  );
}
