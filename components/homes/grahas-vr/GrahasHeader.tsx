"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import AnimatedButton from "@/components/animation/AnimatedButton";

const navLinks = [
  { label: "Solutions", href: "/solutions" },
  { label: "Work", href: "/work" },
  { label: "Case Study", href: "/case-study" },
  { label: "Platforms", href: "/platforms" },
  { label: "Partners", href: "/partners" },
  { label: "Team", href: "/team" },
];

const StarSvg = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    viewBox="0 0 20 20"
    width="20"
    height="20"
    fill="currentColor"
  >
    <path d="M19.6,9.6h-3.9c-.4,0-1.8-.2-1.8-.2-.6,0-1.1-.2-1.6-.6-.5-.3-.9-.8-1.2-1.2-.3-.4-.4-.9-.5-1.4,0,0,0-1.1-.2-1.5V.4c0-.2-.2-.4-.4-.4s-.4.2-.4.4v4.4c0,.4-.2,1.5-.2,1.5,0,.5-.2,1-.5,1.4-.3.5-.7.9-1.2,1.2s-1,.5-1.6.6c0,0-1.2,0-1.7.2H.4c-.2,0-.4.2-.4.4s.2.4.4.4h4.1c.4,0,1.7.2,1.7.2.6,0,1.1.2,1.6.6.4.3.8.7,1.1,1.1.3.5.5,1,.6,1.6,0,0,0,1.3.2,1.7v4.1c0,.2.2.4.4.4s.4-.2.4-.4v-4.1c0-.4.2-1.7.2-1.7,0-.6.2-1.1.6-1.6.3-.4.7-.8,1.1-1.1.5-.3,1-.5,1.6-.6,0,0,1.3,0,1.8-.2h3.9c.2,0,.4-.2.4-.4s-.2-.4-.4-.4h0Z" />
  </svg>
);

