import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "School Graduation Livestream | Professional Multi-Camera | THISFILM LIVE PRODUCTION",
    description:
        "Professional multi-camera livestream services for Hong Kong schools — graduations, sports days, concerts, and ceremonies. LiveU independent network, instant replay, highlight reels. Trusted by 20+ sports federations and schools. 2025 graduation slots now open.",
    keywords: [
        "graduation livestream",
        "school livestream",
        "graduation ceremony livestream",
        "Hong Kong school",
        "sports day livestream",
        "event livestream",
        "畢業禮直播",
        "學校直播",
    ],
    openGraph: {
        title: "School Graduation Livestream | THISFILM LIVE PRODUCTION",
        description:
            "Professional multi-camera livestream for Hong Kong schools. 2025 graduation slots now open.",
        type: "website",
        locale: "en_HK",
    },
};

export default function EnSchoolLivestreamLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <>{children}</>;
}
