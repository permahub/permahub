import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { HubProvider } from './context/HubContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import Blog from './pages/Blog';
import PermawebUseCases from './pages/PermawebUseCases';
import AFMediaResourceGuide from './pages/AFMediaResourceGuide';
import PiDayArticle from './pages/PiDayArticle';
import TrustInBlockchain from './pages/TrustInBlockchain';
import GridMotionDemo from './pages/GridMotionDemo';
import Bites from './pages/Bites';
import PermabiteDetail from './pages/PermabiteDetail';
import PermabitesBlogPost from './pages/PermabitesBlogPost';
import { Permabites } from './components/Permabites';
import Permacast from './pages/Permacast';
import PermacastSeries from './pages/PermacastSeries';
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
                <Route path="/blog/permabites" element={<PermabitesBlogPost />} />
                
                {/* Demo Pages */}
                <Route path="/games" element={<GridMotionDemo />} />
                
                {/* Bites Pages */}
                <Route path="/bites" element={<Bites />} />
                <Route path="/bites/:id" element={<PermabiteDetail />} />

                {/* Community Permabites */}
                <Route path="/community" element={<Permabites />} />

                {/* Permacast Pages */}
                <Route path="/permacast" element={<Permacast />} />
                <Route path="/permacast/:seriesId" element={<PermacastSeries />} />
              </Routes>
            </Layout>
          </Router>
        </HubProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
