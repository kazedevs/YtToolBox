import { useParams, useNavigate } from 'react-router-dom';
import { Box, Typography, Container, Button } from '@mui/material';
import { ArrowBack, CalendarToday, AccessTime } from '@mui/icons-material';
import { Helmet } from 'react-helmet-async';

// MDX blog posts content (for now, we'll use inline content)
// In a real implementation, these would be loaded from .mdx files
const blogPosts = {
  "youtube-thumbnail-optimization-guide": {
    title: "Complete Guide to YouTube Thumbnail Optimization",
    excerpt: "Learn how to create eye-catching thumbnails that boost your click-through rates and grow your channel.",
    date: "2024-03-15",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=400&fit=crop",
    imageAlt: "YouTube thumbnail optimization guide",
    content: () => (
      <Box sx={{ lineHeight: 1.8, color: '#333' }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 700, mb: 3 }}>
          Why Thumbnails Matter for YouTube Success
        </Typography>
        
        <Typography variant="body1" paragraph>
          Your YouTube thumbnail is often the first impression viewers have of your content. A compelling thumbnail can be the difference between a viewer clicking on your video or scrolling past it. In fact, YouTube reports that 90% of the best-performing videos have custom thumbnails.
        </Typography>

        <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mt: 4, mb: 2 }}>
          Key Elements of High-Converting Thumbnails
        </Typography>

        <Typography variant="body1" paragraph>
          <strong>1. Clear, High-Quality Images:</strong> Use high-resolution images (1280x720 minimum) that are clear and visually appealing even when scaled down.
        </Typography>

        <Typography variant="body1" paragraph>
          <strong>2. Bold, Readable Text:</strong> If using text, keep it minimal (3-4 words max) and ensure it's large enough to read on mobile devices.
        </Typography>

        <Typography variant="body1" paragraph>
          <strong>3. Consistent Branding:</strong> Develop a recognizable style with consistent colors, fonts, and layout across your channel.
        </Typography>

        <Typography variant="body1" paragraph>
          <strong>4. Emotional Appeal:</strong> Faces showing clear emotions tend to perform better as they create instant connection with viewers.
        </Typography>

        <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mt: 4, mb: 2 }}>
          Technical Specifications
        </Typography>

        <Typography variant="body1" paragraph>
          YouTube recommends thumbnails with a 16:9 aspect ratio, minimum width of 640 pixels, and file sizes under 2MB. The optimal format is JPG, GIF, or PNG.
        </Typography>

        <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mt: 4, mb: 2 }}>
          Testing and Optimization
        </Typography>

        <Typography variant="body1" paragraph>
          Use YouTube Analytics to track your thumbnail performance. Look at click-through rates (CTR) and experiment with different designs. A/B testing different thumbnails can significantly improve your video's performance over time.
        </Typography>
      </Box>
    )
  },
  "youtube-creator-tools-2024": {
    title: "Top 10 Tools Every YouTube Creator Needs in 2024",
    excerpt: "Discover essential tools that can streamline your content creation workflow and help you succeed on YouTube.",
    date: "2024-03-10",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=400&fit=crop",
    imageAlt: "YouTube creator tools and workflow optimization",
    content: () => (
      <Box sx={{ lineHeight: 1.8, color: '#333' }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 700, mb: 3 }}>
          Essential Tools for Modern YouTube Creators
        </Typography>
        
        <Typography variant="body1" paragraph>
          Creating quality YouTube content requires more than just a camera and good ideas. The right tools can streamline your workflow, improve your content quality, and help you grow your channel more effectively.
        </Typography>

        <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mt: 4, mb: 2 }}>
          1. YtToolBox Suite
        </Typography>

        <Typography variant="body1" paragraph>
          Start with our own comprehensive toolkit that includes thumbnail downloaders, timestamp link generators, embed code creators, and more. These tools are specifically designed for YouTube creators and are completely free to use.
        </Typography>

        <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mt: 4, mb: 2 }}>
          2. Video Editing Software
        </Typography>

        <Typography variant="body1" paragraph>
          <strong>DaVinci Resolve:</strong> Professional-grade editing with excellent color correction tools
          <br />
          <strong>Adobe Premiere Pro:</strong> Industry standard with seamless Creative Cloud integration
          <br />
          <strong>Final Cut Pro:</strong> Optimized for Mac users with powerful features
        </Typography>

        <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mt: 4, mb: 2 }}>
          3. Thumbnail Creation Tools
        </Typography>

        <Typography variant="body1" paragraph>
          <strong>Canva:</strong> User-friendly design tool with YouTube-specific templates
          <br />
          <strong>Adobe Photoshop:</strong> Professional image editing for custom designs
          <br />
          <strong>Figma:</strong> Collaborative design tool perfect for team workflows
        </Typography>

        <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mt: 4, mb: 2 }}>
          4. Analytics and Research
        </Typography>

        <Typography variant="body1" paragraph>
          <strong>TubeBuddy:</strong> Browser extension for keyword research and optimization
          <br />
          <strong>vidIQ:</strong> Competitor analysis and trend discovery
          <br />
          <strong>YouTube Analytics:</strong> Native insights for your channel performance
        </Typography>

        <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mt: 4, mb: 2 }}>
          5. Audio and Music
        </Typography>

        <Typography variant="body1" paragraph>
          <strong>Epidemic Sound:</strong> Royalty-free music and sound effects
          <br />
          <strong>Artlist:</strong> High-quality music licensing for creators
          <br />
          <strong>Audacity:</strong> Free audio editing software
        </Typography>
      </Box>
    )
  },
  "youtube-seo-beginners-guide": {
    title: "Understanding YouTube SEO: A Beginner's Guide",
    excerpt: "Master the basics of YouTube SEO to get your videos discovered by more viewers organically.",
    date: "2024-03-05",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=400&fit=crop",
    imageAlt: "YouTube SEO optimization tutorial and guide",
    content: () => (
      <Box sx={{ lineHeight: 1.8, color: '#333' }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 700, mb: 3 }}>
          YouTube SEO Fundamentals
        </Typography>
        
        <Typography variant="body1" paragraph>
          YouTube is the second largest search engine in the world, making SEO crucial for getting your content discovered. Understanding how YouTube's algorithm works can dramatically increase your video's visibility and reach.
        </Typography>

        <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mt: 4, mb: 2 }}>
          Keyword Research
        </Typography>

        <Typography variant="body1" paragraph>
          Start by identifying what your target audience is searching for. Use YouTube's autocomplete feature, check competitor videos, and utilize tools like Google Trends and TubeBuddy to find relevant keywords with good search volume.
        </Typography>

        <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mt: 4, mb: 2 }}>
          Optimizing Video Titles
        </Typography>

        <Typography variant="body1" paragraph>
          Your title should include your primary keyword naturally while being compelling enough to encourage clicks. Keep it under 60 characters to avoid truncation in search results.
        </Typography>

        <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mt: 4, mb: 2 }}>
          Description Optimization
        </Typography>

        <Typography variant="body1" paragraph>
          Use the first 100-150 characters wisely as this appears in search results. Include your primary keyword within the first 25 words and provide a detailed, helpful description that encourages engagement.
        </Typography>

        <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mt: 4, mb: 2 }}>
          Tags and Hashtags
        </Typography>

        <Typography variant="body1" paragraph>
          Use a mix of broad and specific tags. Include your primary keyword, variations, and related terms. Hashtags should be relevant and not excessive - 3-5 well-chosen hashtags are usually sufficient.
        </Typography>

        <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mt: 4, mb: 2 }}>
          Engagement Signals
        </Typography>

        <Typography variant="body1" paragraph>
          YouTube values engagement. Encourage likes, comments, and shares. Respond to comments promptly and create content that sparks discussion. Higher engagement signals to YouTube that your content is valuable.
        </Typography>
      </Box>
    )
  }
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const post = slug ? blogPosts[slug as keyof typeof blogPosts] : null;

  if (!post) {
    return (
      <Box sx={{ py: 8, minHeight: '80vh' }}>
        <Container maxWidth="md">
          <Typography variant="h4" gutterBottom>
            Blog post not found
          </Typography>
          <Button 
            variant="contained" 
            onClick={() => navigate('/blog')}
            sx={{ backgroundColor: '#FF0000', '&:hover': { backgroundColor: '#CC0000' } }}
          >
            Back to Blog
          </Button>
        </Container>
      </Box>
    );
  }

  return (
    <>
      <Helmet>
        <title>{post.title} | YtToolBox Blog</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.image} />
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content={post.date} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.excerpt} />
        <meta name="twitter:image" content={post.image} />
        <link rel="canonical" href={`https://yttoolbox.com/blog/${slug}`} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "description": post.excerpt,
            "image": post.image,
            "author": {
              "@type": "Organization",
              "name": "YtToolBox"
            },
            "publisher": {
              "@type": "Organization",
              "name": "YtToolBox",
              "logo": {
                "@type": "ImageObject",
                "url": "https://yttoolbox.com/logo.png"
              }
            },
            "datePublished": post.date,
            "dateModified": post.date
          })}
        </script>
      </Helmet>

      <Box sx={{ py: 4 }}>
        <Container maxWidth="md">
          <Button 
            startIcon={<ArrowBack />} 
            onClick={() => navigate('/blog')}
            sx={{ mb: 3, color: '#666' }}
          >
            Back to Blog
          </Button>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h1" component="h1" sx={{ 
              fontSize: { xs: '1.75rem', sm: '2.25rem', md: '2.75rem' },
              fontWeight: 700, 
              color: '#000000',
              mb: 2,
              lineHeight: 1.2
            }}>
              {post.title}
            </Typography>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, color: 'text.secondary', mb: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <CalendarToday fontSize="small" />
                <Typography variant="body2">{post.date}</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <AccessTime fontSize="small" />
                <Typography variant="body2">{post.readTime}</Typography>
              </Box>
            </Box>

            <Box 
              component="img"
              src={post.image}
              alt={post.imageAlt}
              sx={{ 
                width: '100%', 
                height: 'auto', 
                borderRadius: 2, 
                mb: 4,
                maxHeight: 400,
                objectFit: 'cover'
              }}
            />
          </Box>

          <Box sx={{ 
            '& h1': { fontSize: '2rem', fontWeight: 700, mb: 2 },
            '& h2': { fontSize: '1.5rem', fontWeight: 600, mb: 2, mt: 3 },
            '& h3': { fontSize: '1.25rem', fontWeight: 600, mb: 1.5, mt: 2 },
            '& h4': { fontSize: '1.1rem', fontWeight: 600, mb: 1, mt: 2 },
            '& p': { mb: 2, lineHeight: 1.8 },
            '& ul, & ol': { mb: 2, pl: 3 },
            '& li': { mb: 0.5 },
            '& img': { maxWidth: '100%', height: 'auto', borderRadius: 1, my: 2 },
            '& blockquote': { 
              borderLeft: '4px solid #FF0000', 
              pl: 2, 
              py: 1, 
              my: 2, 
              fontStyle: 'italic',
              backgroundColor: '#f9f9f9'
            },
            '& code': { 
              backgroundColor: '#f0f0f0', 
              padding: '0.2em 0.4em', 
              borderRadius: 1,
              fontSize: '0.9em'
            },
            '& pre': { 
              backgroundColor: '#f5f5f5', 
              padding: 2, 
              borderRadius: 1, 
              overflow: 'auto',
              my: 2
            }
          }}>
            <post.content />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default BlogPost;
