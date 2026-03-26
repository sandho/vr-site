"use client";

import MobileMenu from "@/components/headers/MobileMenu";
import Header1 from "@/components/headers/Header1";
import InitScroll from "@/components/scroll/InitScroll";
import LenisSmoothScroll from "@/components/scroll/LenisSmoothScroll";
import ScrollTop from "@/components/scroll/ScrollTop";
import { usePathname } from "next/navigation";

interface ClientLayoutProps {
  children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  const pathname = usePathname();
  const grahasPaths = ["/solutions", "/work", "/platforms", "/step-framework", "/team", "/contact"];
  const isGrahasVR =
    pathname === "/" ||
    grahasPaths.some((p) => pathname === p || pathname.startsWith(p + "/"));

  return (
    <>
      {!isGrahasVR && <MobileMenu />}
      {!isGrahasVR && <Header1 />}
      {children}
      <InitScroll />
      <ScrollTop />
      <LenisSmoothScroll />
    </>
  );
}
