import { Box, Container, Typography, Card, CardContent, CardMedia, Button, Chip } from '@mui/material';
import { CalendarToday, AccessTime, Person } from '@mui/icons-material';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Complete Guide to YouTube Thumbnail Optimization",
      excerpt: "Learn how to create eye-catching thumbnails that boost your click-through rates and grow your channel.",
      author: "YtToolBox Team",
      date: "2024-03-15",
      readTime: "5 min read",
      category: "YouTube Tips",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=250&fit=crop"
    },
    {
      id: 2,
      title: "Top 10 Tools Every YouTube Creator Needs in 2024",
      excerpt: "Discover essential tools that can streamline your content creation workflow and help you succeed on YouTube.",
      author: "YtToolBox Team",
      date: "2024-03-10",
      readTime: "8 min read",
      category: "Tools",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=250&fit=crop"
    },
    {
      id: 3,
      title: "Understanding YouTube SEO: A Beginner's Guide",
      excerpt: "Master the basics of YouTube SEO to get your videos discovered by more viewers organically.",
      author: "YtToolBox Team",
      date: "2024-03-05",
      readTime: "6 min read",
      category: "SEO",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=250&fit=crop"
    }
  ];

  return (
    <Box sx={{ py: 8, minHeight: '80vh' }}>
      <Container maxWidth="lg">
        <Typography variant="h2" component="h1" gutterBottom align="center" sx={{ fontWeight: 700, color: '#FF0000', mb: 2 }}>
          YtToolBox Blog
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" sx={{ mb: 6 }}>
          Latest insights, tips, and guides for YouTube creators
        </Typography>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }, gap: 4 }}>
          {blogPosts.map((post) => (
            <Card key={post.id} sx={{ height: '100%', display: 'flex', flexDirection: 'column', borderRadius: 3, boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
              <CardMedia
                component="img"
                height="200"
                image={post.image}
                alt={post.title}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                  <Chip label={post.category} size="small" sx={{ backgroundColor: '#FF0000', color: 'white' }} />
                </Box>
                <Typography gutterBottom variant="h6" component="h3" sx={{ fontWeight: 600 }}>
                  {post.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  {post.excerpt}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 'auto' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    <Person fontSize="small" />
                    <Typography variant="caption">{post.author}</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    <CalendarToday fontSize="small" />
                    <Typography variant="caption">{post.date}</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    <AccessTime fontSize="small" />
                    <Typography variant="caption">{post.readTime}</Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>

        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Typography variant="h6" gutterBottom>
            Stay Updated
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
            Subscribe to get notified about new articles and YouTube updates
          </Typography>
          <Button variant="contained" size="large" sx={{ backgroundColor: '#FF0000', '&:hover': { backgroundColor: '#CC0000' } }}>
            Subscribe to Newsletter
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Blog;
