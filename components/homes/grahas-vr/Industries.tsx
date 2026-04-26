import RevealText from "@/components/animation/RevealText";

const industries = [
  { label: "IT/ITeS", icon: "ph-desktop" },
  { label: "Manufacturing", icon: "ph-factory" },
  { label: "Shipping", icon: "ph-boat" },
  { label: "Farming", icon: "ph-plant" },
  { label: "Pharma", icon: "ph-flask" },
  { label: "Life Sciences", icon: "ph-dna" },
  { label: "Hospitality", icon: "ph-buildings" },
  { label: "E-Commerce", icon: "ph-shopping-cart" },
];

export default function Industries() {
  return (
    <section className="mxd-section padding-pre-grid mobile-grid-s">
      <div className="mxd-container grid-container">
        <div className="mxd-block">
          <div className="mxd-section-title">
            <div className="container-fluid p-0">
              <div className="row g-0">
                <div className="col-12 col-xl-6 mxd-grid-item no-margin">
                  <div className="mxd-section-title__hrtitle anim-uni-in-up">
                    <RevealText as="h2" className="reveal-type">
                      Deploying Across 10+ Sectors.
                    </RevealText>
                  </div>
                </div>
                <div className="col-12 col-xl-6 mxd-grid-item no-margin">
                  <div className="mxd-section-title__hrdescr">
                    <p className="anim-uni-in-up">
                      XR implementations for industrial, institutional, and
                      customer-facing workflows.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mxd-block">
          <div className="industry-grid">
            {industries.map((industry) => (
              <div className="industry-tile anim-uni-in-up" key={industry.label}>
                <i className={`ph ${industry.icon}`} />
                <h5>{industry.label}</h5>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .industry-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 1rem;
        }
        .industry-tile {
          min-height: 13rem;
          border-radius: 0.5rem;
          background: var(--color-base-tint, #f6f3ef);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 1.5rem;
        }
        .industry-tile i {
          font-size: 2.4rem;
          color: var(--accent--light, #0584c7);
        }
        .industry-tile h5 {
          margin: 0;
        }
        @media (max-width: 991px) {
          .industry-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }
        @media (max-width: 575px) {
          .industry-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
