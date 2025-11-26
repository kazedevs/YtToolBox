This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## YtToolBox - YouTube Tools Collection

A comprehensive suite of YouTube tools including thumbnail downloaders, profile picture extractors, transcript downloaders, and video-to-blog converters.

### Features

- **YouTube Thumbnail Downloader** - Download video thumbnails in various qualities
- **YouTube Profile Picture Downloader** - Extract channel profile pictures
- **YouTube Transcript Downloader** - Download video transcripts in TXT or SRT formats
- **YouTube Video to Blog Converter** - Convert video transcripts into structured blog posts
- **Channel Banner Downloader** - Download channel banner art
- **And more tools...**

## Getting Started

### Prerequisites

1. **YouTube API Key** (Required for video information and some features):

   - Go to [Google Cloud Console](https://console.developers.google.com/)
   - Create a new project or select an existing one
   - Enable the **YouTube Data API v3**
   - Create credentials → API Key
   - Copy the API key

2. **Environment Setup**:
   ```bash
   cp .env.example .env.local
   ```
   Add your YouTube API key to `.env.local`:
   ```
   YOUTUBE_API_KEY=your_youtube_api_key_here
   ```

### Installation

```bash
npm install
# or
yarn install
# or
pnpm install
```

### Running the Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### YouTube Transcript Features

The transcript functionality uses the `youtube-transcript` library which extracts transcripts directly from YouTube videos without requiring API quota. This includes:

- **Transcript Downloader**: Get raw transcripts with timestamps
- **Video to Blog Converter**: Automatically structure transcripts into blog posts with proper formatting

### API Endpoints

- `/api/youtube-transcript` - Fetch video transcripts (no API key required)
- `/api/video` - Get video information (API key required)
- `/api/thumbnail` - Download video thumbnails
- `/api/channel-info` - Get channel information
- `/api/channel-banner` - Download channel banners

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

**Important**: When deploying to Vercel, make sure to add your `YOUTUBE_API_KEY` as an environment variable in your Vercel project settings.
