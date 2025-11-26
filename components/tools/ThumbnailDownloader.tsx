"use client";
import { useState } from "react";
import {
  MdDownload,
  MdLink,
  MdContentPaste,
  MdAutoFixHigh,
} from "react-icons/md";
import MoreToolsSection from "../MoreToolsSection";

interface ThumbnailData {
  url: string;
  title: string;
  thumbnails: {
    quality: string;
    url: string;
    width: number;
    height: number;
  }[];
}

const ThumbnailDownloader = () => {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [thumbnails, setThumbnails] = useState<ThumbnailData | null>(null);

  const extractVideoId = (url: string) => {
    const patterns = [
      /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
      /youtube\.com\/watch\?.*v=([^&\n?#]+)/,
      /youtube\.com\/v\/([^&\n?#]+)/,
      /youtube\.com\/shorts\/([^&\n?#]+)/,
    ];

    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match && match[1]) {
        return match[1];
      }
    }
    return null;
  };

  const handleDownload = async () => {
    if (!url.trim()) {
      setError("Please enter a YouTube URL");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const videoId = extractVideoId(url);
      if (!videoId) {
        setError(
          "Invalid YouTube URL format. Try formats like:\n• youtube.com/watch?v=VIDEO_ID\n• youtu.be/VIDEO_ID\n• youtube.com/shorts/VIDEO_ID"
        );
        return;
      }

      const thumbnailUrls = [
        {
          quality: "High Quality",
          url: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
          width: 1280,
          height: 720,
        },
      ];

      const validThumbnails = [];
      for (const thumb of thumbnailUrls) {
        try {
          const response = await fetch(thumb.url, { method: "HEAD" });
          if (response.ok) {
            validThumbnails.push(thumb);
          }
        } catch (err) {
          console.warn(`Failed to validate thumbnail: ${thumb.quality}`);
        }
      }

      if (validThumbnails.length === 0) {
        validThumbnails.push(thumbnailUrls[0]);
      }

      setThumbnails({
        url,
        title: "",
        thumbnails: validThumbnails,
      });
      setError("");
    } catch (err) {
      setError(
        "Failed to fetch thumbnails. Please check the URL and try again."
      );
      setThumbnails(null);
    } finally {
      setLoading(false);
    }
  };

  const handleImageDownload = async (imageUrl: string, quality: string) => {
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const downloadUrl = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = downloadUrl;
      a.download = `youtube-thumbnail-${quality
        .toLowerCase()
        .replace(/\s+/g, "-")}.jpg`;
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
            YouTube Thumbnail Downloader
          </h1>
          <h6 className="text-[#606060] text-base sm:text-lg font-normal">
            Download high-quality thumbnails from any YouTube video instantly
          </h6>
          <div className="mt-4">
            <a
              href="/youtube-thumbnail-downloader-guide"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MdAutoFixHigh className="mr-2" />
              View Guide
            </a>
          </div>
        </div>
      </div>

      {/* Thumbnail Downloader Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-12 flex justify-center">
        <div className="max-w-2xl w-full">
          <div className="p-8 sm:p-10 rounded-2xl bg-white shadow-[0_8px_32px_rgba(0,0,0,0.08)] border border-gray-100">
            <h4 className="mb-2 font-bold text-center text-black text-2xl sm:text-3xl">
              YouTube Thumbnail Downloader
            </h4>
            <h6 className="mb-8 text-center text-[#606060] font-normal text-lg">
              Enter a URL to get started
            </h6>

            <div className="flex flex-col gap-6">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                  <MdLink className="text-youtube-red text-2xl" />
                </div>
                <input
                  type="text"
                  className={`w-full pl-14 pr-4 py-4 text-lg bg-white border-2 rounded-xl transition-colors ${
                    error
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
                <div className="text-center font-medium bg-red-50 p-3 rounded-lg text-youtube-dark">
                  {error}
                </div>
              )}

              <button
                onClick={handleDownload}
                disabled={loading}
                className="w-full py-4 font-semibold rounded-xl text-lg bg-youtube-red text-white shadow-[0_4px_12px_rgba(255,0,0,0.3)] hover:bg-youtube-dark transition-colors disabled:bg-gray-300 disabled:text-gray-500 disabled:shadow-none flex items-center justify-center gap-2"
              >
                <MdDownload className="text-2xl" />
                {loading ? "Processing..." : "Get Thumbnail"}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Thumbnail Preview */}
      {thumbnails && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-12">
          <div className="mb-12 rounded-2xl overflow-hidden shadow-xl max-w-4xl mx-auto">
            <div className="p-8 bg-gradient-to-r from-youtube-red to-youtube-dark">
              <h4 className="text-white font-semibold text-center text-3xl">
                Thumbnail Preview
              </h4>
            </div>
            <div className="p-8">
              <img
                src={thumbnails.thumbnails[0]?.url}
                alt="Video Thumbnail Preview"
                className="w-full max-w-3xl h-auto rounded-xl mx-auto block shadow-lg"
              />
              <div className="mt-6 text-center">
                <button
                  onClick={() =>
                    handleImageDownload(
                      thumbnails.thumbnails[0]?.url,
                      thumbnails.thumbnails[0]?.quality
                    )
                  }
                  className="font-semibold bg-youtube-red text-white shadow-[0_4px_12px_rgba(255,0,0,0.3)] hover:bg-youtube-dark transition-colors px-8 py-3 rounded-lg text-lg inline-flex items-center gap-2"
                >
                  <MdDownload className="text-xl" />
                  Download Thumbnail
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* How It Works Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-12">
        <h4 className="text-2xl md:text-3xl font-semibold mb-8 text-black text-center">
          How It Works
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="h-full rounded-2xl bg-white border border-gray-200">
            <div className="p-8 text-center h-full flex flex-col">
              <div className="flex justify-center mb-4">
                <MdContentPaste className="text-5xl text-youtube-red" />
              </div>
              <h6 className="text-lg font-bold mb-4 text-black">Paste URL</h6>
              <p className="grow text-sm text-[#606060]">
                Copy and paste any YouTube video URL into our tool
              </p>
            </div>
          </div>

          <div className="h-full rounded-2xl bg-white border border-gray-200">
            <div className="p-8 text-center h-full flex flex-col">
              <div className="flex justify-center mb-4">
                <MdAutoFixHigh className="text-5xl text-youtube-red" />
              </div>
              <h6 className="text-lg font-bold mb-4 text-black">Process</h6>
              <p className="grow text-sm text-[#606060]">
                Our magic extracts all available thumbnails and metadata
              </p>
            </div>
          </div>

          <div className="h-full rounded-2xl bg-white border border-gray-200">
            <div className="p-8 text-center h-full flex flex-col">
              <div className="flex justify-center mb-4">
                <MdDownload className="text-5xl text-youtube-red" />
              </div>
              <h6 className="text-lg font-bold mb-4 text-black">Download</h6>
              <p className="grow text-sm text-[#606060]">
                Choose your preferred quality and download instantly
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-12">
        <h4 className="text-2xl md:text-3xl font-semibold mb-8 text-black text-center">
          Frequently Asked Questions
        </h4>
        <div className="max-w-4xl mx-auto space-y-6">
          <div>
            <h6 className="text-lg font-semibold text-black mb-2">
              Is this YouTube Thumbnail Downloader really free?
            </h6>
            <p className="text-base text-[#606060]">
              Yes, our YouTube Thumbnail Downloader is completely free to use.
              There are no hidden charges, no subscription fees, and no download
              limits.
            </p>
          </div>

          <div>
            <h6 className="text-lg font-semibold text-black mb-2">
              What formats are available?
            </h6>
            <p className="text-base text-[#606060]">
              We offer multiple formats including maxresdefault (4K), hqdefault,
              mqdefault, and sddefault.
            </p>
          </div>

          <div>
            <h6 className="text-lg font-semibold text-black mb-2">
              Is there a download limit?
            </h6>
            <p className="text-base text-[#606060]">
              No, you can download as many thumbnails as you need without any
              restrictions.
            </p>
          </div>

          <div>
            <h6 className="text-lg font-semibold text-black mb-2">
              Do I need to register?
            </h6>
            <p className="text-base text-[#606060]">
              No registration is required. Simply paste the URL and start
              downloading.
            </p>
          </div>

          <div>
            <h6 className="text-lg font-semibold text-black mb-2">
              Is it safe to use?
            </h6>
            <p className="text-base text-[#606060]">
              Yes, our tool is completely safe. We don't store any data or
              require any permissions.
            </p>
          </div>

          <div>
            <h6 className="text-lg font-semibold text-black mb-2">
              Can I use thumbnails commercially?
            </h6>
            <p className="text-base text-[#606060]">
              Please check YouTube's terms of service and respect copyright laws
              when using thumbnails.
            </p>
          </div>
        </div>
      </div>

      <MoreToolsSection />
    </>
  );
};

export default ThumbnailDownloader;
