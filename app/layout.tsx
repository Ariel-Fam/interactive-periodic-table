import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Interactive Periodic Table",
  description: "Explore the building blocks of matter - an interactive chemistry reference",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-clip">
      <body className="antialiased overflow-x-clip">
        {children}
        <Footer />
      </body>
    </html>
  );
}
