import type { Metadata } from "next";
import Link from "next/link";
import {
  FaCode,
  FaCopy,
  FaShieldAlt,
  FaQuestionCircle,
  FaLightbulb,
  FaGlobe,
  FaMobile,
  FaClock,
  FaDesktop,
  FaTabletAlt,
  FaMobileAlt,
  FaPlay,
  FaPause,
  FaExpand,
  FaCompress,
  FaCog,
  FaCheckSquare,
  FaSquare,
} from "react-icons/fa";

export const metadata: Metadata = {
  title: "YouTube Embed Code Generator Guide - Complete Tutorial & Tips (2024)",
  description:
    "Complete guide to generating YouTube embed codes. Learn step-by-step how to use our free YouTube embed code generator, best practices for responsive video embedding, and expert tips for developers and content creators.",
  keywords: [
    "youtube embed code generator guide",
    "how to embed youtube videos",
    "youtube video embedding tutorial",
    "free youtube embed code generator",
    "youtube embed best practices",
    "responsive youtube embed guide",
    "youtube video player customization",
    "youtube embed code tutorial",
  ],
  openGraph: {
    title: "YouTube Embed Code Generator Guide - Complete Tutorial & Tips",
    description:
      "Complete guide to generating YouTube embed codes. Learn step-by-step instructions, best practices, and expert tips for responsive video embedding.",
    url: "https://yttoolbox.com/youtube-embed-code-generator-guide",
    type: "article",
    images: [
      {
        url: "https://yttoolbox.com/og-embed-guide.jpg",
        width: 1200,
        height: 630,
        alt: "YouTube Embed Code Generator Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "YouTube Embed Code Generator Guide - Complete Tutorial",
    description:
      "Complete guide to generating YouTube embed codes. Step-by-step instructions and expert tips for responsive video embedding.",
    images: ["https://yttoolbox.com/og-embed-guide.jpg"],
  },
  alternates: {
    canonical: "https://yttoolbox.com/youtube-embed-code-generator-guide",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "YouTube Embed Code Generator Guide - Complete Tutorial & Tips",
  description:
    "Complete guide to generating YouTube embed codes. Learn step-by-step how to use our free YouTube embed code generator, best practices for responsive video embedding, and expert tips for developers and content creators.",
  author: {
    "@type": "Organization",
    name: "YtToolBox",
    url: "https://yttoolbox.com",
  },
  publisher: {
    "@type": "Organization",
    name: "YtToolBox",
    url: "https://yttoolbox.com",
  },
  datePublished: "2024-01-01",
  dateModified: "2024-01-01",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://yttoolbox.com/youtube-embed-code-generator-guide",
  },
  image: "https://yttoolbox.com/og-embed-guide.jpg",
  articleSection: "YouTube Tools",
  wordCount: 1500,
};

export default function EmbedCodeGeneratorGuide() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            YouTube Embed Code Generator Guide
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Complete tutorial on generating YouTube embed codes. Learn
            step-by-step how to use our free YouTube embed code generator, best
            practices for responsive video embedding, and expert tips for
            developers and content creators.
          </p>
        </div>

        {/* Table of Contents */}
        <div className="bg-blue-50 rounded-lg p-6 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Table of Contents
          </h2>
          <ul className="space-y-2 text-gray-700">
            <li>
              <Link href="#what-is" className="text-blue-600 hover:underline">
                What is a YouTube Embed Code Generator?
              </Link>
            </li>
            <li>
              <Link
                href="#when-to-use"
                className="text-blue-600 hover:underline"
              >
                When to Use YouTube Embed Codes
              </Link>
            </li>
            <li>
              <Link
                href="#step-by-step"
                className="text-blue-600 hover:underline"
              >
                Step-by-Step Tutorial
              </Link>
            </li>
            <li>
              <Link
                href="#embed-options"
                className="text-blue-600 hover:underline"
              >
                Understanding Embed Options
              </Link>
            </li>
            <li>
              <Link
                href="#best-practices"
                className="text-blue-600 hover:underline"
              >
                Best Practices for Video Embedding
              </Link>
            </li>
            <li>
              <Link
                href="#responsive-design"
                className="text-blue-600 hover:underline"
              >
                Responsive Design & Mobile Optimization
              </Link>
            </li>
            <li>
              <Link
                href="#advanced-techniques"
                className="text-blue-600 hover:underline"
              >
                Advanced Embedding Techniques
              </Link>
            </li>
            <li>
              <Link
                href="#troubleshooting"
                className="text-blue-600 hover:underline"
              >
                Troubleshooting Common Issues
              </Link>
            </li>
            <li>
              <Link href="#faq" className="text-blue-600 hover:underline">
                Frequently Asked Questions
              </Link>
            </li>
          </ul>
        </div>

        {/* What is Section */}
        <section id="what-is" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <FaCode className="mr-3 text-blue-600" />
            What is a YouTube Embed Code Generator?
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              A YouTube embed code generator is a specialized tool that creates
              HTML code for embedding YouTube videos into websites, blogs, and
              web applications. Instead of manually writing complex iframe code,
              these tools provide an intuitive interface for customizing video
              player behavior, appearance, and functionality, then generate the
              proper HTML code that can be copied and pasted directly into your
              web pages.
            </p>
            <p>
              YouTube embed codes use HTML iframe elements to display YouTube
              videos on external websites while maintaining all the
              functionality of the native YouTube player. Our YouTube embed code
              generator simplifies this process by offering visual controls for
              customization options like player size, autoplay behavior,
              controls visibility, and advanced features, then producing clean,
              standards-compliant HTML code that works across all modern
              browsers and devices.
            </p>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4">
              <p className="font-semibold">Key Insight:</p>
              <p>
                Modern YouTube embed codes use the iframe API with parameters
                that control player behavior. These parameters include
                everything from basic dimensions and autoplay settings to
                advanced features like modest branding, privacy enhancements,
                and custom player controls.
              </p>
            </div>
          </div>
        </section>

        {/* When to Use Section */}
        <section id="when-to-use" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <FaClock className="mr-3 text-green-600" />
            When to Use YouTube Embed Codes
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3 flex items-center">
                <FaGlobe className="mr-2 text-purple-600" />
                Content Publishing
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Blog posts and articles</li>
                <li>• News and media websites</li>
                <li>• Educational platforms</li>
                <li>• Corporate websites</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3 flex items-center">
                <FaDesktop className="mr-2 text-blue-600" />
                Web Development
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Portfolio websites</li>
                <li>• Landing pages</li>
                <li>• Web applications</li>
                <li>• E-commerce sites</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3 flex items-center">
                <FaMobile className="mr-2 text-orange-600" />
                Mobile Apps
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Hybrid mobile applications</li>
                <li>• Progressive web apps</li>
                <li>• Mobile-optimized websites</li>
                <li>• In-app web views</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3 flex items-center">
                <FaCog className="mr-2 text-green-600" />
                Custom Solutions
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Video galleries</li>
                <li>• Custom video players</li>
                <li>• Video playlists</li>
                <li>• Interactive presentations</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Step by Step Tutorial */}
        <section id="step-by-step" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <FaCopy className="mr-3 text-purple-600" />
            Step-by-Step Tutorial
          </h2>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">
                  Find Your YouTube Video
                </h3>
                <p className="text-gray-700">
                  Navigate to YouTube and find the video you want to embed. Any
                  public YouTube video can be embedded on your website using the
                  embed code.
                </p>
                <div className="bg-gray-100 p-3 rounded mt-2 space-y-1">
                  <p className="font-semibold text-sm">
                    Supported URL Formats:
                  </p>
                  <p className="font-mono text-sm">
                    • https://www.youtube.com/watch?v=VIDEO_ID
                  </p>
                  <p className="font-mono text-sm">
                    • https://youtu.be/VIDEO_ID
                  </p>
                  <p className="font-mono text-sm">
                    • https://www.youtube.com/shorts/VIDEO_ID
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Copy the Video URL</h3>
                <p className="text-gray-700">
                  Copy the video URL from your browser's address bar or use the
                  Share button to copy the link. Ensure you have the complete
                  URL including the video ID.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">
                  Paste URL in Our Generator
                </h3>
                <p className="text-gray-700">
                  Visit our YouTube Embed Code Generator page and paste the
                  video URL into the input field. Our tool automatically
                  validates the URL and extracts the video information.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">
                4
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">
                  Customize Embed Settings
                </h3>
                <p className="text-gray-700">
                  Choose your preferred embed options:
                </p>
                <div className="bg-blue-50 p-4 rounded mt-2">
                  <p className="font-semibold mb-2">
                    Available Customizations:
                  </p>
                  <ul className="space-y-1 text-sm">
                    <li>
                      • <strong>Dimensions:</strong> Fixed size, responsive, or
                      custom dimensions
                    </li>
                    <li>
                      • <strong>Player Controls:</strong> Show/hide controls,
                      progress bar, volume
                    </li>
                    <li>
                      • <strong>Autoplay:</strong> Enable/disable automatic
                      playback
                    </li>
                    <li>
                      • <strong>Advanced Options:</strong> Modest branding,
                      privacy mode, start time
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">
                5
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">
                  Generate & Copy Your Code
                </h3>
                <p className="text-gray-700">
                  Click the generate button to create your embed code. The tool
                  will instantly produce clean HTML code that you can copy with
                  one click and paste directly into your website's HTML.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Embed Options Section */}
        <section id="embed-options" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <FaCog className="mr-3 text-orange-600" />
            Understanding Embed Options
          </h2>
          <div className="space-y-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3">Basic Embed Parameters</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold">Width & Height:</p>
                  <p className="text-gray-700">
                    Set player dimensions in pixels or percentage. Responsive
                    options automatically adjust to screen size.
                  </p>
                </div>
                <div>
                  <p className="font-semibold">Autoplay:</p>
                  <p className="text-gray-700">
                    Controls whether video starts automatically. Note: Most
                    browsers block autoplay with sound.
                  </p>
                </div>
                <div>
                  <p className="font-semibold">Controls:</p>
                  <p className="text-gray-700">
                    Show/hide player controls like play button, volume, and
                    fullscreen options.
                  </p>
                </div>
                <div>
                  <p className="font-semibold">Loop:</p>
                  <p className="text-gray-700">
                    Automatically restart video when it ends. Works best with
                    playlist parameter.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3">
                Advanced Embed Parameters
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold">Modest Branding:</p>
                  <p className="text-gray-700">
                    Removes YouTube logo from player controls. Creates cleaner,
                    branded experience.
                  </p>
                </div>
                <div>
                  <p className="font-semibold">Privacy Mode:</p>
                  <p className="text-gray-700">
                    Enhanced privacy that doesn't track viewer information until
                    playback starts.
                  </p>
                </div>
                <div>
                  <p className="font-semibold">Start Time:</p>
                  <p className="text-gray-700">
                    Begin video at specific time (in seconds). Perfect for
                    highlighting key moments.
                  </p>
                </div>
                <div>
                  <p className="font-semibold">End Time:</p>
                  <p className="text-gray-700">
                    Stop video at specific time. Great for creating video clips
                    and segments.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3">
                Player Behavior Options
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <FaPlay className="text-purple-600" />
                  <div>
                    <p className="font-semibold">Autohide Controls</p>
                    <p className="text-gray-700">
                      Controls automatically hide when video plays and reappear
                      on hover.
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <FaExpand className="text-purple-600" />
                  <div>
                    <p className="font-semibold">Allow Fullscreen</p>
                    <p className="text-gray-700">
                      Enable or disable fullscreen viewing capability for
                      embedded videos.
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <FaCog className="text-purple-600" />
                  <div>
                    <p className="font-semibold">Show Video Info</p>
                    <p className="text-gray-700">
                      Display video title and uploader information in the
                      player.
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <FaCheckSquare className="text-purple-600" />
                  <div>
                    <p className="font-semibold">Related Videos</p>
                    <p className="text-gray-700">
                      Show or hide related videos when video ends. Affects user
                      engagement.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Best Practices */}
        <section id="best-practices" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <FaLightbulb className="mr-3 text-yellow-500" />
            Best Practices for Video Embedding
          </h2>
          <div className="space-y-4">
            <div className="bg-green-50 border-l-4 border-green-400 p-4">
              <h3 className="font-bold text-green-800 mb-2">
                ✓ Always Use Responsive Design
              </h3>
              <p className="text-green-700">
                Ensure your embedded videos adapt to different screen sizes. Use
                percentage-based widths or CSS media queries for optimal mobile
                experience.
              </p>
            </div>
            <div className="bg-green-50 border-l-4 border-green-400 p-4">
              <h3 className="font-bold text-green-800 mb-2">
                ✓ Respect User Experience with Autoplay
              </h3>
              <p className="text-green-700">
                Avoid autoplay with sound. If you must use autoplay, ensure it's
                muted and provides clear user controls for engagement.
              </p>
            </div>
            <div className="bg-green-50 border-l-4 border-green-400 p-4">
              <h3 className="font-bold text-green-800 mb-2">
                ✓ Optimize for Performance
              </h3>
              <p className="text-green-700">
                Use lazy loading for videos and implement proper fallbacks.
                Consider the impact of multiple videos on page load times.
              </p>
            </div>
            <div className="bg-green-50 border-l-4 border-green-400 p-4">
              <h3 className="font-bold text-green-800 mb-2">
                ✓ Provide Context and Attribution
              </h3>
              <p className="text-green-700">
                Always include video title, creator information, and links to
                the original YouTube video when embedding content.
              </p>
            </div>
            <div className="bg-green-50 border-l-4 border-green-400 p-4">
              <h3 className="font-bold text-green-800 mb-2">
                ✓ Test Across Devices and Browsers
              </h3>
              <p className="text-green-700">
                Verify your embedded videos work properly on desktop, tablet,
                and mobile devices across different browsers and screen sizes.
              </p>
            </div>
          </div>
        </section>

        {/* Responsive Design Section */}
        <section id="responsive-design" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <FaMobile className="mr-3 text-purple-600" />
            Responsive Design & Mobile Optimization
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3 flex items-center">
                <FaDesktop className="mr-2 text-purple-600" />
                Desktop Optimization
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Use fixed dimensions for consistent layouts</li>
                <li>• Implement hover states for better UX</li>
                <li>• Consider sidebar and content width</li>
                <li>• Optimize for larger screen resolutions</li>
              </ul>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3 flex items-center">
                <FaTabletAlt className="mr-2 text-purple-600" />
                Tablet Optimization
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Use fluid layouts with percentage widths</li>
                <li>• Touch-friendly player controls</li>
                <li>• Consider orientation changes</li>
                <li>• Balance video size with content</li>
              </ul>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3 flex items-center">
                <FaMobileAlt className="mr-2 text-purple-600" />
                Mobile Optimization
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Full-width video containers</li>
                <li>• Vertical video support for Shorts</li>
                <li>• Optimized touch targets</li>
                <li>• Minimal loading times</li>
              </ul>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3 flex items-center">
                <FaCog className="mr-2 text-purple-600" />
                Technical Implementation
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• CSS media queries for breakpoints</li>
                <li>• Fluid grid layouts</li>
                <li>• Flexible image and video sizing</li>
                <li>• Progressive enhancement approach</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Advanced Techniques */}
        <section id="advanced-techniques" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <FaCode className="mr-3 text-purple-600" />
            Advanced Embedding Techniques
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3 flex items-center">
                <FaPlay className="mr-2 text-purple-600" />
                JavaScript API Integration
              </h3>
              <p className="text-gray-700 mb-3">
                Enhanced control with YouTube IFrame API:
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Custom player controls and events</li>
                <li>• Video state monitoring and analytics</li>
                <li>• Dynamic playlist management</li>
                <li>• Custom error handling and fallbacks</li>
              </ul>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3 flex items-center">
                <FaPause className="mr-2 text-purple-600" />
                Performance Optimization
              </h3>
              <p className="text-gray-700 mb-3">
                Improve loading and playback performance:
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Lazy loading implementation</li>
                <li>• Video placeholder strategies</li>
                <li>• Bandwidth detection and adaptation</li>
                <li>• Preload and poster image optimization</li>
              </ul>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3 flex items-center">
                <FaExpand className="mr-2 text-purple-600" />
                Custom Player Styling
              </h3>
              <p className="text-gray-700 mb-3">
                Branded and customized video players:
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Custom overlay designs</li>
                <li>• Branded player controls</li>
                <li>• Animated thumbnails and previews</li>
                <li>• Interactive video experiences</li>
              </ul>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3 flex items-center">
                <FaCompress className="mr-2 text-purple-600" />
                Multi-Video Management
              </h3>
              <p className="text-gray-700 mb-3">
                Handle multiple embedded videos:
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Video galleries and carousels</li>
                <li>• Dynamic loading and unloading</li>
                <li>• Playlist synchronization</li>
                <li>• Cross-video event coordination</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Troubleshooting */}
        <section id="troubleshooting" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <FaQuestionCircle className="mr-3 text-orange-600" />
            Troubleshooting Common Issues
          </h2>
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2">Video Not Displaying</h3>
              <p className="text-gray-700 mb-2">
                If your embedded video doesn't appear:
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Check if the video URL is correct and public</li>
                <li>• Verify the embed code syntax is valid</li>
                <li>• Ensure your browser supports iframe elements</li>
                <li>• Check for ad blockers or security restrictions</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2">Responsive Layout Issues</h3>
              <p className="text-gray-700 mb-2">
                If videos don't adapt to screen size:
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Use percentage-based widths instead of fixed pixels</li>
                <li>• Add CSS max-width for large screens</li>
                <li>• Test with different viewport sizes</li>
                <li>• Check for conflicting CSS rules</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2">Autoplay Not Working</h3>
              <p className="text-gray-700 mb-2">
                If videos don't autoplay as expected:
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Most browsers block autoplay with sound</li>
                <li>• Add muted parameter for silent autoplay</li>
                <li>• Check browser autoplay policies</li>
                <li>• Consider user interaction requirements</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2">Performance Issues</h3>
              <p className="text-gray-700 mb-2">
                If embedded videos slow down your site:
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Implement lazy loading for videos</li>
                <li>• Use placeholder images initially</li>
                <li>• Limit simultaneous video loads</li>
                <li>• Optimize page loading sequence</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <FaQuestionCircle className="mr-3 text-blue-600" />
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="border-b pb-4">
              <h3 className="font-bold text-lg mb-2">
                Is it free to embed YouTube videos?
              </h3>
              <p className="text-gray-700">
                Yes, embedding YouTube videos is completely free. YouTube
                provides embed codes for all public videos, and there are no
                charges for displaying them on your website.
              </p>
            </div>
            <div className="border-b pb-4">
              <h3 className="font-bold text-lg mb-2">
                Can I embed any YouTube video?
              </h3>
              <p className="text-gray-700">
                You can embed any public YouTube video. Private videos, unlisted
                videos, or videos with embedding restrictions set by the creator
                cannot be embedded.
              </p>
            </div>
            <div className="border-b pb-4">
              <h3 className="font-bold text-lg mb-2">
                Do I need permission to embed YouTube videos?
              </h3>
              <p className="text-gray-700">
                For public videos, YouTube's Terms of Service allow embedding
                without explicit permission. However, always respect copyright
                and give proper attribution to content creators.
              </p>
            </div>
            <div className="border-b pb-4">
              <h3 className="font-bold text-lg mb-2">
                Can I monetize pages with embedded YouTube videos?
              </h3>
              <p className="text-gray-700">
                Yes, you can monetize your website pages that contain embedded
                YouTube videos. However, you cannot monetize the video content
                itself or claim ownership of the embedded content.
              </p>
            </div>
            <div className="border-b pb-4">
              <h3 className="font-bold text-lg mb-2">
                What's the difference between iframe and old embed codes?
              </h3>
              <p className="text-gray-700">
                Iframe is the modern, secure standard for embedding YouTube
                videos. Old object/embed codes are deprecated and may not work
                on modern browsers or mobile devices.
              </p>
            </div>
            <div className="border-b pb-4">
              <h3 className="font-bold text-lg mb-2">
                Can I customize the appearance of embedded YouTube players?
              </h3>
              <p className="text-gray-700">
                YouTube offers limited customization options through parameters
                like modest branding and theme colors. For extensive
                customization, you'd need to use the YouTube IFrame API with
                custom overlays.
              </p>
            </div>
            <div className="border-b pb-4">
              <h3 className="font-bold text-lg mb-2">
                How do I make embedded videos responsive?
              </h3>
              <p className="text-gray-700">
                Use CSS techniques like percentage widths, max-width
                constraints, and aspect ratio containers. Our generator provides
                responsive options that automatically handle mobile
                optimization.
              </p>
            </div>
            <div className="border-b pb-4">
              <h3 className="font-bold text-lg mb-2">
                Can I embed YouTube Shorts?
              </h3>
              <p className="text-gray-700">
                Yes, YouTube Shorts can be embedded just like regular YouTube
                videos. They'll display in the standard player format, though
                optimized for vertical content viewing.
              </p>
            </div>
            <div className="border-b pb-4">
              <h3 className="font-bold text-lg mb-2">
                Do embedded videos count toward YouTube views?
              </h3>
              <p className="text-gray-700">
                Yes, views from embedded videos count toward the video's total
                view count on YouTube, as long as the playback meets YouTube's
                view counting criteria.
              </p>
            </div>
          </div>
        </section>

        {/* Tool Link */}
        <div className="text-center py-12">
          <Link
            href="/youtube-embed-code-generator"
            className="inline-block text-blue-600 text-2xl font-bold hover:text-blue-700 transition-colors border-b-2 border-blue-600 hover:border-blue-700"
          >
            Try YouTube Embed Code Generator →
          </Link>
        </div>
      </div>
    </div>
  );
}
