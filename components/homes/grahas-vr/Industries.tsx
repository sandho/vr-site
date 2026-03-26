import VelocityMarquee from "@/components/animation/VelocityMarquee";
import RevealText from "@/components/animation/RevealText";

const StarSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 20 20">
    <path d="M19.6,9.6h-3.9c-.4,0-1.8-.2-1.8-.2-.6,0-1.1-.2-1.6-.6-.5-.3-.9-.8-1.2-1.2-.3-.4-.4-.9-.5-1.4,0,0,0-1.1-.2-1.5V.4c0-.2-.2-.4-.4-.4s-.4.2-.4.4v4.4c0,.4-.2,1.5-.2,1.5,0,.5-.2,1-.5,1.4-.3.5-.7.9-1.2,1.2s-1,.5-1.6.6c0,0-1.2,0-1.7.2H.4c-.2,0-.4.2-.4.4s.2.4.4.4h4.1c.4,0,1.7.2,1.7.2.6,0,1.1.2,1.6.6.4.3.8.7,1.1,1.1.3.5.5,1,.6,1.6,0,0,0,1.3.2,1.7v4.1c0,.2.2.4.4.4s.4-.2.4-.4v-4.1c0-.4.2-1.7.2-1.7,0-.6.2-1.1.6-1.6.3-.4.7-.8,1.1-1.1.5-.3,1-.5,1.6-.6,0,0,1.3,0,1.8-.2h3.9c.2,0,.4-.2.4-.4s-.2-.4-.4-.4h0Z" />
  </svg>
);

const industries = [
  "Manufacturing",
  "Shipping & Logistics",
  "Pharma",
  "IT & ITeS",
  "Life Sciences",
  "Farming & AgriTech",
  "Hospitality",
  "E-Commerce",
  "Automotive",
  "Construction",
];

export default function Industries() {
  return (
    <div className="mxd-section padding-pre-grid mobile-grid-s">
      <div className="mxd-container grid-container">
        {/* Section Label */}
        <div className="mxd-block">
          <div className="mxd-section-title">
            <div className="container-fluid p-0">
              <div className="row g-0">
                <div className="col-12 col-xl-6 mxd-grid-item no-margin">
                  <div className="mxd-section-title__hrtitle anim-uni-in-up">
                    <RevealText as="h2" className="reveal-type">
                      10+ Sectors,
                      <br />
                      Worldwide.
                    </RevealText>
                  </div>
                </div>
                <div className="col-12 col-xl-6 mxd-grid-item no-margin">
                  <div className="mxd-section-title__hrdescr">
                    <p className="anim-uni-in-up">
                      Deploying across industry — from shop floors to logistics
                      hubs to pharma labs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full-width marquee */}
      <div className="mxd-container fullwidth-container">
        <div className="mxd-block">
          <VelocityMarquee className="marquee marquee-right--gsap">
            {industries.map((industry, idx) => (
              <div key={idx} className="marquee__item item-regular text">
                <p>{industry}</p>
                <StarSvg />
              </div>
            ))}
          </VelocityMarquee>
        </div>
      </div>
    </div>
  );
}
