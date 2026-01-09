import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Script from "next/script";
import portfolioData from "@/data/portfolioData.json";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import type { PortfolioData } from "@/types/portfolioTypes";
import { env } from "@/env";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL(env.baseUrl),
  title: "Sriram Boddeda | Software Developer",
  description:
    "Portfolio showcasing projects and experience of Sriram Boddeda.",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/assets/Logo.svg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Sriram Boddeda | Software Developer",
    description:
      "Portfolio showcasing projects and experience of Sriram Boddeda.",
    url: env.baseUrl,
    siteName: "Sriram Boddeda Portfolio",
    images: [
      {
        url: "/screenshot.png",
        width: 1200,
        height: 630,
        alt: "Sriram Boddeda Portfolio Screenshot",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sriram Boddeda | Software Developer",
    description:
      "Portfolio showcasing projects and experience of Sriram Boddeda.",
    images: ["/screenshot.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { about, contact } = portfolioData as PortfolioData;

  const gaId = env.gaId;

  const personStructuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: about?.name,
    jobTitle: about?.title,
    url: `${env.baseUrl}/`,
    email: contact?.email ? `mailto:${contact.email}` : undefined,
    sameAs: [about?.socialLinks?.github, about?.socialLinks?.linkedin].filter(
      Boolean
    ),
    knowsAbout: Array.isArray(about?.skills) ? about.skills : undefined,
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system">
          {children}
        </ThemeProvider>

        {gaId ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script
              id="google-analytics"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${gaId}', { page_path: window.location.pathname });`,
              }}
            />
            <GoogleAnalytics gaId={gaId} />
          </>
        ) : null}

        <Script
          id="structured-data-person"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personStructuredData),
          }}
        />
      </body>
    </html>
  );
}
