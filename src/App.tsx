import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HubProvider } from './context/HubContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import Blog from './pages/Blog';
import PermawebUseCases from './pages/PermawebUseCases';
import AFMediaResourceGuide from './pages/AFMediaResourceGuide';
import PiDayArticle from './pages/PiDayArticle';
import TrustInBlockchain from './pages/TrustInBlockchain';
import More from './pages/More';
import GridMotionDemo from './pages/GridMotionDemo';
import Bites from './pages/Bites';
import "./index.css"; /* Global Styles */
import "./App.css";   /* Additional App-wide styles */
import { ThemeProvider } from './providers/ThemeProvider';
import { HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider defaultTheme="dark">
        <HubProvider>
          <Router>
            <Layout>
              <Routes>
                {/* Landing Page */}
                <Route path="/" element={<Home />} />

                {/* Blog Section */}
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/permaweb-use-cases" element={<PermawebUseCases />} />
                <Route path="/blog/afmedia-resource-guide" element={<AFMediaResourceGuide />} />
                <Route path="/blog/pie-day-article" element={<PiDayArticle />} />
                <Route path="/blog/trust-in-blockchain" element={<TrustInBlockchain />} />
                
                {/* More Page */}
                <Route path="/more" element={<More />} />
                
                {/* Demo Pages */}
                <Route path="/games" element={<GridMotionDemo />} />
                
                {/* Bites Page */}
                <Route path="/bites" element={<Bites />} />
              </Routes>
            </Layout>
          </Router>
        </HubProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
