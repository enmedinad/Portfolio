import type { Metadata } from "next";

//Font
import { Urbanist } from "next/font/google";
import "./globals.css";

//Swiper
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

//Componentes
import Navbar from "@/components/navbar"
import Header from "@/components/header"

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EnDev Landing Page",
  description: "Landing page made by EnDev",
}; 


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <Navbar />
        <Header />
        {children}
      </body>
    </html>
  );
}
