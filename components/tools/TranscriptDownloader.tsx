'use client';
import { useState } from "react";
import { MdDownload, MdLink, MdContentPaste, MdAutoFixHigh, MdContentCopy } from "react-icons/md";
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

const TranscriptDownloader = () => {
    const [url, setUrl] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [transcriptData, setTranscriptData] = useState<TranscriptData | null>(null);
    const [copied, setCopied] = useState(false);

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

    const handleFetch = async () => {
        if (!url.trim()) {
            setError("Please enter a YouTube video URL");
            return;
        }

        setLoading(true);
        setError("");
        setTranscriptData(null);

        try {
            const videoId = extractVideoId(url);
            if (!videoId) {
                setError("Invalid YouTube video URL. Please enter a valid video URL.");
                setLoading(false);
                return;
            }

            const response = await fetch(`/api/youtube-transcript?videoId=${encodeURIComponent(videoId)}`);
            const data = await response.json();

            if (!response.ok || !data.success) {
                setError(data.error || "Failed to fetch transcript");
                setLoading(false);
                return;
            }

            setTranscriptData(data.data);

        } catch (err) {
            console.error("Error:", err);
            setError("Failed to fetch transcript. Please check the URL and try again.");
        } finally {
            setLoading(false);
        }
    };

    const handleDownload = (format: 'txt' | 'srt') => {
        if (!transcriptData) return;

        let content = '';
        let filename = '';

        if (format === 'txt') {
            content = transcriptData.plainText;
            filename = 'transcript.txt';
        } else if (format === 'srt') {
            content = transcriptData.transcript.map((item, index) => {
                const startTime = formatSRTTime(item.offset);
                const endTime = formatSRTTime(item.offset + item.duration);
                return `${index + 1}\n${startTime} --> ${endTime}\n${item.text}\n`;
            }).join('\n');
            filename = 'transcript.srt';
        }

        const blob = new Blob([content], { type: 'text/plain' });
        const downloadUrl = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = downloadUrl;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(downloadUrl);
    };

    const handleCopy = () => {
        if (!transcriptData) return;
        navigator.clipboard.writeText(transcriptData.plainText);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const formatSRTTime = (milliseconds: number): string => {
        const totalSeconds = Math.floor(milliseconds / 1000);
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;
        const ms = Math.floor((milliseconds % 1000));

        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')},${ms.toString().padStart(3, '0')}`;
    };

    return (
        <>
            {/* Hero Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-12 flex justify-center">
                <div className="text-center max-w-4xl">
                    <h1 className="text-[1.75rem] sm:text-4xl md:text-5xl font-bold mb-4 leading-tight text-black">
                        YouTube Transcript Downloader
                    </h1>
                    <h2 className="text-[#606060] text-base sm:text-lg font-normal">
                        Download transcripts from any YouTube video in text or SRT format
                    </h2>
                </div>
            </div>

            {/* Transcript Downloader Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-12 flex justify-center">
                <div className="max-w-2xl w-full">
                    <div className="p-8 sm:p-10 rounded-2xl bg-white shadow-[0_8px_32px_rgba(0,0,0,0.08)] border border-gray-100">
                        <h3 className="mb-2 font-bold text-center text-black text-2xl sm:text-3xl">
                            YouTube Transcript Downloader
                        </h3>
                        <p className="mb-8 text-center text-[#606060] font-normal text-lg">
                            Enter a video URL to get started
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

                            {transcriptData && (
                                <div className="space-y-4">
                                    <div className="max-h-96 overflow-y-auto rounded-xl border-2 border-gray-200 p-4 bg-gray-50">
                                        <p className="text-sm text-gray-700 whitespace-pre-wrap">
                                            {transcriptData.plainText}
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-2 gap-3">
                                        <button
                                            onClick={() => handleDownload('txt')}
                                            className="py-3 px-4 font-semibold rounded-xl text-sm bg-purple-main text-white hover:bg-purple-dark transition-colors flex items-center justify-center gap-2"
                                        >
                                            <MdDownload className="text-xl" />
                                            Download TXT
                                        </button>
                                        <button
                                            onClick={() => handleDownload('srt')}
                                            className="py-3 px-4 font-semibold rounded-xl text-sm bg-purple-main text-white hover:bg-purple-dark transition-colors flex items-center justify-center gap-2"
                                        >
                                            <MdDownload className="text-xl" />
                                            Download SRT
                                        </button>
                                    </div>

                                    <button
                                        onClick={handleCopy}
                                        className="w-full py-4 font-semibold rounded-xl text-lg bg-green-600 text-white shadow-[0_4px_12px_rgba(0,200,0,0.3)] hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
                                    >
                                        <MdContentCopy className="text-2xl" />
                                        {copied ? "Copied!" : "Copy to Clipboard"}
                                    </button>
                                </div>
                            )}

                            {!transcriptData && (
                                <button
                                    onClick={handleFetch}
                                    disabled={loading}
                                    className="w-full py-4 font-semibold rounded-xl text-lg bg-youtube-red text-white shadow-[0_4px_12px_rgba(255,0,0,0.3)] hover:bg-youtube-dark transition-colors disabled:bg-gray-300 disabled:text-gray-500 disabled:shadow-none flex items-center justify-center gap-2"
                                >
                                    <MdDownload className="text-2xl" />
                                    {loading ? "Processing..." : "Get Transcript"}
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
                                Our tool extracts the transcript from the video
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
                                Download as TXT or SRT format instantly
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <MoreToolsSection />
        </>
    );
};

export default TranscriptDownloader;
