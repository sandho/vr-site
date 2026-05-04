import RevealText from "@/components/animation/RevealText";
import AnimatedButton from "@/components/animation/AnimatedButton";

const caseStats = [
  { icon: "ph-trend-down", label: "40% Reduction in Training Time" },
  { icon: "ph-check-circle", label: "Standardized TPM Audits" },
  { icon: "ph-rocket-launch", label: "Faster New Hire Onboarding" },
];

export default function CaseStudy() {
  return (
    <div className="mxd-section padding-grid-pre-mtext">
      <div className="mxd-container grid-container">
        {/* Block - Featured Case Study Start */}
        <div className="mxd-block">
          <div className="container-fluid px-0">
            <div className="row gx-0 align-items-stretch">
              <div className="col-12 col-xl-5">
                    <div className="mxd-section-title no-margin-desktop">
                      <div className="container-fluid p-0">
                        <div className="row g-0">
                          <div className="col-12 mxd-grid-item no-margin">
                            <div className="mxd-section-title__title anim-uni-in-up">
                              <RevealText as="h2" className="reveal-type">
                                40% Faster Training: The TVS Group Implementation.
                              </RevealText>
                            </div>
                          </div>
                          <div className="col-12 mxd-grid-item no-margin">
                            <div className="mxd-section-title__descr">
                              <p className="anim-uni-in-up">
                                See how Real Talent Engineering (TVS Group) moved
                                from manual SOPs to immersive VR, slashing
                                training times and earning praise from Japanese
                                JIPM Auditors.
                              </p>
                            </div>
                          </div>
                          <div className="col-12 mxd-grid-item no-margin">
                            <div className="mxd-section-title__controls anim-uni-in-up">
                              <AnimatedButton
                                text="Read Full Case Study"
                                className="btn btn-anim btn-default btn-outline slide-right-up"
                                href="https://casestudy.grahasvr.space/"
                              >
                                <i className="ph-bold ph-arrow-up-right" />
                              </AnimatedButton>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
              </div>

              <div className="col-12 col-xl-7" style={{ display: "flex" }}>
                <div className="anim-uni-in-up" style={{ width: "100%", flex: 1 }}>
                  <div className="mxd-testimonials-card bg-base-tint radius-m" style={{ width: "100%", maxWidth: "100%", height: "100%", margin: 0 }}>
                    <div className="case-study-media">
                      <iframe
                        src="https://www.youtube.com/embed/BkGDpENtHZ8"
                        title="TVS Group VR Training Case Study"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                    <div className="mxd-testimonials-card__content">
                      <div className="mxd-testimonials-card__media anim-uni-in-up">
                        <div className="container-fluid p-0">
                          <div className="row g-3">
                            {caseStats.map((stat, i) => (
                              <div key={i} className="col-4">
                                <div className="case-study-stat">
                                  <i className={`ph-bold ${stat.icon}`} />
                                  <p className="t-small t-bright">{stat.label}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Quote */}
                      <div className="mxd-testimonials-card__text">
                        <p className="anim-uni-in-up">
                          Immersive SOP training helped teams practice repeatable
                          TPM procedures before entering the shop-floor workflow.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        {/* Block - Featured Case Study End */}
      </div>
      <style>{`
        .case-study-media {
          aspect-ratio: 16 / 9;
          overflow: hidden;
          border-radius: var(--_radius-m);
          margin-bottom: 2rem;
        }
        .case-study-media iframe {
          width: 100%;
          height: 100%;
          border: none;
          display: block;
        }
        .case-study-stat {
          height: 100%;
          min-height: 10rem;
          padding: 1.25rem;
          border-radius: var(--radius-s, 0.5rem);
          background: rgba(var(--accent-rgb), 0.08);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 1rem;
        }
        .case-study-stat i {
          color: var(--accent);
          font-size: 2.4rem;
        }
        .case-study-stat p {
          margin: 0;
        }
      `}</style>
    </div>
  );
}
