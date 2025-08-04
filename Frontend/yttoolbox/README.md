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
cd yttoolbox

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
yttoolbox/
├── src/
│   ├── pages/          # Individual tool pages
│   ├── components/     # Reusable components
│   ├── hooks/         # Custom React hooks
│   └── utils/         # Utility functions
├── public/            # Static assets
│   ├── robots.txt     # SEO robots configuration
│   └── sitemap.xml    # SEO sitemap
├── vercel.json        # Vercel deployment configuration
└── package.json       # Project dependencies
```

## SEO Configuration

The application includes comprehensive SEO optimization:
- Structured data markup (JSON-LD)
- Open Graph meta tags
- Twitter Card meta tags
- Canonical URLs
- XML sitemap
- Robots.txt configuration

## Deployment

This project is configured for deployment on Vercel:

1. Push changes to the main branch
2. Connect your GitHub repository to Vercel
3. Deploy automatically on push to main

## Contributing

Contributions are welcome! Please feel free to submit issues and pull requests.

## License

This project is open source and available under the MIT License.

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
