import type { Metadata } from 'next';
import ThumbnailDownloader from '../../components/tools/ThumbnailDownloader';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export const metadata: Metadata = {
    title: "Free YouTube Thumbnail Downloader - Download HD Thumbnails | YtToolBox",
    description: "Download YouTube video thumbnails in HD quality instantly. Get thumbnails in 1280x720, 640x480, 480x360, and 320x180 resolutions. 100% free, no registration required.",
    keywords: "youtube thumbnail downloader, download youtube thumbnails, youtube thumbnail download, youtube video thumbnail, hd youtube thumbnail, free youtube thumbnail downloader",
    openGraph: {
        title: "Free YouTube Thumbnail Downloader - Download HD Thumbnails",
        description: "Download YouTube video thumbnails in HD quality instantly. Get thumbnails in multiple resolutions. 100% free, no registration required.",
        url: "https://yttoolbox.com/youtube-thumbnail-downloader",
        type: "website",
        images: ["https://yttoolbox.com/og-thumbnail-downloader.jpg"],
    },
    twitter: {
        card: "summary_large_image",
        title: "Free YouTube Thumbnail Downloader - Download HD Thumbnails",
        description: "Download YouTube video thumbnails in HD quality instantly. 100% free, no registration required.",
        images: ["https://yttoolbox.com/og-thumbnail-downloader.jpg"],
    },
    alternates: {
        canonical: "https://yttoolbox.com/youtube-thumbnail-downloader",
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "YouTube Thumbnail Downloader",
    "description": "Free tool to download YouTube video thumbnails in HD quality",
    "sameAs": ["https://yttoolbox.com/youtube-thumbnail-downloader"],
    "applicationCategory": "MultimediaApplication",
    "operatingSystem": "Web",
    "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
    },
    "featureList": [
        "Download HD YouTube thumbnails",
        "Multiple resolution support",
        "No registration required",
        "Instant download"
    ]
};

export default function Page() {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                minHeight: "100vh",
            }}
        >
            <Navbar />
            <main
                style={{
                    flexGrow: 1,
                    paddingTop: "80px",
                    minHeight: "calc(100vh - 160px)",
                }}
            >
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
                <ThumbnailDownloader />
            </main>
            <Footer />
        </div>
    );
}
