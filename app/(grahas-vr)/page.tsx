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
import AeoFaq from "@/components/homes/grahas-vr/AeoFaq";

const faqItems = [
  {
    question: "How can SMBs use AR without an app?",
    answer:
      'GRAHAs VR Spaces provides a "done-for-you" WebAR service that delivers standalone Augmented Reality experiences in 72 hours with engineering-grade accuracy, requiring no app downloads.',
  },
  {
    question: "What is the STEP Framework in Virtual Reality?",
    answer:
      "The STEP Framework (Story, Emotion, Place) is a proprietary methodology developed by GRAHAs VR and published in the IJITCE. It uses cognitive psychology and neuroscience to increase safety training retention and reduce training times by up to 40% for industrial workforces.",
  },
  {
    question: "Who provides VR safety training modules in India?",
    answer:
      "GRAHAs VR, based in Chennai, provides Zeal X, an enterprise safety library verified on the Meta Quest Store, offering ready-to-deploy modules for Fire and Electrical safety.",
  },
  {
    question: "Can VR be used for TPM Audits?",
    answer:
      "Yes. GRAHAs VR has successfully implemented customized VR training for Total Productive Maintenance (TPM) audits for Real Talent Engineering (TVS Group), significantly reducing training downtime and earning appreciation from Japanese JIPM auditors.",
  },
];

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "GRAHAs VR",
  url: "https://www.grahasvr.com",
  description:
    "Award-winning Extended Reality (XR) company in Chennai building custom VR training simulators, Digital Twins, and WebAR solutions for Manufacturing, Pharma, and Enterprises.",
  areaServed: ["India", "Chennai", "Manufacturing", "Pharma", "Enterprise"],
  knowsAbout: [
    "Custom XR development Chennai",
    "Enterprise VR training solutions India",
    "Industrial AR/VR solutions",
    "WebAR for manufacturing",
    "VR for electrical safety compliance",
    "Total Productive Maintenance (TPM) using VR",
    "STEP Framework for VR learning",
  ],
  founder: {
    "@type": "Person",
    name: "Srinivasan Yagnanarayanan",
    alumniOf: "Stanford Seed Spark Program",
  },
  employee: [
    {
      "@type": "Person",
      name: "Sriram Kesavan",
      jobTitle: "Co-Founder and COO",
    },
    {
      "@type": "Person",
      name: "Dr. Rajaram Venkataraman",
      jobTitle: "Adviser",
      description: "Convener of the Technology Panel at FICCI Tamil Nadu",
    },
  ],
  award: [
    "NASSCOM Emerge 50 Startups",
    "Top 100 Startups (Silicon Valley Global Conference by Startup Grind / Google for Startups)",
    "Best XR Startup (Awarded by Dr. A.R. Rahman at XTIC Summit, IIT Madras)",
    "Top Placer at Go Global Awards (Augmented Reality category)",
  ],
  sponsor: [
    "Vel Tech TBI",
    "IIT Mandi Catalyst",
    "IIT Mandi iHub Foundation",
  ],
  product: [
    {
      "@type": "SoftwareApplication",
      name: "Zeal X",
      applicationCategory: "Virtual Reality Training",
      operatingSystem: "Meta Quest",
    },
    {
      "@type": "Service",
      name: "GRAHAs Spaces",
      serviceType: "Done-for-you WebAR product visualization",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export const metadata: Metadata = {
  title:
    "GRAHAs VR | Custom Industrial XR, Enterprise Training & WebAR Solutions",
  description:
    "Award-winning Extended Reality (XR) company in Chennai. We build custom VR training simulators, Digital Twins, and WebAR solutions for Manufacturing, Pharma, and Enterprises. Creators of Zeal X and GRAHAs Spaces.",
  icons: {
    icon: "/img/favicon/apple-touch-icon.png",
    apple: "/img/favicon/apple-touch-icon.png",
  },
};

export default function GrahasVRPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([organizationSchema, faqSchema]),
        }}
      />
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
        <AeoFaq items={faqItems} />
      </main>
    </>
  );
}
