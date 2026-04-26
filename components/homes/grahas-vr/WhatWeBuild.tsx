import RevealText from "@/components/animation/RevealText";
import AnimatedButton from "@/components/animation/AnimatedButton";

const features = [
  "100% Customized: Built on your specific machinery/environment.",
  "Cross-Platform: VR, AR, MR, and Web-based.",
  "Proven ROI: Reduced training time and operational errors.",
];

export default function WhatWeBuild() {
  return (
    <section id="solutions" className="mxd-section padding-pre-grid">
      <div className="mxd-container grid-container">
        <div className="mxd-block">
          <div className="container-fluid p-0">
            <div className="row g-0 align-items-center">
              <div className="col-12 col-xl-5 mxd-grid-item no-margin">
                <div className="mxd-section-title no-margin-desktop">
                  <div className="mxd-section-title__title anim-uni-in-up">
                    <RevealText as="h2" className="reveal-type">
                      Tailored XR Solutions for Your Enterprise.
                    </RevealText>
                  </div>
                  <div className="mxd-section-title__descr anim-uni-in-up">
                    <p>
                      We don&apos;t believe in one-size-fits-all. We build
                      Digital Twins, Training Simulators, and Marketing
                      Experiences specific to your SOPs.
                    </p>
                  </div>
                  <ul className="grahas-feature-list anim-uni-in-up">
                    {features.map((feature) => (
                      <li key={feature}>
                        <i className="ph-bold ph-check" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mxd-section-title__controls anim-uni-in-up">
                    <AnimatedButton
                      text="Start Your Pilot Project"
                      className="btn btn-anim btn-default btn-outline slide-right-up"
                      href="/contact"
                    >
                      <i className="ph-bold ph-arrow-up-right" />
                    </AnimatedButton>
                  </div>
                </div>
              </div>
              <div className="col-12 col-xl-7 mxd-grid-item no-margin">
                <div className="digital-twin-split anim-uni-in-up">
                  <div className="digital-twin-panel">
                    <span>Real Machine</span>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/img/works/preview/1920x1080_prv-04.webp" alt="Real industrial machine reference" />
                  </div>
                  <div className="digital-twin-panel">
                    <span>Digital Twin</span>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/img/gif/output.gif" alt="Digital twin simulation preview" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .grahas-feature-list {
          display: flex;
          flex-direction: column;
          gap: 0.9rem;
          padding: 0;
          margin: 2rem 0 0;
          list-style: none;
        }
        .grahas-feature-list li {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
        }
        .grahas-feature-list i {
          color: var(--accent--light, #0584c7);
          font-size: 1.25rem;
          margin-top: 0.2rem;
        }
        .digital-twin-split {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 0.75rem;
          min-height: clamp(28rem, 42vw, 54rem);
        }
        .digital-twin-panel {
          position: relative;
          overflow: hidden;
          border-radius: 0.5rem;
          background: #111;
        }
        .digital-twin-panel img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          opacity: 0.9;
        }
        .digital-twin-panel span {
          position: absolute;
          z-index: 2;
          top: 1rem;
          left: 1rem;
          padding: 0.45rem 0.7rem;
          border-radius: 999px;
          color: #fff;
          background: rgba(0,0,0,0.56);
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }
        @media (max-width: 767px) {
          .digital-twin-split {
            grid-template-columns: 1fr;
            min-height: auto;
          }
          .digital-twin-panel {
            aspect-ratio: 4 / 3;
          }
        }
      `}</style>
    </section>
  );
}
