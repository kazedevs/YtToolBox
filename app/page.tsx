import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import { MdDownload, MdLink, MdCode } from "react-icons/md";

export const metadata: Metadata = {
  title:
    "YtToolBox - Free YouTube Tools | Thumbnail Downloader, Timestamp Generator & More",
  description:
    "Complete suite of free YouTube tools including thumbnail downloader, timestamp link generator, embed code generator, and more. Download YouTube thumbnails in HD quality, create shareable timestamps, and generate embed codes - all 100% free with no registration required.",
  keywords:
    "youtube tools, free youtube tools, youtube thumbnail downloader, youtube timestamp generator, youtube embed code generator, youtube utilities, youtube downloader",
  openGraph: {
    title: "YtToolBox - Free YouTube Tools Suite",
    description:
      "Complete suite of free YouTube tools including thumbnail downloader, timestamp link generator, embed code generator, and more. All tools are 100% free with no registration required.",
    url: "https://yttoolbox.com/",
    type: "website",
    images: [
      {
        url: "https://yttoolbox.com/og-home.jpg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "YtToolBox - Free YouTube Tools Suite",
    description:
      "Complete suite of free YouTube tools. All tools are 100% free with no registration required.",
    images: ["https://yttoolbox.com/og-home.jpg"],
  },
  alternates: {
    canonical: "https://yttoolbox.com/",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "YtToolBox",
  alternateName: "YouTube ToolBox",
  url: "https://yttoolbox.com/",
  description:
    "Complete suite of free YouTube tools including thumbnail downloader, timestamp link generator, embed code generator, and more.",
  publisher: {
    "@type": "Organization",
    name: "YtToolBox",
    url: "https://yttoolbox.com/",
  },
  potentialAction: {
    "@type": "SearchAction",
    target: "https://yttoolbox.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
  mainEntity: {
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "YouTube Thumbnail Downloader",
        url: "https://yttoolbox.com/youtube-thumbnail-downloader",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "YouTube Timestamp Link Generator",
        url: "https://yttoolbox.com/youtube-timestamp-link-generator",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "YouTube Embed Code Generator",
        url: "https://yttoolbox.com/youtube-embed-code-generator",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "YouTube Profile Picture Downloader",
        url: "https://yttoolbox.com/youtube-pfp-downloader",
      },
    ],
  },
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-20 min-h-[calc(100vh-160px)]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Tools Section */}
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 py-12"
          id="tools-section"
        >
          <h1 className="mb-8 text-center font-bold text-black text-[1.75rem] sm:text-[2.5rem] md:text-5xl">
            Free YouTube Tools - Thumbnail Downloader, Timestamp Generator &
            Embed Creator
          </h1>
          <h2 className="text-base sm:text-xl text-[#606060] text-center mb-8 max-w-4xl mx-auto">
            Download YouTube thumbnails in HD quality, generate timestamp links
            for specific moments, and create responsive embed codes. 100% free
            online tools with no registration required.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
            {/* YouTube Thumbnail Downloader Card */}
            <Link href="/youtube-thumbnail-downloader" className="no-underline">
              <div className="rounded-lg border border-gray-200 transition-all duration-200 ease-in-out hover:-translate-y-0.5 hover:shadow-lg cursor-pointer h-full flex flex-col bg-[#fafafa]">
                <div className="p-6 bg-purple-light flex items-center justify-center rounded-t-lg border-b border-[#e1bee7]">
                  <MdDownload className="text-5xl text-purple-main" />
                </div>
                <div className="flex-grow p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold mb-2 text-[#333333]">
                      YouTube Thumbnail Downloader
                    </h3>
                    <p className="text-[#666666] mb-6 flex-grow">
                      Download high-quality thumbnails from any YouTube video.
                      Get thumbnails in multiple resolutions including HD
                      quality. Perfect for creating thumbnails, social media
                      content, or archiving video branding.
                    </p>
                  </div>
                  <button className="w-full py-3 px-6 text-lg border-2 border-purple-main text-purple-main rounded hover:border-purple-dark hover:bg-purple-main/5 transition-colors mt-auto">
                    Download Thumbnail
                  </button>
                </div>
              </div>
            </Link>

            {/* YouTube Timestamp Link Generator Card */}
            <Link
              href="/youtube-timestamp-link-generator"
              className="no-underline"
            >
              <div className="rounded-lg border border-gray-200 transition-all duration-200 ease-in-out hover:-translate-y-0.5 hover:shadow-lg cursor-pointer h-full flex flex-col bg-[#fafafa]">
                <div className="p-6 bg-purple-light flex items-center justify-center rounded-t-lg border-b border-[#e1bee7]">
                  <MdLink className="text-5xl text-purple-main" />
                </div>
                <div className="flex-grow p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold mb-2 text-[#333333]">
                      YouTube Timestamp Link Generator
                    </h3>
                    <p className="text-[#666666] mb-6 flex-grow">
                      Create direct links to specific moments in YouTube videos.
                      Share specific parts of a video with others, or use them
                      for social media content, blog posts, or video analysis.
                    </p>
                  </div>
                  <button className="w-full py-3 px-6 text-lg border-2 border-purple-main text-purple-main rounded hover:border-purple-dark hover:bg-purple-main/5 transition-colors mt-auto">
                    Generate Timestamp Link
                  </button>
                </div>
              </div>
            </Link>

            {/* YouTube Embed Code Generator Card */}
            <Link href="/youtube-embed-code-generator" className="no-underline">
              <div className="rounded-lg border border-gray-200 transition-all duration-200 ease-in-out hover:-translate-y-0.5 hover:shadow-lg cursor-pointer h-full flex flex-col bg-[#fafafa]">
                <div className="p-6 bg-purple-light flex items-center justify-center rounded-t-lg border-b border-[#e1bee7]">
                  <MdCode className="text-5xl text-purple-main" />
                </div>
                <div className="flex-grow p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold mb-2 text-[#333333]">
                      YouTube Embed Code Generator
                    </h3>
                    <p className="text-[#666666] mb-6 flex-grow">
                      Create responsive embed codes for YouTube videos.
                      Customize video size, controls, and behavior to fit your
                      website or blog. Perfect for content creators, marketers,
                      and developers.
                    </p>
                  </div>
                  <button className="w-full py-3 px-6 text-lg border-2 border-purple-main text-purple-main rounded hover:border-purple-dark hover:bg-purple-main/5 transition-colors mt-auto">
                    Generate Embed Code
                  </button>
                </div>
              </div>
            </Link>

            {/* YouTube Profile Picture Downloader Card */}
            <Link href="/youtube-pfp-downloader" className="no-underline">
              <div className="rounded-lg border border-gray-200 transition-all duration-200 ease-in-out hover:-translate-y-0.5 hover:shadow-lg cursor-pointer h-full flex flex-col bg-[#fafafa]">
                <div className="p-6 bg-purple-light flex items-center justify-center rounded-t-lg border-b border-[#e1bee7]">
                  <MdDownload className="text-5xl text-purple-main" />
                </div>
                <div className="flex-grow p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold mb-2 text-[#333333]">
                      YouTube Profile Picture Downloader
                    </h3>
                    <p className="text-[#666666] mb-6 flex-grow">
                      Download high-quality profile pictures from any YouTube
                      channel. Get channel avatars in multiple resolutions
                      including HD quality. Perfect for creating thumbnails,
                      social media content, or archiving channel branding.
                    </p>
                  </div>
                  <button className="w-full py-3 px-6 text-lg border-2 border-purple-main text-purple-main rounded hover:border-purple-dark hover:bg-purple-main/5 transition-colors mt-auto">
                    Download PFP
                  </button>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* How It Works Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-8 text-black">
              How It Works
            </h3>

            <div className="flex flex-col md:flex-row gap-6 md:gap-8 justify-center items-center md:items-start">
              <div className="flex-1 max-w-full md:max-w-[280px] text-center mb-4 md:mb-0">
                <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center bg-gradient-to-br from-youtube-red to-youtube-dark rounded-full">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2L2 7L12 12L22 7L12 2Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2 17L12 22L22 17"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2 12L12 17L22 12"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h6 className="mb-2 font-semibold text-black">Choose Tool</h6>
                <p className="text-sm text-[#606060]">
                  Select the YouTube tool you need
                </p>
              </div>

              <div className="flex-1 max-w-full md:max-w-[280px] text-center mb-4 md:mb-0">
                <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center bg-gradient-to-br from-[#FF6B35] to-[#FF4500] rounded-full">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7 10L12 15L17 10"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 15V3"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h6 className="mb-2 font-semibold text-black">Enter Details</h6>
                <p className="text-sm text-[#606060]">Paste your YouTube URL</p>
              </div>

              <div className="flex-1 max-w-[280px] md:max-w-[280px] text-center mx-auto">
                <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center bg-gradient-to-br from-[#4CAF50] to-[#45a049] rounded-full">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7 10L12 15L17 10"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 15V3"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h6 className="mb-2 font-semibold text-black">Get Results</h6>
                <p className="text-sm text-[#606060]">
                  Download or generate instantly
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-8 text-black text-center">
              YouTube Tools FAQ - Complete Guide to Free YouTube Utilities
            </h2>

            <div className="flex flex-col gap-6">
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-black">
                  Are these YouTube tools really free to use?
                </h3>
                <p className="text-sm text-[#606060] mb-4">
                  Yes! All our YouTube tools are completely free to use with no
                  hidden costs. We don't require registration, there's no
                  watermark on downloads, and you can use them unlimited times
                  without any fees.
                </p>
              </div>

              <div>
                <h6 className="text-lg font-semibold text-black mb-2">
                  What thumbnail resolutions are available for download?
                </h6>
                <p className="text-sm text-[#606060] mb-4">
                  Our thumbnail downloader provides multiple resolutions
                  including HD (1280x720), SD (640x480), and HQ (480x360). We
                  always provide the highest available resolution for each
                  video, and you can choose the quality that best suits your
                  needs.
                </p>
              </div>

              <div>
                <h6 className="text-lg font-semibold text-black mb-2">
                  Do I need to install any software or browser extensions?
                </h6>
                <p className="text-sm text-[#606060] mb-4">
                  No installation is required! All our tools work directly in
                  your web browser on any device - desktop, tablet, or mobile.
                  Simply visit our website, paste your YouTube URL, and get
                  instant results without downloading anything.
                </p>
              </div>

              <div>
                <h6 className="text-lg font-semibold text-black mb-2">
                  Is there a limit on how many times I can use these tools?
                </h6>
                <p className="text-sm text-[#606060] mb-4">
                  There are absolutely no usage limits! You can use our YouTube
                  tools as many times as you need, whether you're downloading
                  one thumbnail or generating hundreds of timestamp links. We're
                  here to help you create better content efficiently.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
