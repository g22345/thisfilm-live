import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "畢業禮直播服務 | 學校活動專業直播 | THISFILM LIVE PRODUCTION",
    description:
        "為香港學校提供專業畢業禮多機位直播服務 — 畢業禮、陸運會、校慶、音樂會。LiveU 獨立網絡、即時精彩回放、精華片段剪輯。已服務超過 20 個體育總會及學校。2025 畢業禮檔期現正接受預約。",
    keywords: [
        "畢業禮直播",
        "學校直播",
        "畢業典禮直播",
        "香港學校",
        "陸運會直播",
        "活動直播",
        "graduation livestream",
        "school livestream",
        "Hong Kong",
    ],
    openGraph: {
        title: "學校畢業禮直播 | 專業多機位製作 | THISFILM LIVE PRODUCTION",
        description:
            "專業多機位直播，讓每位家長即時見證子女重要時刻。已服務 20+ 體育總會及學校，2025 畢業禮檔期快將額滿。",
        type: "website",
        locale: "zh_HK",
        siteName: "THISFILM LIVE PRODUCTION",
        url: "https://biz.thisfilmproduction.com/school-livestream",
    },
};

export default function SchoolLivestreamLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <>{children}</>;
}
