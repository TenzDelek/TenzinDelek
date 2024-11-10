import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";


const appletextsemibold = localFont({
  src:"./fonts/sf-pro-display_semibold.woff2",
  variable: "--font-apple-semibold",
});

const appletextlight = localFont({
  src:"./fonts/SF-Pro-Display-Light.otf",
  variable: "--font-apple-light",
});

const appletextregular = localFont({
  src:"./fonts/SF-Pro-Display-Regular.otf",
  variable: "--font-apple-regular",
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
        className={`${appletextlight.variable} ${appletextregular.variable}  ${appletextsemibold.variable} antialiased`}
      >
        <div className=" text-black font-applefontsemibold bgmain w-screen flex justify-center">
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
