'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';
import MobileDrawer from './MobileDrawer';

const Navbar = () => {
    const pathname = usePathname();

    const handleToolsClick = (e: React.MouseEvent) => {
        if (pathname === '/') {
            e.preventDefault();
            const toolsSection = document.getElementById('tools-section');
            if (toolsSection) {
                toolsSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    const [drawerOpen, setDrawerOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-[1100] bg-white border-b border-gray-200">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-between h-16 px-4">
                    <Link
                        href="/"
                        className="text-xl font-bold text-gray-900 hover:text-purple-main transition-colors"
                    >
                        YtToolBox
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-2">
                        <Link
                            href="/"
                            onClick={handleToolsClick}
                            className="px-4 py-2 text-gray-900 hover:bg-gray-100 rounded transition-colors"
                        >
                            Tools
                        </Link>
                        <Link
                            href="/about"
                            className="px-4 py-2 text-gray-900 hover:bg-gray-100 rounded transition-colors"
                        >
                            About
                        </Link>
                        <Link
                            href="/contact"
                            className="px-4 py-2 text-gray-900 hover:bg-gray-100 rounded transition-colors"
                        >
                            Contact
                        </Link>
                        <Link
                            href="/privacy"
                            className="px-4 py-2 text-gray-900 hover:bg-gray-100 rounded transition-colors"
                        >
                            Privacy
                        </Link>
                        <Link
                            href="/terms"
                            className="px-4 py-2 text-gray-900 hover:bg-gray-100 rounded transition-colors"
                        >
                            Terms
                        </Link>
                        <Link
                            href="/blog"
                            className="px-4 py-2 text-gray-900 hover:bg-gray-100 rounded transition-colors"
                        >
                            Blog
                        </Link>
                    </div>

                    {/* Mobile Hamburger */}
                    <div className="md:hidden">
                        <button
                            className="p-2 text-gray-900 hover:bg-gray-100 rounded transition-colors"
                            onClick={() => setDrawerOpen(true)}
                            aria-label="menu"
                        >
                            <HiMenuAlt3 className="w-6 h-6" />
                        </button>
                    </div>

                    <MobileDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
