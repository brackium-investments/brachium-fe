import type { Metadata } from "next";
import { DM_Sans, Inter, Nunito } from "next/font/google";
import "./globals.css";
import { NextFontWithVariable } from "next/dist/compiled/@next/font";
import ReduxProvider from "@/components/ReduxProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Brackium Investments",
  description: "Manage your financial assets with Brackium",
};
const nunito: NextFontWithVariable = Nunito({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito",
});

const dmSans: NextFontWithVariable = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${nunito.variable} ${dmSans.variable}`}>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
