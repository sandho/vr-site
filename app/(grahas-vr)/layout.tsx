import GrahasHeader from "@/components/homes/grahas-vr/GrahasHeader";
import Footer from "@/components/homes/grahas-vr/Footer";

export default function GrahasVRLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <GrahasHeader />
      {children}
      <Footer />
    </>
  );
}
