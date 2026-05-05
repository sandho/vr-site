import AnimatedButton from "@/components/animation/AnimatedButton";

const navLinks = [
  { label: "Solutions", href: "/solutions" },
  { label: "Work", href: "/work" },
  { label: "Platforms", href: "/platforms" },
  { label: "Partners", href: "/partners" },
  { label: "Team", href: "/team" },
  { label: "Book a Demo", href: "/contact" },
];

const socials = [
  { title: "LinkedIn", icon: "ph-linkedin-logo", url: "https://www.linkedin.com/company/grahas-vr/" },
  { title: "YouTube", icon: "ph-youtube-logo", url: "https://www.youtube.com/@grahasvr" },
];

const DiamondSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="10" height="10" fill="currentColor">
    <path d="M8 0 L16 8 L8 16 L0 8 Z" />
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
                <DiamondSvg />
                <a href="mailto:enterprise@grahasvr.space">
                  enterprise@grahasvr.space
                </a>
              </p>
              <p className="mxd-point-subtitle anim-uni-in-up t-small">
                <DiamondSvg />
                <span>Platinum Jubilee Building, AC Tech Campus, Anna University, Chennai</span>
              </p>
              <p className="mxd-point-subtitle anim-uni-in-up t-small">
                <DiamondSvg />
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
                text="grahasvr.space"
                className="btn btn-anim btn-default btn-outline slide-right-up"
                href="https://grahasvr.space/"
              >
                <i className="ph-bold ph-arrow-up-right" />
              </AnimatedButton>
              <AnimatedButton
                text="zealx.in"
                className="btn btn-anim btn-default btn-outline slide-right-up"
                href="https://zealx.in"
              >
                <i className="ph-bold ph-arrow-up-right" />
              </AnimatedButton>
              <AnimatedButton
                text="Meta Store"
                className="btn btn-anim btn-default btn-outline slide-right-up"
                href="https://www.meta.com/en-gb/experiences/zeal-x-enterprise-training/26072684335657935/"
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
