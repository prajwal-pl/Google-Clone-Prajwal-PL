import { Inter } from "next/font/google";
import "../globals.css";
import Footer from "@/components/Footer";
import SearchHeader from "@/components/SearchHeader";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Google Clone Next Js 14",
  description: "Google Clone created by next app",
};

export default function SearchLayout({ children }) {
  return (
    <div>
        <SearchHeader />
        {children}
    </div>
  );
}
