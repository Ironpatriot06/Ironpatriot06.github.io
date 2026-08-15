import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ratish Kapoor — Software Engineer | AI, Systems & Developer Tools",
  description:
    "Personal software engineering portfolio for Ratish Kapoor, focused on backend systems, AI applications, full-stack products, observability, APIs, databases, and developer tools.",
  openGraph: {
    title: "Ratish Kapoor — Software Engineer | AI, Systems & Developer Tools",
    description:
      "Backend systems, AI/LLM applications, observability, APIs, databases, full-stack products, testing, and automation.",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Ratish Kapoor — Software Engineer | AI, Systems & Developer Tools",
    description:
      "A systems-focused personal portfolio centered on Apollo, an application observability and debugging platform."
  },
  icons: {
    icon: "/favicon.svg"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
