import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  Container,
  Typography,
  Button,
  Box,
  Paper
} from '@mui/material';
import { Home as HomeIcon } from '@mui/icons-material';

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Page Not Found - YtToolBox</title>
        <meta name="description" content="The page you're looking for doesn't exist. Return to YtToolBox for free YouTube tools." />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <Container maxWidth="sm" sx={{ 
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        py: 4
      }}>
        <Paper elevation={0} sx={{ 
          p: { xs: 4, sm: 6 },
          textAlign: 'center',
          border: '1px solid #e0e0e0',
          borderRadius: 2
        }}>
          <Box sx={{ mb: 3 }}>
            <Typography 
              variant="h1" 
              sx={{ 
                fontSize: { xs: '6rem', sm: '8rem' },
                fontWeight: 700,
                color: '#000000',
                lineHeight: 1,
                mb: 2
              }}
            >
              404
            </Typography>
            <Typography 
              variant="h2" 
              sx={{ 
                fontSize: { xs: '1.5rem', sm: '2rem' },
                fontWeight: 600,
                color: '#000000',
                mb: 2
              }}
            >
              Page Not Found
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                color: '#606060',
                fontSize: { xs: '1rem', sm: '1.1rem' },
                mb: 4,
                maxWidth: 400,
                mx: 'auto'
              }}
            >
              The page you're looking for doesn't exist or has been moved.
            </Typography>
          </Box>

          <Button
            variant="contained"
            size="large"
            startIcon={<HomeIcon />}
            onClick={() => navigate('/')}
            sx={{
              backgroundColor: '#000000',
              color: '#ffffff',
              fontWeight: 600,
              px: 4,
              py: 1.5,
              textTransform: 'none',
              borderRadius: 2,
              '&:hover': {
                backgroundColor: '#333333',
              }
            }}
          >
            Go to Home
          </Button>
        </Paper>
      </Container>
    </>
  );
};

export default ErrorPage;
