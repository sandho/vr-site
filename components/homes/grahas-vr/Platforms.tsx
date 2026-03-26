import Link from "next/link";
import Image from "next/image";
import StackCards from "@/components/animation/StackCards";

export default function Platforms() {
  return (
    <div className="mxd-section padding-stacked-section">
      <div className="mxd-container grid-container">
        {/* Block - Platforms Stacking Cards Start */}
        <div className="mxd-block mxd-grid-item no-margin">
          <div className="content__block">
            <StackCards className="stack-wrapper in-content-stack">

              {/* Zeal X — Live */}
              <div className="mxd-services-stack__inner justify-between bg-base-opp">
                <div className="mxd-services-stack__controls">
                  <Link
                    className="btn btn-round btn-round-large btn-additional slide-right-up anim-no-delay"
                    href="https://zealx.in"
                    target="_blank"
                  >
                    <i className="ph ph-arrow-up-right" />
                  </Link>
                </div>
                <div className="mxd-services-stack__title width-60">
                  <h3 className="opposite">
                    Zeal X
                    <span className="tag tag-default tag-outline-opposite" style={{ marginLeft: "1rem", fontSize: "0.6em", verticalAlign: "middle" }}>
                      🔥 Live
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
                    120+ users. Enterprise safety training library for electrical
                    &amp; fire safety. Available now on Meta Quest Store.
                  </p>
                </div>
                <div className="services-stack__image">
                  <Image
                    className="service-img service-img-s"
                    alt="Zeal X Platform"
                    src="/img/services/800x800_ser-01.webp"
                    width={800}
                    height={800}
                  />
                  <Image
                    className="service-img service-img-m"
                    alt="Zeal X Platform"
                    src="/img/services/1000x1000_ser-01.webp"
                    width={1000}
                    height={1000}
                  />
                </div>
              </div>

              {/* Spaces — Next Week */}
              <div className="mxd-services-stack__inner justify-between bg-accent">
                <div className="mxd-services-stack__controls">
                  <Link
                    className="btn btn-round btn-round-large btn-base slide-right-up anim-no-delay"
                    href="#contact"
                  >
                    <i className="ph ph-arrow-up-right" />
                  </Link>
                </div>
                <div className="mxd-services-stack__title width-60">
                  <h3 className="opposite">
                    Spaces
                    <span className="tag tag-default tag-outline-opposite" style={{ marginLeft: "1rem", fontSize: "0.6em", verticalAlign: "middle" }}>
                      💠 Next Week
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
                    The Spatial Web. Standalone WebAR with engineering-grade
                    precision for any industrial or architectural application.
                  </p>
                </div>
                <div className="services-stack__image">
                  <Image
                    className="service-img service-img-s"
                    alt="Spaces Platform"
                    src="/img/services/800x800_ser-02.webp"
                    width={800}
                    height={800}
                  />
                  <Image
                    className="service-img service-img-m"
                    alt="Spaces Platform"
                    src="/img/services/1000x1000_ser-02.webp"
                    width={1000}
                    height={1000}
                  />
                </div>
              </div>

              {/* Canvas — Coming Soon */}
              <div className="mxd-services-stack__inner radius-dark justify-between bg-base-tint">
                <div className="mxd-services-stack__controls">
                  <Link
                    className="btn btn-round btn-round-large btn-opposite slide-right-up anim-no-delay"
                    href="#contact"
                  >
                    <i className="ph ph-arrow-up-right" />
                  </Link>
                </div>
                <div className="mxd-services-stack__title width-60">
                  <h3>
                    Canvas
                    <span className="tag tag-default tag-outline" style={{ marginLeft: "1rem", fontSize: "0.6em", verticalAlign: "middle" }}>
                      🎨 Coming Soon
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
                    Self-serve WebAR builder. Create instant industrial
                    visualization without code, design skills, or headsets.
                  </p>
                </div>
                <div className="services-stack__image">
                  <Image
                    className="service-img service-img-s"
                    alt="Canvas Platform"
                    src="/img/services/800x800_ser-03.webp"
                    width={800}
                    height={800}
                  />
                  <Image
                    className="service-img service-img-m"
                    alt="Canvas Platform"
                    src="/img/services/1000x1000_ser-03.webp"
                    width={1000}
                    height={1000}
                  />
                </div>
              </div>

            </StackCards>
          </div>
        </div>
        {/* Block - Platforms Stacking Cards End */}
      </div>
    </div>
  );
}
