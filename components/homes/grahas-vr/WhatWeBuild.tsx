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
                      text="Book a Demo"
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
                    <img src="/img/works/custom-built-xr-vr-ar-mr.png" alt="Real industrial machine reference" />
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
          position: relative;
          height: 100%;
          min-height: clamp(32rem, 50vw, 64rem);
        }
        .digital-twin-panel {
          position: absolute;
          inset: 0;
          overflow: hidden;
          border-radius: var(--_radius-m);
        }
        .digital-twin-panel img {
          width: auto;
          height: 100%;
          max-width: 100%;
          object-fit: contain;
          display: block;
          margin: 0 auto;
          opacity: 0.9;
        }
        @media (max-width: 1199px) {
          .digital-twin-split {
            position: relative;
            min-height: auto;
            aspect-ratio: 16 / 9;
          }
        }
      `}</style>
    </section>
  );
}
