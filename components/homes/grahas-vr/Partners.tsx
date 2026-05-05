"use client";

import { useEffect, useState } from "react";
import RevealText from "@/components/animation/RevealText";

const partnerTypes = [
  {
    type: "ISV Partnership",
    number: "01",
    headline: "Co-Create Enterprise XR",
    copy:
      "Co-create and deploy custom XR solutions for large-scale enterprise and institutional needs.",
    tags: ["ISV", "Enterprise", "Institutional"],
    accent: false,
  },
  {
    type: "Channel Partners",
    number: "02",
    headline: "Sell Done-For-You WebAR",
    copy:
      "Sell Done-For-You WebAR to your SMB clients. You open the door, we handle the 3D modeling and development. Immediate commission payouts upon client clearance.",
    tags: ["Spaces", "WebAR", "Channel"],
    accent: true,
  },
];

export default function Partners() {
  const [formOpen, setFormOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  useEffect(() => {
    if (!formOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setFormOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [formOpen]);

  const openForm = () => {
    setFormStatus("idle");
    setFormOpen(true);
  };

  const closeForm = () => {
    if (formStatus === "submitting") return;
    setFormOpen(false);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormStatus("submitting");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formsubmit.co/ajax/enterprise@grahasvr.space", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      form.reset();
      setFormStatus("success");
    } catch {
      setFormStatus("error");
    }
  };

  return (
    <div id="partners" className="mxd-section overflow-hidden padding-pre-title">
      <div className="mxd-container grid-container">

        {/* Section Title */}
        <div className="mxd-block">
          <div className="mxd-section-title">
            <div className="container-fluid p-0">
              <div className="row g-0">
                <div className="col-12 col-xl-8 mxd-grid-item no-margin">
                  <div className="mxd-section-title__hrtitle anim-uni-in-up">
                    <RevealText as="h2" className="reveal-type">
                      Partner with GRAHAs VR.
                    </RevealText>
                  </div>
                  <p
                    className="anim-uni-in-up"
                    style={{ opacity: 0.6, maxWidth: "52ch", marginTop: "1rem" }}
                  >
                    We are expanding our ecosystem. Whether you are an institution
                    looking to integrate cutting-edge XR into your curriculum, or an
                    agency looking to bring the &quot;Spatial Web&quot; to your clients, we have
                    a model for you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mxd-block">
          <div className="container-fluid px-0">
            <div className="row gx-0">
              {partnerTypes.map((p) => (
                <div
                  key={p.number}
                  className="col-12 col-xl-6 mxd-grid-item anim-uni-scale-in-right"
                >
                  <div
                    className={`mxd-services-cards-s__inner justify-center radius-l padding-4 ${
                      p.accent ? "bg-accent" : "bg-base-tint"
                    }`}
                  >
                    <div className="mxd-services-cards-s__title">
                      <p className="t-small anim-uni-in-up" style={{ opacity: 0.5 }}>
                        {p.number}
                      </p>
                      <p className="t-small anim-uni-in-up" style={{ opacity: 0.6, marginTop: "0.25rem" }}>
                        {p.type}
                      </p>
                      <h3 className={`anim-uni-in-up${p.accent ? " opposite" : ""}`}>
                        {p.headline}
                      </h3>
                    </div>
                    <div className="mxd-services-cards-s__info">
                      <div className="mxd-services-cards-s__tags">
                        {p.tags.map((tag) => (
                          <span
                            key={tag}
                            className={`tag tag-default anim-uni-in-up ${
                              p.accent ? "tag-outline-opposite" : "tag-outline"
                            }`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <p className={`anim-uni-in-up${p.accent ? " t-opposite" : ""}`}>
                        {p.copy}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mxd-block partner-popup-trigger anim-uni-in-up">
          <button
            className="btn btn-default btn-outline partner-open-button"
            type="button"
            onClick={openForm}
          >
            Become a Partner
            <i className="ph-bold ph-arrow-up-right" />
          </button>
        </div>

      </div>

      {formOpen && (
        <div
          className="partner-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="partner-modal-title"
        >
          <button
            className="partner-modal__backdrop"
            type="button"
            aria-label="Close partner form"
            onClick={closeForm}
          />
          <div className="partner-modal__panel">
            <button
              className="partner-modal__close"
              type="button"
              aria-label="Close partner form"
              onClick={closeForm}
              disabled={formStatus === "submitting"}
            >
              <i className="ph-bold ph-x" />
            </button>
            <form
              className="partner-form-card"
              action="https://formsubmit.co/enterprise@grahasvr.space"
              method="POST"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="_subject" value="New partnership inquiry from GRAHAs VR website" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />

              <div className="partner-form-card__head">
                <p className="t-small">Partner Inquiry</p>
                <h3 id="partner-modal-title">Start a conversation</h3>
              </div>

              <div className="partner-form-card__fields">
                <label className="partner-form-field">
                  <span>Full Name</span>
                  <input name="Full Name" type="text" autoComplete="name" required />
                </label>
                <label className="partner-form-field">
                  <span>Company / Organization</span>
                  <input name="Company / Organization" type="text" autoComplete="organization" required />
                </label>
                <label className="partner-form-field">
                  <span>Email Address</span>
                  <input name="Email Address" type="email" autoComplete="email" required />
                </label>
                <label className="partner-form-field">
                  <span>Mobile Number</span>
                  <input name="Mobile Number" type="tel" autoComplete="tel" required />
                </label>
              </div>

              <button className="btn btn-default btn-outline partner-form-submit" type="submit">
                {formStatus === "submitting" ? "Submitting..." : "Submit Inquiry"}
                <i className="ph-bold ph-arrow-up-right" />
              </button>

              {formStatus === "success" && (
                <p className="partner-form-status partner-form-status--success" role="status">
                  Completed. Thanks, we received your partnership inquiry.
                </p>
              )}
              {formStatus === "error" && (
                <p className="partner-form-status partner-form-status--error" role="alert">
                  Failed. Please check your details and try again.
                </p>
              )}
            </form>
          </div>
        </div>
      )}

      <style>{`
        .partner-popup-trigger {
          display: flex;
          justify-content: center;
          padding-top: 3rem;
        }
        .partner-open-button {
          cursor: pointer;
        }
        .partner-modal {
          position: fixed;
          inset: 0;
          z-index: 9998;
          display: grid;
          place-items: center;
          padding: clamp(1.6rem, 4vw, 3.2rem);
        }
        .partner-modal__backdrop {
          position: absolute;
          inset: 0;
          border: 0;
          background: rgba(0, 0, 0, 0.58);
          cursor: pointer;
        }
        .partner-modal__panel {
          position: relative;
          z-index: 1;
          width: min(54rem, 100%);
          max-height: min(88vh, 64rem);
          overflow-y: auto;
        }
        .partner-modal__close {
          position: absolute;
          top: 1.4rem;
          right: 1.4rem;
          z-index: 2;
          width: 4rem;
          height: 4rem;
          display: grid;
          place-items: center;
          border: 1px solid var(--stroke-elements);
          border-radius: 50%;
          background: var(--base);
          color: var(--t-bright);
          cursor: pointer;
        }
        .partner-modal__close i {
          font-size: 2rem;
        }
        .partner-modal__close:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        .partner-form-card {
          display: flex;
          flex-direction: column;
          gap: 1.6rem;
          padding: clamp(2rem, 3vw, 3rem);
          border: 1px solid var(--stroke-elements);
          border-radius: var(--_radius-l);
          background: var(--base-tint);
        }
        .partner-form-card__head p {
          margin: 0 0 0.5rem;
          color: var(--accent--light, #0584c7);
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }
        .partner-form-card__head h3 {
          margin: 0;
        }
        .partner-form-card__fields {
          display: grid;
          gap: 1rem;
        }
        .partner-form-field {
          display: grid;
          gap: 0.5rem;
        }
        .partner-form-field span {
          color: var(--t-muted);
          font: normal var(--fw-medium) 1.4rem/1.2 var(--_font-default);
        }
        .partner-form-field input {
          width: 100%;
          height: 4.8rem;
          padding: 0 1.3rem;
          border: 1px solid var(--stroke-elements);
          border-radius: var(--_radius-s);
          background: var(--base);
          color: var(--t-bright);
          font: normal var(--fw-regular) 1.8rem/1.2 var(--_font-default);
        }
        .partner-form-field input:focus {
          border-color: var(--accent--light, #0584c7);
        }
        .partner-form-submit {
          width: 100%;
          justify-content: center;
          cursor: pointer;
        }
        .partner-form-status {
          margin: -0.2rem 0 0;
          padding: 0.9rem 1.2rem;
          border-radius: var(--_radius-s);
          font: normal var(--fw-medium) 1.5rem/1.35 var(--_font-default);
        }
        .partner-form-status--success {
          background: rgba(88, 214, 141, 0.14);
          color: var(--t-bright);
        }
        .partner-form-status--error {
          background: rgba(220, 53, 69, 0.12);
          color: var(--t-bright);
        }
        @media only screen and (max-width: 575px) {
          .partner-modal__panel {
            max-height: 90vh;
          }
          .partner-form-card {
            padding: 5.2rem 1.6rem 1.6rem;
          }
        }
      `}</style>
    </div>
  );
}
