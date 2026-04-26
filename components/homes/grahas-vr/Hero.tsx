"use client";

import { useEffect, useState } from "react";
import VelocityMarquee from "@/components/animation/VelocityMarquee";
import AnimatedButton from "@/components/animation/AnimatedButton";

const GIF_FIRST_LOOP_MS = 4000;
const TRANSITION_MS = 1000;
// Replace this with "/video/hero/GRAHAs VR - XR Solutions_Website Version.mp4"
// after the final SharePoint video is added to public/video/hero/.
const HERO_VIDEO_MP4 = "/video/hero/hero-video-01.mp4";
const HERO_VIDEO_WEBM = "/video/hero/hero-video-01.webm";
const HERO_VIDEO_POSTER = "/video/hero/hero-video-01.webp";

const StarSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 20 20">
    <path d="M19.6,9.6h-3.9c-.4,0-1.8-.2-1.8-.2-.6,0-1.1-.2-1.6-.6-.5-.3-.9-.8-1.2-1.2-.3-.4-.4-.9-.5-1.4,0,0,0-1.1-.2-1.5V.4c0-.2-.2-.4-.4-.4s-.4.2-.4.4v4.4c0,.4-.2,1.5-.2,1.5,0,.5-.2,1-.5,1.4-.3.5-.7.9-1.2,1.2s-1,.5-1.6.6c0,0-1.2,0-1.7.2H.4c-.2,0-.4.2-.4.4s.2.4.4.4h4.1c.4,0,1.7.2,1.7.2.6,0,1.1.2,1.6.6.4.3.8.7,1.1,1.1.3.5.5,1,.6,1.6,0,0,0,1.3.2,1.7v4.1c0,.2.2.4.4.4s.4-.2.4-.4v-4.1c0-.4.2-1.7.2-1.7,0-.6.2-1.1.6-1.6.3-.4.7-.8,1.1-1.1.5-.3,1-.5,1.6-.6,0,0,1.3,0,1.8-.2h3.9c.2,0,.4-.2.4-.4s-.2-.4-.4-.4h0Z" />
  </svg>
);

const marqueeItems = [
  "industrial machinery",
  "medical & pharma labs",
  "office & it environments",
  "digital twins",
  "vr training",
  "ar visualization",
  "enterprise xr",
  "spatial web",
];

