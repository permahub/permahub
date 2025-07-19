import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Permacast.css';
import { seriesList } from '../data/permacastSeries';

interface SeriesMeta {
  title: string;
  description: string;
  image: string;
  link?: string;
}

export default function Permacast() {
  const navigate = useNavigate();
  const [rssMeta, setRssMeta] = useState<{ [id: string]: SeriesMeta }>({});

  useEffect(() => {
    async function fetchMeta() {
      const meta: { [id: string]: SeriesMeta } = {};
      await Promise.all(seriesList.map(async (series) => {
        try {
          const res = await fetch(series.rssUrl);
          if (!res.ok) return;
          const text = await res.text();
          const parser = new window.DOMParser();
          const xml = parser.parseFromString(text, 'text/xml');
          const channel = xml.querySelector('channel');
          let title = series.title;
          let description = series.description;
          let image = series.image;
          let link = series.rssUrl.replace('/rss/', '/#/podcast/').replace('.xml', '');
          if (channel) {
            const rssTitle = channel.getElementsByTagName('title')[0]?.textContent;
            if (rssTitle) title = rssTitle;
            const rssDesc = channel.getElementsByTagName('description')[0]?.textContent;
            if (rssDesc) description = rssDesc;
            const itunesImage = channel.getElementsByTagName('itunes:image')[0]?.getAttribute('href');
            if (itunesImage) {
              image = itunesImage;
            } else {
              const imageTag = channel.getElementsByTagName('image')[0];
              if (imageTag) {
                image = imageTag.getElementsByTagName('url')[0]?.textContent || image;
              }
            }
          }
          meta[series.id] = { title, description, image, link };
        } catch (e) {
          // Ignore errors, fallback to static data
        }
      }));
      setRssMeta(meta);
    }
    fetchMeta();
  }, []);

  return (
    <div className="cast-page">
      <div className="cast-header">
        <h1 className="mainnet-title">PERMACAST Series</h1>
        <p>Explore our collection of permaweb-native audio content</p>
      </div>
      <div className="series-grid">
        {seriesList.map((series) => {
          const meta = rssMeta[series.id] || {};
          // Construct the correct Permacast page URL
          const addressMatch = series.rssUrl.match(/0x[a-fA-F0-9]{10,}/);
          const permacastUrl = addressMatch ? `https://www.permacast.app/${addressMatch[0]}` : 'https://www.permacast.app/';
          // Truncate the address for display if needed
          let truncatedAddress = '';
          if (addressMatch) {
            const addr = addressMatch[0];
            truncatedAddress = `${addr.slice(0, 5)}...${addr.slice(-4)}`;
          }
          return (
            <div 
              key={series.id} 
              className="series-card-grid"
              style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', paddingBottom: '2.5rem' }}
              onClick={() => navigate(`/permacast/${series.id}`)}
            >
              <img src={meta.image || series.image} alt={meta.title || series.title} className="series-cover" />
              <div className="series-info" style={{ width: '100%', textAlign: 'left', marginBottom: '1rem' }}>
                <h2 className="series-title" style={{ fontSize: '1.3rem', fontWeight: 700, margin: 0, whiteSpace: 'normal', textAlign: 'left' }}>{meta.title || series.title}</h2>
              </div>
              <a
                href={permacastUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="series-link"
                style={{ position: 'absolute', bottom: '1rem', right: '1rem', background: '#e3f2fd', color: '#1976d2', borderRadius: 6, padding: '0.2em 0.8em', fontSize: '0.95rem', textDecoration: 'none', fontWeight: 500, transition: 'background 0.15s', zIndex: 2, display: 'flex', alignItems: 'center', gap: '0.5em' }}
                onClick={e => e.stopPropagation()}
              >
                View on Permacast
                {truncatedAddress && (
                  <span style={{ marginLeft: 0, fontFamily: 'monospace', color: '#fff', background: '#4dabf7', borderRadius: 6, padding: '0.1em 0.7em', fontSize: '0.97rem', fontWeight: 600, letterSpacing: '0.03em' }}>{truncatedAddress}</span>
                )}
              </a>
            </div>
          );
        })}
      </div>
      <div style={{ textAlign: 'center', marginTop: '2rem', fontSize: '1.1rem' }}>
        For more podcasts, visit the official PERMACAST page at <a href="https://permacast.app" target="_blank" rel="noopener noreferrer" style={{ color: '#0066cc', textDecoration: 'underline' }}>https://permacast.app</a>
      </div>
    </div>
  );
} 