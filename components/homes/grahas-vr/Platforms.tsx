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
                  <AnimatedButton text="Get on Meta Store" className="btn btn-anim btn-default btn-outline-opposite slide-right-up" href="https://www.meta.com/experiences/">
                    <i className="ph-bold ph-arrow-up-right" />
                  </AnimatedButton>
                </div>
                <div className="mxd-services-stack__title width-60">
                  <h3 className="opposite">
                    Zeal X
                    <span className="tag tag-default tag-outline-opposite" style={{ marginLeft: "1rem", fontSize: "0.6em", verticalAlign: "middle" }}>
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
                    Enterprise Safety Library. 120+ Users. Modules: Electrical
                    Safety (Live), Fire Safety (Coming this Month).
                  </p>
                </div>
                <div className="services-stack__image">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="service-img service-img-m"
                    alt="Zeal X Platform"
                    src="/img/gen/Zeal_X.jpg"
                    style={{ height: "75%", width: "auto", objectFit: "contain", borderRadius: "var(--radius-m, 16px)" }}
                  />
                </div>
              </div>

              {/* Spaces — Next Week */}
              <div className="mxd-services-stack__inner justify-between bg-accent">
                <div className="mxd-services-stack__controls">
                  <span className="btn btn-default btn-disabled">Access Now</span>
                </div>
                <div className="mxd-services-stack__title width-60">
                  <h3 className="opposite">
                    Spaces
                    <span className="tag tag-default tag-outline-opposite" style={{ marginLeft: "1rem", fontSize: "0.6em", verticalAlign: "middle" }}>
                      Launching Next Week
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
                    alt="Spaces Platform"
                    src="/img/gen/Spaces_Cover.jpg"
                    style={{ height: "75%", width: "auto", objectFit: "contain", borderRadius: "var(--radius-m, 16px)" }}
                  />
                </div>
              </div>

              {/* Canvas — Coming Soon */}
              <div className="mxd-services-stack__inner radius-dark justify-between bg-base-tint">
                <div className="mxd-services-stack__controls">
                  <AnimatedButton text="Join Waitlist" className="btn btn-anim btn-default btn-outline slide-right-up" href="/contact">
                    <i className="ph-bold ph-arrow-up-right" />
                  </AnimatedButton>
                </div>
                <div className="mxd-services-stack__title width-60">
                  <h3>
                    Canvas
                    <span className="tag tag-default tag-outline" style={{ marginLeft: "1rem", fontSize: "0.6em", verticalAlign: "middle" }}>
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
        .btn-disabled {
          opacity: 0.5;
          cursor: not-allowed;
          pointer-events: none;
        }
      `}</style>
    </div>
  );
}
