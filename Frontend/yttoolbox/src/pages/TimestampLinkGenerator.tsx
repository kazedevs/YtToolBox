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
} from "@mui/material";
import { ContentCopy as CopyIcon } from "@mui/icons-material";
import MoreToolsSection from "../components/MoreToolsSection";

const TimestampLinkGenerator = () => {
  const [url, setUrl] = useState("");
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");
  const [generatedLink, setGeneratedLink] = useState("");
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const extractVideoId = (url: string) => {
    const regex =
      /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  const generateTimestampLink = () => {
    if (!url.trim()) {
      setError("Please enter a YouTube URL");
      return;
    }

    const videoId = extractVideoId(url);
    if (!videoId) {
      setError("Invalid YouTube URL");
      return;
    }

    const h = parseInt(hours) || 0;
    const m = parseInt(minutes) || 0;
    const s = parseInt(seconds) || 0;

    const totalSeconds = h * 3600 + m * 60 + s;

    if (totalSeconds < 0) {
      setError("Please enter valid time values");
      return;
    }

    const timestampLink = `https://youtu.be/${videoId}?t=${totalSeconds}`;
    setGeneratedLink(timestampLink);
    setError("");
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(generatedLink);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <>
      <Helmet>
        <title>
          YouTube Timestamp Link Generator - Create Shareable Links | YtToolBox
        </title>
        <meta
          name="description"
          content="Create YouTube links that start at specific timestamps. Generate shareable links for YouTube videos at any exact time - hours, minutes, and seconds. 100% free tool."
        />
        <meta
          name="keywords"
          content="youtube timestamp generator, youtube timestamp link, youtube time link, share youtube at specific time, youtube timestamp url, youtube start time link"
        />
        <meta
          property="og:title"
          content="YouTube Timestamp Link Generator - Create Shareable Links"
        />
        <meta
          property="og:description"
          content="Create YouTube links that start at specific timestamps. Generate shareable links for YouTube videos at any exact time."
        />
        <meta
          property="og:url"
          content="https://yttoolbox.com/youtube-timestamp-link-generator"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://yttoolbox.com/og-timestamp-generator.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="YouTube Timestamp Link Generator - Create Shareable Links"
        />
        <meta
          name="twitter:description"
          content="Create YouTube links that start at specific timestamps. 100% free tool."
        />
        <meta
          name="twitter:image"
          content="https://yttoolbox.com/og-timestamp-generator.jpg"
        />
        <link
          rel="canonical"
          href="https://yttoolbox.com/youtube-timestamp-link-generator"
        />

        {/* Structured Data */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "YouTube Timestamp Link Generator",
              "description": "Free tool to create YouTube links that start at specific timestamps",
              "sameAs": ["https://yttoolbox.com/youtube-timestamp-link-generator"],
              "applicationCategory": "MultimediaApplication",
              "operatingSystem": "Web",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "featureList": [
                "Create timestamped YouTube links",
                "Support for hours, minutes, seconds",
                "Shareable links",
                "No registration required"
              ]
            }
          `}
        </script>
      </Helmet>

      <Container maxWidth="md" sx={{ py: 4 }}>
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            sx={{
              fontWeight: 700,
              color: "#000000",
              mb: 2,
              fontSize: { xs: "2rem", md: "2.5rem" },
            }}
          >
            YouTube Timestamp Link Generator
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "#666666",
              fontWeight: 400,
              maxWidth: 600,
              mx: "auto",
            }}
          >
            Create shareable YouTube links that start at a specific timestamp
          </Typography>
        </Box>

        <Card
          elevation={0}
          sx={{
            border: "1px solid #e0e0e0",
            borderRadius: 3,
            background: "linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.08)",
          }}
        >
          <CardContent sx={{ p: { xs: 3, md: 5 } }}>
            <Box sx={{ mb: 3 }}>
              <TextField
                fullWidth
                label="YouTube URL"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://www.youtube.com/watch?v=..."
                variant="outlined"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 2,
                    backgroundColor: "#ffffff",
                    "&:hover fieldset": {
                      borderColor: "#1976d2",
                    },
                  },
                }}
              />
            </Box>

            <Typography
              variant="h5"
              gutterBottom
              sx={{
                fontWeight: 600,
                color: "#000000",
                mb: 3,
              }}
            >
              Set Timestamp
            </Typography>

            <Grid container spacing={2} sx={{ mb: 4 }}>
              <Grid size={{ xs: 4 }}>
                <TextField
                  fullWidth
                  label="Hours"
                  type="number"
                  value={hours}
                  onChange={(e) => setHours(e.target.value)}
                  inputProps={{ min: 0 }}
                  variant="outlined"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 2,
                      backgroundColor: "#ffffff",
                      "&:hover fieldset": {
                        borderColor: "#1976d2",
                      },
                    },
                  }}
                />
              </Grid>
              <Grid size={{ xs: 4 }}>
                <TextField
                  fullWidth
                  label="Minutes"
                  type="number"
                  value={minutes}
                  onChange={(e) => setMinutes(e.target.value)}
                  inputProps={{ min: 0, max: 59 }}
                  variant="outlined"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 2,
                      backgroundColor: "#ffffff",
                      "&:hover fieldset": {
                        borderColor: "#1976d2",
                      },
                    },
                  }}
                />
              </Grid>
              <Grid size={{ xs: 4 }}>
                <TextField
                  fullWidth
                  label="Seconds"
                  type="number"
                  value={seconds}
                  onChange={(e) => setSeconds(e.target.value)}
                  inputProps={{ min: 0, max: 59 }}
                  variant="outlined"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 2,
                      backgroundColor: "#ffffff",
                      "&:hover fieldset": {
                        borderColor: "#1976d2",
                      },
                    },
                  }}
                />
              </Grid>
            </Grid>

            {error && (
              <Alert
                severity="error"
                sx={{
                  mb: 3,
                  borderRadius: 2,
                  fontWeight: 500,
                  "& .MuiAlert-icon": {
                    color: "#d32f2f",
                  },
                }}
              >
                {error}
              </Alert>
            )}

            <Button
              variant="contained"
              onClick={generateTimestampLink}
              fullWidth
              size="large"
              sx={{
                background: "linear-gradient(135deg, #1976d2 0%, #1565c0 100%)",
                color: "#ffffff",
                fontWeight: 600,
                fontSize: "1.1rem",
                py: 1.5,
                borderRadius: 3,
                border: "none",
                boxShadow: "0 4px 16px rgba(25, 118, 210, 0.3)",
                "&:hover": {
                  background:
                    "linear-gradient(135deg, #1565c0 0%, #0d47a1 100%)",
                  boxShadow: "0 6px 20px rgba(25, 118, 210, 0.4)",
                },
                "&:disabled": {
                  background: "#e0e0e0",
                  color: "#9e9e9e",
                  boxShadow: "none",
                },
              }}
            >
              Generate Timestamp Link
            </Button>

            {generatedLink && (
              <Box sx={{ mt: 4 }}>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{
                    fontWeight: 600,
                    color: "#000000",
                    mb: 2,
                  }}
                >
                  Generated Link:
                </Typography>
                <Box
                  sx={{
                    p: 2,
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    backgroundColor: "#f8f9fa",
                    border: "1px solid #e0e0e0",
                    borderRadius: 3,
                    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      flexGrow: 1,
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                      fontFamily: "monospace",
                      fontSize: "0.9rem",
                      color: "#333333",
                    }}
                  >
                    {generatedLink}
                  </Typography>
                  <Button
                    onClick={copyToClipboard}
                    variant="contained"
                    size="small"
                    className="copy-button-clean"
                    sx={{
                      backgroundColor: copied ? "#2e7d32" : "#4caf50",
                      color: "#ffffff",
                      fontWeight: 600,
                      borderRadius: 2,
                      textTransform: "none",
                      px: 2,
                      minWidth: "auto",
                      border: "none !important",
                      outline: "none !important",
                      boxShadow: "none !important",
                      filter: "none !important",
                      transition: "all 0.2s ease-in-out",
                      "&:hover": {
                        backgroundColor: copied ? "#2e7d32" : "#45a049",
                        border: "none !important",
                        outline: "none !important",
                        boxShadow:
                          "0 2px 8px rgba(76, 175, 80, 0.3) !important",
                        filter: "none !important",
                      },
                      "&:focus": {
                        border: "none !important",
                        outline: "none !important",
                        boxShadow: "none !important",
                        filter: "none !important",
                      },
                      "&:active": {
                        border: "none !important",
                        outline: "none !important",
                        boxShadow: "none !important",
                        filter: "none !important",
                      },
                    }}
                    startIcon={<CopyIcon />}
                  >
                    {copied ? "Copied!" : "Copy"}
                  </Button>
                </Box>

                {/* Quick Tips */}
                <Box
                  sx={{
                    mt: 3,
                    p: 2,
                    backgroundColor: "#e3f2fd",
                    borderRadius: 2,
                  }}
                >
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{ fontWeight: 600, color: "#1976d2", fontSize: "1rem" }}
                  >
                    💡 Quick Tips:
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 1 }}
                  >
                    • Your link is ready to share! Paste it in emails, social
                    media, or messages
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 1 }}
                  >
                    • Test your link by clicking it to ensure it starts at the
                    right time
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    • The link format:{" "}
                    <code
                      style={{
                        backgroundColor: "#f5f5f5",
                        padding: "2px 4px",
                        borderRadius: 2,
                      }}
                    >
                      youtu.be/VIDEO_ID?t=SECONDS
                    </code>
                  </Typography>
                </Box>
              </Box>
            )}
          </CardContent>
        </Card>

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
              gutterBottom
              sx={{
                fontWeight: 700,
                color: "#000000",
                textAlign: "center",
                mb: 3,
              }}
            >
              How It Works
            </Typography>

            <Grid container spacing={3}>
              <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                <Box sx={{ textAlign: "center", p: 2 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      backgroundColor: "#1976d2",
                      color: "white",
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 1rem",
                      fontWeight: "bold",
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
                    Copy your YouTube video URL and paste it into the input
                    field
                  </Typography>
                </Box>
              </Grid>

              <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                <Box sx={{ textAlign: "center", p: 2 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      backgroundColor: "#1976d2",
                      color: "white",
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 1rem",
                      fontWeight: "bold",
                    }}
                  >
                    2
                  </Typography>
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{ fontWeight: 600, color: "#000000" }}
                  >
                    Set Timestamp
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Enter the exact time (hours, minutes, seconds) where you
                    want the video to start
                  </Typography>
                </Box>
              </Grid>

              <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                <Box sx={{ textAlign: "center", p: 2 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      backgroundColor: "#1976d2",
                      color: "white",
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 1rem",
                      fontWeight: "bold",
                    }}
                  >
                    3
                  </Typography>
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{ fontWeight: 600, color: "#000000" }}
                  >
                    Generate Link
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Click the generate button to create your custom timestamp
                    link
                  </Typography>
                </Box>
              </Grid>

              <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                <Box sx={{ textAlign: "center", p: 2 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      backgroundColor: "#1976d2",
                      color: "white",
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 1rem",
                      fontWeight: "bold",
                    }}
                  >
                    4
                  </Typography>
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{ fontWeight: 600, color: "#000000" }}
                  >
                    Copy & Share
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Copy your generated link and share it anywhere you want
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
              gutterBottom
              sx={{
                fontWeight: 700,
                color: "#000000",
                textAlign: "center",
                mb: 4,
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
                  What is a YouTube timestamp link?
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  A YouTube timestamp link is a special URL that starts a video
                  at a specific time. Instead of starting from the beginning,
                  viewers will jump directly to the timestamp you specify.
                </Typography>
              </Box>

              <Box sx={{ mb: 3 }}>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ fontWeight: 600, color: "#000000" }}
                >
                  What YouTube URLs are supported?
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  We support all standard YouTube URL formats including:
                  <br />
                  • youtube.com/watch?v=VIDEO_ID
                  <br />
                  • youtu.be/VIDEO_ID
                  <br />
                  • youtube.com/embed/VIDEO_ID
                  <br />• And any variations with additional parameters
                </Typography>
              </Box>

              <Box sx={{ mb: 3 }}>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ fontWeight: 600, color: "#000000" }}
                >
                  How do I find the exact time for my timestamp?
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  While watching the YouTube video, pause at the exact moment
                  you want to create a timestamp for. Look at the time display
                  in the video player - that's your timestamp! You can also
                  right-click on the video and select "Copy video URL at current
                  time" for reference.
                </Typography>
              </Box>

              <Box sx={{ mb: 3 }}>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ fontWeight: 600, color: "#000000" }}
                >
                  Can I create timestamps longer than 1 hour?
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Yes! Our tool supports timestamps of any length. Simply enter
                  the hours, minutes, and seconds fields accordingly. For
                  example, 1 hour 30 minutes 45 seconds would be entered as
                  1:30:45.
                </Typography>
              </Box>

              <Box sx={{ mb: 3 }}>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ fontWeight: 600, color: "#000000" }}
                >
                  Will the timestamp work on mobile devices?
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Yes! Timestamp links work perfectly on all devices including
                  smartphones, tablets, and desktop computers. The video will
                  start at your specified time regardless of the platform.
                </Typography>
              </Box>

              <Box sx={{ mb: 3 }}>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ fontWeight: 600, color: "#000000" }}
                >
                  Can I edit the timestamp after creating the link?
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  To change the timestamp, simply return to this tool, enter the
                  same video URL, and set a new time. Generate a new link with
                  your updated timestamp.
                </Typography>
              </Box>

              <Box sx={{ mb: 3 }}>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ fontWeight: 600, color: "#000000" }}
                >
                  Do timestamp links expire?
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  No, YouTube timestamp links never expire as long as the
                  original video remains available on YouTube. They will
                  continue to work indefinitely.
                </Typography>
              </Box>

              <Box sx={{ mb: 3 }}>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ fontWeight: 600, color: "#000000" }}
                >
                  Can I use this for live streams or premieres?
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Timestamp links work best for regular uploaded videos. For
                  live streams and premieres, timestamps will only work after
                  the stream has ended and been processed by YouTube.
                </Typography>
              </Box>

              <Box sx={{ mb: 3 }}>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ fontWeight: 600, color: "#000000" }}
                >
                  Is there a limit to how many timestamps I can create?
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  No limits! You can create as many timestamp links as you need.
                  Each video can have multiple timestamp links for different
                  moments.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Container>
      </Container>
      <MoreToolsSection />
    </>
  );
};

export default TimestampLinkGenerator;
