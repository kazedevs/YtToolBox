'use client';
import { useState } from "react";
import { MdContentCopy } from "react-icons/md";
import MoreToolsSection from "../MoreToolsSection";

const EmbedCodeGenerator = () => {
    const [url, setUrl] = useState("");
    const [width, setWidth] = useState("560");
    const [height, setHeight] = useState("315");
    const [embedCode, setEmbedCode] = useState("");
    const [error, setError] = useState("");
    const [copied, setCopied] = useState(false);

    const extractVideoId = (url: string) => {
        const regex =
            /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/;
        const match = url.match(regex);
        return match ? match[1] : null;
    };

    const generateEmbedCode = () => {
        if (!url.trim()) {
            setError("Please enter a YouTube URL");
            return;
        }

        const videoId = extractVideoId(url);
        if (!videoId) {
            setError("Invalid YouTube URL");
            return;
        }

        const w = parseInt(width) || 560;
        const h = parseInt(height) || 315;

        const code = `<iframe width="${w}" height="${h}" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
        setEmbedCode(code);
        setError("");
    };

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(embedCode);
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
                        YouTube Embed Code Generator
                    </h1>
                    <h6 className="text-[#666666] font-normal max-w-2xl mx-auto text-lg">
                        Generate responsive embed codes for YouTube videos
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
                            Customize Dimensions
                        </h5>

                        <div className="grid grid-cols-2 gap-4 mb-8">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Width (px)</label>
                                <input
                                    type="number"
                                    className="w-full px-4 py-3 rounded-xl bg-white border-2 border-gray-200 hover:border-youtube-red focus:border-youtube-red focus:outline-none transition-colors"
                                    value={width}
                                    onChange={(e) => setWidth(e.target.value)}
                                    min="0"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Height (px)</label>
                                <input
                                    type="number"
                                    className="w-full px-4 py-3 rounded-xl bg-white border-2 border-gray-200 hover:border-youtube-red focus:border-youtube-red focus:outline-none transition-colors"
                                    value={height}
                                    onChange={(e) => setHeight(e.target.value)}
                                    min="0"
                                />
                            </div>
                        </div>

                        {error && (
                            <div className="mb-6 p-3 rounded-lg bg-red-50 border border-red-200 text-red-600 font-medium">
                                {error}
                            </div>
                        )}

                        <button
                            onClick={generateEmbedCode}
                            className="w-full bg-youtube-red text-white font-semibold text-lg py-4 rounded-xl shadow-[0_4px_12px_rgba(255,0,0,0.3)] hover:bg-youtube-dark transition-colors"
                        >
                            Generate Embed Code
                        </button>

                        {embedCode && (
                            <div className="mt-8">
                                <h6 className="text-lg font-semibold text-black mb-4">
                                    Generated Embed Code:
                                </h6>
                                <div className="p-4 bg-gray-50 border border-gray-200 rounded-xl">
                                    <pre className="text-xs overflow-x-auto whitespace-pre-wrap break-all font-mono text-gray-700 mb-4">
                                        {embedCode}
                                    </pre>
                                    <button
                                        onClick={copyToClipboard}
                                        className={`${copied ? "bg-youtube-dark" : "bg-youtube-red"
                                            } text-white font-semibold rounded-xl px-4 py-2 transition-colors hover:bg-youtube-dark flex items-center gap-2`}
                                    >
                                        <MdContentCopy />
                                        {copied ? "Copied!" : "Copy Code"}
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* FAQ */}
                <div className="mt-8 mb-12">
                    <h4 className="text-3xl font-bold text-black text-center mb-8">
                        Frequently Asked Questions
                    </h4>
                    <div className="space-y-6">
                        <div>
                            <h6 className="font-semibold text-black mb-2">How do I use the embed code?</h6>
                            <p className="text-black">Simply copy the generated code and paste it into your website's HTML where you want the video to appear.</p>
                        </div>
                        <div>
                            <h6 className="font-semibold text-black mb-2">Can I customize the video size?</h6>
                            <p className="text-black">Yes! You can adjust the width and height values to fit your website's layout perfectly.</p>
                        </div>
                        <div>
                            <h6 className="font-semibold text-black mb-2">Is the embed code responsive?</h6>
                            <p className="text-black">The generated code will work on all devices. For fully responsive design, you may need to add CSS wrapper styling.</p>
                        </div>
                    </div>
                </div>
            </div>
            <MoreToolsSection />
        </>
    );
};

export default EmbedCodeGenerator;
