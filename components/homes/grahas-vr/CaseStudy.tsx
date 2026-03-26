import RevealText from "@/components/animation/RevealText";
import AnimatedButton from "@/components/animation/AnimatedButton";
import Counter from "@/components/common/Counter";

const caseStats = [
  { number: 12000, suffix: "+", label: "Trainees\nOnboarded" },
  { number: 40, suffix: "%", label: "Time\nReduction" },
  { number: 0, suffix: "", label: "Operational\nErrors" },
];

export default function CaseStudy() {
  return (
    <div className="mxd-section padding-grid-pre-mtext">
      <div className="mxd-container no-padding-container">
        {/* Block - Featured Case Study Start */}
        <div className="mxd-block">
          <div className="container-fluid px-0">
            <div className="row gx-0">
              {/* Left — Label + Title */}
              <div className="col-12 col-xl-6">
                <div className="mxd-container grid-container">
                  <div className="mxd-block">
                    <div className="mxd-section-title no-margin-desktop">
                      <div className="container-fluid p-0">
                        <div className="row g-0">
                          <div className="col-12 mxd-grid-item no-margin">
                            <div className="mxd-section-title__title anim-uni-in-up">
                              <RevealText as="h2" className="reveal-type">
                                Featured
                                <br />
                                Case.
                              </RevealText>
                            </div>
                          </div>
                          <div className="col-12 mxd-grid-item no-margin">
                            <div className="mxd-section-title__descr">
                              <p className="anim-uni-in-up">
                                Real Talent Engineering (TVS Group) transformed
                                shop-floor learning with GRAHAs VR — slashing
                                onboarding time and earning praise from Japanese
                                JIPM Auditors.
                              </p>
                            </div>
                          </div>
                          <div className="col-12 mxd-grid-item no-margin">
                            <div className="mxd-section-title__controls anim-uni-in-up">
                              <AnimatedButton
                                text="Read Full Case Study"
                                className="btn btn-anim btn-default btn-outline slide-right-up"
                                href={`/project-details`}
                              >
                                <i className="ph-bold ph-arrow-up-right" />
                              </AnimatedButton>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right — Testimonial Card */}
              <div className="col-12 col-xl-6" style={{ display: "flex" }}>
                <div className="mxd-container grid-container" style={{ display: "flex", flexDirection: "column" }}>
                <div className="anim-uni-in-up" style={{ width: "100%", flex: 1 }}>
                  <div className="mxd-testimonials-card bg-base-tint radius-m" style={{ width: "100%", maxWidth: "100%", height: "100%", margin: 0 }}>
                    <div className="mxd-testimonials-card__content">
                      {/* Stats row */}
                      <div className="mxd-testimonials-card__media anim-uni-in-up">
                        <div className="container-fluid p-0">
                          <div className="row g-0">
                            {caseStats.map((stat, i) => (
                              <div key={i} className="col-4">
                                <div className="mxd-counter">
                                  <p className="mxd-stats-number" style={{ fontSize: "2rem" }}>
                                    <Counter max={stat.number} />
                                    {stat.suffix}
                                  </p>
                                </div>
                                <p className="t-small t-bright">
                                  {stat.label.split("\n").map((line, j, arr) => (
                                    <span key={j}>
                                      {line}
                                      {j < arr.length - 1 && <br />}
                                    </span>
                                  ))}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Quote */}
                      <div className="mxd-testimonials-card__text">
                        <p className="anim-uni-in-up">
                          &ldquo;The level of realism and the precision of the
                          digital twin genuinely impressed our JIPM auditors —
                          they had never seen anything like it on a shop
                          floor.&rdquo;
                        </p>
                      </div>
                    </div>

                    {/* Author */}
                    <div className="mxd-testimonials-card__author">
                      <h5 className="mxd-testimonials-card__name anim-uni-in-up">
                        Real Talent Engineering
                      </h5>
                      <p className="mxd-testimonials-card__position t-small anim-uni-in-up">
                        Training Division,{" "}
                        <a href="#">TVS Group</a>
                        {" "}· JIPM Auditor Approved
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
    </div>
  );
}
