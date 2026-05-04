import Image from "next/image";
import RevealText from "@/components/animation/RevealText";
import AnimatedButton from "@/components/animation/AnimatedButton";

export default function StepFramework() {
  return (
    <section className="mxd-section padding-pre-grid mobile-grid-s">
      <div className="mxd-container grid-container">
        <div className="mxd-block">
          <div className="container-fluid p-0">
            <div className="row g-0 align-items-center">
              <div className="col-12 col-xl-6 mxd-grid-item no-margin">
                <div className="mxd-section-title no-margin-desktop">
                  <div className="mxd-section-title__title anim-uni-in-up">
                    <RevealText as="h2" className="reveal-type">
                      The Science Behind the Tech.
                    </RevealText>
                  </div>
                  <div className="mxd-section-title__descr anim-uni-in-up">
                    <p>
                      We engineer retention. Our proprietary STEP Framework™
                      (Story, Emotion, Place) leverages cognitive psychology to
                      ensure your workforce actually remembers what they learn.
                    </p>
                  </div>
                  <div className="mxd-section-title__controls anim-uni-in-up">
                    <AnimatedButton
                      text="Read our Research"
                      className="btn btn-anim btn-default btn-outline slide-right-up"
                      href="/step-framework"
                    >
                      <i className="ph-bold ph-arrow-up-right" />
                    </AnimatedButton>
                  </div>
                </div>
              </div>
              <div className="col-12 col-xl-6 mxd-grid-item no-margin">
                <div className="step-diagram anim-uni-in-up">
                  <Image
                    src="/img/gen/STEP_Framework.png"
                    alt="STEP Framework diagram"
                    width={800}
                    height={600}
                    className="step-diagram__img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .step-diagram {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .step-diagram__img {
          width: 100%;
          height: auto;
          display: block;
        }
      `}</style>
    </section>
  );
}
