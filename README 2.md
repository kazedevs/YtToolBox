# YtToolBox - Free YouTube Tools Suite

A comprehensive collection of free YouTube tools built with React, TypeScript, and Vite. This web application provides creators and users with essential YouTube utilities without requiring registration.

## Features

### Available Tools
- **YouTube Thumbnail Downloader**: Download HD thumbnails from any YouTube video
- **Timestamp Link Generator**: Create shareable links that start at specific timestamps
- **Embed Code Generator**: Generate customizable YouTube embed codes for websites
- **Responsive Design**: Works seamlessly on desktop and mobile devices

### Technical Stack
- **Frontend**: React 18 with TypeScript
- **Styling**: Material-UI (MUI) v5
- **Build Tool**: Vite
- **Package Manager**: pnpm
- **Deployment**: Vercel
- **SEO**: React Helmet Async for meta tags and structured data

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- pnpm package manager

### Installation
```bash
# Clone the repository
git clone [repository-url]

# Navigate to project directory
cd YtToolBox-updated/Frontend/yttoolbox

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

### Build for Production
```bash
# Build the project
pnpm build

# Preview production build
pnpm preview
```

## Project Structure

```
YtToolBox-updated/
├── Frontend/
│   └── yttoolbox/
│       ├── src/
│       │   ├── pages/          # Individual tool pages
│       │   ├── components/     # Reusable components
│       │   ├── hooks/         # Custom React hooks
│       │   └── utils/         # Utility functions
│       ├── public/            # Static assets
│       │   ├── robots.txt     # SEO robots configuration
│       │   └── sitemap.xml    # SEO sitemap
│       ├── vercel.json        # Vercel deployment configuration
│       └── package.json       # Project dependencies
```

## SEO Configuration

The application includes comprehensive SEO optimization:
- Structured data markup (JSON-LD)
- Open Graph meta tags
- Twitter Card meta tags
- Canonical URLs pointing to yttoolbox.com
- XML sitemap for search engines
- Robots.txt configuration

## Deployment

This project is configured for deployment on Vercel:

1. Push changes to the main branch
2. Connect your GitHub repository to Vercel
3. Deploy automatically on push to main
4. Domain configured: yttoolbox.com

## Contributing

Contributions are welcome! Please feel free to submit issues and pull requests.

## License

This project is open source and available under the MIT License.
