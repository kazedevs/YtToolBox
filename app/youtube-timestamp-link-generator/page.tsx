import type { Metadata } from 'next';
import TimestampLinkGenerator from '../../components/tools/TimestampLinkGenerator';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export const metadata: Metadata = {
    title: "YouTube Timestamp Link Generator - Create Shareable Links | YtToolBox",
    description: "Create YouTube links that start at specific timestamps. Generate shareable links for YouTube videos at any exact time - hours, minutes, and seconds. 100% free tool.",
    keywords: "youtube timestamp generator, youtube timestamp link, youtube time link, share youtube at specific time, youtube timestamp url, youtube start time link",
    openGraph: {
        title: "YouTube Timestamp Link Generator - Create Shareable Links",
        description: "Create YouTube links that start at specific timestamps. Generate shareable links for YouTube videos at any exact time.",
        url: "https://yttoolbox.com/youtube-timestamp-link-generator",
        type: "website",
        images: ["https://yttoolbox.com/og-timestamp-generator.jpg"],
    },
    twitter: {
        card: "summary_large_image",
        title: "YouTube Timestamp Link Generator - Create Shareable Links",
        description: "Create YouTube links that start at specific timestamps. 100% free tool.",
        images: ["https://yttoolbox.com/og-timestamp-generator.jpg"],
    },
    alternates: {
        canonical: "https://yttoolbox.com/youtube-timestamp-link-generator",
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "YouTube Timestamp Link Generator",
    "description": "Free tool to create YouTube links that start at specific timestamps",
    "sameAs": ["https://yttoolbox.com/youtube-timestamp-link-generator"],
    "applicationCategory": "MultimediaApplication",
    "operatingSystem": "Web",
    "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
    },
    "featureList": [
        "Create timestamped YouTube links",
        "Support for hours, minutes, seconds",
        "Shareable links",
        "No registration required"
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
                <TimestampLinkGenerator />
            </main>
            <Footer />
        </div>
    );
}
