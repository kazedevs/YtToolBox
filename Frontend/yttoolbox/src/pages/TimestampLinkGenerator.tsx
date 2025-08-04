import { useState } from 'react';
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
  IconButton
} from '@mui/material';
import { ContentCopy as CopyIcon } from '@mui/icons-material';
import MoreToolsSection from '../components/MoreToolsSection';

const TimestampLinkGenerator = () => {
  const [url, setUrl] = useState('');
  const [hours, setHours] = useState('');
  const [minutes, setMinutes] = useState('');
  const [seconds, setSeconds] = useState('');
  const [generatedLink, setGeneratedLink] = useState('');
  const [error, setError] = useState('');

  const extractVideoId = (url: string) => {
    const regex = /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  const generateTimestampLink = () => {
    if (!url.trim()) {
      setError('Please enter a YouTube URL');
      return;
    }

    const videoId = extractVideoId(url);
    if (!videoId) {
      setError('Invalid YouTube URL');
      return;
    }

    const h = parseInt(hours) || 0;
    const m = parseInt(minutes) || 0;
    const s = parseInt(seconds) || 0;
    
    const totalSeconds = h * 3600 + m * 60 + s;
    
    if (totalSeconds < 0) {
      setError('Please enter valid time values');
      return;
    }

    const timestampLink = `https://youtu.be/${videoId}?t=${totalSeconds}`;
    setGeneratedLink(timestampLink);
    setError('');
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(generatedLink);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <>
      <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom align="center">
        YouTube Timestamp Link Generator
      </Typography>
      
      <Typography variant="body1" color="text.secondary" align="center" sx={{ mb: 4 }}>
        Create shareable YouTube links that start at a specific timestamp
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

          <Typography variant="h6" gutterBottom>
            Set Timestamp
          </Typography>
          
          <Grid container spacing={2} sx={{ mb: 3 }}>
            <Grid size={{ xs: 4 }}>
              <TextField
                fullWidth
                label="Hours"
                type="number"
                value={hours}
                onChange={(e) => setHours(e.target.value)}
                inputProps={{ min: 0 }}
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
              />
            </Grid>
          </Grid>

          {error && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {error}
            </Alert>
          )}

          <Button
            variant="contained"
            color="primary"
            onClick={generateTimestampLink}
            fullWidth
            size="large"
          >
            Generate Timestamp Link
          </Button>

          {generatedLink && (
            <Box sx={{ mt: 3 }}>
              <Typography variant="h6" gutterBottom>
                Generated Link:
              </Typography>
              <Paper 
                variant="outlined" 
                sx={{ 
                  p: 2, 
                  display: 'flex', 
                  alignItems: 'center',
                  gap: 1,
                  bgcolor: 'grey.50'
                }}
              >
                <Typography 
                  variant="body2" 
                  sx={{ 
                    flexGrow: 1,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap'
                  }}
                >
                  {generatedLink}
                </Typography>
                <IconButton 
                  onClick={copyToClipboard}
                  color="primary"
                  size="small"
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

export default TimestampLinkGenerator;
