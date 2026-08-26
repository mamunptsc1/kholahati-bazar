import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kholahati-bazar.vercel.app"),

  title: {
    default: "খোলাহাটি বাজার | Home Delivery",
    template: "%s | খোলাহাটি বাজার",
  },

  description:
    "খোলাহাটি বাজার থেকে বাজার-সদাই, মুদি পণ্য ও প্রয়োজনীয় পণ্য সহজে অর্ডার করুন। খোলাহাটি ও আশেপাশের এলাকায় Home Delivery সেবা।",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  openGraph: {
    title: "খোলাহাটি বাজার | Home Delivery",
    description:
      "খোলাহাটি বাজার থেকে বাজার-সদাই ও প্রয়োজনীয় পণ্য Home Delivery।",
    url: "https://kholahati-bazar.vercel.app",
    siteName: "খোলাহাটি বাজার",
    locale: "bn_BD",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
