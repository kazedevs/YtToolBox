import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import VideoToBlog from "../../components/tools/VideoToBlog";

export const metadata: Metadata = {
    title: "YouTube Video to Blog Converter - Convert Videos to Blog Posts | YtToolBox",
    description: "Convert YouTube videos into structured blog posts automatically. Extract transcript and format it as a blog article in markdown. Perfect for content creators and bloggers.",
    keywords: "youtube to blog, video to blog, youtube transcript to blog, convert video to article, youtube content repurposing",
    openGraph: {
        title: "YouTube Video to Blog Converter - Auto-Generate Blog Posts",
        description: "Convert YouTube videos into well-structured blog posts. Extract and format transcripts automatically. Free tool for content creators.",
        url: "https://yttoolbox.com/youtube-video-to-blog",
        type: "website",
        images: [
            {
                url: "https://yttoolbox.com/og-video-to-blog.jpg",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "YouTube Video to Blog Converter - Free Tool",
        description: "Convert YouTube videos into blog posts automatically. Free content repurposing tool.",
        images: ["https://yttoolbox.com/og-video-to-blog.jpg"],
    },
    alternates: {
        canonical: "https://yttoolbox.com/youtube-video-to-blog",
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "YouTube Video to Blog Converter",
    description: "Convert YouTube videos into structured blog posts automatically. Extract transcript and format it as a blog article in markdown.",
    url: "https://yttoolbox.com/youtube-video-to-blog",
    applicationCategory: "MultimediaApplication",
    operatingSystem: "Any",
    offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
    },
    featureList: [
        "Convert videos to blog posts",
        "Automatic paragraph structuring",
        "Markdown format output",
        "Copy to clipboard",
        "Download as file",
        "Free to use",
    ],
};

export default function VideoToBlogPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow pt-20 min-h-[calc(100vh-160px)]">
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
                <VideoToBlog />
            </main>
            <Footer />
        </div>
    );
}
