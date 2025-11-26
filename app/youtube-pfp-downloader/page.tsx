import type { Metadata } from 'next';
import PfpDownloader from '../../components/tools/PfpDownloader';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export const metadata: Metadata = {
    title: "YouTube Profile Picture Downloader | Free PFP Download Tool",
    description: "Download high-quality YouTube profile pictures in multiple sizes. Free tool supporting @username, /channel/, /c/, and /user/ URL formats.",
    keywords: "youtube profile picture downloader, youtube pfp download, youtube channel avatar, youtube profile image, free youtube tools",
    authors: [{ name: "YT Toolbox" }],
    openGraph: {
        title: "YouTube Profile Picture Downloader | Free PFP Download Tool",
        description: "Download high-quality YouTube profile pictures in multiple sizes. Free tool supporting all YouTube URL formats.",
        url: "https://yttoolbox.com/youtube-pfp-downloader",
        type: "website",
        images: ["https://yttoolbox.com/assets/pfp-downloader-og.jpg"],
        siteName: "YT Toolbox",
    },
    twitter: {
        card: "summary_large_image",
        title: "YouTube Profile Picture Downloader | Free PFP Download Tool",
        description: "Download high-quality YouTube profile pictures in multiple sizes. Free tool supporting all YouTube URL formats.",
        images: ["https://yttoolbox.com/assets/pfp-downloader-twitter.jpg"],
    },
    alternates: {
        canonical: "https://yttoolbox.com/youtube-pfp-downloader",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
        },
    },
};

const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "YouTube Profile Picture Downloader",
    "description": "Download high-quality profile pictures from any YouTube channel in multiple sizes. Free, fast, and easy to use.",
    "url": "https://yttoolbox.com/youtube-pfp-downloader",
    "applicationCategory": "MultimediaApplication",
    "operatingSystem": "Web",
    "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
    },
    "featureList": [
        "Download YouTube profile pictures",
        "Multiple image sizes",
        "Support for all YouTube URL formats",
        "High-quality downloads",
        "No registration required",
    ],
    "screenshot": "https://yttoolbox.com/assets/pfp-downloader-screenshot.jpg",
    "author": {
        "@type": "Organization",
        "name": "YT Toolbox",
        "url": "https://yttoolbox.com",
    },
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "What URL formats are supported?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "We support @username, /channel/UC..., /c/channelname, and /user/username formats.",
            },
        },
        {
            "@type": "Question",
            "name": "What sizes are available?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Three sizes: Default (88×88), Medium (240×240), and High (800×800) pixels.",
            },
        },
        {
            "@type": "Question",
            "name": "Is this tool free to use?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, completely free with no hidden charges or download limits.",
            },
        },
    ],
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
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(structuredData),
                    }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(faqSchema),
                    }}
                />
                <PfpDownloader />
            </main>
            <Footer />
        </div>
    );
}
