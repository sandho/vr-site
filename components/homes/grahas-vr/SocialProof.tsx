import Image from "next/image";

const logos = [
  { name: "TVS Group", src: "/img/social/tvs-group-logo.png" },
  { name: "IIT Mandi Catalyst & IIT Mandi iHub & HCi Foundation", src: "/img/social/iit-madras-indian-institute-of-technology-madras4653.jpg" },
  { name: "Vel Tech TBI", src: "/img/social/veltech-tbi-logo.png" },
  { name: "NASSCOM Emerge 50", src: "/img/social/emerge50-logo.jpg" },
  { name: "Startup Grind", src: "/img/social/Startupgrind.png" },
  { name: "Google for Startups", src: "/img/social/GCP.jpg" },
  { name: "CII", src: "/img/social/Official_logo_of_the_Confederation_of_Indian_Industry_(CII).svg.png" },
  { name: "Available on Meta Store", src: "/img/social/meta-quest-seeklogo.png", href: "https://www.meta.com/en-gb/experiences/zeal-x-enterprise-training/26072684335657935/" },
];

const trustMarkers = [
  "Funded and supported by Vel Tech TBI, IIT Mandi Catalyst, and the IIT Mandi iHub Foundation.",
  "NASSCOM Emerge 50 Startups",
  "Top 100 Startups (Silicon Valley Global Conference by Startup Grind / Google for Startups)",
  "Best XR Startup (Awarded by Dr. A.R. Rahman at XTIC Summit, IIT Madras)",
  "Top Placer at Go Global Awards (Augmented Reality category)",
  "Successful deployments with TVS Group and Kritilabs.",
];

export default function SocialProof() {
  return (
    <div className="mxd-section padding-pre-title">
      <div className="mxd-container grid-container">
        <div className="mxd-block">
          <div className="mxd-section-title">
            <div className="container-fluid p-0">
              <div className="row g-0">
                <div className="col-12 col-xl-6 mxd-grid-item no-margin">
                  <div className="mxd-section-title__hrtitle anim-uni-in-up">
                    <h2>Trusted by Innovation Leaders</h2>
                  </div>
                </div>
                <div className="col-12 col-xl-6 mxd-grid-item no-margin">
                  <div className="mxd-section-title__hrdescr">
                    <p className="anim-uni-in-up">
                      Enterprise teams, accelerators, and ecosystem partners
                      backing practical immersive technology for Industrial
                      AR/VR solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mxd-block">
          <div className="mxd-partners-cards">
            <div className="container-fluid p-0">
              <div className="row g-0">
                {logos.map((logo) => {
                  const content = (
                    <div className="mxd-partners-cards__logo grahas-partner-logo">
                      {logo.src ? (
                        <Image
                          alt={logo.name}
                          src={logo.src}
                          width={260}
                          height={120}
                        />
                      ) : (
                        <span>{logo.name}</span>
                      )}
                    </div>
                  );

                  return (
                    <div
                      key={logo.name}
                      className="col-12 col-md-6 col-xl-3 mxd-partners-cards__item mxd-grid-item animate-card-4"
                    >
                      {logo.href ? (
                        <a
                          className="mxd-partners-cards__inner"
                          href={logo.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {content}
                        </a>
                      ) : (
                        <div className="mxd-partners-cards__inner">
                          {content}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="mxd-block">
          <div className="grahas-trust-markers anim-uni-in-up">
            {trustMarkers.map((marker) => (
              <p key={marker}>{marker}</p>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .mxd-partners-cards__item {
          height: clamp(14rem, 18vw, 20rem);
        }
        .mxd-partners-cards__inner {
          padding: clamp(1.2rem, 2vw, 2.4rem);
        }
        .grahas-partner-logo {
          width: min(24rem, 92%);
          min-height: clamp(7rem, 10vw, 12rem);
          display: grid;
          place-items: center;
        }
        .grahas-partner-logo img {
          width: 100%;
          height: auto;
          max-height: clamp(8rem, 11vw, 13rem);
          object-fit: contain;
          opacity: 0.82;
        }
        .grahas-partner-logo span {
          display: block;
          color: var(--t-bright);
          opacity: 0.68;
          font: normal var(--fw-medium) 2.2rem/1.1 var(--_font-accent);
          text-align: center;
          transition: opacity var(--_animspeed-slow) ease;
        }
        .no-touch .mxd-partners-cards__inner:hover .grahas-partner-logo span {
          opacity: 1;
        }
        .grahas-trust-markers {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 1rem;
          padding-top: 2rem;
        }
        .grahas-trust-markers p {
          min-height: 100%;
          margin: 0;
          padding: 1.2rem;
          border: 1px solid var(--stroke-elements);
          border-radius: var(--_radius-s);
          color: var(--t-muted);
          font: normal var(--fw-medium) 1.5rem/1.35 var(--_font-default);
        }
        @media (max-width: 991px) {
          .grahas-trust-markers {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
