import {
  Box,
  Container,
  Typography,
} from "@mui/material";
import { useEffect } from 'react';

const Privacy = () => {
  useEffect(() => {
    document.title = "Privacy Policy - YT ToolBox";
  }, []);

  return (
    <Box sx={{ py: { xs: 4, md: 8 }, bgcolor: "#ffffff", minHeight: "100vh", display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Container maxWidth="lg">
        <Box sx={{ maxWidth: "800px", mx: "auto", px: { xs: 2, sm: 0 }, textAlign: 'center' }}>
          <Typography
            variant="h3"
            component="h1"
            sx={{
              fontWeight: 800,
              mb: 4,
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
              lineHeight: 1.2,
              color: "#000000",
            }}
          >
            Privacy Policy
          </Typography>
          
          <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.6, color: '#000000' }}>
            Last updated: August 4, 2025
          </Typography>

          <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, mt: 4, color: '#000000' }}>
            What We Collect
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.6, color: '#000000' }}>
            We collect very little information about you. When you use our tools, we may collect:
          </Typography>
          <Box sx={{ textAlign: 'center', maxWidth: '600px', mx: 'auto', mb: 2 }}>
            <ul style={{ paddingLeft: '20px', color: '#000000', display: 'inline-block', textAlign: 'left' }}>
              <li style={{ color: '#000000' }}>Your YouTube video URLs (only when you use our tools)</li>
              <li style={{ color: '#000000' }}>Basic usage information (like which tools you use)</li>
              <li style={{ color: '#000000' }}>Technical information (browser type, device type)</li>
            </ul>
          </Box>

          <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, mt: 4, color: '#000000' }}>
            What We Don't Collect
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.6, color: '#000000' }}>
            We never collect:
          </Typography>
          <Box sx={{ textAlign: 'center', maxWidth: '600px', mx: 'auto', mb: 2 }}>
            <ul style={{ paddingLeft: '20px', color: '#000000', display: 'inline-block', textAlign: 'left' }}>
              <li style={{ color: '#000000' }}>Your personal information (name, email, phone)</li>
              <li style={{ color: '#000000' }}>Your YouTube login details</li>
              <li style={{ color: '#000000' }}>Your browsing history</li>
              <li style={{ color: '#000000' }}>Any files from your device</li>
            </ul>
          </Box>

          <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, mt: 4, color: '#000000' }}>
            How We Use Your Information
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.6, color: '#000000' }}>
            We use the information we collect only to:
          </Typography>
          <Box sx={{ textAlign: 'center', maxWidth: '600px', mx: 'auto', mb: 2 }}>
            <ul style={{ paddingLeft: '20px', color: '#000000', display: 'inline-block', textAlign: 'left' }}>
              <li style={{ color: '#000000' }}>Provide our YouTube tools and services</li>
              <li style={{ color: '#000000' }}>Improve our website and tools</li>
              <li style={{ color: '#000000' }}>Fix technical problems</li>
            </ul>
          </Box>

          <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, mt: 4, color: '#000000' }}>
            Data Storage
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.6, color: '#000000' }}>
            We don't store your YouTube videos or personal data on our servers. 
            All processing happens in your browser or temporarily on our servers 
            and is deleted immediately after use.
          </Typography>

          <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, mt: 4, color: '#000000' }}>
            Third-Party Services
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.6, color: '#000000' }}>
            We don't share your information with any third-party companies. 
            Our tools work directly with YouTube's public APIs.
          </Typography>

          <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, mt: 4, color: '#000000' }}>
            Your Rights
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.6, color: '#000000' }}>
            You have the right to:
          </Typography>
          <Box sx={{ textAlign: 'center', maxWidth: '600px', mx: 'auto', mb: 2 }}>
            <ul style={{ paddingLeft: '20px', color: '#000000', display: 'inline-block', textAlign: 'left' }}>
              <li style={{ color: '#000000' }}>Use our tools without creating an account</li>
              <li style={{ color: '#000000' }}>Use our tools without providing personal information</li>
              <li style={{ color: '#000000' }}>Stop using our services at any time</li>
            </ul>
          </Box>

          <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, mt: 4, color: '#000000' }}>
            Changes to This Policy
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.6, color: '#000000' }}>
            We may update this privacy policy from time to time. Any changes will be 
            posted on this page with a new "Last updated" date.
          </Typography>

          <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, mt: 4, color: '#000000' }}>
            Contact Us
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.6, color: '#000000' }}>
            If you have questions about this privacy policy, please contact us.
          </Typography>

          <Typography variant="body1" sx={{ mt: 4, fontStyle: 'italic', color: '#000000' }}>
            This privacy policy is designed to be simple and clear. We believe in 
            transparency and protecting your privacy while providing useful tools.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Privacy;
