import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ThumbnailDownloader from './pages/ThumbnailDownloader';
import TimestampLinkGenerator from './pages/TimestampLinkGenerator';
import EmbedCodeGenerator from './pages/EmbedCodeGenerator';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

function App() {
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <main style={{ flexGrow: 1, paddingTop: '80px', minHeight: 'calc(100vh - 160px)' }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/tools/thumbnail-downloader" element={<ThumbnailDownloader />} />
            <Route path="/tools/timestamp-link-generator" element={<TimestampLinkGenerator />} />
            <Route path="/tools/embed-code-generator" element={<EmbedCodeGenerator />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
