import { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Card,
  CardContent,
  Grid,
  Paper,
  InputAdornment,
} from "@mui/material";
import {
  Download as DownloadIcon,
  Link as LinkIcon,
  ContentPaste,
  AutoFixHigh,
  Download,
} from "@mui/icons-material";
import MoreToolsSection from "../components/MoreToolsSection";

interface ThumbnailData {
  url: string;
  title: string;
  thumbnails: {
    quality: string;
    url: string;
    width: number;
    height: number;
  }[];
}

const ThumbnailDownloader = () => {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [thumbnails, setThumbnails] = useState<ThumbnailData | null>(null);


  const extractVideoId = (url: string) => {
    const patterns = [
      /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
      /youtube\.com\/watch\?.*v=([^&\n?#]+)/,
      /youtube\.com\/v\/([^&\n?#]+)/,
      /youtube\.com\/shorts\/([^&\n?#]+)/,
    ];

    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match && match[1]) {
        return match[1];
      }
    }
    return null;
  };

  const handleDownload = async () => {
    if (!url.trim()) {
      setError("Please enter a YouTube URL");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const videoId = extractVideoId(url);
      if (!videoId) {
        setError(
          "Invalid YouTube URL format. Try formats like:\n• youtube.com/watch?v=VIDEO_ID\n• youtu.be/VIDEO_ID\n• youtube.com/shorts/VIDEO_ID"
        );
        return;
      }

      // Generate thumbnail URLs for different qualities
      const thumbnailUrls = [
        {
          quality: "High Quality",
          url: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
          width: 1280,
          height: 720,
        },
      ];

      // Validate thumbnail existence
      const validThumbnails = [];
      for (const thumb of thumbnailUrls) {
        try {
          const response = await fetch(thumb.url, { method: "HEAD" });
          if (response.ok) {
            validThumbnails.push(thumb);
          }
        } catch (err) {
          console.warn(`Failed to validate thumbnail: ${thumb.quality}`);
        }
      }

      if (validThumbnails.length === 0) {
        setError(
          "No thumbnails found for this video. The video might be private or deleted."
        );
        return;
      }

      setThumbnails({
        url,
        title: "",
        thumbnails: validThumbnails,
      });
      setError("");
    } catch (err) {
      setError(
        "Failed to fetch thumbnails. Please check the URL and try again."
      );
      setThumbnails(null);
    } finally {
      setLoading(false);
    }
  };

  const handleImageDownload = async (imageUrl: string, quality: string) => {
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const downloadUrl = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = downloadUrl;
      a.download = `youtube-thumbnail-${quality
        .toLowerCase()
        .replace(/\s+/g, "-")}.jpg`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(downloadUrl);
    } catch (err) {
      console.error("Download failed:", err);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <Container
        maxWidth="lg"
        sx={{
          px: { xs: 2, sm: 3 },
          py: { xs: 4, md: 6 },
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box sx={{ textAlign: "center", maxWidth: 800 }}>
          <Typography
            variant="h1"
            fontWeight={700}
            gutterBottom
            sx={{
              fontSize: { xs: "1.75rem", sm: "2.25rem", md: "2.75rem" },
              lineHeight: 1.3,
              color: "#000000",
            }}
          >
            YouTube Thumbnail Downloader
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "#606060",
              fontSize: { xs: "1rem", sm: "1.1rem" },
              fontWeight: 400,
            }}
          >
            Download high-quality thumbnails from any YouTube video instantly
          </Typography>
        </Box>
      </Container>

      {/* Thumbnail Downloader Section */}
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
              YouTube Thumbnail Downloader
            </Typography>
            <Typography
              variant="h6"
              sx={{
                mb: 4,
                textAlign: "center",
                color: "#606060",
                fontWeight: 400,
                fontSize: "1.1rem",
              }}
            >
              Enter a URL to get started
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
              <TextField
                fullWidth
                placeholder="https://youtube.com/watch?v=..."
                value={url}
                onChange={(e) => {
                  setUrl(e.target.value);
                  setError("");
                }}
                variant="outlined"
                size="medium"
                error={!!error}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 3,
                    backgroundColor: "#ffffff",
                    "& fieldset": {
                      border: "2px solid #e0e0e0",
                    },
                    "&:hover fieldset": {
                      border: "2px solid #FF0000",
                    },
                    "&.Mui-focused fieldset": {
                      border: "2px solid #FF0000",
                    },
                    "&.Mui-error fieldset": {
                      border: "2px solid #FF0000",
                    },
                  },
                  "& .MuiInputBase-input": {
                    fontSize: "1.1rem",
                    py: 2,
                    "&:focus": {
                      outline: "none",
                    },
                  },
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start" sx={{ mr: 1 }}>
                      <LinkIcon sx={{ color: "#FF0000", fontSize: 24 }} />
                    </InputAdornment>
                  ),
                }}
              />

              {error && (
                <Typography
                  variant="body2"
                  color="error"
                  sx={{
                    textAlign: "center",
                    fontWeight: 500,
                    backgroundColor: "rgba(255, 0, 0, 0.1)",
                    p: 1,
                    borderRadius: 2,
                    color: "#CC0000",
                  }}
                >
                  {error}
                </Typography>
              )}

              <Button
                fullWidth
                variant="contained"
                onClick={handleDownload}
                disabled={loading}
                size="large"
                sx={{
                  py: 2,
                  fontWeight: 600,
                  borderRadius: 3,
                  textTransform: "none",
                  fontSize: "1.1rem",
                  backgroundColor: "#FF0000",
                  boxShadow: "0 4px 12px rgba(255, 0, 0, 0.3)",
                  color: "#ffffff",
                }}
                startIcon={<DownloadIcon sx={{ fontSize: 24 }} />}
              >
                {loading ? "Processing..." : "Get Thumbnail"}
              </Button>
            </Box>
          </Paper>
        </Box>
      </Container>

    {/* Thumbnail Preview - Above How It Works */}
    {thumbnails && (
        <Container
          maxWidth="lg"
          sx={{ px: { xs: 2, sm: 3 }, py: { xs: 4, md: 6 } }}
        >
          <Card
            elevation={4}
            sx={{
              mb: 6,
              borderRadius: 4,
              overflow: "hidden",
              boxShadow: 6,
              maxWidth: 800,
              mx: "auto",
            }}
          >


            <Box
              sx={{
                p: 4,
                background: "linear-gradient(135deg, #FF0000 0%, #CC0000 100%)",
              }}
            >
              <Typography
                variant="h4"
                sx={{ color: "white", fontWeight: 600, textAlign: "center" }}
              >
                Thumbnail Preview
              </Typography>
            </Box>

            <CardContent sx={{ p: 4 }}>

              <Box
                component="img"
                src={thumbnails.thumbnails[0]?.url}
                alt="Video Thumbnail Preview"
                sx={{
                  width: "100%",
                  maxWidth: 720,
                  height: "auto",
                  borderRadius: 3,
                  mx: "auto",
                  display: "block",
                  boxShadow: 4,
                }}
              />
              <Box sx={{ mt: 3, textAlign: "center" }}>
                <Button
                  variant="contained"
                  onClick={() =>
                    handleImageDownload(
                      thumbnails.thumbnails[0]?.url,
                      thumbnails.thumbnails[0]?.quality
                    )
                  }
                  size="large"
                  sx={{
                    fontWeight: 600,
                    backgroundColor: "#FF0000",
                    color: "white",
                    boxShadow: "0 4px 12px rgba(255, 0, 0, 0.3)",
                    "&:hover": {
                      backgroundColor: "#FF0000",
                      boxShadow: "0 4px 12px rgba(255, 0, 0, 0.3)",
                    },
                  }}
                  startIcon={<DownloadIcon />}
                >
                  Download Thumbnail
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Container>
      )}

      {/* How It Works Section */}
      <Container
        maxWidth="lg"
        sx={{ px: { xs: 2, sm: 3 }, py: { xs: 4, md: 6 } }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{ fontWeight: 600, mb: 4, color: "#000000", textAlign: "center" }}
        >
          How It Works
        </Typography>
        <Grid container spacing={4} sx={{ maxWidth: 1000, mx: "auto" }}>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Card
              elevation={0}
              sx={{
                height: "100%",
                borderRadius: 4,
                backgroundColor: "#ffffff",
                border: "1px solid #e0e0e0",
              }}
            >
              <CardContent
                sx={{
                  p: 4,
                  textAlign: "center",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
                  <ContentPaste sx={{ fontSize: "3rem", color: "#FF0000" }} />
                </Box>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 700, mb: 2, color: "#000000" }}
                >
                  Paste URL
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ flexGrow: 1, color: "#606060" }}
                >
                  Copy and paste any YouTube video URL into our tool
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Card
              elevation={0}
              sx={{
                height: "100%",
                borderRadius: 4,
                backgroundColor: "#ffffff",
                border: "1px solid #e0e0e0",
              }}
            >
              <CardContent
                sx={{
                  p: 4,
                  textAlign: "center",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
                  <AutoFixHigh sx={{ fontSize: "3rem", color: "#FF0000" }} />
                </Box>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 700, mb: 2, color: "#000000" }}
                >
                  Process
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ flexGrow: 1, color: "#606060" }}
                >
                  Our magic extracts all available thumbnails and metadata
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Card
              elevation={0}
              sx={{
                height: "100%",
                borderRadius: 4,
                backgroundColor: "#ffffff",
                border: "1px solid #e0e0e0",
              }}
            >
              <CardContent
                sx={{
                  p: 4,
                  textAlign: "center",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
                  <Download sx={{ fontSize: "3rem", color: "#FF0000" }} />
                </Box>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 700, mb: 2, color: "#000000" }}
                >
                  Download
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ flexGrow: 1, color: "#606060" }}
                >
                  Choose your preferred quality and download instantly
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>



      {/* FAQ Section */}
      <Container
        maxWidth="lg"
        sx={{ px: { xs: 2, sm: 3 }, py: { xs: 4, md: 6 } }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{ fontWeight: 600, mb: 4, color: "#000000", textAlign: "center" }}
        >
          Frequently Asked Questions
        </Typography>
        <Box sx={{ maxWidth: 800, mx: "auto" }}>
          <Box sx={{ mb: 3 }}>
            <Typography
              variant="h6"
              sx={{ fontWeight: 600, color: "#000000", mb: 1 }}
            >
              Is this YouTube Thumbnail Downloader really free?
            </Typography>
            <Typography variant="body1" sx={{ color: "#606060" }}>
              Yes, our YouTube Thumbnail Downloader is completely free to use.
              There are no hidden charges, no subscription fees, and no download
              limits.
            </Typography>
          </Box>

          <Box sx={{ mb: 3 }}>
            <Typography
              variant="h6"
              sx={{ fontWeight: 600, color: "#000000", mb: 1 }}
            >
              What formats are available?
            </Typography>
            <Typography variant="body1" sx={{ color: "#606060" }}>
              We offer multiple formats including maxresdefault (4K), hqdefault,
              mqdefault, and sddefault.
            </Typography>
          </Box>

          <Box sx={{ mb: 3 }}>
            <Typography
              variant="h6"
              sx={{ fontWeight: 600, color: "#000000", mb: 1 }}
            >
              Is there a download limit?
            </Typography>
            <Typography variant="body1" sx={{ color: "#606060" }}>
              No, you can download as many thumbnails as you need without any
              restrictions.
            </Typography>
          </Box>

          <Box sx={{ mb: 3 }}>
            <Typography
              variant="h6"
              sx={{ fontWeight: 600, color: "#000000", mb: 1 }}
            >
              Do I need to register?
            </Typography>
            <Typography variant="body1" sx={{ color: "#606060" }}>
              No registration is required. Simply paste the URL and start
              downloading.
            </Typography>
          </Box>

          <Box sx={{ mb: 3 }}>
            <Typography
              variant="h6"
              sx={{ fontWeight: 600, color: "#000000", mb: 1 }}
            >
              Is it safe to use?
            </Typography>
            <Typography variant="body1" sx={{ color: "#606060" }}>
              Yes, our tool is completely safe. We don't store any data or
              require any permissions.
            </Typography>
          </Box>

          <Box sx={{ mb: 3 }}>
            <Typography
              variant="h6"
              sx={{ fontWeight: 600, color: "#000000", mb: 1 }}
            >
              Can I use thumbnails commercially?
            </Typography>
            <Typography variant="body1" sx={{ color: "#606060" }}>
              Please check YouTube's terms of service and respect copyright laws
              when using thumbnails.
            </Typography>
          </Box>
        </Box>
      </Container>

      <MoreToolsSection />
    </>
  );
};

export default ThumbnailDownloader;
