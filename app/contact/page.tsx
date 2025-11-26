'use client';
import { useState } from "react";
import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Simple form validation
        if (!formData.name || !formData.email || !formData.message) {
            setStatus('error');
            return;
        }

        // Simulate form submission
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });

        // Reset status after 3 seconds
        setTimeout(() => setStatus('idle'), 3000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow pt-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
                    <h1 className="text-4xl font-bold text-black mb-8">Contact Us</h1>

                    <div className="mb-8">
                        <p className="text-gray-600 mb-4">
                            Have a question, suggestion, or feedback? We'd love to hear from you.
                            Fill out the form below and we'll get back to you as soon as possible.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                Name *
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-main focus:border-transparent outline-none transition-all"
                                placeholder="Your name"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                Email *
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-main focus:border-transparent outline-none transition-all"
                                placeholder="your.email@example.com"
                            />
                        </div>

                        <div>
                            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-main focus:border-transparent outline-none transition-all"
                                placeholder="What is this about?"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                Message *
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={6}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-main focus:border-transparent outline-none transition-all resize-none"
                                placeholder="Your message..."
                            />
                        </div>

                        {status === 'success' && (
                            <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                                <p className="text-green-800 text-sm">
                                    Thank you for your message! We'll get back to you soon.
                                </p>
                            </div>
                        )}

                        {status === 'error' && (
                            <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                                <p className="text-red-800 text-sm">
                                    Please fill in all required fields.
                                </p>
                            </div>
                        )}

                        <button
                            type="submit"
                            className="w-full py-3 px-6 bg-purple-main text-white font-medium rounded-lg hover:bg-purple-dark transition-colors"
                        >
                            Send Message
                        </button>
                    </form>

                    <div className="mt-12 pt-8 border-t border-gray-200">
                        <h2 className="text-2xl font-semibold text-black mb-4">Other Ways to Reach Us</h2>
                        <div className="space-y-3 text-gray-600">
                            <p>
                                <strong>Email:</strong>{" "}
                                <a href="mailto:support@yttoolbox.com" className="text-purple-main hover:underline">
                                    support@yttoolbox.com
                                </a>
                            </p>
                            <p>
                                <strong>Response Time:</strong> We typically respond within 24-48 hours
                            </p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