export default function GrahasHeader() {
  const pathname = usePathname();
  const [isHidden, setIsHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navWrapRef = useRef<HTMLElement>(null);
  const menuWrapperRef = useRef<HTMLDivElement>(null);
  const menuBaseRef = useRef<HTMLDivElement>(null);
  const menuInnerRef = useRef<HTMLDivElement>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const hidden = window.pageYOffset > 10;
      setIsHidden((prev) => (prev === hidden ? prev : hidden));
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    if (menuOpen) closeMenu();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const openMenu = () => {
    if (menuOpen) return;
    setMenuOpen(true);

    const navWrap = navWrapRef.current;
    const wrapper = menuWrapperRef.current;
    const base = menuBaseRef.current;
    const inner = menuInnerRef.current;
    if (!navWrap || !wrapper || !base || !inner) return;

    // Expand nav wrap to cover full screen
    gsap.set(navWrap, { top: 0, bottom: 0, height: "100vh" });
    // Show the wrapper (override CSS display:none)
    gsap.set(wrapper, { display: "flex" });

    tlRef.current = gsap.timeline();
    tlRef.current
      .fromTo(base, { opacity: 0 }, { opacity: 1, duration: 0.35, ease: "power2.out" })
      .fromTo(
        inner.querySelectorAll(".fade-in-up-elm"),
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.07, ease: "power3.out" },
        "-=0.15"
      )
      .fromTo(
        inner.querySelectorAll(".fade-in-elm"),
        { opacity: 0 },
        { opacity: 1, duration: 0.4, ease: "power2.out" },
        "<"
      );
  };

  const closeMenu = () => {
    if (!menuOpen) return;

    const navWrap = navWrapRef.current;
    const wrapper = menuWrapperRef.current;
    const base = menuBaseRef.current;
    const inner = menuInnerRef.current;

    const tl = gsap.timeline({
      onComplete: () => {
        if (wrapper) gsap.set(wrapper, { display: "none" });
        if (navWrap) gsap.set(navWrap, { clearProps: "top,bottom,height" });
        setMenuOpen(false);
      },
    });

    if (inner) {
      tl.to(inner.querySelectorAll(".fade-in-up-elm, .fade-in-elm"), {
        opacity: 0,
        y: -20,
        duration: 0.25,
        stagger: 0.03,
        ease: "power2.in",
      });
    }
    if (base) {
      tl.to(base, { opacity: 0, duration: 0.3, ease: "power2.in" }, "-=0.1");
    }
  };

  const handleToggle = () => {
    if (menuOpen) closeMenu();
    else openMenu();
  };

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  return (
    <>
      {/* ── Mobile / Full-screen Nav Overlay ── */}
      <nav
        ref={navWrapRef}
        className={`mxd-nav__wrap ${menuOpen ? "active_menu" : ""}`}
        data-lenis-prevent=""
      >
        {/* Full-screen menu — hidden by CSS display:none; shown by GSAP */}
        <div
          ref={menuWrapperRef}
          className={`mxd-menu__wrapper ${menuOpen ? "active_menu" : ""}`}
        >
          <div ref={menuBaseRef} className="mxd-menu__base" />
          <div className="mxd-menu__contain">
            <div ref={menuInnerRef} className="mxd-menu__inner">
              {/* Left — nav links */}
              <div className="mxd-menu__left">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/img/grahas-logo.png"
                  alt="GRAHAs VR"
                  className="fade-in-elm"
                  style={{ height: "4rem", width: "auto", objectFit: "contain", marginBottom: "1.5rem" }}
                />
                <p className="mxd-menu__caption fade-in-elm">
                  Engineering-Grade XR
                  <br />
                  for Industry — Est. 2022
                </p>
                <div className="main-menu">
                  <nav className="main-menu__content">
                    <ul className="main-menu__accordion">
                      {navLinks.map((item, i) => (
                        <li
                          key={i}
                          className={`main-menu__item fade-in-up-elm ${isActive(item.href) ? "active" : ""}`}
                        >
                          <AnimatedButton
                            text={item.label}
                            className="main-menu__link btn btn-anim"
                            href={item.href}
                          />
                        </li>
                      ))}
                      <li className="main-menu__item fade-in-up-elm">
                        <AnimatedButton
                          text="Book a Demo →"
                          className="main-menu__link btn btn-anim"
                          href="/contact"
                        />
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>

              {/* Right — promo panel */}
              <div className="mxd-menu__right">
                <div className="menu-promo">
                  <div className="menu-promo__content">
                    <p className="menu-promo__caption fade-in-elm">
                      🔥 Zeal X is live on Meta Quest Store
                      <br />
                      Enterprise safety training · 120+ active users
                    </p>
                    <div className="menu-promo__video fade-in-up-elm">
                      <video
                        className="menu-video"
                        preload="auto"
                        autoPlay
                        loop
                        muted
                        poster="/video/540x310_video-01.webp"
                      >
                        <source type="video/mp4" src="/video/540x310_video-01.mp4" />
                        <source type="video/webm" src="/video/540x310_video-01.webm" />
                      </video>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom data line */}
              <div className="mxd-menu__data fade-in-up-elm">
                <p className="t-xsmall">
                  Chennai, India · <StarSvg /> enterprise@grahasvr.space
                </p>
                <p className="t-xsmall">
                  © {new Date().getFullYear()} GRAHAs VR
                </p>
              </div>
            </div>
            <div className="hamburger__parking-slot" />
          </div>
        </div>
      </nav>

      {/* ── Header Bar ── */}
      <header
        id="header"
        className={`mxd-header ${isHidden ? "is-hidden" : ""} ${
          menuOpen ? "menu-is-visible" : ""
        }`}
      >
        {/* Logo */}
        <div className="mxd-header__logo loading__fade">
          <Link href="/" className="mxd-logo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/img/grahas-logo.png"
              alt="GRAHAs VR"
              style={{ height: "5rem", width: "auto", objectFit: "contain" }}
            />
          </Link>
        </div>

        {/* Controls */}
        <div className="mxd-header__controls loading__fade">
          <AnimatedButton
            text="Book a Demo"
            className="btn btn-anim btn-default btn-mobile-icon btn-outline slide-right grahas-header-demo-btn"
            href="/contact"
          >
            <i className="ph-bold ph-arrow-up-right" />
          </AnimatedButton>
        </div>
      </header>
      <style>{`
        .mxd-header {
          width: calc(100% - 6rem);
        }
        .grahas-header-demo-btn {
          white-space: nowrap;
        }
        @media only screen and (min-width: 768px) {
          .mxd-header {
            width: calc(100% - 12rem);
          }
        }
        @media only screen and (min-width: 1600px) {
          .mxd-header {
            width: calc(100% - 18rem);
          }
        }
      `}</style>
    </>
  );
}
