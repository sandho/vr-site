"use client";

import { useEffect, useState } from "react";
import VelocityMarquee from "@/components/animation/VelocityMarquee";

// ── Adjust to your GIF's actual first-loop duration ──────────────────────────
const GIF_FIRST_LOOP_MS = 4000;
// Duration of the overlay-exit + layout-reveal transition
const TRANSITION_MS = 1000;

const StarSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 20 20">
    <path d="M19.6,9.6h-3.9c-.4,0-1.8-.2-1.8-.2-.6,0-1.1-.2-1.6-.6-.5-.3-.9-.8-1.2-1.2-.3-.4-.4-.9-.5-1.4,0,0,0-1.1-.2-1.5V.4c0-.2-.2-.4-.4-.4s-.4.2-.4.4v4.4c0,.4-.2,1.5-.2,1.5,0,.5-.2,1-.5,1.4-.3.5-.7.9-1.2,1.2s-1,.5-1.6.6c0,0-1.2,0-1.7.2H.4c-.2,0-.4.2-.4.4s.2.4.4.4h4.1c.4,0,1.7.2,1.7.2.6,0,1.1.2,1.6.6.4.3.8.7,1.1,1.1.3.5.5,1,.6,1.6,0,0,0,1.3.2,1.7v4.1c0,.2.2.4.4.4s.4-.2.4-.4v-4.1c0-.4.2-1.7.2-1.7,0-.6.2-1.1.6-1.6.3-.4.7-.8,1.1-1.1.5-.3,1-.5,1.6-.6,0,0,1.3,0,1.8-.2h3.9c.2,0,.4-.2.4-.4s-.2-.4-.4-.4h0Z" />
  </svg>
);

// ── Each item maps to its own GIF — swap paths when you have individual GIFs ──
const ITEMS = [
  { label: "Digital Twins",     gif: "/img/gif/output.gif" },
  { label: "VR Training",       gif: "/img/gif/output.gif" },
  { label: "AR Visualization",  gif: "/img/gif/output.gif" },
  { label: "STEP Framework™",   gif: "/img/gif/output.gif" },
  { label: "Industrial XR",     gif: "/img/gif/output.gif" },
  { label: "Spatial Computing", gif: "/img/gif/output.gif" },
  { label: "Enterprise XR",     gif: "/img/gif/output.gif" },
  { label: "WebAR",             gif: "/img/gif/output.gif" },
];

// Auto-cycle interval (ms)
const CYCLE_MS = 3000;

const marqueeItems = [
  "digital twins", "vr training", "ar visualization", "step framework™",
  "industrial xr", "meta quest", "spatial computing", "shop-floor tech",
  "enterprise xr", "cognitive learning",
];

