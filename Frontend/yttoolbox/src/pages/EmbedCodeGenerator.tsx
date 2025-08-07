import { useState } from "react";
import { Helmet } from "react-helmet-async";
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
  FormControlLabel,
  Checkbox,
  FormGroup,
} from "@mui/material";
import { ContentCopy as CopyIcon } from "@mui/icons-material";
import MoreToolsSection from "../components/MoreToolsSection";

const EmbedCodeGenerator = () => {
  const [url, setUrl] = useState("");
  const [width, setWidth] = useState("560");
  const [height, setHeight] = useState("315");
  const [startTime, setStartTime] = useState("");
  const [showControls, setShowControls] = useState(true);
  const [showInfo, setShowInfo] = useState(true);
  const [autoplay, setAutoplay] = useState(false);
  const [generatedCode, setGeneratedCode] = useState("");
  const [error, setError] = useState("");

  const extractVideoId = (url: string) => {
    const regex =
      /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  const generateEmbedCode = () => {
    if (!url.trim()) {
      setError("Please enter a YouTube URL");
      return;
    }

    const videoId = extractVideoId(url);
    if (!videoId) {
      setError("Invalid YouTube URL");
      return;
    }

    let embedUrl = `https://www.youtube.com/embed/${videoId}`;
    const params = new URLSearchParams();

    if (startTime.trim()) {
      const time = parseInt(startTime);
      if (!isNaN(time) && time > 0) {
        params.append("start", time.toString());
      }
    }

    if (!showControls) params.append("controls", "0");
    if (!showInfo) params.append("showinfo", "0");
    if (autoplay) params.append("autoplay", "1");

    const queryString = params.toString();
    if (queryString) {
      embedUrl += `?${queryString}`;
    }

    const embedCode = `<iframe width="${width}" height="${height}" src="${embedUrl}" frameborder="0" ${
      !showControls
        ? ""
        : 'allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen'
    }></iframe>`;

    setGeneratedCode(embedCode);
    setError("");
  };

  return (
    <>
      <Helmet>
        <title>
          YouTube Embed Code Generator - Customizable Embed Codes | YtToolBox
        </title>
        <meta
          name="description"
          content="Generate customizable YouTube embed codes with options for autoplay, controls, modest branding, and more. Create responsive embed codes for your website or blog. 100% free."
        />
        <meta
          name="keywords"
          content="youtube embed code generator, youtube embed generator, youtube iframe generator, youtube embed code, youtube video embed, responsive youtube embed, custom youtube embed"
        />
        <meta
          property="og:title"
          content="YouTube Embed Code Generator - Customizable Embed Codes"
        />
        <meta
          property="og:description"
          content="Generate customizable YouTube embed codes with options for autoplay, controls, and more. Create responsive embed codes for your website."
        />
        <meta
          property="og:url"
          content="https://yttoolbox.com/youtube-embed-code-generator"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://yttoolbox.com/og-embed-generator.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="YouTube Embed Code Generator - Customizable Embed Codes"
        />
        <meta
          name="twitter:description"
          content="Generate customizable YouTube embed codes with options for autoplay, controls, and more."
        />
        <meta
          name="twitter:image"
          content="https://yttoolbox.com/og-embed-generator.jpg"
        />
        <link
          rel="canonical"
          href="https://yttoolbox.com/youtube-embed-code-generator"
        />

        {/* Structured Data */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "YouTube Embed Code Generator",
              "description": "Generate customizable YouTube embed codes for websites",
              "sameAs": ["https://yttoolbox.com/youtube-embed-code-generator"],
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

      <Container
        maxWidth="lg"
        sx={{ px: { xs: 2, sm: 3 }, py: { xs: 3, md: 4 } }}
      >
        <Box sx={{ textAlign: "center", mb: 2 }}>
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{
              fontSize: { xs: "1.75rem", sm: "2.25rem", md: "2.75rem" },
              fontWeight: 700,
              lineHeight: 1.3,
              color: "#000000",
            }}
          >
            YouTube Embed Code Generator
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "#606060",
              fontSize: { xs: "1rem", sm: "1.1rem" },
              fontWeight: 400,
            }}
          >
            Generate responsive embed codes from any YouTube video with custom
            options
          </Typography>
        </Box>
      </Container>

      <Container
        maxWidth="lg"
        sx={{
          px: { xs: 2, sm: 3 },
          py: { xs: 4, md: 6 },
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box sx={{ maxWidth: 600, width: "100%" }}>
          <Paper
            elevation={4}
            sx={{
              p: { xs: 4, sm: 5 },
              borderRadius: 4,
              backgroundColor: "#ffffff",
              boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
              border: "1px solid #f0f0f0",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                mb: 1,
                fontWeight: 700,
                textAlign: "center",
                color: "#000000",
                fontSize: { xs: "1.5rem", sm: "1.75rem" },
              }}
            >
              Generate Embed Code
            </Typography>
            <Typography
              variant="body1"
              sx={{
                textAlign: "center",
                color: "#606060",
                mb: 4,
                fontSize: "1rem",
              }}
            >
              Create custom embed codes with advanced options
            </Typography>

            <Box sx={{ space: 2 }}>
              <TextField
                fullWidth
                label="YouTube URL"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://youtube.com/watch?v=VIDEO_ID"
                variant="outlined"
                sx={{ mb: 2 }}
              />

              <Grid container spacing={2}>
                <Grid size={{ xs: 6 }}>
                  <TextField
                    fullWidth
                    label="Width"
                    value={width}
                    onChange={(e) => setWidth(e.target.value)}
                    variant="outlined"
                  />
                </Grid>
                <Grid size={{ xs: 6 }}>
                  <TextField
                    fullWidth
                    label="Height"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    variant="outlined"
                  />
                </Grid>
              </Grid>

              <TextField
                fullWidth
                label="Start Time (seconds)"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
                placeholder="0"
                variant="outlined"
                sx={{ mb: 2 }}
              />

              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={showControls}
                      onChange={(e) => setShowControls(e.target.checked)}
                    />
                  }
                  label="Show Player Controls"
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
                sx={{
                  border: "none",
                }}
              >
                Generate Embed Code
              </Button>

              {generatedCode && (
                <Box sx={{ mt: 3 }}>
                  <Typography variant="h6" gutterBottom>
                    Generated Embed Code:
                  </Typography>
                  <Card variant="outlined">
                    <CardContent>
                      <Typography
                        variant="body2"
                        sx={{
                          fontFamily: "monospace",
                          whiteSpace: "pre-wrap",
                          wordBreak: "break-all",
                          color: "#333333",
                        }}
                      >
                        {generatedCode}
                      </Typography>
                    </CardContent>
                  </Card>
                  <Button
                    variant="outlined"
                    onClick={() => {
                      navigator.clipboard.writeText(generatedCode);
                    }}
                    sx={{ mt: 2 }}
                    startIcon={<CopyIcon />}
                  >
                    Copy Code
                  </Button>
                </Box>
              )}
            </Box>
          </Paper>
        </Box>
      </Container>

      {/* How It Works Section */}
      <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
        <Box
          sx={{
            p: 4,
            backgroundColor: "#f8f9fa",
            borderRadius: 3,
            border: "1px solid #e0e0e0",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              mb: 4,
              color: "#000000",
              textAlign: "center",
            }}
          >
            How It Works
          </Typography>

          <Grid container spacing={4}>
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <Box sx={{ textAlign: "center", p: 2 }}>
                <Typography
                  variant="h6"
                  sx={{
                    backgroundColor: "#1976d2",
                    color: "#ffffff",
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mx: "auto",
                    mb: 2,
                    fontWeight: 600,
                  }}
                >
                  1
                </Typography>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ fontWeight: 600, color: "#000000" }}
                >
                  Paste URL
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Copy your YouTube video URL and paste it into the input field
                </Typography>
              </Box>
            </Grid>

            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <Box sx={{ textAlign: "center", p: 2 }}>
                <Typography
                  variant="h6"
                  sx={{
                    backgroundColor: "#1976d2",
                    color: "#ffffff",
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mx: "auto",
                    mb: 2,
                    fontWeight: 600,
                  }}
                >
                  2
                </Typography>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ fontWeight: 600, color: "#000000" }}
                >
                  Set Options
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Configure dimensions, autoplay, controls and other settings
                </Typography>
              </Box>
            </Grid>

            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <Box sx={{ textAlign: "center", p: 2 }}>
                <Typography
                  variant="h6"
                  sx={{
                    backgroundColor: "#1976d2",
                    color: "#ffffff",
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mx: "auto",
                    mb: 2,
                    fontWeight: 600,
                  }}
                >
                  3
                </Typography>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ fontWeight: 600, color: "#000000" }}
                >
                  Generate Code
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Click generate to create your custom embed code
                </Typography>
              </Box>
            </Grid>

            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <Box sx={{ textAlign: "center", p: 2 }}>
                <Typography
                  variant="h6"
                  sx={{
                    backgroundColor: "#1976d2",
                    color: "#ffffff",
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mx: "auto",
                    mb: 2,
                    fontWeight: 600,
                  }}
                >
                  4
                </Typography>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ fontWeight: 600, color: "#000000" }}
                >
                  Copy & Use
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Copy the generated code and paste it into your website
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>

      {/* FAQ Section */}
      <Container maxWidth="md" sx={{ mt: 4, mb: 6 }}>
        <Box>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              mb: 4,
              color: "#000000",
              textAlign: "center",
            }}
          >
            Frequently Asked Questions
          </Typography>

          <Box sx={{ space: 2 }}>
            <Box sx={{ mb: 3 }}>
              <Typography
                variant="h6"
                gutterBottom
                sx={{ fontWeight: 600, color: "#000000" }}
              >
                What is a YouTube embed code?
              </Typography>
              <Typography variant="body1" color="text.secondary">
                A YouTube embed code is HTML code that allows you to display a
                YouTube video directly on your website or blog. It creates an
                embedded player that visitors can use to watch the video without
                leaving your site.
              </Typography>
            </Box>

            <Box sx={{ mb: 3 }}>
              <Typography
                variant="h6"
                gutterBottom
                sx={{ fontWeight: 600, color: "#000000" }}
              >
                Is the embed code responsive?
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Yes! Our generated embed codes are fully responsive and will
                automatically adjust to fit different screen sizes, from desktop
                to mobile devices.
              </Typography>
            </Box>

            <Box sx={{ mb: 3 }}>
              <Typography
                variant="h6"
                gutterBottom
                sx={{ fontWeight: 600, color: "#000000" }}
              >
                Can I customize the player appearance?
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Absolutely! You can control whether to show player controls,
                video information, enable autoplay, set custom dimensions, and
                specify start times for the video.
              </Typography>
            </Box>

            <Box sx={{ mb: 3 }}>
              <Typography
                variant="h6"
                gutterBottom
                sx={{ fontWeight: 600, color: "#000000" }}
              >
                Will autoplay work on all devices?
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Autoplay behavior varies by browser and device. Most modern
                browsers block autoplay with sound unless the user has
                interacted with your site. The video may autoplay muted on some
                platforms.
              </Typography>
            </Box>

            <Box sx={{ mb: 3 }}>
              <Typography
                variant="h6"
                gutterBottom
                sx={{ fontWeight: 600, color: "#000000" }}
              >
                Do I need special permissions to embed videos?
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Most YouTube videos can be embedded freely. However, some videos
                may have embedding disabled by their creators. If embedding is
                disabled, the video won't play on your site.
              </Typography>
            </Box>

            <Box sx={{ mb: 3 }}>
              <Typography
                variant="h6"
                gutterBottom
                sx={{ fontWeight: 600, color: "#000000" }}
              >
                Can I embed live streams?
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Yes! You can embed both regular videos and live streams using
                the same embed code. Live streams will show the live content
                when active.
              </Typography>
            </Box>

            <Box sx={{ mb: 3 }}>
              <Typography
                variant="h6"
                gutterBottom
                sx={{ fontWeight: 600, color: "#000000" }}
              >
                How do I add the embed code to my website?
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Simply copy the generated code and paste it into your website's
                HTML where you want the video to appear. Most content management
                systems like WordPress also support direct HTML embedding.
              </Typography>
            </Box>

            <Box sx={{ mb: 3 }}>
              <Typography
                variant="h6"
                gutterBottom
                sx={{ fontWeight: 600, color: "#000000" }}
              >
                Does embedding affect video views?
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Yes, embedded videos count toward the total view count on
                YouTube, just like views on the YouTube platform itself.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>

      <MoreToolsSection />
    </>
  );
};

export default EmbedCodeGenerator;
