import RevealText from "@/components/animation/RevealText";

const demos = [
  {
    title: "IoT / Security",
    subtitle: "PCMS ProSec Guard Demo (Kritilabs)",
    href: "https://youtu.be/kKfEU5fNv68",
    thumb: "https://img.youtube.com/vi/kKfEU5fNv68/hqdefault.jpg",
  },
  {
    title: "Automotive",
    subtitle: "AR Engine Assembly Training",
    href: "https://youtu.be/yX3I7oz-7ME",
    thumb: "https://img.youtube.com/vi/yX3I7oz-7ME/hqdefault.jpg",
  },
  {
    title: "Enterprise Safety",
    subtitle: "Zeal X VR Simulation",
    href: "https://youtu.be/4lI0TQADhqI",
    thumb: "https://img.youtube.com/vi/4lI0TQADhqI/hqdefault.jpg",
  },
  {
    title: "AEC",
    subtitle: "Architecture & Construction Walkthrough",
    href: "https://youtu.be/buGl51RHeCs",
    thumb: "https://img.youtube.com/vi/buGl51RHeCs/hqdefault.jpg",
  },
  {
    title: "Aviation",
    subtitle: "Flight/Maintenance Simulation",
    href: "https://squarecompin-my.sharepoint.com/:v:/g/personal/srinivasan_squarecomp_in/IQDFg63h37rIRbiReD44ANhuAchOe-tknfNeAAl63l_dzeE?e=qdVKvm",
    thumb: "/img/works/preview/1920x1080_prv-07.webp",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="mxd-section padding-pre-grid">
      <div className="mxd-container grid-container">
        <div className="mxd-block">
          <div className="mxd-section-title">
            <div className="container-fluid p-0">
              <div className="row g-0">
                <div className="col-12 col-xl-7 mxd-grid-item no-margin">
                  <div className="mxd-section-title__hrtitle anim-uni-in-up">
                    <RevealText as="h2" className="reveal-type">
                      See It In Action (Cross-Industry Use Cases)
                    </RevealText>
                  </div>
                </div>
                <div className="col-12 col-xl-5 mxd-grid-item no-margin">
                  <div className="mxd-section-title__hrdescr anim-uni-in-up">
                    <p>Cross-industry use cases from security to aviation.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mxd-block">
          <div className="demo-vault-grid">
            {demos.map((demo) => (
              <a
                key={demo.title}
                className="demo-vault-card anim-uni-in-up"
                href={demo.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="demo-vault-card__media">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={demo.thumb} alt={demo.subtitle} />
                  <span className="demo-vault-card__play">
                    <i className="ph-fill ph-play" />
                  </span>
                </div>
                <div className="demo-vault-card__body">
                  <p className="t-small">{demo.title}</p>
                  <h5>{demo.subtitle}</h5>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .demo-vault-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 1rem;
        }
        .demo-vault-card {
          color: inherit;
          text-decoration: none;
        }
        .demo-vault-card__media {
          position: relative;
          aspect-ratio: 16 / 9;
          overflow: hidden;
          border-radius: 0.5rem;
          background: #111;
        }
        .demo-vault-card__media img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.35s ease, opacity 0.35s ease;
        }
        .demo-vault-card:hover img {
          transform: scale(1.04);
          opacity: 0.78;
        }
        .demo-vault-card__play {
          position: absolute;
          inset: 0;
          display: grid;
          place-items: center;
          color: #fff;
          font-size: 3rem;
          text-shadow: 0 0.5rem 2rem rgba(0,0,0,0.42);
        }
        .demo-vault-card__body {
          padding: 1rem 0.25rem 0;
        }
        .demo-vault-card__body p {
          margin: 0 0 0.35rem;
          opacity: 0.55;
        }
        .demo-vault-card__body h5 {
          margin: 0;
        }
        @media (max-width: 991px) {
          .demo-vault-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }
        @media (max-width: 575px) {
          .demo-vault-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
