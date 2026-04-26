import { Metadata } from "next";
import Partners from "@/components/homes/grahas-vr/Partners";

export const metadata: Metadata = {
  title: "Partnerships — GRAHAs VR",
  description:
    "Partner with GRAHAs VR through ISV partnerships or channel partnerships for GRAHAs Spaces and Done-For-You WebAR.",
};

export default function PartnersPage() {
  return (
    <main id="mxd-page-content" className="mxd-page-content">
      <Partners />
    </main>
  );
}
