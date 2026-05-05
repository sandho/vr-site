"use client";

import { FormEvent, useState } from "react";
import RevealText from "@/components/animation/RevealText";

export default function Cta() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
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
    <section id="contact" className="mxd-section padding-pre-grid">
      <div className="mxd-container grid-container">
        <div className="mxd-block">
          <div className="container-fluid p-0">
            <div className="row g-0 align-items-center">
              <div className="col-12 col-xl-5 mxd-grid-item no-margin">
                <div className="mxd-section-title no-margin-desktop">
                  <div className="mxd-section-title__title anim-uni-in-up">
                    <RevealText as="h1" className="reveal-type">
                      Book a Demo.
                    </RevealText>
                  </div>
                  <div className="mxd-section-title__descr anim-uni-in-up">
                    <p>
                      Share your enterprise details and we&apos;ll help map the
                      right XR pilot for training, simulation, digital twins, or
                      spatial web deployment.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-xl-7 mxd-grid-item no-margin">
                <form
                  className="pilot-form-card anim-uni-in-up"
                  action="https://formsubmit.co/enterprise@grahasvr.space"
                  method="POST"
                  onSubmit={handleSubmit}
                >
                  <input type="hidden" name="_subject" value="New pilot inquiry from GRAHAs VR contact page" />
                  <input type="hidden" name="_template" value="table" />
                  <input type="hidden" name="_captcha" value="false" />

                  <div className="pilot-form-card__head">
                    <p className="t-small">Pilot Inquiry</p>
                    <h3>Tell us where XR can help</h3>
                  </div>

                  <div className="pilot-form-card__fields">
                    <label className="pilot-form-field">
                      <span>Full Name</span>
                      <input name="Full Name" type="text" autoComplete="name" required />
                    </label>
                    <label className="pilot-form-field">
                      <span>Company / Organization</span>
                      <input name="Company / Organization" type="text" autoComplete="organization" required />
                    </label>
                    <label className="pilot-form-field">
                      <span>Email Address</span>
                      <input name="Email Address" type="email" autoComplete="email" required />
                    </label>
                    <label className="pilot-form-field">
                      <span>Mobile Number</span>
                      <input name="Mobile Number" type="tel" autoComplete="tel" required />
                    </label>
                  </div>

                  <button
                    className="btn btn-default btn-outline pilot-form-submit"
                    type="submit"
                    disabled={formStatus === "submitting"}
                  >
                    {formStatus === "submitting" ? "Submitting..." : "Submit Inquiry"}
                    <i className="ph-bold ph-arrow-up-right" />
                  </button>

                  {formStatus === "success" && (
                    <p className="pilot-form-status pilot-form-status--success" role="status">
                      Completed. Thanks, we received your pilot inquiry.
                    </p>
                  )}
                  {formStatus === "error" && (
                    <p className="pilot-form-status pilot-form-status--error" role="alert">
                      Failed. Please check your details and try again.
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .pilot-form-card {
          display: flex;
          flex-direction: column;
          gap: 1.6rem;
          padding: clamp(2rem, 4vw, 4rem);
          border: 1px solid var(--stroke-elements);
          border-radius: var(--_radius-l);
          background: var(--base-tint);
        }
        .pilot-form-card__head p {
          margin: 0 0 0.5rem;
          color: var(--accent--light, #0584c7);
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }
        .pilot-form-card__head h3 {
          margin: 0;
        }
        .pilot-form-card__fields {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 1.2rem;
        }
        .pilot-form-field {
          display: grid;
          gap: 0.5rem;
        }
        .pilot-form-field span {
          color: var(--t-muted);
          font: normal var(--fw-medium) 1.4rem/1.2 var(--_font-default);
        }
        .pilot-form-field input {
          width: 100%;
          height: 4.8rem;
          padding: 0 1.3rem;
          border: 1px solid var(--stroke-elements);
          border-radius: var(--_radius-s);
          background: var(--base);
          color: var(--t-bright);
          font: normal var(--fw-regular) 1.8rem/1.2 var(--_font-default);
        }
        .pilot-form-field input:focus {
          border-color: var(--accent--light, #0584c7);
        }
        .pilot-form-submit {
          width: fit-content;
          justify-content: center;
          cursor: pointer;
        }
        .pilot-form-submit:disabled {
          opacity: 0.7;
          cursor: wait;
        }
        .pilot-form-status {
          margin: -0.2rem 0 0;
          padding: 0.9rem 1.2rem;
          border-radius: var(--_radius-s);
          font: normal var(--fw-medium) 1.5rem/1.35 var(--_font-default);
        }
        .pilot-form-status--success {
          background: rgba(88, 214, 141, 0.14);
          color: var(--t-bright);
        }
        .pilot-form-status--error {
          background: rgba(220, 53, 69, 0.12);
          color: var(--t-bright);
        }
        @media only screen and (max-width: 767px) {
          .pilot-form-card__fields {
            grid-template-columns: 1fr;
          }
          .pilot-form-submit {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
