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
    const q = searchParams.get('q');
    const channelId = id || q;

    if (!channelId) {
        return NextResponse.json({
            success: false,
            error: 'Channel ID is required'
        }, { status: 400 });
    }

    try {
        let channelData;

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

            const channel = searchData.items[0];
            channelData = {
                id: channel.snippet.channelId,
                snippet: {
                    title: channel.snippet.channelTitle,
                    thumbnails: channel.snippet.thumbnails
                }
            };
        } else {
            // It's a channel ID, fetch directly
            const channelResponse = await fetch(
                `${YOUTUBE_API_BASE}/channels?part=snippet&id=${encodeURIComponent(channelId)}&key=${API_KEY}`
            );

            if (!channelResponse.ok) {
                throw new Error('Failed to fetch channel info');
            }

            const channelDataResponse = await channelResponse.json();

            if (!channelDataResponse.items || channelDataResponse.items.length === 0) {
                return NextResponse.json({
                    success: false,
                    error: 'Channel not found'
                }, { status: 404 });
            }

            channelData = channelDataResponse.items[0];
        }

        const response = {
            success: true,
            data: {
                title: channelData.snippet.title,
                channelId: channelData.id,
                thumbnails: {
                    default: {
                        url: channelData.snippet.thumbnails.default?.url || '',
                        width: channelData.snippet.thumbnails.default?.width || 88,
                        height: channelData.snippet.thumbnails.default?.height || 88
                    },
                    medium: {
                        url: channelData.snippet.thumbnails.medium?.url || '',
                        width: channelData.snippet.thumbnails.medium?.width || 240,
                        height: channelData.snippet.thumbnails.medium?.height || 240
                    },
                    high: {
                        url: channelData.snippet.thumbnails.high?.url ||
                            channelData.snippet.thumbnails.medium?.url ||
                            channelData.snippet.thumbnails.default?.url || '',
                        width: channelData.snippet.thumbnails.high?.width || 800,
                        height: channelData.snippet.thumbnails.high?.height || 800
                    }
                }
            }
        };

        return NextResponse.json(response);
    } catch (error) {
        console.error('Error fetching channel info:', error);

        let errorMessage = 'Failed to fetch channel information';
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
