"use client";

import { FormEvent, useEffect, useState } from "react";
import { createPortal } from "react-dom";

type InquiryFormModalProps = {
  triggerLabel: string;
  title: string;
  eyebrow: string;
  subject: string;
  successMessage: string;
  className: string;
  showIcon?: boolean;
};

export default function InquiryFormModal({
  triggerLabel,
  title,
  eyebrow,
  subject,
  successMessage,
  className,
  showIcon = true,
}: InquiryFormModalProps) {
  const [formOpen, setFormOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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

  const modal = (
    <div
      className="inquiry-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="inquiry-modal-title"
    >
      <button
        className="inquiry-modal__backdrop"
        type="button"
        aria-label="Close inquiry form"
        onClick={closeForm}
      />
      <div className="inquiry-modal__panel">
        <button
          className="inquiry-modal__close"
          type="button"
          aria-label="Close inquiry form"
          onClick={closeForm}
          disabled={formStatus === "submitting"}
        >
          <i className="ph-bold ph-x" />
        </button>
        <form
          className="inquiry-form-card"
          action="https://formsubmit.co/enterprise@grahasvr.space"
          method="POST"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="_subject" value={subject} />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_captcha" value="false" />

          <div className="inquiry-form-card__head">
            <p className="t-small">{eyebrow}</p>
            <h3 id="inquiry-modal-title">{title}</h3>
          </div>

          <div className="inquiry-form-card__fields">
            <label className="inquiry-form-field">
              <span>Full Name</span>
              <input name="Full Name" type="text" autoComplete="name" required />
            </label>
            <label className="inquiry-form-field">
              <span>Company / Organization</span>
              <input name="Company / Organization" type="text" autoComplete="organization" required />
            </label>
            <label className="inquiry-form-field">
              <span>Email Address</span>
              <input name="Email Address" type="email" autoComplete="email" required />
            </label>
            <label className="inquiry-form-field">
              <span>Mobile Number</span>
              <input name="Mobile Number" type="tel" autoComplete="tel" required />
            </label>
          </div>

          <button className="btn btn-default btn-outline inquiry-form-submit" type="submit">
            {formStatus === "submitting" ? "Submitting..." : "Submit Inquiry"}
            <i className="ph-bold ph-arrow-up-right" />
          </button>

          {formStatus === "success" && (
            <p className="inquiry-form-status inquiry-form-status--success" role="status">
              {successMessage}
            </p>
          )}
          {formStatus === "error" && (
            <p className="inquiry-form-status inquiry-form-status--error" role="alert">
              Failed. Please check your details and try again.
            </p>
          )}
        </form>
      </div>
    </div>
  );

  return (
    <>
      <button className={className} type="button" onClick={openForm}>
        {triggerLabel}
        {showIcon && <i className="ph-bold ph-arrow-up-right" />}
      </button>

      {mounted && formOpen && createPortal(modal, document.body)}

      <style>{`
        .inquiry-modal {
          position: fixed;
          inset: 0;
          z-index: 9998;
          display: grid;
          place-items: center;
          padding: clamp(1.6rem, 4vw, 3.2rem);
          background: rgba(0, 0, 0, 0.58);
        }
        .inquiry-modal__backdrop {
          position: absolute;
          inset: 0;
          border: 0;
          background: transparent;
          cursor: pointer;
        }
        .inquiry-modal__panel {
          position: relative;
          z-index: 1;
          width: min(54rem, 100%);
          max-height: min(88vh, 64rem);
          overflow-y: auto;
        }
        .inquiry-modal__close {
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
        .inquiry-modal__close i {
          font-size: 2rem;
        }
        .inquiry-modal__close:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        .inquiry-form-card {
          display: flex;
          flex-direction: column;
          gap: 1.6rem;
          padding: clamp(2rem, 3vw, 3rem);
          border: 1px solid var(--stroke-elements);
          border-radius: var(--_radius-l);
          background: var(--base-tint);
        }
        .inquiry-form-card__head p {
          margin: 0 0 0.5rem;
          color: var(--accent--light, #0584c7);
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }
        .inquiry-form-card__head h3 {
          margin: 0;
        }
        .inquiry-form-card__fields {
          display: grid;
          gap: 1rem;
        }
        .inquiry-form-field {
          display: grid;
          gap: 0.5rem;
        }
        .inquiry-form-field span {
          color: var(--t-muted);
          font: normal var(--fw-medium) 1.4rem/1.2 var(--_font-default);
        }
        .inquiry-form-field input {
          width: 100%;
          height: 4.8rem;
          padding: 0 1.3rem;
          border: 1px solid var(--stroke-elements);
          border-radius: var(--_radius-s);
          background: var(--base);
          color: var(--t-bright);
          font: normal var(--fw-regular) 1.8rem/1.2 var(--_font-default);
        }
        .inquiry-form-field input:focus {
          border-color: var(--accent--light, #0584c7);
        }
        .inquiry-form-submit {
          width: 100%;
          justify-content: center;
          cursor: pointer;
        }
        .inquiry-form-status {
          margin: -0.2rem 0 0;
          padding: 0.9rem 1.2rem;
          border-radius: var(--_radius-s);
          font: normal var(--fw-medium) 1.5rem/1.35 var(--_font-default);
        }
        .inquiry-form-status--success {
          background: rgba(88, 214, 141, 0.14);
          color: var(--t-bright);
        }
        .inquiry-form-status--error {
          background: rgba(220, 53, 69, 0.12);
          color: var(--t-bright);
        }
        @media only screen and (max-width: 575px) {
          .inquiry-modal {
            place-items: stretch;
            padding: 0;
            background: var(--base-tint);
          }
          .inquiry-modal__backdrop {
            display: none;
          }
          .inquiry-modal__panel {
            width: 100%;
            max-height: none;
            height: 100vh;
            height: 100dvh;
            overflow-y: auto;
            -webkit-overflow-scrolling: touch;
          }
          .inquiry-modal__close {
            position: fixed;
            top: max(1.2rem, env(safe-area-inset-top));
            right: max(1.2rem, env(safe-area-inset-right));
          }
          .inquiry-form-card {
            min-height: 100%;
            border: 0;
            border-radius: 0;
            padding: calc(6.8rem + env(safe-area-inset-top)) 1.6rem calc(2rem + env(safe-area-inset-bottom));
          }
          .inquiry-form-card__head h3 {
            font-size: 3.4rem;
          }
          .inquiry-form-field input {
            height: 5.2rem;
          }
        }
      `}</style>
    </>
  );
}
