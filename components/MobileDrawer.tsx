'use client';
import Link from 'next/link';
import { HiX } from 'react-icons/hi';

interface MobileDrawerProps {
    open: boolean;
    onClose: () => void;
}

const MobileDrawer = ({ open, onClose }: MobileDrawerProps) => {
    if (!open) return null;

    return (
        <>
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-black/50 z-[1200] md:hidden"
                onClick={onClose}
            />

            {/* Drawer */}
            <div className="fixed top-0 right-0 bottom-0 w-64 bg-white z-[1300] md:hidden shadow-xl">
                <div className="flex flex-col h-full">
                    {/* Header */}
                    <div className="flex items-center justify-between p-4 border-b border-gray-200">
                        <span className="text-lg font-bold">Menu</span>
                        <button
                            onClick={onClose}
                            className="p-2 hover:bg-gray-100 rounded transition-colors"
                            aria-label="close"
                        >
                            <HiX className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Navigation Links */}
                    <nav className="flex-1 overflow-y-auto">
                        <Link
                            href="/"
                            onClick={onClose}
                            className="block px-4 py-3 text-gray-900 hover:bg-gray-100 border-b border-gray-100 transition-colors"
                        >
                            Tools
                        </Link>
                        <Link
                            href="/about"
                            onClick={onClose}
                            className="block px-4 py-3 text-gray-900 hover:bg-gray-100 border-b border-gray-100 transition-colors"
                        >
                            About
                        </Link>
                        <Link
                            href="/contact"
                            onClick={onClose}
                            className="block px-4 py-3 text-gray-900 hover:bg-gray-100 border-b border-gray-100 transition-colors"
                        >
                            Contact
                        </Link>
                        <Link
                            href="/privacy"
                            onClick={onClose}
                            className="block px-4 py-3 text-gray-900 hover:bg-gray-100 border-b border-gray-100 transition-colors"
                        >
                            Privacy
                        </Link>
                        <Link
                            href="/terms"
                            onClick={onClose}
                            className="block px-4 py-3 text-gray-900 hover:bg-gray-100 border-b border-gray-100 transition-colors"
                        >
                            Terms
                        </Link>
                        <Link
                            href="/blog"
                            onClick={onClose}
                            className="block px-4 py-3 text-gray-900 hover:bg-gray-100 transition-colors"
                        >
                            Blog
                        </Link>
                    </nav>
                </div>
            </div>
        </>
    );
};

export default MobileDrawer;
