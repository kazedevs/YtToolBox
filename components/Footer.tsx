'use client';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => (
    <footer className="bg-white border-t border-gray-200 py-8 md:py-12 mt-auto">
        <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                    <div className="flex items-center gap-2 mb-3">
                        <Image
                            src="/fav.svg"
                            alt="YtToolBox"
                            width={24}
                            height={24}
                        />
                        <h6 className="text-lg font-bold text-gray-900">
                            YtToolBox
                        </h6>
                    </div>
                    <p className="text-sm text-gray-600">
                        Free, fast, and easy-to-use tool for YouTube content creators and viewers.
                    </p>
                </div>

                <div>
                    <h6 className="text-base font-semibold text-gray-900 mb-3">
                        Tools
                    </h6>
                    <div className="flex flex-col gap-2">
                        <Link
                            href="/youtube-thumbnail-downloader"
                            className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                        >
                            Thumbnail Downloader
                        </Link>
                        <Link
                            href="/youtube-timestamp-link-generator"
                            className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                        >
                            Timestamp Link Generator
                        </Link>
                        <Link
                            href="/youtube-embed-code-generator"
                            className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                        >
                            Embed Code Generator
                        </Link>
                    </div>
                </div>

                <div>
                    <h6 className="text-base font-semibold text-gray-900 mb-3">
                        Company
                    </h6>
                    <div className="flex flex-col gap-2">
                        <Link
                            href="/about"
                            className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                        >
                            About Us
                        </Link>
                        <Link
                            href="/blog"
                            className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                        >
                            Blog
                        </Link>
                        <Link
                            href="/contact"
                            className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                        >
                            Contact
                        </Link>
                    </div>
                </div>

                <div>
                    <h6 className="text-base font-semibold text-gray-900 mb-3">
                        Legal
                    </h6>
                    <div className="flex flex-col gap-2">
                        <Link
                            href="/privacy"
                            className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                        >
                            Privacy Policy
                        </Link>
                        <Link
                            href="/terms"
                            className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                        >
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>

            <hr className="my-8 border-gray-200" />

            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <p className="text-sm text-gray-600">
                    © {new Date().getFullYear()} YtToolBox. All rights reserved.
                </p>
                <div className="flex gap-4">
                    <Link
                        href="/privacy"
                        className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                    >
                        Privacy Policy
                    </Link>
                    <Link
                        href="/terms"
                        className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                    >
                        Terms of Service
                    </Link>
                    <Link
                        href="/contact"
                        className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                    >
                        Contact Us
                    </Link>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;
