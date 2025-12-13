import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Arora Caterers - Pure Vegetarian Catering",
  description: "Premium pure vegetarian catering services in Nagpur",
};

const navLinks = [
  { name: 'Home', path: '' },
  { name: 'About', path: 'About' },
  { name: 'Services', path: 'Services' },
  { name: 'Menu', path: 'Menu' },
  { name: 'Gallery', path: 'Gallery' },
];

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar navLinks={navLinks} />
        {children}
        <Footer navLinks={navLinks} />
      </body>
    </html>
  );
}
