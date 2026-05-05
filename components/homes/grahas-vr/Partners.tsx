import InquiryFormModal from "@/components/homes/grahas-vr/InquiryFormModal";
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
            <div className="row gx-0">
              {partnerTypes.map((p) => (
                <div
                  key={p.number}
                  className="col-12 col-xl-6 mxd-grid-item anim-uni-scale-in-right"
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

        <div className="mxd-block partner-popup-trigger anim-uni-in-up">
          <InquiryFormModal
            triggerLabel="Become a Partner"
            eyebrow="Partner Inquiry"
            title="Start a conversation"
            subject="New partnership inquiry from GRAHAs VR website"
            successMessage="Completed. Thanks, we received your partnership inquiry."
            className="btn btn-default btn-outline partner-open-button"
          />
        </div>

      </div>

      <style>{`
        .partner-popup-trigger {
          display: flex;
          justify-content: center;
          padding-top: 3rem;
        }
        .partner-open-button {
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}
