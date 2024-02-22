import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Title from "./components/Title";

const inter = Inter({ subsets: ["latin"] });
export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata = {
  title: "tubyte",
  description:
    "Tubyte is a YouTube Influencer Management System (YIMS) that tracks, manages, and analyzes data related to YouTube influencers.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Title />
        {children}
      </body>
    </html>
  );
}
