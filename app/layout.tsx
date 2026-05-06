import "../public/css/styles.css";
import ClientLayout from "@/components/layout/ClientLayout";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.grahasvr.com"),
  title: {
    default:
      "GRAHAs VR | Custom Industrial XR, Enterprise Training & WebAR Solutions",
    template: "%s",
  },
  description:
    "Award-winning Extended Reality (XR) company in Chennai. We build custom VR training simulators, Digital Twins, and WebAR solutions for Manufacturing, Pharma, and Enterprises. Creators of Zeal X and GRAHAs Spaces.",
  keywords: [
    "Custom XR development Chennai",
    "Enterprise VR training solutions India",
    "Industrial AR/VR solutions",
    "WebAR for manufacturing",
    "VR for electrical safety compliance",
    "Total Productive Maintenance using VR",
    "STEP Framework for VR learning",
  ],
  openGraph: {
    title:
      "GRAHAs VR | Custom Industrial XR, Enterprise Training & WebAR Solutions",
    description:
      "Award-winning Extended Reality (XR) company in Chennai building custom VR training simulators, Digital Twins, and WebAR solutions for Manufacturing, Pharma, and Enterprises.",
    url: "https://www.grahasvr.com",
    siteName: "GRAHAs VR",
    images: [
      {
        url: "/img/grahas-logo.png",
        width: 1200,
        height: 630,
        alt: "GRAHAs VR industrial XR solutions logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "GRAHAs VR | Custom Industrial XR, Enterprise Training & WebAR Solutions",
    description:
      "Custom VR training simulators, Digital Twins, and WebAR solutions for Manufacturing, Pharma, and Enterprises.",
    images: ["/img/grahas-logo.png"],
  },
  icons: {
    icon: "/img/favicon/favicon.ico",
    apple: "/img/favicon/apple-touch-icon.png",
  },
  alternates: {
    canonical: "https://www.grahasvr.com",
  },
};
const setColorSchemeScript = `
(function() {
  try {
    var scheme = localStorage.getItem('color-scheme') || 'light';
    document.documentElement.setAttribute('color-scheme', scheme);
  } catch(e) {}
})();
`;
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en" className="no-touch">
      <head>
        <script dangerouslySetInnerHTML={{ __html: setColorSchemeScript }} />
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-FBMGBF22C6"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-FBMGBF22C6');
          `}
        </Script>
      </head>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
