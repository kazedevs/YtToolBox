'use client';
import { useState } from "react";
import { MdDownload, MdLink, MdContentPaste, MdAutoFixHigh } from "react-icons/md";
import MoreToolsSection from "../MoreToolsSection";

interface BannerData {
    title: string;
    channelId: string;
    bannerUrl: string;
    banners: {
        mobile: string;
        tablet: string;
        desktop: string;
        tv: string;
        original: string;
    };
}

const BannerDownloader = () => {
    const [url, setUrl] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [bannerData, setBannerData] = useState<BannerData | null>(null);

    const extractChannelId = (url: string) => {
        const patterns = [
            /youtube\.com\/channel\/([^\/\?]+)/,
            /youtube\.com\/@([^\/\?]+)/,
            /youtube\.com\/c\/([^\/\?]+)/,
            /youtube\.com\/user\/([^\/\?]+)/,
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
            setError("Please enter a YouTube channel URL");
            return;
        }

        setLoading(true);
        setError("");
        setBannerData(null);

        try {
            const channelId = extractChannelId(url);
            if (!channelId) {
                setError("Invalid YouTube channel URL. Please enter a valid channel, user, or @ URL.");
                setLoading(false);
                return;
            }

            // Call the banner API route
            const response = await fetch(`/api/channel-banner?id=${encodeURIComponent(channelId)}`);
            const data = await response.json();

            if (!response.ok || !data.success) {
                setError(data.error || "Failed to fetch channel banner");
                setLoading(false);
                return;
            }

            setBannerData(data.data);

        } catch (err) {
            console.error("Error:", err);
            setError("Failed to fetch banner. Please check the URL and try again.");
        } finally {
            setLoading(false);
        }
    };

    const handleDownload = async (imageUrl: string, size: string) => {
        try {
            const response = await fetch(imageUrl);
            const blob = await response.blob();
            const downloadUrl = window.URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = downloadUrl;
            a.download = `youtube-banner-${size}.jpg`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            window.URL.revokeObjectURL(downloadUrl);
        } catch (err) {
            console.error("Download failed:", err);
        }
    };

    return (
        <>
            {/* Hero Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-12 flex justify-center">
                <div className="text-center max-w-4xl">
                    <h1 className="text-[1.75rem] sm:text-4xl md:text-5xl font-bold mb-4 leading-tight text-black">
                        YouTube Banner Downloader
                    </h1>
                    <h2 className="text-[#606060] text-base sm:text-lg font-normal">
                        Download high-quality banners from any YouTube channel
                    </h2>
                </div>
            </div>

            {/* Banner Downloader Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-12 flex justify-center">
                <div className="max-w-2xl w-full">
                    <div className="p-8 sm:p-10 rounded-2xl bg-white shadow-[0_8px_32px_rgba(0,0,0,0.08)] border border-gray-100">
                        <h3 className="mb-2 font-bold text-center text-black text-2xl sm:text-3xl">
                            YouTube Banner Downloader
                        </h3>
                        <p className="mb-8 text-center text-[#606060] font-normal text-lg">
                            Enter a channel URL to get started
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
                                    placeholder="https://youtube.com/@channelname"
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

                            {bannerData && (
                                <div className="space-y-4">
                                    <div className="rounded-xl overflow-hidden border-2 border-gray-200">
                                        <img
                                            src={bannerData.banners.desktop}
                                            alt="Channel Banner"
                                            className="w-full h-auto"
                                        />
                                    </div>
                                    <p className="text-center text-sm text-gray-600">
                                        Channel: <strong>{bannerData.title}</strong>
                                    </p>

                                    <div className="grid grid-cols-2 gap-3">
                                        <button
                                            onClick={() => handleDownload(bannerData.banners.mobile, 'mobile')}
                                            className="py-3 px-4 font-semibold rounded-xl text-sm bg-purple-main text-white hover:bg-purple-dark transition-colors flex items-center justify-center gap-2"
                                        >
                                            <MdDownload className="text-xl" />
                                            Mobile
                                        </button>
                                        <button
                                            onClick={() => handleDownload(bannerData.banners.tablet, 'tablet')}
                                            className="py-3 px-4 font-semibold rounded-xl text-sm bg-purple-main text-white hover:bg-purple-dark transition-colors flex items-center justify-center gap-2"
                                        >
                                            <MdDownload className="text-xl" />
                                            Tablet
                                        </button>
                                        <button
                                            onClick={() => handleDownload(bannerData.banners.desktop, 'desktop')}
                                            className="py-3 px-4 font-semibold rounded-xl text-sm bg-purple-main text-white hover:bg-purple-dark transition-colors flex items-center justify-center gap-2"
                                        >
                                            <MdDownload className="text-xl" />
                                            Desktop
                                        </button>
                                        <button
                                            onClick={() => handleDownload(bannerData.banners.tv, 'tv')}
                                            className="py-3 px-4 font-semibold rounded-xl text-sm bg-purple-main text-white hover:bg-purple-dark transition-colors flex items-center justify-center gap-2"
                                        >
                                            <MdDownload className="text-xl" />
                                            TV
                                        </button>
                                    </div>

                                    <button
                                        onClick={() => handleDownload(bannerData.banners.original, 'original')}
                                        className="w-full py-4 font-semibold rounded-xl text-lg bg-green-600 text-white shadow-[0_4px_12px_rgba(0,200,0,0.3)] hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
                                    >
                                        <MdDownload className="text-2xl" />
                                        Download Original (Best Quality)
                                    </button>
                                </div>
                            )}

                            {!bannerData && (
                                <button
                                    onClick={handleFetch}
                                    disabled={loading}
                                    className="w-full py-4 font-semibold rounded-xl text-lg bg-youtube-red text-white shadow-[0_4px_12px_rgba(255,0,0,0.3)] hover:bg-youtube-dark transition-colors disabled:bg-gray-300 disabled:text-gray-500 disabled:shadow-none flex items-center justify-center gap-2"
                                >
                                    <MdDownload className="text-2xl" />
                                    {loading ? "Processing..." : "Get Banner"}
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
                                Copy and paste any YouTube channel URL into our tool
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
                                Our tool extracts the banner image from the channel
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
                                Download the banner in multiple sizes instantly
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <MoreToolsSection />
        </>
    );
};

export default BannerDownloader;
