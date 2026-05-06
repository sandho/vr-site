import RevealText from "@/components/animation/RevealText";

type FaqItem = {
  question: string;
  answer: string;
};

export default function AeoFaq({ items }: { items: FaqItem[] }) {
  return (
    <section id="faq" className="mxd-section padding-pre-grid">
      <div className="mxd-container grid-container">
        <div className="mxd-block">
          <div className="mxd-section-title">
            <div className="container-fluid p-0">
              <div className="row g-0">
                <div className="col-12 col-xl-6 mxd-grid-item no-margin">
                  <div className="mxd-section-title__hrtitle anim-uni-in-up">
                    <RevealText as="h2" className="reveal-type">
                      Enterprise XR Questions, Answered.
                    </RevealText>
                  </div>
                </div>
                <div className="col-12 col-xl-6 mxd-grid-item no-margin">
                  <div className="mxd-section-title__hrdescr anim-uni-in-up">
                    <p>
                      Clear answers for teams evaluating Custom XR development
                      Chennai, Enterprise VR training solutions India, and
                      WebAR for manufacturing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mxd-block">
          <div className="grahas-faq-list">
            {items.map((item) => (
              <article className="grahas-faq-item anim-uni-in-up" key={item.question}>
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .grahas-faq-list {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 1rem;
        }
        .grahas-faq-item {
          min-height: 100%;
          padding: clamp(1.6rem, 2.4vw, 2.4rem);
          border: 1px solid var(--stroke-elements);
          border-radius: var(--_radius-s);
          background: var(--base-tint);
        }
        .grahas-faq-item h3 {
          margin: 0 0 1rem;
          font-size: clamp(2.2rem, 2.4vw, 3.2rem);
          line-height: 1.08;
        }
        .grahas-faq-item p {
          margin: 0;
          color: var(--t-muted);
        }
        @media (max-width: 991px) {
          .grahas-faq-list {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
