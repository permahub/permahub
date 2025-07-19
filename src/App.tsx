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
import Berlin from './pages/Berlin';
import BerlinRentalPosters from './pages/BerlinRentalPosters';
import BerlinMetro from './pages/BerlinMetro';
import BerlinTruck from './pages/BerlinTruck';
import BerlinFlyposting from './pages/BerlinFlyposting';
import BerlinStickerBombing from './pages/BerlinStickerBombing';
import BerlinFloorGraphics from './pages/BerlinFloorGraphics';
import BerlinBazar from './pages/BerlinBazar';
import Ad from './pages/Ad';
import GlowingTest from './pages/GlowingTest';
import Hackathon from './pages/Hackathon';
import CodeOfConduct from './pages/CodeOfConduct';
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
            <Routes>
              {/* Hackathon Page - Outside Layout to use custom retro nav */}
              <Route path="/hackathon" element={<Hackathon />} />
              <Route path="/codeofconduct" element={<CodeOfConduct />} />
              
              {/* All other pages with main Layout */}
              <Route path="/*" element={
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
                <Route path="/glowing-test" element={<GlowingTest />} />
                
                {/* Bites Pages */}
                <Route path="/bites" element={<Bites />} />
                <Route path="/bites/:id" element={<PermabiteDetail />} />

                {/* Community Permabites */}
                <Route path="/community" element={<Permabites />} />

                {/* Permacast Pages */}
                <Route path="/permacast" element={<Permacast />} />
                <Route path="/permacast/:seriesId" element={<PermacastSeries />} />

                {/* Berlin Campaign Pages */}
                <Route path="/berlin" element={<Berlin />} />
                <Route path="/berlin/rental-posters" element={<BerlinRentalPosters />} />
                <Route path="/berlin/metro" element={<BerlinMetro />} />
                <Route path="/berlin/truck" element={<BerlinTruck />} />
                <Route path="/berlin/flyposting" element={<BerlinFlyposting />} />
                <Route path="/berlin/sticker-bombing" element={<BerlinStickerBombing />} />
                <Route path="/berlin/floor-graphics" element={<BerlinFloorGraphics />} />
                <Route path="/berlin/bazar" element={<BerlinBazar />} />
                <Route path="/berlin/ad" element={<Ad />} />
                  </Routes>
                </Layout>
              } />
            </Routes>
          </Router>
        </HubProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
