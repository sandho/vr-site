"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const labels: Record<string, string> = {
  "/solutions": "Solutions",
  "/social-proof": "Social Proof",
  "/work": "Demo Vault",
  "/case-study": "Case Study",
  "/platforms": "Platforms",
  "/step-framework": "STEP Framework",
  "/partners": "Partnerships",
  "/industries": "Industries",
  "/team": "Team",
  "/contact": "Contact",
};

export default function GrahasBreadcrumbs() {
  const pathname = usePathname();

  if (pathname === "/") return null;

  const label = labels[pathname] ?? "GRAHAs VR";

  return (
    <div className="grahas-breadcrumbs loading__fade">
      <div className="mxd-container grid-container">
        <div className="mxd-block">
          <div className="breadcrumbs__nav">
            <span>
              <Link href="/">Home</Link>
            </span>
            <span className="current-item">{label}</span>
          </div>
        </div>
      </div>
      <style>{`
        .grahas-breadcrumbs {
          position: relative;
          z-index: 2;
          padding-top: 11rem;
          padding-bottom: 1rem;
        }
        .grahas-breadcrumbs .mxd-block {
          margin-bottom: 0;
        }
        @media only screen and (min-width: 768px) {
          .grahas-breadcrumbs {
            padding-top: 13rem;
          }
        }
      `}</style>
    </div>
  );
}
