import AnimatedButton from "@/components/animation/AnimatedButton";

const navLinks = [
  { label: "Solutions", href: "#solutions" },
  { label: "Work", href: "#projects" },
  { label: "Platforms", href: "#platforms" },
  { label: "Team", href: "#team" },
  { label: "Start Pilot", href: "/contact" },
];

const socials = [
  { title: "LinkedIn", url: "https://linkedin.com" },
  { title: "Twitter", url: "https://twitter.com" },
  { title: "YouTube", url: "https://youtube.com" },
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
      {/* Footer Block - Brand Text */}
      <div className="mxd-footer__text-wrap">
        <div className="fullwidth-text__tl-trigger" />
        <div className="mxd-footer__fullwidth-text anim-top-to-bottom">
          {/* Use SVG-style class so it scales to 100% width like the original */}
          <svg
            className="mxd-footer__svg-v2"
            viewBox="0 0 520 72"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="GRAHAs VR"
          >
            <text
              x="0"
              y="60"
              fontSize="72"
              fontWeight="800"
              fontFamily="inherit"
              fill="currentColor"
              letterSpacing="-2"
            >
              GRAHAs VR
            </text>
          </svg>
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
                    <AnimatedButton
                      href={item.href}
                      text={item.label}
                      className="footer-nav__link btn-anim"
                    />
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer-blocks__links anim-uni-in-up">
              <AnimatedButton
                text="Privacy Policy"
                as={"a"}
                className="btn btn-line-xsmall btn-muted slide-right anim-no-delay"
                href="#"
              >
                <i className="ph ph-arrow-right" />
              </AnimatedButton>
            </div>
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
                <span>AC Tech Campus, Anna University, Chennai</span>
              </p>
              <p className="mxd-point-subtitle anim-uni-in-up t-small">
                <StarIcon />
                <span>No. 42, Avadi–Vel Tech Road, Avadi, Chennai 600 062</span>
              </p>
            </div>
          </div>
          <div className="footer-blocks__card fill-card notify">
            <div className="footer-blocks__title anim-uni-in-up">
              <p className="footer-blocks__title-m">Live Platform</p>
            </div>
            <div className="anim-uni-in-up">
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
                <p className="footer-blocks__title-l">Ecosystem</p>
              </div>
              <div className="footer-blocks__socials">
                <ul className="footer-socials">
                  {socials.map((social, i) => (
                    <li key={i} className="footer-socials__item anim-uni-in-up">
                      <a
                        href={social.url}
                        className="footer-socials__link"
                        target="_blank"
                      >
                        {social.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="footer-blocks__links anim-uni-in-up">
              <p className="t-xsmall t-muted">
                © {new Date().getFullYear()} GRAHAs VR. Engineered Humanity.{" "}
                Built by Antigravity AI.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
