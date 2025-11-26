import type { Metadata } from 'next';
import EmbedCodeGenerator from '../../components/tools/EmbedCodeGenerator';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export const metadata: Metadata = {
    title: "YouTube Embed Code Generator - Customizable Embed Codes | YtToolBox",
    description: "Generate customizable YouTube embed codes with options for autoplay, controls, modest branding, and more. Create responsive embed codes for your website or blog. 100% free.",
    keywords: "youtube embed code generator, youtube embed generator, youtube iframe generator, youtube embed code, youtube video embed, responsive youtube embed, custom youtube embed",
    openGraph: {
        title: "YouTube Embed Code Generator - Customizable Embed Codes",
        description: "Generate customizable YouTube embed codes with options for autoplay, controls, and more. Create responsive embed codes for your website.",
        url: "https://yttoolbox.com/youtube-embed-code-generator",
        type: "website",
        images: ["https://yttoolbox.com/og-embed-generator.jpg"],
    },
    twitter: {
        card: "summary_large_image",
        title: "YouTube Embed Code Generator - Customizable Embed Codes",
        description: "Generate customizable YouTube embed codes with options for autoplay, controls, and more.",
        images: ["https://yttoolbox.com/og-embed-generator.jpg"],
    },
    alternates: {
        canonical: "https://yttoolbox.com/youtube-embed-code-generator",
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "YouTube Embed Code Generator",
    "description": "Generate customizable YouTube embed codes for websites",
    "sameAs": ["https://yttoolbox.com/youtube-embed-code-generator"],
    "applicationCategory": "MultimediaApplication",
    "operatingSystem": "Web",
    "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
    },
    "featureList": [
        "Customizable YouTube embed codes",
        "Responsive embed options",
        "Autoplay settings",
        "Control customization",
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
                <EmbedCodeGenerator />
            </main>
            <Footer />
        </div>
    );
}
