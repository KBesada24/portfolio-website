import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Kirollos Besada - Full Stack Developer",
  description: "Full Stack Developer specializing in React, Next.js, and Node.js. Building scalable web applications with modern technologies.",
  keywords: "Full Stack Developer, React, Next.js, Node.js, TypeScript, Web Development, Portfolio",
  authors: [{ name: "Kirollos Besada" }],
  creator: "Kirollos Besada",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kiroh-portfolio.vercel.app",
    title: "Kirollos Besada - Full Stack Developer",
    description: "Full Stack Developer specializing in React, Next.js, and Node.js. Building scalable web applications with modern technologies.",
    siteName: "Kirollos Besada Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kirollos Besada - Full Stack Developer",
    description: "Full Stack Developer specializing in React, Next.js, and Node.js. Building scalable web applications with modern technologies.",
  },
  viewport: "width=device-width, initial-scale=1",
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
