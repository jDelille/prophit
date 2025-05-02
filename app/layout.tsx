import type { Metadata } from "next";
import '../scss/globals.scss';
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], 
  variable: "--font-poppins", 
});

export const metadata: Metadata = {
  title: "Prophit",
  description: "A sports prop bet analyzer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body >
        {children}
      </body>
    </html>
  );
}
