import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "學校活動專業直播服務 | This Film Production",
  description:
    "為香港學校提供專業多機位直播服務 — 陸運會、畢業禮、校慶、音樂會。LiveU 戶外串流、即時慢鏡回放、精華片剪輯。已服務超過 20 個體育總會。",
  keywords: [
    "學校直播",
    "陸運會直播",
    "畢業禮直播",
    "香港學校",
    "活動直播",
    "體育直播",
    "school livestream",
    "Hong Kong",
    "sports day live",
  ],
  openGraph: {
    title: "學校活動專業直播服務 | This Film Production",
    description:
      "為香港學校提供專業多機位直播服務。已服務超過 20 個體育總會。",
    type: "website",
    locale: "zh_HK",
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
