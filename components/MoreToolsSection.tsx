'use client';
import { usePathname } from "next/navigation";
import { MdAccessTime, MdCode, MdImage } from "react-icons/md";
import Link from "next/link";

interface Tool {
    title: string;
    description: string;
    icon: React.ElementType;
    url: string;
    iconColor: string;
}

const tools: Tool[] = [
    {
        title: "Timestamp Link Generator",
        description: "Create shareable links that start at specific timestamps",
        icon: MdAccessTime,
        url: "/youtube-timestamp-link-generator",
        iconColor: "#FF0000",
    },
    {
        title: "Embed Code Generator",
        description: "Generate responsive embed codes with custom options",
        icon: MdCode,
        url: "/youtube-embed-code-generator",
        iconColor: "#FF6B35",
    },
    {
        title: "Thumbnail Downloader",
        description: "Download high-quality thumbnails instantly",
        icon: MdImage,
        url: "/youtube-thumbnail-downloader",
        iconColor: "#8B5CF6",
    },
];

const MoreToolsSection = () => {
    const pathname = usePathname();

    // Filter out the current tool
    const filteredTools = tools.filter(tool => tool.url !== pathname);

    // Don't render if no tools to show
    if (filteredTools.length === 0) {
        return null;
    }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-12">
            <h4 className="text-2xl md:text-3xl font-semibold mb-8 text-black text-center">
                More YouTube Tools
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto justify-center">
                {filteredTools.map((tool, index) => {
                    const IconComponent = tool.icon;
                    return (
                        <Link href={tool.url} key={index} className="no-underline">
                            <div className="h-full rounded-2xl bg-white border border-gray-200 cursor-pointer">
                                <div className="p-8 text-center h-full flex flex-col">
                                    <div className="flex justify-center mb-4">
                                        <IconComponent
                                            style={{ fontSize: '2.5rem', color: tool.iconColor }}
                                        />
                                    </div>
                                    <h6 className="text-lg font-bold mb-4 text-black">
                                        {tool.title}
                                    </h6>
                                    <p className="flex-grow text-sm text-black">
                                        {tool.description}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default MoreToolsSection;
