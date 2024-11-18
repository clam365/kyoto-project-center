import localFont from "next/font/local";
import "./globals.css";
import Header from "../components/header/index";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Kyoto Project Center",
  description: "Collaborating on real-world projects in Kyoto to address urban, cultural, and sustainability challenges.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header/>
        <main style={{ paddingTop: "60px" }}>
            {children}
        </main>
      </body>
    </html>
  );
}
