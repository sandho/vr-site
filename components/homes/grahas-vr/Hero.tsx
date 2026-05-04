"use client";

import { useEffect, useState } from "react";
import VelocityMarquee from "@/components/animation/VelocityMarquee";
import AnimatedButton from "@/components/animation/AnimatedButton";

const GIF_FIRST_LOOP_MS = 4000;
const TRANSITION_MS = 1000;
const HERO_VIDEO_MP4 = "/video/hero/hero-video-01.mp4";
const HERO_VIDEO_WEBM = "/video/hero/hero-video-01.webm";
const HERO_VIDEO_POSTER = "/video/hero/hero-video-01.webp";

const DiamondSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="10" height="10" fill="currentColor">
    <path d="M8 0 L16 8 L8 16 L0 8 Z" />
  </svg>
);

const marqueeItems = [
  "Industrial Machinery",
  "Medical & Pharma Labs",
  "Office & IT Environments",
  "Digital Twins",
  "VR Training",
  "AR Visualization",
  "Enterprise XR",
  "Spatial Web",
];

export default function Hero() {
  const [overlayOn, setOverlayOn] = useState(true);
  const [overlayLeaving, setOverlayLeaving] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const progressTimer = window.setInterval(() => {
      setProgress((current) => Math.min(current + 2, 100));
    }, GIF_FIRST_LOOP_MS / 50);

    const gifTimer = window.setTimeout(() => {
      setProgress(100);
      setOverlayLeaving(true);
      const cleanTimer = window.setTimeout(() => {
        setOverlayOn(false);
        document.body.style.overflow = "";
      }, TRANSITION_MS);

      return () => window.clearTimeout(cleanTimer);
    }, GIF_FIRST_LOOP_MS);

    return () => {
      window.clearInterval(progressTimer);
      window.clearTimeout(gifTimer);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <>
      {overlayOn && (
        <div
          className={`grahas-intro-overlay${overlayLeaving ? " grahas-intro-overlay--leaving" : ""}`}
          aria-hidden="true"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/img/grahas-logo.png" alt="GRAHAs VR" className="grahas-intro-logo" />
          <div className="grahas-intro-progress" aria-hidden="true">
            <span style={{ transform: `scaleX(${progress / 100})` }} />
          </div>
        </div>
      )}

      <div className="mxd-section mxd-hero-section padding-pre-stack">
        <div className="grahas-hero-split">
          <div className="grahas-hero-split__text loading-wrap">
            <p className="t-small t-muted loading__item grahas-hero-kicker">
              Engineering-grade immersive technology
            </p>
            <h1 className="hero-04-title grahas-hero-title loading__item">
              Transforming Industries &amp; Enterprises with Immersive Tech.
            </h1>
            <p className="t-large loading__item">
              We build engineering-grade XR solutions that solve real business
              problems. Trusted by TVS Group, IIT Mandi, and 120+ Enterprise Users.
            </p>
            <div className="grahas-hero-actions loading__item">
              <AnimatedButton
                text="Explore Custom Solutions"
                className="btn btn-anim btn-default btn-accent slide-right-up"
                href="/solutions"
              >
                <i className="ph-bold ph-arrow-up-right" />
              </AnimatedButton>
              <AnimatedButton
                text="View Our Products"
                className="btn btn-anim btn-default btn-outline slide-right-up"
                href="/platforms"
              >
                <i className="ph-bold ph-arrow-down" />
              </AnimatedButton>
            </div>
          </div>

          <div className="grahas-hero-split__video">
            <div className="grahas-hero-video-player">
              <video
                className="grahas-hero-video"
                preload="auto"
                autoPlay
                loop
                muted
                playsInline
                poster={HERO_VIDEO_POSTER}
              >
                <source type="video/mp4" src={HERO_VIDEO_MP4} />
                <source type="video/webm" src={HERO_VIDEO_WEBM} />
              </video>
            </div>
          </div>
        </div>

        <div className="grahas-hero-marquee-wrap mxd-grid-item">
          <div className="hero-04-marquee">
            <VelocityMarquee className="marquee marquee-right--gsap">
              {marqueeItems.map((item) => (
                <div key={item} className="marquee__item item-regular text">
                  <p>{item}</p>
                  <DiamondSvg />
                </div>
              ))}
            </VelocityMarquee>
          </div>
        </div>
      </div>

        <style>{`
        .grahas-intro-overlay {
          position: fixed;
          inset: 0;
          z-index: 9999;
          background: var(--base);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 3.2rem;
          clip-path: inset(0 0 0 0 round 0);
          opacity: 1;
          transition:
            clip-path ${TRANSITION_MS}ms var(--_animbezier),
            opacity ${TRANSITION_MS}ms ease;
        }
        .mxd-hero-section {
          background: var(--base);
          overflow: hidden;
        }
        .grahas-hero-split {
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 88vh;
        }
        .grahas-hero-split__text {
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 2.4rem;
          padding: clamp(4rem, 8vw, 8rem) clamp(2rem, 5vw, 6rem) clamp(4rem, 8vw, 8rem) clamp(2rem, 6vw, 8rem);
        }
        .grahas-hero-split__video {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: clamp(2rem, 4vw, 5rem);
          background: var(--base-tint);
        }
        .grahas-hero-video-player {
          width: 100%;
          aspect-ratio: 16 / 9;
          border-radius: var(--_radius-m);
          overflow: hidden;
          box-shadow: 0 2.4rem 6rem rgba(0, 0, 0, 0.32);
        }
        .grahas-hero-video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          filter: saturate(1.08) contrast(1.08);
        }
        .grahas-hero-marquee-wrap {
          border-top: 1px solid var(--stroke-elements);
        }
        @media only screen and (max-width: 991px) {
          .grahas-hero-split {
            grid-template-columns: 1fr;
            min-height: auto;
          }
          .grahas-hero-split__video {
            padding: clamp(1.6rem, 4vw, 3rem);
          }
        }
        .grahas-intro-overlay--leaving {
          clip-path: inset(0 100% 0 0 round 0);
          opacity: 0;
        }
        .grahas-intro-logo {
          height: clamp(7rem, 14vw, 14rem);
          width: auto;
          object-fit: contain;
        }
        .grahas-intro-progress {
          position: relative;
          width: clamp(16rem, 28vw, 32rem);
          height: 0.8rem;
          overflow: hidden;
          border-radius: 999px;
          background: var(--stroke-elements);
        }
        .grahas-intro-progress span {
          position: absolute;
          inset: 0 auto 0 0;
          width: 100%;
          background: var(--accent);
          transform-origin: left center;
          transition: transform 120ms linear;
        }
        .grahas-hero-kicker {
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin: 0;
        }
        .grahas-hero-title {
          display: block;
          max-width: 15ch;
          margin: 0;
          font-size: clamp(4.6rem, 6.2vw, 9.2rem);
          line-height: 0.96;
        }
        .grahas-hero-actions {
          display: flex;
          flex-wrap: wrap;
          justify-content: flex-start;
          gap: 1rem;
          margin-top: 1.4rem;
        }
      `}</style>
    </>
  );
}
