import { Metadata } from "next";
import Cta from "@/components/homes/grahas-vr/Cta";

export const metadata: Metadata = {
  title: "Contact — GRAHAs VR",
  description:
    "Start your XR pilot with GRAHAs VR. Get in touch to explore Digital Twins, VR Training, and AR solutions for your enterprise.",
};

export default function ContactPage() {
  return (
    <main id="mxd-page-content" className="mxd-page-content">
      <Cta />
    </main>
  );
}
