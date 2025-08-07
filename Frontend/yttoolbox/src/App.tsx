import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ThumbnailDownloader from "./pages/ThumbnailDownloader";
import TimestampLinkGenerator from "./pages/TimestampLinkGenerator";
import EmbedCodeGenerator from "./pages/EmbedCodeGenerator";
import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <Router>
      <Routes>
        {/* Routes with Navbar and Footer */}
        <Route path="/" element={
          <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
            <Navbar />
            <main style={{ flexGrow: 1, paddingTop: "80px", minHeight: "calc(100vh - 160px)" }}>
              <HomePage />
            </main>
            <Footer />
          </div>
        } />
        <Route path="/youtube-thumbnail-downloader" element={
          <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
            <Navbar />
            <main style={{ flexGrow: 1, paddingTop: "80px", minHeight: "calc(100vh - 160px)" }}>
              <ThumbnailDownloader />
            </main>
            <Footer />
          </div>
        } />
        <Route path="/youtube-timestamp-link-generator" element={
          <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
            <Navbar />
            <main style={{ flexGrow: 1, paddingTop: "80px", minHeight: "calc(100vh - 160px)" }}>
              <TimestampLinkGenerator />
            </main>
            <Footer />
          </div>
        } />
        <Route path="/youtube-embed-code-generator" element={
          <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
            <Navbar />
            <main style={{ flexGrow: 1, paddingTop: "80px", minHeight: "calc(100vh - 160px)" }}>
              <EmbedCodeGenerator />
            </main>
            <Footer />
          </div>
        } />
        <Route path="/about" element={
          <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
            <Navbar />
            <main style={{ flexGrow: 1, paddingTop: "80px", minHeight: "calc(100vh - 160px)" }}>
              <About />
            </main>
            <Footer />
          </div>
        } />
        <Route path="/blog" element={
          <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
            <Navbar />
            <main style={{ flexGrow: 1, paddingTop: "80px", minHeight: "calc(100vh - 160px)" }}>
              <Blog />
            </main>
            <Footer />
          </div>
        } />
        <Route path="/blog/:slug" element={
          <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
            <Navbar />
            <main style={{ flexGrow: 1, paddingTop: "80px", minHeight: "calc(100vh - 160px)" }}>
              <BlogPost />
            </main>
            <Footer />
          </div>
        } />
        <Route path="/contact" element={
          <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
            <Navbar />
            <main style={{ flexGrow: 1, paddingTop: "80px", minHeight: "calc(100vh - 160px)" }}>
              <Contact />
            </main>
            <Footer />
          </div>
        } />
        <Route path="/privacy" element={
          <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
            <Navbar />
            <main style={{ flexGrow: 1, paddingTop: "80px", minHeight: "calc(100vh - 160px)" }}>
              <Privacy />
            </main>
            <Footer />
          </div>
        } />
        <Route path="/terms" element={
          <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
            <Navbar />
            <main style={{ flexGrow: 1, paddingTop: "80px", minHeight: "calc(100vh - 160px)" }}>
              <Terms />
            </main>
            <Footer />
          </div>
        } />
        {/* Error page without Navbar and Footer */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
