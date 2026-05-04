import AnimatedButton from "@/components/animation/AnimatedButton";

const navLinks = [
  { label: "Solutions", href: "/solutions" },
  { label: "Work", href: "/work" },
  { label: "Platforms", href: "/platforms" },
  { label: "Partners", href: "/partners" },
  { label: "Team", href: "/team" },
  { label: "Start Pilot", href: "/contact" },
];

const socials = [
  { title: "LinkedIn", icon: "ph-linkedin-logo", url: "https://www.linkedin.com/company/grahas-vr/" },
  { title: "YouTube", icon: "ph-youtube-logo", url: "https://www.youtube.com/@grahasvr" },
];

const StarIcon = () => (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    width="20px"
    height="20px"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fill="currentColor"
      d="M19.6,9.6c0,0-3,0-4,0c-0.4,0-1.8-0.2-1.8-0.2c-0.6-0.1-1.1-0.2-1.6-0.6c-0.5-0.3-0.9-0.8-1.2-1.2
    c-0.3-0.4-0.4-0.9-0.5-1.4c0,0-0.1-1.1-0.2-1.5c-0.1-1.1,0-4.4,0-4.4C10.4,0.2,10.2,0,10,0S9.6,0.2,9.6,0.4c0,0,0.1,3.3,0,4.4
    c0,0.4-0.2,1.5-0.2,1.5C9.4,6.7,9.2,7.2,9,7.6C8.7,8.1,8.2,8.5,7.8,8.9c-0.5,0.3-1,0.5-1.6,0.6c0,0-1.2,0.1-1.7,0.2
    c-1,0.1-4.2,0-4.2,0C0.2,9.6,0,9.8,0,10c0,0.2,0.2,0.4,0.4,0.4c0,0,3.1-0.1,4.2,0c0.4,0,1.7,0.2,1.7,0.2c0.6,0.1,1.1,0.2,1.6,0.6
    c0.4,0.3,0.8,0.7,1.1,1.1c0.3,0.5,0.5,1,0.6,1.6c0,0,0.1,1.3,0.2,1.7c0,1,0,4.1,0,4.1c0,0.2,0.2,0.4,0.4,0.4s0.4-0.2,0.4-0.4
    c0,0,0-3.1,0-4.1c0-0.4,0.2-1.7,0.2-1.7c0.1-0.6,0.2-1.1,0.6-1.6c0.3-0.4,0.7-0.8,1.1-1.1c0.5-0.3,1-0.5,1.6-0.6
    c0,0,1.3-0.1,1.8-0.2c1,0,4,0,4,0c0.2,0,0.4-0.2,0.4-0.4C20,9.8,19.8,9.6,19.6,9.6L19.6,9.6z"
    />
  </svg>
);

export default function Footer() {
  return (
    <footer id="mxd-footer" className="mxd-footer">
      {/* Footer Block - Brand Logo */}
      <div className="mxd-footer__text-wrap">
        <div className="fullwidth-text__tl-trigger" />
        <div className="mxd-footer__fullwidth-text anim-top-to-bottom" style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem 0" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/img/grahas-logo.png"
            alt="GRAHAs VR"
            style={{ height: "clamp(6rem, 14vw, 12rem)", width: "auto", objectFit: "contain" }}
          />
        </div>
      </div>

      {/* Footer Block - Info Columns */}
      <div className="mxd-footer__footer-blocks">
        {/* Column 1 — Navigation */}
        <div className="footer-blocks__column animate-card-3">
          <div className="footer-blocks__card fullheight-card">
            <div className="footer-blocks__nav">
              <ul className="footer-nav">
                {navLinks.map((item, idx) => (
                  <li className="footer-nav__item anim-uni-in-up" key={idx}>
                    <a href={item.href} className="footer-nav__link">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* <div className="footer-blocks__links anim-uni-in-up">
              <AnimatedButton
                text="Privacy Policy"
                as={"a"}
                className="btn btn-line-xsmall btn-muted slide-right anim-no-delay"
                href="#"
              >
                <i className="ph ph-arrow-right" />
              </AnimatedButton>
            </div> */}
          </div>
        </div>

        {/* Column 2 — Contact & Platform */}
        <div className="footer-blocks__column animate-card-3">
          <div className="footer-blocks__card">
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <p className="mxd-point-subtitle anim-uni-in-up">
                <StarIcon />
                <a href="mailto:srinivasan@grahasvr.com">
                  srinivasan@grahasvr.com
                </a>
              </p>
              <p className="mxd-point-subtitle anim-uni-in-up t-small">
                <StarIcon />
                <span>Platinum Jubilee Building, AC Tech Campus, Anna University, Chennai</span>
              </p>
              <p className="mxd-point-subtitle anim-uni-in-up t-small">
                <StarIcon />
                <span>HQ: No. 42, Avadi - Vel Tech Road, Avadi, Chennai - 600 062</span>
              </p>
            </div>
          </div>
          <div className="footer-blocks__card fill-card notify">
            <div className="footer-blocks__title anim-uni-in-up">
              <p className="footer-blocks__title-m">Live Platform</p>
            </div>
            <div className="anim-uni-in-up" style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
              <AnimatedButton
                text="grahasvr.space ↗"
                className="btn btn-anim btn-default btn-outline slide-right-up"
                href="https://grahasvr.space/"
              >
                <i className="ph-bold ph-arrow-up-right" />
              </AnimatedButton>
              <AnimatedButton
                text="zealx.in ↗"
                className="btn btn-anim btn-default btn-outline slide-right-up"
                href="https://zealx.in"
              >
                <i className="ph-bold ph-arrow-up-right" />
              </AnimatedButton>
            </div>
          </div>
        </div>

        {/* Column 3 — Socials & Copyright */}
        <div className="footer-blocks__column animate-card-3">
          <div className="footer-blocks__card fullheight-card">
            <div className="footer-blocks__block">
              <div className="footer-blocks__title anim-uni-in-up">
                <p className="footer-blocks__title-l">Social</p>
              </div>
              <div className="footer-blocks__socials">
                <ul className="footer-socials">
                  {socials.map((social, i) => (
                    <li key={i} className="footer-socials__item anim-uni-in-up">
                      <a
                        href={social.url}
                        className="footer-socials__link"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.title}
                      >
                        <i className={`ph-bold ${social.icon}`} />
                        <span>{social.title}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="footer-map anim-uni-in-up">
              <iframe
                title="GRAHAs VR AC Tech Campus location"
                src="https://www.google.com/maps?q=Platinum%20Jubilee%20Building%2C%20AC%20Tech%20Campus%2C%20Anna%20University%2C%20Chennai&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="footer-blocks__links anim-uni-in-up">
              <p className="t-xsmall t-muted">
                © {new Date().getFullYear()} GRAHAs VR. Engineered Humanity.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        .footer-socials__link {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
        }
        .footer-map {
          width: 100%;
          aspect-ratio: 16 / 9;
          overflow: hidden;
          border-radius: var(--_radius-s);
          background: var(--base-tint);
          margin: 2rem 0;
        }
        .footer-map iframe {
          width: 100%;
          height: 100%;
          border: 0;
          display: block;
        }
      `}</style>
    </footer>
  );
}
