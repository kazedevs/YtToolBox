import { Helmet } from 'react-helmet-async';
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Button
} from '@mui/material';
import DownloadIcon from "@mui/icons-material/Download";
import LinkIcon from "@mui/icons-material/Link";
import CodeIcon from "@mui/icons-material/Code";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>YtToolBox - Free YouTube Tools | Thumbnail Downloader, Timestamp Generator & More</title>
        <meta name="description" content="Complete suite of free YouTube tools including thumbnail downloader, timestamp link generator, embed code generator, and more. Download YouTube thumbnails in HD quality, create shareable timestamps, and generate embed codes - all 100% free with no registration required." />
        <meta name="keywords" content="youtube tools, free youtube tools, youtube thumbnail downloader, youtube timestamp generator, youtube embed code generator, youtube utilities, youtube downloader" />
        <meta property="og:title" content="YtToolBox - Free YouTube Tools Suite" />
        <meta property="og:description" content="Complete suite of free YouTube tools including thumbnail downloader, timestamp link generator, embed code generator, and more. All tools are 100% free with no registration required." />
        <meta property="og:url" content="https://yttoolbox.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://yttoolbox.com/og-home.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="YtToolBox - Free YouTube Tools Suite" />
        <meta name="twitter:description" content="Complete suite of free YouTube tools. All tools are 100% free with no registration required." />
        <meta name="twitter:image" content="https://yttoolbox.com/og-home.jpg" />
        <link rel="canonical" href="https://yttoolbox.com/" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "YtToolBox",
              "alternateName": "YouTube ToolBox",
              "url": "https://yttoolbox.com/",
              "description": "Complete suite of free YouTube tools including thumbnail downloader, timestamp link generator, embed code generator, and more.",
              "publisher": {
                "@type": "Organization",
                "name": "YtToolBox",
                "url": "https://yttoolbox.com/"
              },
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://yttoolbox.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              },
              "mainEntity": {
                "@type": "ItemList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "YouTube Thumbnail Downloader",
                    "url": "https://yttoolbox.com/thumbnail-downloader"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "YouTube Timestamp Link Generator",
                    "url": "https://yttoolbox.com/timestamp-link-generator"
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "YouTube Embed Code Generator",
                    "url": "https://yttoolbox.com/embed-code-generator"
                  }
                ]
              }
            }
          `}
        </script>
      </Helmet>
      
      {/* Tools Section - Three Cards */}
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 }, py: 6 }} id="tools-section">
        <Typography variant="h1" sx={{ 
          mb: 4, 
          textAlign: "center",
          fontWeight: 700,
          color: "#000000",
          fontSize: { xs: "1.75rem", sm: "2.5rem", md: "3rem" }
        }}>
          Free YouTube Tools - Thumbnail Downloader, Timestamp Generator & Embed Creator
        </Typography>
        <Typography variant="h2" sx={{ 
          fontSize: { xs: "1rem", sm: "1.25rem" },
          color: "#606060",
          textAlign: "center",
          mb: 4,
          maxWidth: 800,
          mx: 'auto'
        }}>
          Download YouTube thumbnails in HD quality, generate timestamp links for specific moments, and create responsive embed codes. 100% free online tools with no registration required.
        </Typography>
        
        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: { 
            xs: '1fr', 
            sm: 'repeat(2, 1fr)', 
            md: 'repeat(3, 1fr)' 
          }, 
          gap: 4 
        }}>
          {/* YouTube Thumbnail Downloader Card */}
          <Card 
            elevation={1} 
            sx={{ 
              borderRadius: 2, 
              border: '1px solid #e0e0e0',
              transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
              },
              cursor: 'pointer',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: '#fafafa'
            }}
            onClick={() => window.location.href = '/tools/thumbnail-downloader'}
          >
            <Box sx={{ 
              p: 3, 
              backgroundColor: '#f3e5f5',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '2px 2px 0 0',
              borderBottom: '1px solid #e1bee7'
            }}>
              <DownloadIcon sx={{ fontSize: 48, color: '#7b1fa2' }} />
            </Box>
            <CardContent sx={{ flexGrow: 1, p: 3, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <Box>
                <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 600, color: '#333333' }}>
                  YouTube Thumbnail Downloader
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 3, color: '#666666' }}>
                  Download high-quality thumbnails from any YouTube video in multiple resolutions including HD, SD, and 4K.
                </Typography>
              </Box>
              <Button 
                variant="outlined" 
                fullWidth 
                size="large"
                sx={{ 
                  borderColor: '#7b1fa2',
                  color: '#7b1fa2',
                  '&:hover': { 
                    borderColor: '#4a148c',
                    backgroundColor: 'rgba(123, 31, 162, 0.04)'
                  },
                  mt: 'auto'
                }}
              >
                Start Downloading
              </Button>
            </CardContent>
          </Card>

          {/* YouTube Timestamp Link Generator Card */}
          <Card 
            elevation={1} 
            sx={{ 
              borderRadius: 2, 
              border: '1px solid #e0e0e0',
              transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
              },
              cursor: 'pointer',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: '#fafafa'
            }}
            onClick={() => window.location.href = '/tools/timestamp-link-generator'}
          >
            <Box sx={{ 
              p: 3, 
              backgroundColor: '#f3e5f5',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '2px 2px 0 0',
              borderBottom: '1px solid #e1bee7'
            }}>
              <LinkIcon sx={{ fontSize: 48, color: '#7b1fa2' }} />
            </Box>
            <CardContent sx={{ flexGrow: 1, p: 3, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <Box>
                <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 600, color: '#333333' }}>
                  YouTube Timestamp Link Generator
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 3, color: '#666666' }}>
                  Create shareable YouTube links that start at a specific timestamp. Perfect for sharing highlights.
                </Typography>
              </Box>
              <Button 
                variant="outlined" 
                fullWidth 
                size="large"
                sx={{ 
                  borderColor: '#7b1fa2',
                  color: '#7b1fa2',
                  '&:hover': { 
                    borderColor: '#4a148c',
                    backgroundColor: 'rgba(123, 31, 162, 0.04)'
                  },
                  mt: 'auto'
                }}
              >
                Create Timestamp Link
              </Button>
            </CardContent>
          </Card>

          {/* YouTube Embed Code Generator Card */}
          <Card 
            elevation={1} 
            sx={{ 
              borderRadius: 2, 
              border: '1px solid #e0e0e0',
              transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
              },
              cursor: 'pointer',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: '#fafafa'
            }}
            onClick={() => window.location.href = '/tools/embed-code-generator'}
          >
            <Box sx={{ 
              p: 3, 
              backgroundColor: '#f3e5f5',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '2px 2px 0 0',
              borderBottom: '1px solid #e1bee7'
            }}>
              <CodeIcon sx={{ fontSize: 48, color: '#7b1fa2' }} />
            </Box>
            <CardContent sx={{ flexGrow: 1, p: 3, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <Box>
                <Typography variant="h3" sx={{ fontSize: "1.5rem", fontWeight: 600, mb: 1, color: "#333333" }}>
                  YouTube Embed Code Generator
                </Typography>
                <Typography variant="body1" sx={{ color: "#666666", mb: 3, flexGrow: 1 }}>
                  Generate responsive HTML embed codes for YouTube videos. Create customizable embed codes with adjustable player size, controls, autoplay, and other parameters. Ideal for website developers, bloggers, and content creators who need professional YouTube embeds.
                </Typography>
              </Box>
              <Button 
                variant="outlined" 
                fullWidth 
                size="large"
                sx={{ 
                  borderColor: '#7b1fa2',
                  color: '#7b1fa2',
                  '&:hover': { 
                    borderColor: '#4a148c',
                    backgroundColor: 'rgba(123, 31, 162, 0.04)'
                  },
                  mt: 'auto'
                }}
              >
                Generate Embed Code
              </Button>
            </CardContent>
          </Card>
        </Box>
      </Container>
      {/* How It Works Section */}
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 }, py: { xs: 4, md: 6 } }}>
        <Box sx={{ maxWidth: 800, mx: 'auto', textAlign: 'center' }}>
          <Typography variant="h3" component="h2" sx={{ 
            fontSize: { xs: "1.5rem", sm: "1.75rem", md: "2rem" },
            fontWeight: 600,
            mb: 4,
            color: "#000000"
          }}>
            How It Works
          </Typography>
          
          <Box sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', md: 'row' }, 
            gap: { xs: 3, md: 4 }, 
            justifyContent: 'center', 
            alignItems: 'flex-start' 
          }}>
            <Box sx={{ 
              flex: 1, 
              maxWidth: { xs: '100%', md: 280 }, 
              textAlign: 'center',
              mb: { xs: 2, md: 0 }
            }}>
              <Box sx={{ 
                width: 80, 
                height: 80, 
                mx: 'auto', 
                mb: 2,
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                background: 'linear-gradient(135deg, #FF0000 0%, #CC0000 100%)',
                borderRadius: '50%'
              }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Box>
              <Typography variant="h6" sx={{ mb: 1, fontWeight: 600, color: "#000000" }}>
                Choose Tool
              </Typography>
              <Typography variant="body2" sx={{ color: "#606060" }}>
                Select the YouTube tool you need
              </Typography>
            </Box>
            
            <Box sx={{ 
              flex: 1, 
              maxWidth: { xs: '100%', md: 280 }, 
              textAlign: 'center',
              mb: { xs: 2, md: 0 }
            }}>
              <Box sx={{ 
                width: 80, 
                height: 80, 
                mx: 'auto', 
                mb: 2,
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                background: 'linear-gradient(135deg, #FF6B35 0%, #FF4500 100%)',
                borderRadius: '50%'
              }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7 10L12 15L17 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 15V3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Box>
              <Typography variant="h6" sx={{ mb: 1, fontWeight: 600, color: "#000000" }}>
                Enter Details
              </Typography>
              <Typography variant="body2" sx={{ color: "#606060" }}>
                Paste your YouTube URL
              </Typography>
            </Box>
            
            <Box sx={{ 
              flex: 1, 
              maxWidth: { xs: '100%', md: 280 }, 
              textAlign: 'center'
            }}>
              <Box sx={{ 
                width: 80, 
                height: 80, 
                mx: 'auto', 
                mb: 2,
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                background: 'linear-gradient(135deg, #4CAF50 0%, #45a049 100%)',
                borderRadius: '50%'
              }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7 10L12 15L17 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 15V3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Box>
              <Typography variant="h6" sx={{ mb: 1, fontWeight: 600, color: "#000000" }}>
                Get Results
              </Typography>
              <Typography variant="body2" sx={{ color: "#606060" }}>
                Download or generate instantly
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>

      {/* FAQ Section - Minimal */}
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 }, py: { xs: 4, md: 6 } }}>
        <Box sx={{ maxWidth: 800, mx: 'auto' }}>
          <Typography variant="h2" sx={{ 
            fontSize: { xs: "1.5rem", sm: "1.75rem", md: "2rem" },
            fontWeight: 600,
            mb: 4,
            color: "#000000",
            textAlign: "center"
          }}>
            YouTube Tools FAQ - Complete Guide to Free YouTube Utilities
          </Typography>
          
          <Box sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: 3
          }}>
            <Box>
              <Typography variant="h3" sx={{ fontSize: "1.5rem", fontWeight: 600, mb: 1, color: "#000000" }}>
                Are these YouTube tools really free to use?
              </Typography>
              <Typography variant="body2" sx={{ color: "#606060", mb: 2 }}>
                Yes! All our YouTube tools are completely free to use with no hidden costs. We don't require registration, there's no watermark on downloads, and you can use them unlimited times without any fees.
              </Typography>
            </Box>
            
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 600, color: "#000000" }}>
                What thumbnail resolutions are available for download?
              </Typography>
              <Typography variant="body2" sx={{ color: "#606060", mb: 2 }}>
                Our thumbnail downloader provides multiple resolutions including HD (1280x720), SD (640x480), and HQ (480x360). We always provide the highest available resolution for each video, and you can choose the quality that best suits your needs.
              </Typography>
            </Box>
            
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 600, color: "#000000" }}>
                Do I need to install any software or browser extensions?
              </Typography>
              <Typography variant="body2" sx={{ color: "#606060", mb: 2 }}>
                No installation is required! All our tools work directly in your web browser on any device - desktop, tablet, or mobile. Simply visit our website, paste your YouTube URL, and get instant results without downloading anything.
              </Typography>
            </Box>
            
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 600, color: "#000000" }}>
                Is there a limit on how many times I can use these tools?
              </Typography>
              <Typography variant="body2" sx={{ color: "#606060", mb: 2 }}>
                There are absolutely no usage limits! You can use our YouTube tools as many times as you need, whether you're downloading one thumbnail or generating hundreds of timestamp links. We're here to help with all your YouTube content needs.
              </Typography>
            </Box>
            
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 600, color: "#000000" }}>
                Are these tools safe and secure to use?
              </Typography>
              <Typography variant="body2" sx={{ color: "#606060", mb: 2 }}>
                Yes, our tools are completely safe and secure. We don't store any of your data, don't require any permissions, and don't track your usage. Your privacy is our priority - we simply process your YouTube URL and provide the requested output without storing anything.
              </Typography>
            </Box>
            
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 600, color: "#000000" }}>
                Can I use these tools for commercial purposes?
              </Typography>
              <Typography variant="body2" sx={{ color: "#606060", mb: 2 }}>
                Yes, you can use our tools for both personal and commercial purposes. Whether you're a content creator, marketer, or business owner, feel free to use our tools for your projects. Just ensure you comply with YouTube's terms of service and respect copyright laws.
              </Typography>
            </Box>
            
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 600, color: "#000000" }}>
                How does the timestamp link generator work?
              </Typography>
              <Typography variant="body2" sx={{ color: "#606060", mb: 2 }}>
                Our timestamp link generator creates direct links to specific moments in YouTube videos. Simply paste your YouTube URL, enter the timestamp (like 1:30 or 90 seconds), and we'll generate a shareable link that starts the video at exactly that time. Perfect for sharing specific moments with others.
              </Typography>
            </Box>
            
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 600, color: "#000000" }}>
                What types of embed codes can I generate?
              </Typography>
              <Typography variant="body2" sx={{ color: "#606060", mb: 2 }}>
                Our embed code generator creates responsive HTML embed codes for YouTube videos. You can customize the player size, enable/disable controls, set autoplay options, and configure other parameters. The generated code is ready to paste directly into your website or blog.
              </Typography>
            </Box>
            
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 600, color: "#000000" }}>
                Do you support all YouTube video formats and qualities?
              </Typography>
              <Typography variant="body2" sx={{ color: "#606060" }}>
                Yes, our tools work with all YouTube video formats and support all available qualities. Whether it's a standard video, live stream, or short-form content, our tools will extract the appropriate thumbnails, generate timestamp links, and create embed codes for any public YouTube video.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default HomePage;
