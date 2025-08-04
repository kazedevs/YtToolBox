import {
  Box,
  Container,
  Typography,
} from "@mui/material";
import { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    document.title = "About YT ToolBox - Free YouTube Tools & Services";
  }, []);
  const features = [
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 19V5C21 3.9 20.1 3 19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19ZM8.5 13.5L11 16.51L14.5 12L19 18H5L8.5 13.5Z" fill="#7b1fa2"/>
        </svg>
      ),
      title: "Download Thumbnails",
      description:
        "Get high-quality thumbnails from any YouTube video in various resolutions with just one click.",
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 3V12.55C11.41 12.21 10.73 12 10 12C7.79 12 6 13.79 6 16S7.79 20 10 20S14 18.21 14 16V7H18V3H12Z" fill="#7b1fa2"/>
        </svg>
      ),
      title: "Timestamp Link Generator",
      description:
        "Create direct links to specific moments in YouTube videos for easy sharing.",
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 16.17L4.83 12L3.41 13.41L9 19L21 7L19.59 5.59L9 16.17Z" fill="#7b1fa2"/>
        </svg>
      ),
      title: "Embed Code Generator",
      description:
        "Generate responsive HTML embed codes for YouTube videos with customizable options.",
    },
  ];

  return (
    <>
      <Box sx={{ py: { xs: 4, md: 8 }, bgcolor: "background.default" }}>
      <Container maxWidth="lg">
        {/* Hero Section */}
        <Box
          sx={{
            textAlign: "center",
            mb: { xs: 6, md: 8 },
            px: { xs: 2, sm: 0 },
          }}
        >
          <Typography
            variant="h3"
            component="h1"
            sx={{
              fontWeight: 800,
              mb: 3,
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
              lineHeight: 1.2,
              color: "#000000",
            }}
          >
            About
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{
              maxWidth: "800px",
              mx: "auto",
              fontSize: { xs: "1rem", sm: "1.1rem" },
              lineHeight: 1.6,
            }}
          >
            YT ToolBox is your one-stop solution for downloading YouTube
            content. Get thumbnails, audio, video info, and channel details
            quickly and easily - all for free and without any watermarks.
          </Typography>
        </Box>

        {/* Features Grid */}
        <Box sx={{ mb: { xs: 8, md: 10 } }}>
          <Typography
            variant="h4"
            component="h2"
            sx={{
              fontWeight: 700,
              mb: 4,
              textAlign: "center",
              color: "#000000",
            }}
          >
            Our Powerful Features
          </Typography>
          <Typography
            variant="h6"
            component="h3"
            sx={{
              textAlign: "center",
              mb: 6,
              color: "text.secondary",
              fontWeight: 400,
              fontSize: "1.1rem",
            }}
          >
            Everything you need to enhance your YouTube experience
          </Typography>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
              gap: 4,
              maxWidth: "1200px",
              mx: "auto",
            }}
          >
            {features.map((feature, index) => (
              <Box key={index} sx={{ p: 4, textAlign: 'center', border: '1px solid #e0e0e0', borderRadius: 2, transition: 'transform 0.2s ease-in-out', '&:hover': { transform: 'translateY(-2px)', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' } }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                  {feature.icon}
                </Box>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, color: '#333333' }}>
                  {feature.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {feature.description}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Story Section */}
        <Box>
          <Typography
            variant="h4"
            component="h2"
            sx={{
              fontWeight: 700,
              mb: 6,
              textAlign: "center",
              position: "relative",
              color: "#000000",
              "&:after": {
                content: '""',
                display: "block",
                width: "80px",
                height: "4px",
                background: "#000000",
                margin: "16px auto 0",
                borderRadius: "2px",
              },
            }}
          >
            Why Choose Us
          </Typography>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
              gap: 4,
              alignItems: "center",
              mt: 6,
            }}
          >
            <Box>
              <Typography
                variant="h5"
                component="h3"
                sx={{ fontWeight: 600, mb: 2, color: "#000000" }}
              >
                Built for Creators, by Creators
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                We understand the challenges of content creation because we've been there.
                Our tools are designed to solve real problems that creators face every day.
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                From thumbnail downloads to embed code generation, every feature is
                crafted with the creator's workflow in mind. We're constantly improving
                and adding new tools based on community feedback.
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Join thousands of creators who trust YT ToolBox to streamline their
                content creation process and grow their channels.
              </Typography>
            </Box>
            <Box sx={{ textAlign: "center" }}>
              <svg width="300" height="200" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="50" y="50" width="200" height="100" rx="8" fill="#f3e5f5"/>
                <circle cx="100" cy="100" r="15" fill="#7b1fa2"/>
                <circle cx="150" cy="100" r="15" fill="#7b1fa2"/>
                <circle cx="200" cy="100" r="15" fill="#7b1fa2"/>
              </svg>
            </Box>
          </Box>
        </Box>
      </Container>
      </Box>
    </>
  );
};

export default About;