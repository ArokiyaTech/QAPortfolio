import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Arokiya Raj A | QA Portfolio",
  description:
    "QA Intern portfolio featuring manual testing, automation testing, API validation, and SQL verification projects.",
  keywords: [
    "QA Intern",
    "Manual Testing",
    "Selenium",
    "API Testing",
    "SQL Validation",
    "Portfolio",
  ],
  metadataBase: new URL("https://example.github.io"),
  openGraph: {
    title: "Arokiya Raj A | QA Portfolio",
    description:
      "QA Intern portfolio featuring manual testing, automation testing, API validation, and SQL verification projects.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="site-shell">
          <Navbar />
          <main className="main-content">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
