import { Header } from "@/components/Header";
import "@/styles/globals.css";
import { Almarai, Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const almarai = Almarai({
  subsets: ["arabic"],
  weight: ["300", "400", "700"],
  display: "swap",
  variable: "--font-almarai",
});

export const metadata = {
  title: "JobFindly",
  description:
    "Discover your dream job with Job Findly - Your trusted source for finding the perfect career opportunity. Explore a wide range of job listings, connect with top employers, and take the next step in your professional journey. Start your job search today!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${almarai.variable} font-almarai`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
