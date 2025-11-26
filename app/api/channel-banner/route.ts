import { NextResponse } from 'next/server';

const YOUTUBE_API_BASE = 'https://www.googleapis.com/youtube/v3';
const API_KEY = process.env.YOUTUBE_API_KEY;

export async function GET(request: Request) {
    // Check if API key is configured
    if (!API_KEY) {
        console.error('YOUTUBE_API_KEY environment variable is not set');
        return NextResponse.json({
            success: false,
            error: 'Server configuration error. Please contact the administrator.'
        }, { status: 500 });
    }

    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const channelId = id;

    if (!channelId) {
        return NextResponse.json({
            success: false,
            error: 'Channel ID is required'
        }, { status: 400 });
    }

    try {
        let actualChannelId = channelId;

        // Check if channelId is a username (starts with @) or actual channel ID
        if (channelId && (channelId.toString().startsWith('@') || !channelId.toString().startsWith('UC'))) {
            // It's a username or custom URL, use search to find channel
            const searchResponse = await fetch(
                `${YOUTUBE_API_BASE}/search?part=snippet&type=channel&q=${encodeURIComponent(channelId)}&key=${API_KEY}`
            );

            if (!searchResponse.ok) {
                throw new Error('Failed to search for channel');
            }

            const searchData = await searchResponse.json();

            if (!searchData.items || searchData.items.length === 0) {
                return NextResponse.json({
                    success: false,
                    error: 'Channel not found'
                }, { status: 404 });
            }

            actualChannelId = searchData.items[0].snippet.channelId;
        }

        // Fetch channel details including brandingSettings
        const channelResponse = await fetch(
            `${YOUTUBE_API_BASE}/channels?part=snippet,brandingSettings&id=${encodeURIComponent(actualChannelId)}&key=${API_KEY}`
        );

        if (!channelResponse.ok) {
            throw new Error('Failed to fetch channel info');
        }

        const channelData = await channelResponse.json();

        if (!channelData.items || channelData.items.length === 0) {
            return NextResponse.json({
                success: false,
                error: 'Channel not found'
            }, { status: 404 });
        }

        const channel = channelData.items[0];
        const bannerUrl = channel.brandingSettings?.image?.bannerExternalUrl;

        if (!bannerUrl) {
            return NextResponse.json({
                success: false,
                error: 'This channel does not have a banner image'
            }, { status: 404 });
        }

        const response = {
            success: true,
            data: {
                title: channel.snippet.title,
                channelId: channel.id,
                bannerUrl: bannerUrl,
                // Different banner sizes
                banners: {
                    mobile: `${bannerUrl}=w640-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj`,
                    tablet: `${bannerUrl}=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj`,
                    desktop: `${bannerUrl}=w1440-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj`,
                    tv: `${bannerUrl}=w2120-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj`,
                    original: bannerUrl
                }
            }
        };

        return NextResponse.json(response);
    } catch (error) {
        console.error('Error fetching channel banner:', error);

        let errorMessage = 'Failed to fetch channel banner';
        let statusCode = 500;

        if (error instanceof Error) {
            if (error.message.includes('timeout')) {
                errorMessage = 'Request timeout. Please try again.';
                statusCode = 408;
            } else if (error.message.includes('fetch')) {
                errorMessage = 'Network error. Please check your connection.';
                statusCode = 503;
            } else {
                errorMessage = error.message;
            }
        }

        return NextResponse.json({
            success: false,
            error: errorMessage
        }, { status: statusCode });
    }
}
