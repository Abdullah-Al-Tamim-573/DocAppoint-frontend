import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Shered/Navbar/Navbar";
import Footer from "@/Components/Shered/Footer/Footer";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Home - DocAppoint",
  description: "Doctor Appointment Home Page",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <header>
            <Navbar></Navbar>
        </header>
        <main>

        {children}
        </main>
        <Footer></Footer>
        <Toaster />
        </body>
    </html>
  );
}
