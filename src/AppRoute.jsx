import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Privacy from './pages/Privacy';
import Subscribe from './pages/Subscribe';
import Navigation from './components/common/Navbar';
import Footer from './components/common/Footer';
import Blog from './pages/Blog';
import ScrollToTop from './components/common/ScrollToTop';
export default function AppRoute() {
    return (
        <Router>
            <ScrollToTop/>
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/privacy" element={<Privacy />}></Route>
                <Route path="/subscribe" element={<Subscribe />}></Route>
                <Route path="/blog" element={<Blog />}></Route>
            </Routes>
            <Footer />
        </Router>
    )
}