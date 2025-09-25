import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Kokimoto",
  description: "O app japonês",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      
      <body>
      <Header></Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
