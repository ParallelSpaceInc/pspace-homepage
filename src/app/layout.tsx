import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Header from "@/imports/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Parallel Space",
  description: "Parallel Space Homepage",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          <div className="w-full flex flex-col">
            <Header />
            {children}
            <Footer />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