export default function Hero() {
  const [gifSrc, setGifSrc]                 = useState("/img/gif/output.gif");
  const [overlayOn, setOverlayOn]           = useState(true);
  const [overlayLeaving, setOverlayLeaving] = useState(false);
  const [layoutVisible, setLayoutVisible]   = useState(false);

  // Active keyword index + GIF fade state
  const [activeIdx, setActiveIdx]   = useState(0);
  const [gifVisible, setGifVisible] = useState(true);

  // Change active item + crossfade the GIF
  const goTo = (idx: number) => {
    setGifVisible(false);
    setTimeout(() => {
      setActiveIdx(idx);
      setGifSrc(`${ITEMS[idx].gif}?t=${Date.now()}`);
      setGifVisible(true);
    }, 300);
  };

  useEffect(() => {
    setGifSrc(`/img/gif/output.gif?t=${Date.now()}`);
    document.body.style.overflow = "hidden";

    const gifTimer = setTimeout(() => {
      setOverlayLeaving(true);
      setLayoutVisible(true);
      const cleanTimer = setTimeout(() => {
        setOverlayOn(false);
        document.body.style.overflow = "";
      }, TRANSITION_MS);
      return () => clearTimeout(cleanTimer);
    }, GIF_FIRST_LOOP_MS);

    return () => {
      clearTimeout(gifTimer);
      document.body.style.overflow = "";
    };
  }, []);

  // Auto-cycle through items after layout is visible
  useEffect(() => {
    if (!layoutVisible) return;
    const interval = setInterval(() => {
      setActiveIdx(prev => {
        const next = (prev + 1) % ITEMS.length;
        setGifVisible(false);
        setTimeout(() => {
          setGifSrc(`${ITEMS[next].gif}?t=${Date.now()}`);
          setGifVisible(true);
        }, 300);
        return next;
      });
    }, CYCLE_MS);
    return () => clearInterval(interval);
  }, [layoutVisible]);

  return (
    <>
      {/* ── Full-screen intro overlay ─────────────────────────────────────── */}
      {overlayOn && (
        <div
          className={`hero-intro-overlay${overlayLeaving ? " hero-intro-overlay--leaving" : ""}`}
          aria-hidden="true"
        >
          {/* Top — logo */}
          <div className="hero-intro-top">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/img/grahas-logo.png"
              alt="GRAHAs VR"
              className="hero-intro-logo"
              style={{ height: "5rem", width: "auto", objectFit: "contain" }}
            />
          </div>

          {/* Center — GIF with padding + radius */}
          <div className="hero-intro-gif-wrap">
            <img
              src={gifSrc}
              alt=""
              className="hero-intro-gif"
            />
          </div>

          {/* Bottom — tagline */}
          <div className="hero-intro-bottom">
            <p className="hero-intro-tagline">we are working on it</p>
          </div>
        </div>
      )}

      {/* ── Hero layout (fades in after GIF) ─────────────────────────────── */}
      <div
        className="mxd-section mxd-hero-section padding-pre-stack"
        style={{
          opacity:    layoutVisible ? 1 : 0,
          transform:  layoutVisible ? "translateY(0)" : "translateY(20px)",
          transition: `opacity ${TRANSITION_MS}ms cubic-bezier(0.16,1,0.3,1),
                       transform ${TRANSITION_MS}ms cubic-bezier(0.16,1,0.3,1)`,
        }}
      >
        <div className="mxd-hero-04">
          <div className="mxd-hero-04__wrap overflow-hidden loading-wrap">
            <div className="container-fluid p-0">
              <div className="row g-0 flex-column flex-xl-row hero-main-row">

                {/* ── Left column — GIF (col-9) ────────────────────────── */}
                <div className="col-12 col-xl-9 order-1 mxd-hero-04__left mxd-grid-item no-margin hero-left-col">
                  <div className="hero-layout-gif-wrap">
                    <img
                      src={gifSrc}
                      alt="GRAHAs VR — Engineering-Grade XR"
                      className="hero-layout-gif"
                      style={{ opacity: gifVisible ? 1 : 0, transition: "opacity 0.3s ease" }}
                    />
                  </div>
                </div>

                {/* ── Right column — text (col-3) ───────────────────────── */}
                <div className="col-12 col-xl-3 order-2 mxd-hero-04__right mxd-grid-item no-margin hero-right-col">
                  <div className="hero-right-inner">

                    {/* Tagline */}
                    <p className="hero-right-tagline loading__item">
                      High-fidelity XR solutions that solve{" "}
                      <a href="#solutions">real enterprise problems</a>
                    </p>

                    {/* Title — sized to fit the narrow col */}
                    <h1 className="hero-right-title loading__item">
                      Trans&shy;forming<br />Industries.
                    </h1>

                    {/* Keyword list */}
                    <ul className="hero-right-list loading__item">
                      {ITEMS.map((item, idx) => (
                        <li
                          key={item.label}
                          className={`hero-right-list-item${idx === activeIdx ? " active" : ""}`}
                          onClick={() => goTo(idx)}
                        >
                          <span className="hero-right-list-dot" />
                          {item.label}
                        </li>
                      ))}
                    </ul>

                  </div>
                </div>

                {/* ── Bottom marquee ────────────────────────────────────── */}
                <div className="col-12 order-3 mxd-hero-04__marquee mxd-grid-item">
                  <div className="hero-04-marquee">
                    <VelocityMarquee className="marquee marquee-right--gsap">
                      {marqueeItems.map((item, idx) => (
                        <div key={idx} className="marquee__item item-regular text">
                          <p>{item}</p>
                          <StarSvg />
                        </div>
                      ))}
                    </VelocityMarquee>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        /* ── Full-screen intro overlay ──────────────────────────────────── */
        .hero-intro-overlay {
          position: fixed;
          inset: 0;
          z-index: 999;
          background: var(--color-base, #f5f0eb);
          display: flex;
          flex-direction: column;
          padding: 1.25rem;
          gap: 1rem;
          opacity: 1;
          clip-path: inset(0 0% 0 0 round 0px);
          transition:
            clip-path ${TRANSITION_MS}ms cubic-bezier(0.76, 0, 0.24, 1),
            opacity   ${TRANSITION_MS}ms ease;
        }
        .hero-intro-overlay--leaving {
          clip-path: inset(0 100% 0 0 round 0px);
          opacity: 0;
        }

        /* Top bar */
        .hero-intro-top {
          flex-shrink: 0;
          display: flex;
          align-items: flex-start;
        }
        .hero-intro-logo {
          font-size: clamp(1.1rem, 2vw, 1.4rem);
          font-weight: 700;
          line-height: 1.1;
          letter-spacing: -0.02em;
          text-transform: uppercase;
          color: var(--color-base-content, #111);
        }

        /* GIF — fills remaining space, rounded */
        .hero-intro-gif-wrap {
          flex: 1;
          min-height: 0;
          overflow: hidden;
          border-radius: var(--radius-l, 24px);
        }
        .hero-intro-gif {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        /* Bottom bar */
        .hero-intro-bottom {
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: flex-end;
        }
        .hero-intro-tagline {
          font-size: clamp(0.75rem, 1.2vw, 0.9rem);
          opacity: 0.5;
          margin: 0;
          letter-spacing: 0.04em;
        }

        /* ── Hero row fills full viewport height ────────────────────────── */
        .hero-main-row {
          min-height: 100vh;
        }
        @media (min-width: 1200px) {
          .hero-main-row {
            align-items: stretch !important;
          }
          .hero-left-col,
          .hero-right-col {
            display: flex;
            flex-direction: column;
          }
        }

        /* ── Layout GIF — fills full column height ───────────────────────── */
        .hero-layout-gif-wrap {
          width: 100%;
          flex: 1;
          min-height: 0;
          overflow: hidden;
          border-radius: var(--radius-m, 16px);
          /* fallback height for browsers that don't stretch */
          height: 100%;
        }
        .hero-layout-gif {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        /* ── Right column — fills full height, spaced vertically ─────────── */
        .hero-right-inner {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100%;
          padding: 1.75rem 1.25rem;
          gap: 0;
        }
        .hero-right-tagline {
          font-size: clamp(0.8rem, 1.1vw, 1.1rem);
          line-height: 1.5;
          opacity: 0.6;
          margin: 0;
        }
        .hero-right-tagline a {
          text-decoration: underline;
          opacity: 0.9;
        }
        /* col-3 = 25vw — "Transforming" fills it at ~3.2vw */
        .hero-right-title {
          font-size: clamp(1.8rem, 3.2vw, 4.5rem);
          font-weight: 700;
          line-height: 1.08;
          letter-spacing: -0.03em;
          margin: 0;
          word-break: break-word;
        }
        .hero-right-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: clamp(0.3rem, 0.5vh, 0.6rem);
        }
        .hero-right-list-item {
          font-size: clamp(1rem, 1.4vw, 1.5rem);
          opacity: 0.35;
          letter-spacing: 0.02em;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          transition: opacity 0.25s ease;
          user-select: none;
        }
        .hero-right-list-item:hover {
          opacity: 0.7;
        }
        .hero-right-list-item.active {
          opacity: 1;
          font-weight: 600;
        }
        /* Indicator dot */
        .hero-right-list-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: currentColor;
          flex-shrink: 0;
          opacity: 0;
          transform: scale(0);
          transition: opacity 0.25s ease, transform 0.25s ease;
        }
        .hero-right-list-item.active .hero-right-list-dot {
          opacity: 1;
          transform: scale(1);
        }

        /* Mobile: natural flow */
        @media (max-width: 1199px) {
          .hero-main-row { min-height: unset; }
          .hero-layout-gif-wrap {
            height: auto;
            aspect-ratio: 4 / 3;
          }
          .hero-right-inner {
            padding: 1.5rem 0;
            height: auto;
            gap: 1.25rem;
          }
          .hero-right-title {
            font-size: clamp(2rem, 6vw, 3.5rem);
          }
          .hero-right-list {
            flex-direction: row;
            flex-wrap: wrap;
            gap: 0.5rem 1.25rem;
          }
          .hero-right-list-item { font-size: clamp(1.1rem, 4vw, 1.4rem); }
        }

        /* ── Reduced motion ──────────────────────────────────────────────── */
        @media (prefers-reduced-motion: reduce) {
          .hero-intro-overlay,
          .hero-intro-overlay--leaving {
            transition: none;
            clip-path: none;
          }
        }
      `}</style>
    </>
  );
}
