import {
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  Box,
} from "@mui/material";
import { useLocation } from "react-router-dom";
import { AccessTime, Code, Image } from "@mui/icons-material";

interface Tool {
  title: string;
  description: string;
  icon: React.ElementType;
  url: string;
  iconColor: string;
}

const tools: Tool[] = [
  {
    title: "Timestamp Link Generator",
    description: "Create shareable links that start at specific timestamps",
    icon: AccessTime,
    url: "/youtube-timestamp-link-generator",
    iconColor: "#FF0000",
  },
  {
    title: "Embed Code Generator",
    description: "Generate responsive embed codes with custom options",
    icon: Code,
    url: "/youtube-embed-code-generator",
    iconColor: "#FF6B35",
  },
  {
    title: "Thumbnail Downloader",
    description: "Download high-quality thumbnails instantly",
    icon: Image,
    url: "/youtube-thumbnail-downloader",
    iconColor: "#8B5CF6",
  },
];

const MoreToolsSection = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  
  // Filter out the current tool
  const filteredTools = tools.filter(tool => tool.url !== currentPath);
  
  // Don't render if no tools to show
  if (filteredTools.length === 0) {
    return null;
  }

  return (
    <Container
      maxWidth="lg"
      sx={{ px: { xs: 2, sm: 3 }, py: { xs: 4, md: 6 } }}
    >
      <Typography
        variant="h4"
        gutterBottom
        sx={{ fontWeight: 600, mb: 4, color: "#000000", textAlign: "center" }}
      >
        More YouTube Tools
      </Typography>
      <Grid container spacing={4} justifyContent="center" sx={{ maxWidth: 1000, mx: "auto" }}>
        {filteredTools.map((tool, index) => {
          const IconComponent = tool.icon;
          return (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <Card
                elevation={0}
                sx={{
                  height: "100%",
                  borderRadius: 4,
                  backgroundColor: "#ffffff",
                  border: "1px solid #e0e0e0",
                  cursor: "pointer",
                  transition: "none",
                  "&:hover": {
                    transform: "none",
                    boxShadow: "none",
                  },
                }}
                onClick={() => (window.location.href = tool.url)}
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
                  <Box
                    sx={{ display: "flex", justifyContent: "center", mb: 2 }}
                  >
                    <IconComponent
                      sx={{ fontSize: "2.5rem", color: tool.iconColor }}
                    />
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 700, mb: 2, color: "#000000" }}
                  >
                    {tool.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ flexGrow: 1, color: "#606060" }}
                  >
                    {tool.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default MoreToolsSection;
