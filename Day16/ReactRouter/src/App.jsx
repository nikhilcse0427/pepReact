import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import './App.css';
import Contact from './pages/Contact';
import Blog from './pages/blog/Blog.jsx';
import Post from './pages/blog/Post.jsx';

function App() {
  return (
    <>
      <Router>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/blog">Blog</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} /> {/* Add this route */}
          <Route path="/blog/:postID" element={<Post />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
