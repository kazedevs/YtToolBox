import { NextResponse } from 'next/server';

const YOUTUBE_API_BASE = 'https://www.googleapis.com/youtube/v3';
const API_KEY = process.env.YOUTUBE_API_KEY;

export async function GET(request: Request) {
    // Check if API key is configured
    if (!API_KEY) {
        console.error('YOUTUBE_API_KEY environment variable is not set');
        return NextResponse.json({
            error: 'Server configuration error. Please contact the administrator.'
        }, { status: 500 });
    }

    const { searchParams } = new URL(request.url);
    const part = searchParams.get('part');
    const id = searchParams.get('id');
    const q = searchParams.get('q');
    const type = searchParams.get('type');

    if (!part) {
        return NextResponse.json({
            error: 'Missing required parameter: part'
        }, { status: 400 });
    }

    try {
        let apiUrl = '';

        if (q && type === 'channel') {
            // Search for channel by username
            apiUrl = `${YOUTUBE_API_BASE}/search?part=${part}&type=channel&q=${encodeURIComponent(q)}&key=${API_KEY}`;
        } else if (id) {
            // Get channel by ID
            apiUrl = `${YOUTUBE_API_BASE}/channels?part=${part}&id=${encodeURIComponent(id)}&key=${API_KEY}`;
        } else {
            return NextResponse.json({
                error: 'Missing required parameter: id or q'
            }, { status: 400 });
        }

        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error(`YouTube API error: ${response.status}`);
        }

        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        console.error('YouTube API Error:', error);
        return NextResponse.json({
            error: 'Failed to fetch data from YouTube API'
        }, { status: 500 });
    }
}
