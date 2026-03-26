import AnimatedButton from "@/components/animation/AnimatedButton";
import RevealText from "@/components/animation/RevealText";

const partnerTypes = [
  {
    type: "ISV Partnership",
    number: "01",
    headline: "Co-Create Enterprise XR",
    copy:
      "Are you an institution, system integrator, or enterprise technology provider? Partner with us to co-create and deploy custom XR solutions at scale — Digital Twins, Training Simulators, and Spatial Experiences built around your clients' SOPs.",
    tags: ["Enterprise", "Co-Development", "Revenue Share"],
    accent: false,
  },
  {
    type: "Channel Partners",
    number: "02",
    headline: "Sell Done-For-You WebAR",
    copy:
      "Bring the Spatial Web to your SMB clients through GRAHAs Spaces. You open the door — we handle 3D modelling and deployment. Standalone WebAR delivered in 72 hours. Immediate commission payouts upon client clearance.",
    tags: ["WebAR", "White-Label", "Instant Commission"],
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
                    agency looking to bring the Spatial Web to your clients — we have
                    a model for you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Partner Cards */}
        <div className="mxd-block">
          <div className="mxd-services-cards-s">
            <div className="container-fluid px-0">
              <div className="row gx-0">
                {partnerTypes.map((p) => (
                  <div
                    key={p.number}
                    className="col-12 col-xl-6 mxd-services-cards-s__item mxd-grid-item anim-uni-scale-in-right"
                  >
                    <div
                      className={`mxd-services-cards-s__inner justify-center radius-l padding-4 ${
                        p.accent ? "bg-accent" : "bg-base-tint"
                      }`}
                    >
                      <div className="mxd-services-cards-s__title">
                        <p
                          className="t-small anim-uni-in-up"
                          style={{ opacity: 0.5 }}
                        >
                          {p.number}
                        </p>
                        <p
                          className={`t-small anim-uni-in-up ${p.accent ? "" : ""}`}
                          style={{ opacity: 0.6, marginTop: "0.25rem" }}
                        >
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
    </div>
  );
}
