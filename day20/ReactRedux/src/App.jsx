import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="container">
        <nav >
          <Link to="/" >Home</Link>|
          <Link to="/contact" >Contact</Link>|
          <Link to="/about" >About</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;