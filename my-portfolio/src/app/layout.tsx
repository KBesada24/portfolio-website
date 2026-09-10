import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Kirollos Besada - AI & Full Stack Developer",
  description: "AI and Full Stack Developer building production agent systems, financial data workflows, and scalable web applications.",
  keywords: "AI Developer, Full Stack Developer, Model Context Protocol, Python, Java, React, Next.js, TypeScript, Portfolio",
  authors: [{ name: "Kirollos Besada" }],
  creator: "Kirollos Besada",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://besadakirollos.me",
    title: "Kirollos Besada - AI & Full Stack Developer",
    description: "AI and Full Stack Developer building production agent systems, financial data workflows, and scalable web applications.",
    siteName: "Kirollos Besada Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kirollos Besada - AI & Full Stack Developer",
    description: "AI and Full Stack Developer building production agent systems, financial data workflows, and scalable web applications.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={true}
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
