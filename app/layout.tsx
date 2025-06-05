import type { Metadata } from "next";
import { Oswald, Roboto } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";
import { ThemeProvider } from "next-themes";
import "../scss/globals.scss";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-oswald",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-roboto",
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
    <html lang="en" className={`${oswald.variable} ${roboto.variable}`} suppressHydrationWarning>
      <body className="layout">
        <ThemeProvider attribute="data-theme" defaultTheme="light" enableSystem>
          <div className="side">
            <Navbar />
          </div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
