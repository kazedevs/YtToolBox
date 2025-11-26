import { NextResponse } from 'next/server';
import { YoutubeTranscript } from 'youtube-transcript';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const videoId = searchParams.get('videoId');

    if (!videoId) {
        return NextResponse.json({
            success: false,
            error: 'Video ID is required'
        }, { status: 400 });
    }

    try {
        const transcript = await YoutubeTranscript.fetchTranscript(videoId);

        if (!transcript || transcript.length === 0) {
            return NextResponse.json({
                success: false,
                error: 'No transcript available for this video'
            }, { status: 404 });
        }

        // Format transcript with timestamps
        const formattedTranscript = transcript.map(item => ({
            text: item.text,
            offset: item.offset,
            duration: item.duration,
            timestamp: formatTimestamp(item.offset)
        }));

        // Create plain text version
        const plainText = transcript.map(item => item.text).join(' ');

        return NextResponse.json({
            success: true,
            data: {
                transcript: formattedTranscript,
                plainText: plainText,
                totalDuration: transcript[transcript.length - 1]?.offset || 0
            }
        });
    } catch (error) {
        console.error('Error fetching transcript:', error);

        let errorMessage = 'Failed to fetch transcript';

        if (error instanceof Error) {
            if (error.message.includes('Transcript is disabled')) {
                errorMessage = 'Transcript is disabled for this video';
            } else if (error.message.includes('Could not find')) {
                errorMessage = 'No transcript available for this video';
            } else {
                errorMessage = error.message;
            }
        }

        return NextResponse.json({
            success: false,
            error: errorMessage
        }, { status: 500 });
    }
}

function formatTimestamp(milliseconds: number): string {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    if (hours > 0) {
        return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}
