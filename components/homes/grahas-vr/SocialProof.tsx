import Image from "next/image";
import Link from "next/link";

const logos = [
  { name: "NASSCOM Emerge 50",       src: "/img/social/emerge50-logo.jpg" },
  { name: "Startup Grind",           src: "/img/social/Startupgrind.png" },
  { name: "Google for Startups",     src: "/img/social/GCP.jpg" },
  { name: "CII",                     src: "/img/social/Official_logo_of_the_Confederation_of_Indian_Industry_(CII).svg.png" },
  { name: "IIT Madras",              src: "/img/social/iit-madras-indian-institute-of-technology-madras4653.jpg" },
  { name: "FICCI",                   src: "/img/social/FICCI Logo.png" },
  { name: "Microsoft for Startups",  src: "/img/social/Microsoft for Startups - Banner.png" },
  // { name: "NVIDIA",                  src: "/img/social/Nvidia_fb.png" },
  { name: "Kritilabs",               src: "/img/social/kritilabs_logo.jpeg" },
  { name: "Radisson Blu",            src: "/img/social/Radisson_Blu_logo.svg.png" },
  { name: "Aizant",                  src: "/img/social/Aizant Logo.jpg" },
  { name: "SIPCOT",                  src: "/img/social/SIPCOT-LOGO-01.png" },
  // { name: "Bluetooth SIG",           src: "/img/social/Bluetooth SIG Community - Updated.png" },
  { name: "Monotech Systems",        src: "/img/social/monotech-systems-ltd-logo-vector.png" },
  { name: "IJITCE",                  src: "/img/social/IJITCE-logo.png" },
];

export default function SocialProof() {
  return (
    <div className="mxd-section padding-default">
      <div className="mxd-container grid-container">
        <div className="mxd-block">

          {/* Heading */}
          <p
            className="t-small"
            style={{
              opacity: 0.45,
              marginBottom: "2rem",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              textAlign: "center",
            }}
          >
            Trusted by Innovation Leaders
          </p>

          {/* Logo grid — 6 per row desktop, 4 tablet, 3 mobile */}
          <div className="sp-logo-grid">
            {logos.map((logo) => (
              <div key={logo.name} className="sp-logo-item" title={logo.name}>
                <Image
                  src={logo.src}
                  alt={logo.name}
                  fill
                  sizes="(max-width: 575px) 30vw, (max-width: 991px) 22vw, 14vw"
                  style={{ objectFit: "contain", objectPosition: "center center" }}
                />
              </div>
            ))}

            {/* Meta Quest Store */}
            <Link
              href="https://www.meta.com/experiences/"
              target="_blank"
              rel="noopener noreferrer"
              className="sp-logo-item"
            >
              <Image
                src="/img/social/meta-quest-seeklogo.png"
                alt="Available on Meta Quest Store"
                fill
                sizes="(max-width: 575px) 30vw, (max-width: 991px) 22vw, 14vw"
                style={{ objectFit: "contain", objectPosition: "center center" }}
              />
            </Link>
          </div>

        </div>
      </div>

      <style>{`
        .sp-logo-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
          gap: 2.5rem 3rem;
          align-items: center;
          justify-items: center;
          justify-content: center;
          text-align: center;
        }
        .sp-logo-item {
          position: relative;
          width: 100%;
          height: 8rem;
          opacity: 1;
          display: block;
          text-decoration: none;
        }
        @media (max-width: 991px) {
          .sp-logo-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 2rem 1.5rem;
          }
          .sp-logo-item { height: 6rem; }
        }
        @media (max-width: 575px) {
          .sp-logo-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.75rem 1.25rem;
          }
          .sp-logo-item { height: 5rem; }
        }
      `}</style>
    </div>
  );
}
