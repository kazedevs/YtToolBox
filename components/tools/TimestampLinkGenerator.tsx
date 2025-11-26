'use client';
import { useState } from "react";
import { MdContentCopy } from "react-icons/md";
import MoreToolsSection from "../MoreToolsSection";

const TimestampLinkGenerator = () => {
    const [url, setUrl] = useState("");
    const [hours, setHours] = useState("");
    const [minutes, setMinutes] = useState("");
    const [seconds, setSeconds] = useState("");
    const [generatedLink, setGeneratedLink] = useState("");
    const [error, setError] = useState("");
    const [copied, setCopied] = useState(false);

    const extractVideoId = (url: string) => {
        const regex =
            /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/;
        const match = url.match(regex);
        return match ? match[1] : null;
    };

    const generateTimestampLink = () => {
        if (!url.trim()) {
            setError("Please enter a YouTube URL");
            return;
        }

        const videoId = extractVideoId(url);
        if (!videoId) {
            setError("Invalid YouTube URL");
            return;
        }

        const h = parseInt(hours) || 0;
        const m = parseInt(minutes) || 0;
        const s = parseInt(seconds) || 0;

        const totalSeconds = h * 3600 + m * 60 + s;

        if (totalSeconds < 0) {
            setError("Please enter valid time values");
            return;
        }

        const timestampLink = `https://youtu.be/${videoId}?t=${totalSeconds}`;
        setGeneratedLink(timestampLink);
        setError("");
    };

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(generatedLink);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy: ", err);
        }
    };

    return (
        <>
            <div className="max-w-3xl mx-auto py-8 px-4">
                <div className="text-center mb-8">
                    <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
                        YouTube Timestamp Link Generator
                    </h1>
                    <h6 className="text-[#666666] font-normal max-w-2xl mx-auto text-lg">
                        Create shareable YouTube links that start at a specific timestamp
                    </h6>
                </div>

                <div className="border border-gray-200 rounded-xl bg-gradient-to-br from-white to-gray-50 shadow-[0_8px_32px_rgba(0,0,0,0.08)]">
                    <div className="p-6 md:p-10">
                        <div className="mb-6">
                            <input
                                type="text"
                                className="w-full px-4 py-3 rounded-xl bg-white border-2 border-gray-200 hover:border-youtube-red focus:border-youtube-red focus:outline-none transition-colors"
                                placeholder="https://www.youtube.com/watch?v=..."
                                value={url}
                                onChange={(e) => setUrl(e.target.value)}
                            />
                        </div>

                        <h5 className="text-xl font-semibold text-black mb-6">
                            Set Timestamp
                        </h5>

                        <div className="grid grid-cols-3 gap-4 mb-8">
                            <div>
                                <input
                                    type="number"
                                    className="w-full px-4 py-3 rounded-xl bg-white border-2 border-gray-200 hover:border-youtube-red focus:border-youtube-red focus:outline-none transition-colors"
                                    placeholder="Hours"
                                    value={hours}
                                    onChange={(e) => setHours(e.target.value)}
                                    min="0"
                                />
                            </div>
                            <div>
                                <input
                                    type="number"
                                    className="w-full px-4 py-3 rounded-xl bg-white border-2 border-gray-200 hover:border-youtube-red focus:border-youtube-red focus:outline-none transition-colors"
                                    placeholder="Minutes"
                                    value={minutes}
                                    onChange={(e) => setMinutes(e.target.value)}
                                    min="0"
                                    max="59"
                                />
                            </div>
                            <div>
                                <input
                                    type="number"
                                    className="w-full px-4 py-3 rounded-xl bg-white border-2 border-gray-200 hover:border-youtube-red focus:border-youtube-red focus:outline-none transition-colors"
                                    placeholder="Seconds"
                                    value={seconds}
                                    onChange={(e) => setSeconds(e.target.value)}
                                    min="0"
                                    max="59"
                                />
                            </div>
                        </div>

                        {error && (
                            <div className="mb-6 p-3 rounded-lg bg-red-50 border border-red-200 text-red-600 font-medium">
                                {error}
                            </div>
                        )}

                        <button
                            onClick={generateTimestampLink}
                            className="w-full bg-youtube-red text-white font-semibold text-lg py-4 rounded-xl shadow-[0_4px_12px_rgba(255,0,0,0.3)] hover:bg-youtube-dark transition-colors"
                        >
                            Generate Timestamp Link
                        </button>

                        {generatedLink && (
                            <div className="mt-8">
                                <h6 className="text-lg font-semibold text-black mb-4">
                                    Generated Link:
                                </h6>
                                <div className="p-4 flex items-center gap-4 bg-gray-50 border border-gray-200 rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.05)]">
                                    <p className="flex-grow overflow-hidden text-ellipsis whitespace-nowrap font-mono text-sm text-[#333333]">
                                        {generatedLink}
                                    </p>
                                    <button
                                        onClick={copyToClipboard}
                                        className={`${copied ? "bg-youtube-dark" : "bg-youtube-red"
                                            } text-white font-semibold rounded-xl px-4 py-2 transition-colors hover:bg-youtube-dark flex items-center gap-2`}
                                    >
                                        <MdContentCopy />
                                        {copied ? "Copied!" : "Copy"}
                                    </button>
                                </div>

                                <div className="mt-6 p-4 bg-red-50 rounded-lg">
                                    <h6 className="font-semibold text-youtube-red mb-2">
                                        💡 Quick Tips:
                                    </h6>
                                    <p className="text-sm text-black mb-2">
                                        • Your link is ready to share! Paste it in emails, social media, or messages
                                    </p>
                                    <p className="text-sm text-black mb-2">
                                        • Test your link by clicking it to ensure it starts at the right time
                                    </p>
                                    <p className="text-sm text-black">
                                        • The link format: <code className="bg-gray-200 px-1 rounded">youtu.be/VIDEO_ID?t=SECONDS</code>
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* How It Works */}
                <div className="mt-8 mb-8">
                    <div className="p-8 bg-gray-50 rounded-xl border border-gray-200">
                        <h4 className="text-3xl font-bold text-black text-center mb-6">
                            How It Works
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                            <div className="text-center p-4">
                                <div className="bg-youtube-red text-white w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                                    1
                                </div>
                                <h6 className="font-semibold text-black mb-2">Paste URL</h6>
                                <p className="text-sm text-black">Copy your YouTube video URL and paste it into the input field</p>
                            </div>
                            <div className="text-center p-4">
                                <div className="bg-youtube-red text-white w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                                    2
                                </div>
                                <h6 className="font-semibold text-black mb-2">Set Timestamp</h6>
                                <p className="text-sm text-black">Enter the exact time (hours, minutes, seconds) where you want the video to start</p>
                            </div>
                            <div className="text-center p-4">
                                <div className="bg-youtube-red text-white w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                                    3
                                </div>
                                <h6 className="font-semibold text-black mb-2">Generate Link</h6>
                                <p className="text-sm text-black">Click the generate button to create your custom timestamp link</p>
                            </div>
                            <div className="text-center p-4">
                                <div className="bg-youtube-red text-white w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                                    4
                                </div>
                                <h6 className="font-semibold text-black mb-2">Copy & Share</h6>
                                <p className="text-sm text-black">Copy your generated link and share it anywhere you want</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* FAQ */}
                <div className="mt-8 mb-12">
                    <h4 className="text-3xl font-bold text-black text-center mb-8">
                        Frequently Asked Questions
                    </h4>
                    <div className="space-y-6">
                        <div>
                            <h6 className="font-semibold text-black mb-2">What is a YouTube timestamp link?</h6>
                            <p className="text-black">A YouTube timestamp link is a special URL that starts a video at a specific time. Instead of starting from the beginning, viewers will jump directly to the timestamp you specify.</p>
                        </div>
                        <div>
                            <h6 className="font-semibold text-black mb-2">What YouTube URLs are supported?</h6>
                            <p className="text-black">We support all standard YouTube URL formats including youtube.com/watch?v=VIDEO_ID, youtu.be/VIDEO_ID, youtube.com/embed/VIDEO_ID, and any variations with additional parameters.</p>
                        </div>
                        <div>
                            <h6 className="font-semibold text-black mb-2">Can I create timestamps longer than 1 hour?</h6>
                            <p className="text-black">Yes! Our tool supports timestamps of any length. Simply enter the hours, minutes, and seconds fields accordingly.</p>
                        </div>
                        <div>
                            <h6 className="font-semibold text-black mb-2">Will the timestamp work on mobile devices?</h6>
                            <p className="text-black">Yes! Timestamp links work perfectly on all devices including smartphones, tablets, and desktop computers.</p>
                        </div>
                    </div>
                </div>
            </div>
            <MoreToolsSection />
        </>
    );
};

export default TimestampLinkGenerator;
