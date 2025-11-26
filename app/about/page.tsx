import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
    title: "About Us - YtToolBox",
    description: "Learn about YtToolBox - Free YouTube tools for creators and viewers",
    alternates: {
        canonical: "https://yttoolbox.com/about",
    },
};

export default function About() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow pt-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
                    <h1 className="text-4xl font-bold text-black mb-8">About YtToolBox</h1>

                    <div className="prose prose-gray max-w-none">
                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-black mb-4">Our Mission</h2>
                            <p className="text-gray-600 mb-4">
                                YtToolBox was created to provide free, easy-to-use tools for YouTube content
                                creators and viewers. We believe that everyone should have access to essential
                                YouTube utilities without paying fees or dealing with complicated software.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-black mb-4">What We Offer</h2>
                            <p className="text-gray-600 mb-4">
                                Our suite of tools includes:
                            </p>
                            <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                                <li><strong>Thumbnail Downloader</strong> - Download high-quality YouTube thumbnails in multiple resolutions</li>
                                <li><strong>Timestamp Link Generator</strong> - Create shareable links to specific moments in videos</li>
                                <li><strong>Embed Code Generator</strong> - Generate customizable embed codes for websites</li>
                                <li><strong>Profile Picture Downloader</strong> - Download YouTube channel profile pictures</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-black mb-4">Why Choose Us</h2>
                            <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                                <li><strong>100% Free</strong> - All tools are completely free with no hidden costs</li>
                                <li><strong>No Registration</strong> - Use our tools instantly without creating an account</li>
                                <li><strong>Fast & Simple</strong> - Clean interface designed for quick results</li>
                                <li><strong>No Watermarks</strong> - Downloaded content is clean and unbranded</li>
                                <li><strong>Unlimited Use</strong> - No restrictions on how many times you can use our tools</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-black mb-4">Our Commitment</h2>
                            <p className="text-gray-600 mb-4">
                                We are committed to maintaining a simple, ad-free experience while continuously
                                improving our tools based on user feedback. Your privacy is important to us -
                                we don't collect or store any personal information.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-black mb-4">Get in Touch</h2>
                            <p className="text-gray-600 mb-4">
                                Have suggestions or feedback? We'd love to hear from you! Visit our{" "}
                                <a href="/contact" className="text-purple-main hover:underline">contact page</a>{" "}
                                to get in touch.
                            </p>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
