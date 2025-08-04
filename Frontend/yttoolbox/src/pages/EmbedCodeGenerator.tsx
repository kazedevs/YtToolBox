import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Card,
  CardContent,
  Grid,
  Alert,
  Paper,
  IconButton,
  FormControlLabel,
  Checkbox,
  FormGroup
} from '@mui/material';
import { ContentCopy as CopyIcon } from '@mui/icons-material';
import MoreToolsSection from '../components/MoreToolsSection';

const EmbedCodeGenerator = () => {
  const [url, setUrl] = useState('');
  const [width, setWidth] = useState('560');
  const [height, setHeight] = useState('315');
  const [startTime, setStartTime] = useState('');
  const [showControls, setShowControls] = useState(true);
  const [showInfo, setShowInfo] = useState(true);
  const [autoplay, setAutoplay] = useState(false);
  const [generatedCode, setGeneratedCode] = useState('');
  const [error, setError] = useState('');

  const extractVideoId = (url: string) => {
    const regex = /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  const generateEmbedCode = () => {
    if (!url.trim()) {
      setError('Please enter a YouTube URL');
      return;
    }

    const videoId = extractVideoId(url);
    if (!videoId) {
      setError('Invalid YouTube URL');
      return;
    }

    let embedUrl = `https://www.youtube.com/embed/${videoId}`;
    const params = new URLSearchParams();

    if (startTime.trim()) {
      const time = parseInt(startTime);
      if (!isNaN(time) && time > 0) {
        params.append('start', time.toString());
      }
    }

    if (!showControls) params.append('controls', '0');
    if (!showInfo) params.append('showinfo', '0');
    if (autoplay) params.append('autoplay', '1');

    const queryString = params.toString();
    if (queryString) {
      embedUrl += `?${queryString}`;
    }

    const embedCode = `<iframe width="${width}" height="${height}" src="${embedUrl}" frameborder="0" ${!showControls ? '' : 'allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen'}></iframe>`;
    
    setGeneratedCode(embedCode);
    setError('');
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(generatedCode);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <>
      <Helmet>
        <title>YouTube Embed Code Generator - Customizable Embed Codes | YtToolBox</title>
        <meta name="description" content="Generate customizable YouTube embed codes with options for autoplay, controls, modest branding, and more. Create responsive embed codes for your website or blog. 100% free." />
        <meta name="keywords" content="youtube embed code generator, youtube embed generator, youtube iframe generator, youtube embed code, youtube video embed, responsive youtube embed, custom youtube embed" />
        <meta property="og:title" content="YouTube Embed Code Generator - Customizable Embed Codes" />
        <meta property="og:description" content="Generate customizable YouTube embed codes with options for autoplay, controls, and more. Create responsive embed codes for your website." />
        <meta property="og:url" content="https://yttoolbox.com/embed-code-generator" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://yttoolbox.com/og-embed-generator.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="YouTube Embed Code Generator - Customizable Embed Codes" />
        <meta name="twitter:description" content="Generate customizable YouTube embed codes with options for autoplay, controls, and more." />
        <meta name="twitter:image" content="https://yttoolbox.com/og-embed-generator.jpg" />
        <link rel="canonical" href="https://yttoolbox.com/embed-code-generator" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "YouTube Embed Code Generator",
              "description": "Generate customizable YouTube embed codes for websites",
              "sameAs": ["https://yttoolbox.com/embed-code-generator"],
              "applicationCategory": "MultimediaApplication",
              "operatingSystem": "Web",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "featureList": [
                "Customizable YouTube embed codes",
                "Responsive embed options",
                "Autoplay settings",
                "Control customization",
                "No registration required"
              ]
            }
          `}
        </script>
      </Helmet>
      
      <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom align="center">
        YouTube Embed Code Generator
      </Typography>
      
      <Typography variant="body1" color="text.secondary" align="center" sx={{ mb: 4 }}>
        Generate customizable embed codes for YouTube videos
      </Typography>

      <Card elevation={3}>
        <CardContent sx={{ p: 4 }}>
          <Box sx={{ mb: 3 }}>
            <TextField
              fullWidth
              label="YouTube URL"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://www.youtube.com/watch?v=..."
              variant="outlined"
            />
          </Box>

          <Grid container spacing={2} sx={{ mb: 3 }}>
            <Grid size={{ xs: 6 }}>
              <TextField
                fullWidth
                label="Width (px)"
                type="number"
                value={width}
                onChange={(e) => setWidth(e.target.value)}
                inputProps={{ min: 200 }}
              />
            </Grid>
            <Grid size={{ xs: 6 }}>
              <TextField
                fullWidth
                label="Height (px)"
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                inputProps={{ min: 200 }}
              />
            </Grid>
          </Grid>

          <TextField
            fullWidth
            label="Start Time (seconds)"
            type="number"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            placeholder="e.g., 30"
            sx={{ mb: 3 }}
            inputProps={{ min: 0 }}
          />

          <FormGroup sx={{ mb: 3 }}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={showControls}
                  onChange={(e) => setShowControls(e.target.checked)}
                />
              }
              label="Show Video Controls"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={showInfo}
                  onChange={(e) => setShowInfo(e.target.checked)}
                />
              }
              label="Show Video Info"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={autoplay}
                  onChange={(e) => setAutoplay(e.target.checked)}
                />
              }
              label="Autoplay"
            />
          </FormGroup>

          {error && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {error}
            </Alert>
          )}

          <Button
            variant="contained"
            color="primary"
            onClick={generateEmbedCode}
            fullWidth
            size="large"
          >
            Generate Embed Code
          </Button>

          {generatedCode && (
            <Box sx={{ mt: 3 }}>
              <Typography variant="h6" gutterBottom>
                Generated Embed Code:
              </Typography>
              <Paper 
                variant="outlined" 
                sx={{ 
                  p: 2, 
                  position: 'relative',
                  bgcolor: 'grey.50'
                }}
              >
                <Typography 
                  variant="body2" 
                  sx={{ 
                    fontFamily: 'monospace',
                    whiteSpace: 'pre-wrap',
                    wordBreak: 'break-all',
                    pr: 4
                  }}
                >
                  {generatedCode}
                </Typography>
                <IconButton 
                  onClick={copyToClipboard}
                  color="primary"
                  size="small"
                  sx={{ position: 'absolute', top: 8, right: 8 }}
                >
                  <CopyIcon />
                </IconButton>
              </Paper>
            </Box>
          )}
        </CardContent>
      </Card>
    </Container>
    <MoreToolsSection />
    </>
  );
};

export default EmbedCodeGenerator;
