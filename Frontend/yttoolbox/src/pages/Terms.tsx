import { Box, Container, Typography, List, ListItem, ListItemText } from '@mui/material';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const Terms = () => {
  useEffect(() => {
    document.title = "Terms of Service - YT ToolBox | YouTube Tools Terms";
  }, []);
  return (
    <>
      <Helmet>
        <title>Terms of Service - YtToolBox</title>
        <meta name="description" content="Read the Terms of Service for YtToolBox - free YouTube tools including thumbnail downloader, timestamp generator, and embed code generator." />
        <meta property="og:title" content="Terms of Service - YtToolBox" />
        <meta property="og:url" content="https://yttoolbox.com/terms" />
        <link rel="canonical" href="https://yttoolbox.com/terms" />
      </Helmet>
      <Box sx={{ py: { xs: 4, md: 8 }, bgcolor: '#ffffff', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Container maxWidth="lg">
          <Box sx={{ maxWidth: '800px', mx: 'auto', px: { xs: 2, sm: 0 }, textAlign: 'center' }}>
            <Typography variant="h3" component="h1" sx={{ fontWeight: 800, mb: 4, fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }, lineHeight: 1.2, color: '#000000' }}>
              Terms of Service
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, color: '#000000', lineHeight: 1.6 }}>
              Last updated: August 4, 2025
            </Typography>
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, mt: 4, color: '#000000' }}>
              Acceptance of Terms
            </Typography>
            <Typography variant="body1" sx={{ mb: 2, color: '#000000', lineHeight: 1.6 }}>
              By accessing and using YtToolBox, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not use our services.
            </Typography>

            <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, mt: 4, color: '#000000' }}>
              Use of Service
            </Typography>
            <Typography variant="body1" sx={{ mb: 2, color: '#000000', lineHeight: 1.6 }}>
              YtToolBox provides free tools for YouTube content creators and viewers. You agree to use these tools only for lawful purposes and in accordance with these Terms.
            </Typography>
            <List sx={{ color: '#000000', display: 'inline-block', textAlign: 'left' }}>
              <ListItem sx={{ color: '#000000' }}>
                <ListItemText primary="You may use our tools for personal and commercial purposes" sx={{ color: '#000000' }} />
              </ListItem>
              <ListItem sx={{ color: '#000000' }}>
                <ListItemText primary="You may not use our tools to violate YouTube's terms of service" sx={{ color: '#000000' }} />
              </ListItem>
              <ListItem sx={{ color: '#000000' }}>
                <ListItemText primary="You may not attempt to reverse engineer or modify our tools" sx={{ color: '#000000' }} />
              </ListItem>
              <ListItem sx={{ color: '#000000' }}>
                <ListItemText primary="You may not use our tools for spam or malicious activities" sx={{ color: '#000000' }} />
              </ListItem>
            </List>

            <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, mt: 4, color: '#000000' }}>
              Intellectual Property
            </Typography>
            <Typography variant="body1" sx={{ mb: 2, color: '#000000', lineHeight: 1.6 }}>
              All content and tools provided by YtToolBox are for informational and educational purposes. The tools help users access publicly available YouTube content.
            </Typography>
            <List sx={{ color: '#000000', display: 'inline-block', textAlign: 'left' }}>
              <ListItem sx={{ color: '#000000' }}>
                <ListItemText primary="All tools and content are provided 'as is' without warranties" sx={{ color: '#000000' }} />
              </ListItem>
              <ListItem sx={{ color: '#000000' }}>
                <ListItemText primary="We respect YouTube's intellectual property rights" sx={{ color: '#000000' }} />
              </ListItem>
              <ListItem sx={{ color: '#000000' }}>
                <ListItemText primary="Users are responsible for their use of downloaded content" sx={{ color: '#000000' }} />
              </ListItem>
            </List>

            <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, mt: 4, color: '#000000' }}>
              Disclaimer
            </Typography>
            <Typography variant="body1" sx={{ color: '#000000' }}>
              Our tools are provided "as is" without any warranties. We do not guarantee the accuracy, completeness, or reliability of any information obtained through our services.
            </Typography>
            <Typography variant="body1" sx={{ mb: 2, color: '#000000', lineHeight: 1.6 }}>
              YtToolBox is not responsible for any damages resulting from the use of our tools. Our tools are provided for educational purposes only.
            </Typography>

            <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, mt: 4, color: '#000000' }}>
              Limitation of Liability
            </Typography>
            <Typography variant="body1" sx={{ color: '#000000' }}>
              YtToolBox shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from the use of or inability to use our services.
            </Typography>

            <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, mt: 4, color: '#000000' }}>
              Changes to Terms
            </Typography>
            <Typography variant="body1" sx={{ mb: 2, color: '#000000', lineHeight: 1.6 }}>
              We may update these Terms of Service from time to time. Any changes will be posted on this page with a new "Last updated" date.
            </Typography>

            <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 3, mt: 4, color: '#000000' }}>
              Contact Information
            </Typography>
            <Typography variant="body1" sx={{ color: '#000000', lineHeight: 1.6 }}>
              If you have questions about these Terms of Service, please contact us.
            </Typography>
            <Typography variant="body1" sx={{ mt: 1, color: '#000000' }}>
              Email: support@yttoolbox.com
            </Typography>
        </Box>
      </Container>
    </Box>
  </>
  );
};

export default Terms;
