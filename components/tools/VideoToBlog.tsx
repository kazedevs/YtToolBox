'use client';
import { useState } from "react";
import { MdDownload, MdLink, MdContentPaste, MdAutoFixHigh, MdArticle } from "react-icons/md";
import MoreToolsSection from "../MoreToolsSection";

interface TranscriptItem {
    text: string;
    offset: number;
    duration: number;
    timestamp: string;
}

interface TranscriptData {
    transcript: TranscriptItem[];
    plainText: string;
    totalDuration: number;
}

const VideoToBlog = () => {
    const [url, setUrl] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [blogContent, setBlogContent] = useState("");
    const [videoTitle, setVideoTitle] = useState("");

    const extractVideoId = (url: string) => {
        const patterns = [
            /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/,
            /youtube\.com\/embed\/([^&\n?#]+)/,
            /youtube\.com\/v\/([^&\n?#]+)/,
        ];

        for (const pattern of patterns) {
            const match = url.match(pattern);
            if (match && match[1]) {
                return match[1];
            }
        }
        return null;
    };

    const convertToBlog = (transcriptData: TranscriptData, title: string) => {
        const paragraphs = [];
        let currentParagraph = "";
        const words = transcriptData.plainText.split(' ');

        // Group into paragraphs of approximately 100-150 words
        for (let i = 0; i < words.length; i++) {
            currentParagraph += words[i] + ' ';

            if ((i + 1) % 120 === 0 || i === words.length - 1) {
                paragraphs.push(currentParagraph.trim());
                currentParagraph = "";
            }
        }

        // Create blog structure
        let blog = `# ${title}\n\n`;
        blog += `*This blog post was generated from a YouTube video transcript.*\n\n`;
        blog += `---\n\n`;

        paragraphs.forEach((para, index) => {
            if (index === 0) {
                blog += `## Introduction\n\n${para}\n\n`;
            } else if (index === paragraphs.length - 1) {
                blog += `## Conclusion\n\n${para}\n\n`;
            } else {
                blog += `${para}\n\n`;
            }
        });

        return blog;
    };

    const handleGenerate = async () => {
        if (!url.trim()) {
            setError("Please enter a YouTube video URL");
            return;
        }

        setLoading(true);
        setError("");
        setBlogContent("");

        try {
            const videoId = extractVideoId(url);
            if (!videoId) {
                setError("Invalid YouTube video URL. Please enter a valid video URL.");
                setLoading(false);
                return;
            }

            // Fetch transcript
            const transcriptResponse = await fetch(`/api/youtube-transcript?videoId=${encodeURIComponent(videoId)}`);
            const transcriptData = await transcriptResponse.json();

            if (!transcriptResponse.ok || !transcriptData.success) {
                setError(transcriptData.error || "Failed to fetch transcript");
                setLoading(false);
                return;
            }

            // Fetch video info for title
            const videoResponse = await fetch(`/api/youtube?videoId=${encodeURIComponent(videoId)}`);
            const videoData = await videoResponse.json();

            const title = videoData.success ? videoData.data.title : "YouTube Video";
            setVideoTitle(title);

            // Convert to blog format
            const blog = convertToBlog(transcriptData.data, title);
            setBlogContent(blog);

        } catch (err) {
            console.error("Error:", err);
            setError("Failed to generate blog. Please check the URL and try again.");
        } finally {
            setLoading(false);
        }
    };

    const handleDownload = () => {
        if (!blogContent) return;

        const blob = new Blob([blogContent], { type: 'text/markdown' });
        const downloadUrl = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = downloadUrl;
        a.download = `${videoTitle.replace(/[^a-z0-9]/gi, '-').toLowerCase()}-blog.md`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(downloadUrl);
    };

    const handleCopy = () => {
        if (!blogContent) return;
        navigator.clipboard.writeText(blogContent);
    };

    return (
        <>
            {/* Hero Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-12 flex justify-center">
                <div className="text-center max-w-4xl">
                    <h1 className="text-[1.75rem] sm:text-4xl md:text-5xl font-bold mb-4 leading-tight text-black">
                        YouTube Video to Blog Converter
                    </h1>
                    <h2 className="text-[#606060] text-base sm:text-lg font-normal">
                        Convert any YouTube video into a structured blog post
                    </h2>
                </div>
            </div>

            {/* Video to Blog Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-12 flex justify-center">
                <div className="max-w-4xl w-full">
                    <div className="p-8 sm:p-10 rounded-2xl bg-white shadow-[0_8px_32px_rgba(0,0,0,0.08)] border border-gray-100">
                        <h3 className="mb-2 font-bold text-center text-black text-2xl sm:text-3xl">
                            YouTube to Blog Converter
                        </h3>
                        <p className="mb-8 text-center text-[#606060] font-normal text-lg">
                            Enter a video URL to convert it to a blog post
                        </p>

                        <div className="flex flex-col gap-6">
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                                    <MdLink className="text-youtube-red text-2xl" />
                                </div>
                                <input
                                    type="text"
                                    className={`w-full pl-14 pr-4 py-4 text-lg bg-white border-2 rounded-xl transition-colors ${error
                                        ? "border-youtube-red"
                                        : "border-gray-200 hover:border-youtube-red focus:border-youtube-red"
                                        } focus:outline-none`}
                                    placeholder="https://youtube.com/watch?v=..."
                                    value={url}
                                    onChange={(e) => {
                                        setUrl(e.target.value);
                                        setError("");
                                    }}
                                />
                            </div>

                            {error && (
                                <div className="text-center font-medium bg-red-50 p-3 rounded-lg text-[#CC0000]">
                                    {error}
                                </div>
                            )}

                            {blogContent && (
                                <div className="space-y-4">
                                    <div className="max-h-96 overflow-y-auto rounded-xl border-2 border-gray-200 p-6 bg-gray-50">
                                        <div className="prose prose-sm max-w-none">
                                            <pre className="whitespace-pre-wrap font-sans text-sm text-gray-700">
                                                {blogContent}
                                            </pre>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-3">
                                        <button
                                            onClick={handleDownload}
                                            className="py-3 px-4 font-semibold rounded-xl text-sm bg-purple-main text-white hover:bg-purple-dark transition-colors flex items-center justify-center gap-2"
                                        >
                                            <MdDownload className="text-xl" />
                                            Download Markdown
                                        </button>
                                        <button
                                            onClick={handleCopy}
                                            className="py-3 px-4 font-semibold rounded-xl text-sm bg-purple-main text-white hover:bg-purple-dark transition-colors flex items-center justify-center gap-2"
                                        >
                                            <MdArticle className="text-xl" />
                                            Copy Blog
                                        </button>
                                    </div>
                                </div>
                            )}

                            {!blogContent && (
                                <button
                                    onClick={handleGenerate}
                                    disabled={loading}
                                    className="w-full py-4 font-semibold rounded-xl text-lg bg-youtube-red text-white shadow-[0_4px_12px_rgba(255,0,0,0.3)] hover:bg-youtube-dark transition-colors disabled:bg-gray-300 disabled:text-gray-500 disabled:shadow-none flex items-center justify-center gap-2"
                                >
                                    <MdArticle className="text-2xl" />
                                    {loading ? "Generating..." : "Generate Blog Post"}
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* How It Works Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-12">
                <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-black text-center">
                    How It Works
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    <div className="h-full rounded-2xl bg-white border border-gray-200">
                        <div className="p-8 text-center h-full flex flex-col">
                            <div className="flex justify-center mb-4">
                                <MdContentPaste className="text-5xl text-youtube-red" />
                            </div>
                            <h4 className="text-lg font-bold mb-4 text-black">
                                Paste URL
                            </h4>
                            <p className="flex-grow text-sm text-[#606060]">
                                Copy and paste any YouTube video URL into our tool
                            </p>
                        </div>
                    </div>

                    <div className="h-full rounded-2xl bg-white border border-gray-200">
                        <div className="p-8 text-center h-full flex flex-col">
                            <div className="flex justify-center mb-4">
                                <MdAutoFixHigh className="text-5xl text-youtube-red" />
                            </div>
                            <h4 className="text-lg font-bold mb-4 text-black">
                                Process
                            </h4>
                            <p className="flex-grow text-sm text-[#606060]">
                                Our tool extracts and structures the content into a blog format
                            </p>
                        </div>
                    </div>

                    <div className="h-full rounded-2xl bg-white border border-gray-200">
                        <div className="p-8 text-center h-full flex flex-col">
                            <div className="flex justify-center mb-4">
                                <MdDownload className="text-5xl text-youtube-red" />
                            </div>
                            <h4 className="text-lg font-bold mb-4 text-black">
                                Download
                            </h4>
                            <p className="flex-grow text-sm text-[#606060]">
                                Download as Markdown or copy to your clipboard
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <MoreToolsSection />
        </>
    );
};

export default VideoToBlog;
