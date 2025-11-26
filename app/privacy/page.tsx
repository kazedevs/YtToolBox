import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
    title: "Privacy Policy - YtToolBox",
    description: "Privacy Policy for YtToolBox - Learn how we handle your data",
    alternates: {
        canonical: "https://yttoolbox.com/privacy",
    },
};

export default function Privacy() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="grow pt-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
                    <h1 className="text-4xl font-bold text-black mb-8">Privacy Policy</h1>

                    <div className="prose prose-gray max-w-none">
                        <p className="text-gray-600 mb-6">
                            Last updated: November 26, 2025
                        </p>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-black mb-4">Introduction</h2>
                            <p className="text-gray-600 mb-4">
                                YtToolBox ("we", "our", or "us") is committed to protecting your privacy.
                                This Privacy Policy explains how we collect, use, and safeguard your information
                                when you use our website and services.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-black mb-4">Information We Collect</h2>
                            <p className="text-gray-600 mb-4">
                                We collect minimal information to provide our services:
                            </p>
                            <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                                <li>YouTube URLs you submit for processing</li>
                                <li>Basic analytics data (page views, browser type, device type)</li>
                                <li>No personal information is required or stored</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-black mb-4">How We Use Your Information</h2>
                            <p className="text-gray-600 mb-4">
                                The information we collect is used solely to:
                            </p>
                            <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                                <li>Process your requests (download thumbnails, generate links, etc.)</li>
                                <li>Improve our services and user experience</li>
                                <li>Monitor and analyze usage patterns</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-black mb-4">Data Storage</h2>
                            <p className="text-gray-600 mb-4">
                                We do not store any personal data or YouTube URLs you submit. All processing
                                is done in real-time and no data is retained after your session ends.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-black mb-4">Third-Party Services</h2>
                            <p className="text-gray-600 mb-4">
                                We use analytics services to understand how our website is used. These services
                                may collect anonymous usage data. We do not share any personal information with
                                third parties.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-black mb-4">Cookies</h2>
                            <p className="text-gray-600 mb-4">
                                We use minimal cookies for analytics purposes only. No tracking cookies or
                                advertising cookies are used.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-black mb-4">Your Rights</h2>
                            <p className="text-gray-600 mb-4">
                                Since we don't collect or store personal information, there is no data to
                                access, modify, or delete. You can use our services completely anonymously.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-black mb-4">Changes to This Policy</h2>
                            <p className="text-gray-600 mb-4">
                                We may update this Privacy Policy from time to time. Any changes will be
                                posted on this page with an updated revision date.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-black mb-4">Contact Us</h2>
                            <p className="text-gray-600 mb-4">
                                If you have any questions about this Privacy Policy, please contact us
                                through our <a href="/contact" className="text-purple-main hover:underline">contact page</a>.
                            </p>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
