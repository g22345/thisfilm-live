import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | This Film Production",
    default: "This Film Production | 專業商業攝影及直播服務",
  },
  description:
    "This Film Production 提供專業商業攝影、活動直播、企業拍攝服務。服務超過 20 個機構及學校。",
  openGraph: {
    type: "website",
    locale: "zh_HK",
    siteName: "This Film Production",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant-HK">
      <body>{children}</body>
    </html>
  );
}
