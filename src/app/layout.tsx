import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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
  title: "Tenzin Delek",
  description: "Portfolio",
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
        <div className=" text-black bgmain w-screen flex justify-center">
          <div className=" mt-16 flex min-h-screen w-[90vw] flex-col justify-between xs:w-[500px]">
          {children}
          </div>
        </div>
        <div
      className="fixed top-[-10px] z-40 h-12 w-screen bg-neutral-100 opacity-90 blur"
      aria-hidden="true"
    >
    </div>
    <div
      className="fixed bottom-[-10px] z-40 h-12 w-screen bg-neutral-100 opacity-90 blur dark:bottom-[-20px]"
      aria-hidden="true"
    >
    </div>
      </body>
    </html>
  );
}
