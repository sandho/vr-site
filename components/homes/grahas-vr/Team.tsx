import Image from "next/image";
import RevealText from "@/components/animation/RevealText";

const team = [
  {
    name: "Srinivasan Y",
    role: "Founder & CEO",
    number: "01",
    image: "/img/founding-team/6W9A0421_Srini.JPG",
  },
  {
    name: "Sriram Kesavan",
    role: "Co-Founder & COO",
    number: "02",
    image: "/img/founding-team/Sriram.jpg",
  },
  {
    name: "Dr. Rajaram V",
    role: "Adviser",
    number: "03",
    image: "/img/founding-team/Dr. Rajaram Venkataraman.jpeg",
  },
];

export default function Team() {
  return (
    <div className="mxd-section padding-pre-title">
      <div className="mxd-container grid-container">
        {/* Section Title */}
        <div className="mxd-block">
          <div className="mxd-section-title">
            <div className="container-fluid p-0">
              <div className="row g-0">
                <div className="col-12 col-xl-6 mxd-grid-item no-margin">
                  <div className="mxd-section-title__hrtitle anim-uni-in-up">
                    <RevealText as="h2" className="reveal-type">
                      The Innovators.
                    </RevealText>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Cards */}
        <div className="mxd-block">
          <div className="container-fluid p-0">
            <div className="row g-4">
              {team.map((member, idx) => (
                <div key={idx} className="col-12 col-sm-6 col-xl-4">
                  <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                    {/* Square Photo */}
                    <div style={{ width: "100%", position: "relative", paddingBottom: "100%", overflow: "hidden", borderRadius: "var(--radius-m, 16px)" }}>
                      <Image
                        alt={member.name}
                        src={member.image}
                        fill
                        priority
                        sizes="(max-width: 576px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        style={{ objectFit: "cover", objectPosition: "center top", transition: "none" }}
                      />
                    </div>
                    {/* Info */}
                    <div style={{ paddingLeft: "0.25rem" }}>
                      {/* <p className="t-small" style={{ margin: 0, opacity: 0.5 }}>{member.number}</p> */}
                      <h5 style={{ margin: "0.25rem 0 0.25rem" }}>{member.name}</h5>
                      <p className="t-small" style={{ margin: 0, opacity: 0.6 }}>{member.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
