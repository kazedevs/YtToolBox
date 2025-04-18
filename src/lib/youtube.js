/**
 * Extracts YouTube video ID from various YouTube URL formats
 * @param {string} url - YouTube URL
 * @returns {string|null} - Video ID or null if not found
 */
export function extractYoutubeVideoId(url) {
  if (!url) return null;
  
  // Handle various YouTube URL formats
  const regexPatterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^?&/#]+)/,
    /youtube\.com\/shorts\/([^?&/#]+)/,
    /youtube\.com\/v\/([^?&/#]+)/,
    /youtube\.com\/watch\?.*v=([^?&/#]+)/,
  ];

  for (const regex of regexPatterns) {
    const match = url.match(regex);
    if (match && match[1]) {
      return match[1];
    }
  }

  return null;
}

/**
 * Get thumbnail URLs for a YouTube video
 * @param {string} videoId - YouTube video ID
 * @returns {Object} - Object containing thumbnail URLs and dimensions
 */
export function getThumbnailUrls(videoId) {
  if (!videoId) return {};
  
  return {
    maxres: {
      url: `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`,
      label: 'HD (1280x720)'
    },
    hq: {
      url: `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
      label: 'HQ (480x360)'
    },
    mq: {
      url: `https://i.ytimg.com/vi/${videoId}/mqdefault.jpg`,
      label: 'MQ (320x180)'
    },
    sd: {
      url: `https://i.ytimg.com/vi/${videoId}/sddefault.jpg`,
      label: 'SD (640x480)'
    }
  };
}

/**
 * Fetch video title using oEmbed
 * @param {string} videoId - YouTube video ID
 * @returns {Promise<string>} - Video title
 */
export async function getVideoTitle(videoId) {
  if (!videoId) return '';
  
  try {
    const response = await fetch(`https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${videoId}&format=json`);
    const data = await response.json();
    return data.title || '';
  } catch (error) {
    console.error('Error fetching video title:', error);
    return '';
  }
}

/**
 * Mock YouTube tags generator 
 * Note: Direct tag scraping requires a backend. This is a simulated version.
 * @param {string} title - Video title to generate tags from
 * @returns {string[]} - Array of tags
 */
export function generateTags(title) {
  if (!title) return [];
  
  // Remove common words and split into potential tags
  const words = title
    .toLowerCase()
    .replace(/[^\w\s]/g, '')
    .split(' ')
    .filter(word => word.length > 3 && !['this', 'that', 'with', 'from', 'have', 'what', 'when', 'where', 'will', 'your'].includes(word));
    
  // Remove duplicates and limit to 15 tags
  const uniqueWords = [...new Set(words)].slice(0, 15);
  
  // Add some common YouTube tags based on the content
  const commonTags = ['youtube', 'video', 'tutorial', 'guide', 'how to'];
  
  return [...uniqueWords, ...commonTags];
}

export async function getVideoTags(videoId) {
  try {
    // For now, return some sample tags since we don't have API access
    return [
      'youtube',
      'video',
      'content creator',
      'tutorial',
      'how to',
      'tips',
      'tricks',
      'social media',
      'marketing',
      'growth',
      videoId // include the video ID as a tag for demonstration
    ];
  } catch (error) {
    console.error('Error getting video tags:', error);
    return [];
  }
}
