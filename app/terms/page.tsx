import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
    title: "Terms of Service - YtToolBox",
    description: "Terms of Service for YtToolBox - Read our terms and conditions",
    alternates: {
        canonical: "https://yttoolbox.com/terms",
    },
};

export default function Terms() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow pt-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
                    <h1 className="text-4xl font-bold text-black mb-8">Terms of Service</h1>

                    <div className="prose prose-gray max-w-none">
                        <p className="text-gray-600 mb-6">
                            Last updated: November 26, 2025
                        </p>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-black mb-4">Acceptance of Terms</h2>
                            <p className="text-gray-600 mb-4">
                                By accessing and using YtToolBox, you accept and agree to be bound by these
                                Terms of Service. If you do not agree to these terms, please do not use our services.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-black mb-4">Use of Services</h2>
                            <p className="text-gray-600 mb-4">
                                Our services are provided free of charge for personal and commercial use. You may:
                            </p>
                            <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                                <li>Download YouTube thumbnails for legitimate purposes</li>
                                <li>Generate timestamp links and embed codes</li>
                                <li>Use our tools unlimited times without registration</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-black mb-4">Prohibited Activities</h2>
                            <p className="text-gray-600 mb-4">
                                You agree not to:
                            </p>
                            <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                                <li>Use our services for any illegal purposes</li>
                                <li>Attempt to harm or disrupt our services</li>
                                <li>Violate YouTube's Terms of Service</li>
                                <li>Infringe on copyright or intellectual property rights</li>
                                <li>Use automated systems to abuse our services</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-black mb-4">Intellectual Property</h2>
                            <p className="text-gray-600 mb-4">
                                YtToolBox and its original content, features, and functionality are owned by
                                YtToolBox and are protected by international copyright, trademark, and other
                                intellectual property laws.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-black mb-4">Disclaimer</h2>
                            <p className="text-gray-600 mb-4">
                                Our services are provided "as is" without warranties of any kind. We do not
                                guarantee that our services will be uninterrupted, secure, or error-free.
                                You use our services at your own risk.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-black mb-4">Limitation of Liability</h2>
                            <p className="text-gray-600 mb-4">
                                YtToolBox shall not be liable for any indirect, incidental, special, consequential,
                                or punitive damages resulting from your use of our services.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-black mb-4">Third-Party Content</h2>
                            <p className="text-gray-600 mb-4">
                                Our services interact with YouTube content. We are not responsible for the
                                content, accuracy, or availability of third-party materials. All YouTube content
                                is subject to YouTube's Terms of Service.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-black mb-4">Changes to Terms</h2>
                            <p className="text-gray-600 mb-4">
                                We reserve the right to modify these terms at any time. Changes will be effective
                                immediately upon posting. Your continued use of our services constitutes acceptance
                                of the modified terms.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-black mb-4">Contact Information</h2>
                            <p className="text-gray-600 mb-4">
                                For questions about these Terms of Service, please visit our{" "}
                                <a href="/contact" className="text-purple-main hover:underline">contact page</a>.
                            </p>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
