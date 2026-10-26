import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://iassadki.com"),
  title: "Ilias Assadki — Développeur Python & Full-Stack freelance à Paris",
  description:
    "Ilias Assadki, développeur Python et full-stack basé à Paris : APIs FastAPI et Django, agents IA, applications web React et Next.js. Disponible en freelance et ouvert aux CDI.",
  openGraph: {
    title: "Ilias Assadki — Développeur Python & Full-Stack",
    description:
      "APIs Python, agents IA et applications web complètes. Disponible en freelance et ouvert aux CDI.",
    url: "https://iassadki.com",
    siteName: "Ilias Assadki",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
