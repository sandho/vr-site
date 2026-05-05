import GrahasHeader from "@/components/homes/grahas-vr/GrahasHeader";
import Footer from "@/components/homes/grahas-vr/Footer";

export default function GrahasVRLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Override accent color to GRAHAs VR brand blue for all themes */}
      <style>{`
        :root,
        [color-scheme="light"],
        [color-scheme="dark"] {
          --accent--light: #0584c7;
          --accent-rgb--light: 5, 132, 199;
          --additional--dark: #0584c7;
          --additional-rgb--dark: 5, 132, 199;
        }
        .mxd-page-content > .mxd-section:first-child:not(.mxd-hero-section) {
          padding-top: clamp(10rem, 12vw, 14rem);
        }
        @media only screen and (max-width: 767px) {
          .mxd-page-content > .mxd-section:first-child:not(.mxd-hero-section) {
            padding-top: 9rem;
          }
        }
      `}</style>
      <GrahasHeader />
      {children}
      <Footer />
    </>
  );
}
