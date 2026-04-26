import { Metadata } from "next";
import Platforms from "@/components/homes/grahas-vr/Platforms";

export const metadata: Metadata = {
  title: "Platforms — GRAHAs VR",
  description:
    "Zeal X, Spaces, and Canvas — three XR platforms built for enterprise. Live on Meta Quest, WebAR, and self-serve.",
};

export default function PlatformsPage() {
  return (
    <main id="mxd-page-content" className="mxd-page-content">
      <Platforms />
    </main>
  );
}
