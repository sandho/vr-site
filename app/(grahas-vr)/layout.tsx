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
        .breadcrumbs__nav,
        .inner-headline__breadcrumbs,
        .mxd-breadcrumbs {
          display: none !important;
        }
      `}</style>
      <GrahasHeader />
      {children}
      <Footer />
    </>
  );
}
