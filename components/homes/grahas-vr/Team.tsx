import Image from "next/image";
import RevealText from "@/components/animation/RevealText";

const team = [
  {
    name: "Srinivasan Yagnanarayanan",
    role: "Founder & CEO",
    bio: "Stanford Seed Spark Alumnus with 17+ years of industry experience and XR perception engineering.",
    image: "/img/founding-team/6W9A0421_Srini.JPG",
  },
  {
    name: "Sriram Kesavan",
    role: "Co-Founder & COO",
    bio: "10+ years of experience in the Automotive sector with leading global brands.",
    image: "/img/founding-team/Sriram.jpg",
  },
  {
    name: "Dr. Rajaram Venkataraman",
    role: "Adviser",
    bio: "Industry Veteran & Convener of the Technology Panel at FICCI Tamil Nadu.",
    image: "/img/founding-team/Dr. Rajaram Venkataraman.jpeg",
  },
  {
    name: "Passionate XR Team",
    role: "Developers & 3D Artists",
    bio: "Passionate team of developers with a collective experience of over 20+ years in the XR Domain.",
  },
];

export default function Team() {
  return (
    <div id="team" className="mxd-section padding-pre-title">
      <div className="mxd-container grid-container">
        {/* Section Title */}
        <div className="mxd-block">
          <div className="mxd-section-title">
            <div className="container-fluid p-0">
              <div className="row g-0">
                <div className="col-12 col-xl-6 mxd-grid-item no-margin">
                  <div className="mxd-section-title__hrtitle anim-uni-in-up">
                    <RevealText as="h2" className="reveal-type">
                      The Innovators Behind the Reality.
                    </RevealText>
                  </div>
                  <div className="mxd-section-title__descr anim-uni-in-up">
                    <p>
                      We are a team of XR developers, 3D artists, and industry
                      veterans passionate about solving complex enterprise
                      challenges through immersive technology.
                    </p>
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
                <div key={idx} className="col-12 col-sm-6 col-xl-3">
                  <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                    {/* Square Photo */}
                    <div style={{ width: "100%", position: "relative", paddingBottom: "100%", overflow: "hidden", borderRadius: "var(--radius-m, 16px)" }}>
                      {member.image ? (
                        <Image
                          alt={member.name}
                          src={member.image}
                          fill
                          priority
                          sizes="(max-width: 576px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          style={{ objectFit: "cover", objectPosition: "center top", transition: "none" }}
                        />
                      ) : (
                        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", padding: "1.5rem", textAlign: "center" }}>
                          <span style={{ fontSize: "6rem", alignContent: "left", fontWeight: 700, lineHeight: 1.2 }}>{member.name}</span>
                        </div>
                      )}
                    </div>
                    {/* Info */}
                    <div style={{ paddingLeft: "0.25rem" }}>
                      {/* <p className="t-small" style={{ margin: 0, opacity: 0.5 }}>{member.number}</p> */}
                      <h5 style={{ margin: "0.25rem 0 0.25rem" }}>{member.name}</h5>
                      <p className="t-small" style={{ margin: 0, opacity: 0.6 }}>{member.role}</p>
                      <p className="t-small" style={{ margin: "0.8rem 0 0", opacity: 0.72 }}>{member.bio}</p>
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
