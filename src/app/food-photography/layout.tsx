import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "專業食物影像提升 | 24 小時交付 | This Film Production",
    description:
        "專業食物影像提升服務 — WhatsApp 傳照片，24 小時交付。無需到 Studio、無需等一星期。由 $480 起，效果不遜傳統攝影。免費試做 1 張。",
    keywords: [
        "食物攝影",
        "餐廳照片",
        "菜單攝影",
        "食物影像提升",
        "food photography",
        "restaurant photos",
        "menu photography",
        "Hong Kong",
        "香港",
    ],
    openGraph: {
        title: "專業食物影像提升 | This Film Production",
        description:
            "WhatsApp 傳照片，24 小時交付。專業食物影像提升由 $480 起。免費試做 1 張。",
        type: "website",
        locale: "zh_HK",
    },
};

export default function FoodPhotographyLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <>{children}</>;
}
