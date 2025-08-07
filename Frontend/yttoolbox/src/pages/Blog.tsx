import { Box, Typography, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Blog = () => {
  const navigate = useNavigate();
  
  const blogPosts = [
    {
      id: "youtube-thumbnail-optimization-guide",
      title: "Complete Guide to YouTube Thumbnail Optimization",
      date: "2024-03-15",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=400&fit=crop",
      imageAlt: "YouTube thumbnail optimization guide",
      excerpt: "Learn how to create eye-catching thumbnails that boost your click-through rates and grow your channel."
    },
    {
      id: "youtube-creator-tools-2024",
      title: "Top 10 Tools Every YouTube Creator Needs in 2024",
      date: "2024-03-10",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=400&fit=crop",
      imageAlt: "YouTube creator tools and workflow optimization",
      excerpt: "Discover essential tools that can streamline your content creation workflow and help you succeed on YouTube."
    },
    {
      id: "youtube-seo-beginners-guide",
      title: "Understanding YouTube SEO: A Beginner's Guide",
      date: "2024-03-05",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=400&fit=crop",
      imageAlt: "YouTube SEO optimization tutorial and guide",
      excerpt: "Master the basics of YouTube SEO to get your videos discovered by more viewers organically."
    }
  ];

  return (
    <Box sx={{ py: 4, minHeight: '80vh' }}>
      <Container maxWidth="lg">
        <Typography variant="h2" component="h1" gutterBottom align="center" sx={{ fontWeight: 700, color: '#FF0000', mb: 2 }}>
          YtToolBox Blog
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" sx={{ mb: 6 }}>
          Latest insights, tips, and guides for YouTube creators
        </Typography>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }, gap: 4 }}>
          {blogPosts.map((post) => (
            <Box 
              key={post.id} 
              onClick={() => navigate(`/blog/${post.id}`)}
              sx={{ 
                cursor: 'pointer',
                transition: 'opacity 0.2s ease',
                '&:hover': {
                  opacity: 0.8
                }
              }}
            >
              <Box
                component="img"
                src={post.image}
                alt={post.imageAlt}
                sx={{ 
                  width: '100%', 
                  height: 200, 
                  objectFit: 'cover',
                  borderRadius: 2,
                  mb: 2
                }}
              />
              <Typography variant="body1" component="h3" sx={{ fontWeight: 400, color: '#000000', mb: 1 }}>
                {post.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                {post.excerpt}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, color: 'text.secondary' }}>
                <Typography variant="caption">{post.date}</Typography>
                <Typography variant="caption">•</Typography>
                <Typography variant="caption">{post.readTime}</Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Blog;
