import { Metadata } from "next";
import SocialProof from "@/components/homes/grahas-vr/SocialProof";

export const metadata: Metadata = {
  title: "Social Proof — GRAHAs VR",
  description:
    "Trusted by innovation leaders including TVS Group, IIT Mandi Catalyst, Vel Tech TBI, NASSCOM Emerge 50, Startup Grind, Google for Startups, and CII.",
};

export default function SocialProofPage() {
  return (
    <main id="mxd-page-content" className="mxd-page-content">
      <SocialProof />
    </main>
  );
}
