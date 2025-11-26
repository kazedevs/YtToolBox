import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import TranscriptDownloader from "../../components/tools/TranscriptDownloader";

export const metadata: Metadata = {
    title: "YouTube Transcript Downloader - Download Video Transcripts Free | YtToolBox",
    description: "Download YouTube video transcripts for free. Get transcripts in TXT or SRT format with timestamps. Perfect for content creators, students, and researchers.",
    keywords: "youtube transcript downloader, download youtube transcript, youtube subtitles download, youtube captions download, video transcript",
    openGraph: {
        title: "YouTube Transcript Downloader - Free Download in TXT & SRT",
        description: "Download YouTube video transcripts in multiple formats. Get transcripts with timestamps instantly. 100% free with no registration required.",
        url: "https://yttoolbox.com/youtube-transcript-downloader",
        type: "website",
        images: [
            {
                url: "https://yttoolbox.com/og-transcript-downloader.jpg",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "YouTube Transcript Downloader - Free TXT & SRT Downloads",
        description: "Download YouTube video transcripts in TXT or SRT format. Free tool with no registration required.",
        images: ["https://yttoolbox.com/og-transcript-downloader.jpg"],
    },
    alternates: {
        canonical: "https://yttoolbox.com/youtube-transcript-downloader",
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "YouTube Transcript Downloader",
    description: "Download YouTube video transcripts in TXT or SRT format with timestamps. Perfect for content creators, students, and researchers.",
    url: "https://yttoolbox.com/youtube-transcript-downloader",
    applicationCategory: "MultimediaApplication",
    operatingSystem: "Any",
    offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
    },
    featureList: [
        "Download transcripts in TXT format",
        "Download transcripts in SRT format",
        "Timestamps included",
        "Copy to clipboard",
        "No registration required",
        "Free to use",
    ],
};

export default function TranscriptDownloaderPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow pt-20 min-h-[calc(100vh-160px)]">
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
                <TranscriptDownloader />
            </main>
            <Footer />
        </div>
    );
}
