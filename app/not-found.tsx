import AnimatedButton from "@/components/animation/AnimatedButton";
import VelocityMarquee from "@/components/animation/VelocityMarquee";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found — GRAHAs VR",
  description:
    "The requested GRAHAs VR page could not be found. Return to engineering-grade XR solutions for industry.",
};

export default function NotFoundPage() {
  return (
    <main id="mxd-page-content" className="mxd-page-content">
      <section className="mxd-section mxd-section-fullscreen">
        <div className="mxd-container grid-container fullwidth-container fullscreen-container loading-wrap">
          <div className="mxd-block fullscreen-block">
            <div className="mxd-error">
              <div className="mxd-error__descr">
                <div className="container-fluid p-0">
                  <div className="row g-0">
                    <div className="col-12 col-xl-6 mxd-grid-item no-margin">
                      <div className="mxd-error__caption loading__fade">
                        <p className="t-large t-medium t-120 t-bright">
                          This GRAHAs VR page does not exist
                        </p>
                        <p className="t-large t-medium t-120 t-muted">
                          Let&apos;s get you back to XR that works.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mxd-error__controls loading__fade">
                <div className="container-fluid p-0">
                  <div className="row g-0">
                    <div className="col-12 col-xl-6 mxd-grid-item no-margin">
                      <AnimatedButton
                        text="Go Home"
                        className="btn btn-default btn-accent slide-right-up"
                        href="/"
                      >
                        <i className="ph-bold ph-arrow-up-right" />
                      </AnimatedButton>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mxd-block absolute-centered-block loading__item">
            <VelocityMarquee className="marquee marquee-error marquee-right--gsap bright">
              <div className="marquee__toright">
                {Array.from({ length: 3 }).map((_, index) => (
                  <div
                    key={index}
                    className="marquee__item item-regular item-regular-xl text"
                  >
                    <p className="marquee__text text-xl">404</p>
                  </div>
                ))}
              </div>
            </VelocityMarquee>
          </div>
        </div>
      </section>
    </main>
  );
}
