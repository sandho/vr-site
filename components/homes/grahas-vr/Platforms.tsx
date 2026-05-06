import StackCards from "@/components/animation/StackCards";
import AnimatedButton from "@/components/animation/AnimatedButton";

export default function Platforms() {
  return (
    <div id="platforms" className="mxd-section padding-stacked-section">
      <div className="mxd-container grid-container">
        <div className="mxd-block">
          <div className="mxd-section-title">
            <h2>Our Platforms</h2>
          </div>
        </div>
        {/* Block - Platforms Stacking Cards Start */}
        <div className="mxd-block mxd-grid-item no-margin">
          <div className="content__block">
            <StackCards className="stack-wrapper in-content-stack">

              {/* Zeal X — Live */}
              <div className="mxd-services-stack__inner justify-between bg-base-opp">
                <div className="mxd-services-stack__controls">
                  <AnimatedButton text="Get on Meta Store" className="btn btn-anim btn-default btn-outline slide-right-up platform-cta platform-cta--light" href="https://www.meta.com/en-gb/experiences/zeal-x-enterprise-training/26072684335657935/" target="_blank" rel="noopener noreferrer">
                    <i className="ph-bold ph-arrow-up-right" />
                  </AnimatedButton>
                </div>
                <div className="mxd-services-stack__title width-60">
                  <h3 className="opposite">
                    Zeal X
                    <span className="platform-status platform-status--live platform-status--opposite">
                      Live
                    </span>
                  </h3>
                </div>
                <div className="mxd-services-stack__info width-60">
                  <div className="mxd-services-cards__tags">
                    <span className="tag tag-default tag-outline-opposite">Meta Quest</span>
                    <span className="tag tag-default tag-outline-opposite">Enterprise Safety</span>
                    <span className="tag tag-default tag-outline-opposite">Fire Safety</span>
                    <span className="tag tag-default tag-outline-opposite">Electrical Safety</span>
                  </div>
                  <p className="t-small-mobile t-opposite">
                    Enterprise Safety Library for VR for electrical safety
                    compliance. 120+ Users. Modules: Electrical Safety (Live),
                    Fire Safety (Coming this Month).
                  </p>
                </div>
                <div className="services-stack__image">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="service-img service-img-m"
                    alt="Zeal X Virtual Reality Electrical Safety Training module by GRAHAs VR, available on the Meta Quest Store."
                    src="/img/gen/Zeal_X.jpg"
                    style={{ height: "75%", width: "auto", objectFit: "contain", borderRadius: "var(--radius-m, 16px)" }}
                  />
                </div>
              </div>

              {/* Spaces — Live */}
              <div className="mxd-services-stack__inner justify-between bg-accent">
                <div className="mxd-services-stack__controls">
                  <AnimatedButton text="Access Now" className="btn btn-anim btn-default btn-outline slide-right-up platform-cta platform-cta--light" href="https://grahasvr.space/" target="_blank" rel="noopener noreferrer">
                    <i className="ph-bold ph-arrow-up-right" />
                  </AnimatedButton>
                </div>
                <div className="mxd-services-stack__title width-60">
                  <h3 className="opposite">
                    Spaces
                    <span className="platform-status platform-status--live platform-status--opposite">
                      Live
                    </span>
                  </h3>
                </div>
                <div className="mxd-services-stack__info width-60">
                  <div className="mxd-services-cards__tags">
                    <span className="tag tag-default tag-outline-opposite">WebAR</span>
                    <span className="tag tag-default tag-outline-opposite">Spatial Web</span>
                    <span className="tag tag-default tag-outline-opposite">Industrial</span>
                    <span className="tag tag-default tag-outline-opposite">Architectural</span>
                  </div>
                  <p className="t-small-mobile t-opposite">
                    The Spatial Web. Instant AR for the Open Web. A
                    Done-For-You service delivering standalone WebAR with
                    engineering-grade accuracy in 72 hours. No apps required.
                  </p>
                </div>
                <div className="services-stack__image">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="service-img service-img-m"
                    alt="GRAHAs VR Spaces WebAR product visualization showing engineering-grade 3D models in a web browser."
                    src="/img/gen/Spaces_Cover.jpg"
                    style={{ height: "75%", width: "auto", objectFit: "contain", borderRadius: "var(--radius-m, 16px)" }}
                  />
                </div>
              </div>

              {/* Canvas — Coming Soon */}
              <div className="mxd-services-stack__inner radius-dark justify-between bg-base-tint">
                <div className="mxd-services-stack__controls">
                  <AnimatedButton text="Join Waitlist" className="btn btn-anim btn-default btn-outline slide-right-up platform-cta" href="/contact">
                    <i className="ph-bold ph-arrow-up-right" />
                  </AnimatedButton>
                </div>
                <div className="mxd-services-stack__title width-60">
                  <h3>
                    Canvas
                    <span className="platform-status platform-status--soon">
                      Coming Soon
                    </span>
                  </h3>
                </div>
                <div className="mxd-services-stack__info width-60">
                  <div className="mxd-services-cards__tags">
                    <span className="tag tag-default tag-outline">No Code</span>
                    <span className="tag tag-default tag-outline">Self-Serve</span>
                    <span className="tag tag-default tag-outline">WebAR Builder</span>
                    <span className="tag tag-default tag-outline">Industrial</span>
                  </div>
                  <p className="t-small-mobile">
                    We&apos;re building the transformation for you. Self-serve
                    WebAR for effortless visualization.
                  </p>
                </div>
                <div className="services-stack__image">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="service-img service-img-m"
                    alt="Canvas Platform"
                    src="/img/gen/Canvas_Coming_Soon.png"
                    style={{ height: "75%", width: "auto", objectFit: "contain", borderRadius: "var(--radius-m, 16px)" }}
                  />
                </div>
              </div>

            </StackCards>
          </div>
        </div>
        {/* Block - Platforms Stacking Cards End */}
      </div>
      <style>{`
        .platform-cta {
          min-width: 18rem;
          justify-content: center;
        }
        .platform-cta--light {
          background: var(--base-tint);
          border-color: var(--st-bright--light, #161616);
          color: var(--t-bright--light, #161616);
        }
        .platform-cta--light i,
        .platform-cta--light .btn-caption {
          color: var(--t-bright--light, #161616);
        }
        .platform-cta--disabled {
          display: inline-flex;
          align-items: center;
          gap: 0.8rem;
          opacity: 0.7;
          cursor: not-allowed;
          pointer-events: none;
        }
        .platform-status {
          display: inline-flex;
          align-items: center;
          gap: 0.7rem;
          margin-left: 1.2rem;
          padding: 0.6rem 1rem;
          border: 1px solid var(--stroke-elements);
          border-radius: 999px;
          color: var(--t-bright);
          font: normal var(--fw-medium) 1.4rem/1 var(--_font-default);
          letter-spacing: 0.02em;
          vertical-align: middle;
          white-space: nowrap;
        }
        .platform-status::before {
          content: "";
          width: 0.65rem;
          height: 0.65rem;
          border-radius: 50%;
          background: currentColor;
        }
        .platform-status--opposite {
          border-color: rgba(255, 255, 255, 0.36);
          color: var(--t-opp-bright);
        }
        .platform-status--live {
          background: rgba(88, 214, 141, 0.16);
        }
        .platform-status--next {
          background: rgba(255, 255, 255, 0.14);
        }
        .platform-status--soon {
          background: rgba(5, 132, 199, 0.1);
          color: var(--accent--light, #0584c7);
        }
        @media only screen and (max-width: 767px) {
          .platform-cta {
            width: 100%;
            min-width: 0;
          }
          .platform-status {
            margin: 1rem 0 0;
          }
          .mxd-services-stack__title h3 {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </div>
  );
}
