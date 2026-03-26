import RevealText from "@/components/animation/RevealText";
import AnimatedButton from "@/components/animation/AnimatedButton";
import Image from "next/image";

const steps = [
  {
    letter: "S",
    title: "Story — Narrative Anchoring",
    description:
      "Context-embedded procedures retain 3× longer in working memory. Every training module opens inside a real scenario drawn from your SOPs.",
    icon: "/img/icons/210x210_approach-01.webp",
  },
  {
    letter: "T",
    title: "Tension — Psychological Engagement",
    description:
      "Safe, controlled stress activates deeper memory consolidation. Trainees face consequence-driven simulations that keep them engaged.",
    icon: "/img/icons/210x210_approach-02.webp",
  },
  {
    letter: "E",
    title: "Emotion — Affective Response",
    description:
      "Emotional resonance multiplies long-term retention by 4×. Realistic environments and characters trigger genuine affective responses.",
    icon: "/img/icons/210x210_approach-03.webp",
  },
  {
    letter: "P",
    title: "Place — Spatial Transfer",
    description:
      "Realistic environments encode procedural and muscle memory. Trainees practice in a 1:1 replica of the actual shop floor.",
    icon: "/img/icons/210x210_approach-04.webp",
  },
];

export default function StepFramework() {
  return (
    <div className="mxd-section padding-pre-grid mobile-grid-s">
      <div className="mxd-container grid-container">
        {/* Block - Section Title Start */}
        <div className="mxd-block">
          <div className="mxd-section-title">
            <div className="container-fluid p-0">
              <div className="row g-0">
                <div className="col-12 col-xl-6 mxd-grid-item no-margin">
                  <div className="mxd-section-title__hrtitle anim-uni-in-up">
                    <RevealText as="h2" className="reveal-type">
                      The STEP
                      <br />
                      Framework™
                    </RevealText>
                  </div>
                </div>
                <div className="col-12 col-xl-3 mxd-grid-item no-margin">
                  <div className="mxd-section-title__hrdescr">
                    <p className="anim-uni-in-up">Story</p>
                    <p className="anim-uni-in-up">Tension</p>
                    <p className="anim-uni-in-up">Emotion</p>
                    <p className="anim-uni-in-up">Place</p>
                  </div>
                </div>
                <div className="col-12 col-xl-3 mxd-grid-item no-margin">
                  <div className="mxd-section-title__hrcontrols anim-uni-in-up">
                    <AnimatedButton
                      text="Start Pilot"
                      className="btn btn-anim btn-default btn-outline slide-right-up"
                      href="#contact"
                    >
                      <i className="ph-bold ph-arrow-up-right" />
                    </AnimatedButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Block - Section Title End */}

        {/* Block - STEP List Start */}
        <div className="mxd-block">
          <div className="mxd-approach-list">
            {steps.map((step, idx) => (
              <div className="mxd-approach-list__item" key={idx}>
                <div className="mxd-approach-list__border anim-uni-in-up" />
                <div className="mxd-approach-list__inner">
                  <div className="container-fluid px-0">
                    <div className="row gx-0">
                      <div className="col-12 col-xl-2 mxd-grid-item no-margin">
                        <div className="mxd-approach-list__image anim-uni-in-up">
                          <Image
                            alt={`STEP ${step.letter}`}
                            src={step.icon}
                            width={210}
                            height={210}
                          />
                        </div>
                      </div>
                      <div className="col-12 col-xl-4 mxd-grid-item no-margin">
                        <div className="mxd-approach-list__title anim-uni-in-up">
                          <h6>
                            <span style={{ opacity: 0.4, marginRight: "0.5rem" }}>
                              {step.letter}
                            </span>
                            {step.title}
                          </h6>
                        </div>
                      </div>
                      <div className="col-12 col-xl-6 mxd-grid-item no-margin">
                        <div className="mxd-approach-list__descr anim-uni-in-up">
                          <p>{step.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mxd-approach-list__border anim-uni-in-up" />
              </div>
            ))}
          </div>
        </div>
        {/* Block - STEP List End */}
      </div>
    </div>
  );
}