export default function Hero() {
  const [overlayOn, setOverlayOn] = useState(true);
  const [overlayLeaving, setOverlayLeaving] = useState(false);
  const [gifSrc, setGifSrc] = useState("/img/gif/output.gif");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setGifSrc(`/img/gif/output.gif?t=${Date.now()}`);
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
          <div className="grahas-intro-top">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/img/grahas-logo.png" alt="GRAHAs VR" className="grahas-intro-logo" />
            <p>Loading immersive experience</p>
          </div>
          <div className="grahas-intro-stage">
            <div className="grahas-intro-gif-wrap">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={gifSrc} alt="" className="grahas-intro-gif" />
              <div className="grahas-intro-scanline" />
            </div>
            <div className="grahas-intro-panel">
              <p className="grahas-intro-kicker">Initializing immersive systems</p>
              <h2>Preparing your XR environment</h2>
              <div className="grahas-intro-checks">
                <span>
                  <i className="ph-bold ph-check" />
                  Digital twins
                </span>
                <span>
                  <i className="ph-bold ph-check" />
                  Training simulators
                </span>
                <span>
                  <i className="ph-bold ph-check" />
                  WebAR modules
                </span>
              </div>
              <div className="grahas-intro-meter">
                <div className="grahas-intro-meter__label">
                  <span>System readiness</span>
                  <strong>{progress}%</strong>
                </div>
                <div className="grahas-intro-progress" aria-hidden="true">
                  <span style={{ transform: `scaleX(${progress / 100})` }} />
                </div>
              </div>
            </div>
          </div>
          <div className="grahas-intro-bottom">
            <p>GRAHAs VR</p>
            <p>Digital twins · VR training · Spatial web</p>
          </div>
        </div>
      )}

      <div className="mxd-section mxd-hero-section padding-pre-stack">
        <video
          className="grahas-hero-bg-video"
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
        <div className="grahas-hero-bg-shade" />
        <div className="mxd-hero-04">
          <div className="mxd-hero-04__wrap overflow-hidden loading-wrap">
            <div className="container-fluid p-0">
              <div className="row g-0 flex-column flex-xl-row">
                <div className="col-12 mxd-hero-04__right mxd-grid-item no-margin grahas-hero-main">
                  <div className="mxd-hero-04__headline">
                    <p className="t-small t-muted loading__item grahas-hero-kicker">
                      Engineering-grade immersive technology
                    </p>
                    <h1 className="hero-04-title grahas-hero-title loading__item">
                      Transforming Industries &amp; Enterprises with Immersive Tech.
                    </h1>
                  </div>

                  <div className="mxd-hero-04__descr">
                    <div className="container-fluid p-0">
                      <div className="row g-0 align-items-end">
                        <div className="col-12 col-xl-7 loading__item">
                          <p className="t-large">
                            We build engineering-grade XR solutions that solve
                            real business problems. Trusted by TVS Group, IIT
                            Mandi, and 120+ Enterprise Users.
                          </p>
                        </div>
                        <div className="col-12 col-xl-5 loading__item">
                          <div className="grahas-hero-actions">
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
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-12 order-3 mxd-hero-04__marquee mxd-grid-item">
                  <div className="hero-04-marquee">
                    <VelocityMarquee className="marquee marquee-right--gsap">
                      {marqueeItems.map((item) => (
                        <div key={item} className="marquee__item item-regular text">
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
        .grahas-intro-overlay {
          position: fixed;
          inset: 0;
          z-index: 9999;
          background: var(--base);
          display: flex;
          flex-direction: column;
          gap: 1rem;
          padding: 1.5rem;
          clip-path: inset(0 0 0 0 round 0);
          opacity: 1;
          transition:
            clip-path ${TRANSITION_MS}ms var(--_animbezier),
            opacity ${TRANSITION_MS}ms ease;
        }
        .mxd-hero-section {
          position: relative;
          overflow: hidden;
          background: var(--base);
        }
        .grahas-hero-bg-video,
        .grahas-hero-bg-shade {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
        }
        .grahas-hero-bg-video {
          object-fit: cover;
          opacity: 1;
          filter: saturate(1.08) contrast(1.08);
        }
        .grahas-hero-bg-shade {
          background:
            linear-gradient(90deg, rgba(var(--base-rgb), 0.92) 0%, rgba(var(--base-rgb), 0.66) 42%, rgba(var(--base-rgb), 0.18) 100%),
            linear-gradient(0deg, rgba(var(--base-rgb), 0.88), rgba(var(--base-rgb), 0.08));
        }
        .mxd-hero-04 {
          position: relative;
          z-index: 1;
        }
        .grahas-intro-overlay--leaving {
          clip-path: inset(0 100% 0 0 round 0);
          opacity: 0;
        }
        .grahas-intro-top,
        .grahas-intro-bottom {
          flex-shrink: 0;
          display: flex;
          align-items: center;
        }
        .grahas-intro-top {
          justify-content: space-between;
          gap: 2rem;
        }
        .grahas-intro-top {
          min-height: 6rem;
        }
        .grahas-intro-bottom {
          justify-content: space-between;
          gap: 2rem;
          min-height: 3rem;
        }
        .grahas-intro-logo {
          height: clamp(4rem, 7vw, 7rem);
          width: auto;
          object-fit: contain;
        }
        .grahas-intro-top p,
        .grahas-intro-bottom p,
        .grahas-intro-kicker {
          margin: 0;
          color: var(--t-muted);
          font-size: 1.4rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }
        .grahas-intro-stage {
          flex: 1;
          min-height: 0;
          display: grid;
          grid-template-columns: minmax(0, 1.15fr) minmax(34rem, 0.85fr);
          gap: 1rem;
        }
        .grahas-intro-panel {
          border-radius: var(--_radius-m);
          background: var(--base-tint);
          padding: clamp(2.4rem, 4vw, 4.5rem);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          overflow: hidden;
        }
        .grahas-intro-panel h2 {
          max-width: 10ch;
          margin: 0;
          color: var(--t-bright);
          font-size: clamp(4.2rem, 6vw, 8.8rem);
          line-height: 0.94;
        }
        .grahas-intro-gif-wrap {
          position: relative;
          min-height: 0;
          overflow: hidden;
          border-radius: var(--_radius-m);
          background:
            linear-gradient(rgba(var(--accent-rgb), 0.16), rgba(var(--accent-rgb), 0.04)),
            var(--base-tint);
          border: 1px solid rgba(var(--accent-rgb), 0.28);
          padding: 0.8rem;
        }
        .grahas-intro-gif-wrap::after {
          content: "";
          position: absolute;
          inset: 0.8rem;
          border-radius: calc(var(--_radius-m) - 0.8rem);
          background:
            linear-gradient(90deg, rgba(0,0,0,0.3), transparent 32%, rgba(var(--accent-rgb),0.16)),
            repeating-linear-gradient(0deg, rgba(255,255,255,0.08) 0 1px, transparent 1px 7px);
          pointer-events: none;
        }
        .grahas-intro-gif {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          border-radius: calc(var(--_radius-m) - 0.8rem);
        }
        .grahas-intro-scanline {
          position: absolute;
          z-index: 2;
          left: 0.8rem;
          right: 0.8rem;
          top: 0.8rem;
          height: 18%;
          border-radius: calc(var(--_radius-m) - 0.8rem);
          background: linear-gradient(180deg, rgba(var(--accent-rgb),0), rgba(var(--accent-rgb),0.34), rgba(var(--accent-rgb),0));
          animation: grahasIntroScan 1800ms ease-in-out infinite;
          pointer-events: none;
        }
        .grahas-intro-checks {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin: 3rem 0;
        }
        .grahas-intro-checks span {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          color: var(--t-bright);
          font-size: 1.7rem;
        }
        .grahas-intro-checks i {
          display: grid;
          place-items: center;
          width: 2.6rem;
          height: 2.6rem;
          border-radius: 50%;
          color: var(--t-opp-bright);
          background: var(--accent);
          font-size: 1.3rem;
        }
        .grahas-intro-meter {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .grahas-intro-meter__label {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          gap: 1rem;
          color: var(--t-muted);
          font-size: 1.4rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }
        .grahas-intro-meter__label strong {
          color: var(--t-bright);
          font: normal var(--fw-medium) 2.2rem/1 var(--_font-accent);
          letter-spacing: 0;
        }
        .grahas-intro-progress {
          position: relative;
          width: 100%;
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
        @keyframes grahasIntroScan {
          0% { transform: translateY(-25%); opacity: 0; }
          18% { opacity: 1; }
          100% { transform: translateY(520%); opacity: 0; }
        }
        @media only screen and (max-width: 767px) {
          .grahas-intro-overlay {
            padding: 1rem;
            gap: 1rem;
          }
          .grahas-intro-top,
          .grahas-intro-bottom {
            align-items: flex-start;
            flex-direction: column;
            gap: 1rem;
          }
          .grahas-intro-stage {
            grid-template-columns: 1fr;
          }
          .grahas-intro-panel {
            min-height: 28rem;
            order: 2;
          }
          .grahas-intro-gif-wrap {
            min-height: 28rem;
          }
          .grahas-intro-panel h2 {
            font-size: clamp(3.6rem, 14vw, 5.6rem);
          }
          .grahas-intro-progress {
            width: 100%;
            flex: none;
          }
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
        @media only screen and (min-width: 1200px) {
          .grahas-hero-main .mxd-hero-04__headline,
          .grahas-hero-main .mxd-hero-04__descr {
            padding-left: 0;
            padding-right: 0;
          }
          .mxd-hero-04__right {
            gap: 2.4rem;
          }
          .mxd-hero-04__headline {
            gap: 1.6rem;
          }
          .grahas-hero-actions {
            justify-content: flex-end;
            margin-top: 0;
          }
        }
        @media only screen and (max-width: 1199px) {
          .grahas-hero-title {
            font-size: clamp(4rem, 11vw, 7.2rem);
            max-width: 12ch;
          }
        }
      `}</style>
    </>
  );
}
