import Image from "next/image";

const logos = [
  { name: "TVS Group" },
  { name: "IIT Mandi Catalyst" },
  { name: "Vel Tech TBI" },
  { name: "NASSCOM Emerge 50", src: "/img/social/emerge50-logo.jpg" },
  { name: "Startup Grind", src: "/img/social/Startupgrind.png" },
  { name: "Google for Startups", src: "/img/social/GCP.jpg" },
  { name: "CII", src: "/img/social/Official_logo_of_the_Confederation_of_Indian_Industry_(CII).svg.png" },
  { name: "Available on Meta Store", src: "/img/social/meta-quest-seeklogo.png", href: "https://www.meta.com/experiences/" },
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
                      backing practical immersive technology.
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
      </div>

      <style>{`
        .grahas-partner-logo {
          width: min(18rem, 72%);
          min-height: 6rem;
          display: grid;
          place-items: center;
        }
        .grahas-partner-logo img {
          width: 100%;
          height: auto;
          max-height: 8rem;
          object-fit: contain;
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
      `}</style>
    </div>
  );
}
