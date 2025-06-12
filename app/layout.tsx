import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "next-themes";

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
  title: "Sriram Boddeda | Software Developer",
  description:
    "Portfolio showcasing projects and experience of Sriram Boddeda.",
  icons: ["/assets/Logo.svg"],
  openGraph: {
    title: "Sriram Boddeda | Software Developer",
    description:
      "Portfolio showcasing projects and experience of Sriram Boddeda.",
    url: "https://sriram-boddeda.github.io",
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
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
