import AnimatedButton from "@/components/animation/AnimatedButton";
import RevealText from "@/components/animation/RevealText";

const partnerTypes = [
  {
    type: "ISV Partnership",
    number: "01",
    headline: "Co-Create Enterprise XR",
    copy:
      "Co-create and deploy custom XR solutions for large-scale enterprise and institutional needs.",
    tags: ["ISV", "Enterprise", "Institutional"],
    accent: false,
  },
  {
    type: "Channel Partners",
    number: "02",
    headline: "Sell Done-For-You WebAR",
    copy:
      "Sell Done-For-You WebAR to your SMB clients. You open the door, we handle the 3D modeling and development. Immediate commission payouts upon client clearance.",
    tags: ["Spaces", "WebAR", "Channel"],
    accent: true,
  },
];

export default function Partners() {
  return (
    <div id="partners" className="mxd-section overflow-hidden padding-pre-title">
      <div className="mxd-container grid-container">

        {/* Section Title */}
        <div className="mxd-block">
          <div className="mxd-section-title">
            <div className="container-fluid p-0">
              <div className="row g-0">
                <div className="col-12 col-xl-8 mxd-grid-item no-margin">
                  <div className="mxd-section-title__hrtitle anim-uni-in-up">
                    <RevealText as="h2" className="reveal-type">
                      Partner with GRAHAs VR.
                    </RevealText>
                  </div>
                  <p
                    className="anim-uni-in-up"
                    style={{ opacity: 0.6, maxWidth: "52ch", marginTop: "1rem" }}
                  >
                    We are expanding our ecosystem. Whether you are an institution
                    looking to integrate cutting-edge XR into your curriculum, or an
                    agency looking to bring the &quot;Spatial Web&quot; to your clients, we have
                    a model for you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mxd-block">
          <div className="container-fluid px-0">
            <div className="row gx-0 align-items-stretch">
              <div className="col-12 col-xl-7">
                <div className="mxd-services-cards-s">
                  <div className="container-fluid px-0">
                    <div className="row gx-0">
                      {partnerTypes.map((p) => (
                        <div
                          key={p.number}
                          className="col-12 mxd-services-cards-s__item mxd-grid-item anim-uni-scale-in-right"
                        >
                          <div
                            className={`mxd-services-cards-s__inner justify-center radius-l padding-4 ${
                              p.accent ? "bg-accent" : "bg-base-tint"
                            }`}
                          >
                            <div className="mxd-services-cards-s__title">
                              <p className="t-small anim-uni-in-up" style={{ opacity: 0.5 }}>
                                {p.number}
                              </p>
                              <p className="t-small anim-uni-in-up" style={{ opacity: 0.6, marginTop: "0.25rem" }}>
                                {p.type}
                              </p>
                              <h3 className={`anim-uni-in-up${p.accent ? " opposite" : ""}`}>
                                {p.headline}
                              </h3>
                            </div>
                            <div className="mxd-services-cards-s__info">
                              <div className="mxd-services-cards-s__tags">
                                {p.tags.map((tag) => (
                                  <span
                                    key={tag}
                                    className={`tag tag-default anim-uni-in-up ${
                                      p.accent ? "tag-outline-opposite" : "tag-outline"
                                    }`}
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>
                              <p className={`anim-uni-in-up${p.accent ? " t-opposite" : ""}`}>
                                {p.copy}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-xl-5 mxd-grid-item no-margin">
                <div className="partner-network anim-uni-in-up">
                  <div className="partner-network__hub">GRAHAs VR</div>
                  {["Institutions", "Agencies", "Enterprises", "SMBs"].map((label, index) => (
                    <div className={`partner-network__node partner-network__node--${index + 1}`} key={label}>
                      {label}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mxd-block" style={{ textAlign: "center", paddingTop: "1rem" }}>
          <AnimatedButton
            text="Become a Partner"
            className="btn btn-anim btn-default btn-outline slide-right"
            href="/contact"
          >
            <i className="ph-bold ph-arrow-up-right" />
          </AnimatedButton>
        </div>

      </div>
      <style>{`
        .partner-network {
          position: relative;
          min-height: 100%;
          aspect-ratio: 1 / 1;
          border-radius: 0.5rem;
          background: var(--color-base-tint, #f6f3ef);
          overflow: hidden;
        }
        .partner-network:before {
          content: "";
          position: absolute;
          inset: 18%;
          border: 1px solid rgba(127,127,127,0.22);
          border-radius: 50%;
        }
        .partner-network__hub,
        .partner-network__node {
          position: absolute;
          display: grid;
          place-items: center;
          text-align: center;
          border-radius: 50%;
          font-weight: 650;
        }
        .partner-network__hub {
          inset: 36%;
          background: var(--accent--light, #0584c7);
          color: #fff;
        }
        .partner-network__node {
          width: 8.5rem;
          height: 8.5rem;
          background: var(--color-base, #fff);
          box-shadow: 0 1rem 3rem rgba(0,0,0,0.08);
          font-size: 0.95rem;
        }
        .partner-network__node--1 { top: 10%; left: 12%; }
        .partner-network__node--2 { top: 13%; right: 10%; }
        .partner-network__node--3 { bottom: 12%; left: 13%; }
        .partner-network__node--4 { bottom: 10%; right: 12%; }
      `}</style>
    </div>
  );
}
