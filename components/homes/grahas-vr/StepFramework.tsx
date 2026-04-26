import RevealText from "@/components/animation/RevealText";
import AnimatedButton from "@/components/animation/AnimatedButton";

const steps = ["Story", "Emotion", "Place"];

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
                <div className="step-diagram anim-uni-in-up" aria-label="STEP Framework diagram">
                  {steps.map((step, index) => (
                    <div className="step-node" key={step}>
                      <span>{step.charAt(0)}</span>
                      <p>{step}</p>
                      {index < steps.length - 1 && <i className="ph-bold ph-arrow-right" />}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .step-diagram {
          min-height: clamp(28rem, 38vw, 48rem);
          border-radius: 0.5rem;
          background:
            radial-gradient(circle at 20% 28%, rgba(5,132,199,0.22), transparent 28%),
            radial-gradient(circle at 78% 66%, rgba(20,20,20,0.12), transparent 30%),
            var(--color-base-tint, #f6f3ef);
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          align-items: center;
          gap: 1rem;
          padding: 2rem;
        }
        .step-node {
          position: relative;
          display: grid;
          place-items: center;
          gap: 1rem;
          text-align: center;
        }
        .step-node span {
          width: clamp(7rem, 10vw, 12rem);
          height: clamp(7rem, 10vw, 12rem);
          display: grid;
          place-items: center;
          border-radius: 50%;
          background: var(--accent--light, #0584c7);
          color: #fff;
          font-size: clamp(3rem, 5vw, 6rem);
          font-weight: 700;
        }
        .step-node p {
          margin: 0;
          font-weight: 650;
        }
        .step-node i {
          position: absolute;
          right: -1.35rem;
          top: 42%;
          font-size: 1.6rem;
          opacity: 0.45;
        }
        @media (max-width: 767px) {
          .step-diagram {
            grid-template-columns: 1fr;
          }
          .step-node i {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
