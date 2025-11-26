import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import BannerDownloader from "../../components/tools/BannerDownloader";

export const metadata: Metadata = {
    title:
        "YouTube Banner Downloader - Download Channel Banners in HD | YtToolBox",
    description:
        "Download high-quality YouTube channel banners for free. Get banners in multiple resolutions including mobile, tablet, desktop, and TV sizes. No registration required.",
    keywords:
        "youtube banner downloader, channel banner download, youtube channel art downloader, download youtube banner, youtube header image download",
    openGraph: {
        title: "YouTube Banner Downloader - Free HD Channel Banner Downloads",
        description:
            "Download YouTube channel banners in multiple resolutions. Get mobile, tablet, desktop, and TV-optimized banners instantly. 100% free with no watermarks.",
        url: "https://yttoolbox.com/youtube-banner-downloader",
        type: "website",
        images: [
            {
                url: "https://yttoolbox.com/og-banner-downloader.jpg",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "YouTube Banner Downloader - Free HD Downloads",
        description:
            "Download YouTube channel banners in multiple sizes. Free tool with no registration required.",
        images: ["https://yttoolbox.com/og-banner-downloader.jpg"],
    },
    alternates: {
        canonical: "https://yttoolbox.com/youtube-banner-downloader",
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "YouTube Banner Downloader",
    description:
        "Download high-quality YouTube channel banners in multiple resolutions including mobile, tablet, desktop, and TV sizes.",
    url: "https://yttoolbox.com/youtube-banner-downloader",
    applicationCategory: "MultimediaApplication",
    operatingSystem: "Any",
    offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
    },
    featureList: [
        "Download channel banners in multiple sizes",
        "Mobile, tablet, desktop, and TV resolutions",
        "High-quality downloads",
        "No registration required",
        "Free to use",
        "No watermarks",
    ],
};

export default function BannerDownloaderPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow pt-20 min-h-[calc(100vh-160px)]">
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
                <BannerDownloader />
            </main>
            <Footer />
        </div>
    );
}