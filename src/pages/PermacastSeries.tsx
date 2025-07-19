import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import './Permacast.css';
import { seriesList, Series } from '../data/permacastSeries';

interface Episode {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  audioUrl: string;
  duration: string;
}

export default function PermacastSeries() {
  const { seriesId } = useParams();
  const navigate = useNavigate();
  const [episodes, setEpisodes] = useState<Episode[]>([]);
  const [seriesInfo, setSeriesInfo] = useState<Series | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [rssImage, setRssImage] = useState<string | null>(null);
  const [currentPlayingIndex, setCurrentPlayingIndex] = useState<number | null>(null);

  useEffect(() => {
    const series = seriesList.find(s => s.id === seriesId);
    if (!series) {
      setError('Series not found');
      setIsLoading(false);
      return;
    }
    setSeriesInfo(series);

    async function fetchRSS() {
      try {
        setIsLoading(true);
        setError(null);
        const res = await fetch(series!.rssUrl);
        
        if (!res.ok) {
          throw new Error(`Failed to fetch RSS feed: ${res.status} ${res.statusText}`);
        }
        
        const text = await res.text();
        const parser = new window.DOMParser();
        const xml = parser.parseFromString(text, 'text/xml');
        
        const parserError = xml.querySelector('parsererror');
        if (parserError) {
          throw new Error('Failed to parse RSS feed');
        }
        
        // Get image from channel (itunes:image or image > url)
        const channel = xml.querySelector('channel');
        let imageUrl = '';
        if (channel) {
          const itunesImage = channel.getElementsByTagName('itunes:image')[0]?.getAttribute('href');
          if (itunesImage) {
            imageUrl = itunesImage;
          } else {
            const imageTag = channel.getElementsByTagName('image')[0];
            if (imageTag) {
              imageUrl = imageTag.getElementsByTagName('url')[0]?.textContent || '';
            }
          }
        }
        setRssImage(imageUrl || null);
        
        const items = Array.from(xml.querySelectorAll('item')).map(item => {
          const audioUrl = item.getElementsByTagName('enclosure')[0]?.getAttribute('url') || '';
          console.log('Audio URL:', audioUrl);
          return {
            title: item.getElementsByTagName('title')[0]?.textContent || '',
            link: item.getElementsByTagName('link')[0]?.textContent || '',
            pubDate: item.getElementsByTagName('pubDate')[0]?.textContent || '',
            description: item.getElementsByTagName('description')[0]?.textContent || '',
            audioUrl,
            duration: item.getElementsByTagName('itunes:duration')[0]?.textContent || ''
          };
        });
        setEpisodes(items);
      } catch (err) {
        console.error('Error fetching episodes:', err);
        setError(err instanceof Error ? err.message : 'Failed to load episodes');
      } finally {
        setIsLoading(false);
      }
    }
    fetchRSS();
  }, [seriesId]);

  const handlePlay = (index: number) => {
    // If another episode is playing, stop it first
    if (currentPlayingIndex !== null && currentPlayingIndex !== index) {
      const audioElements = document.getElementsByTagName('audio');
      for (let i = 0; i < audioElements.length; i++) {
        if (i !== index) {
          audioElements[i].pause();
        }
      }
    }
    setCurrentPlayingIndex(index);
  };

  const handlePause = () => {
    setCurrentPlayingIndex(null);
  };

  if (isLoading) {
    return (
      <div className="cast-page">
        <div className="loading-state">
          <h2>Loading episodes...</h2>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="cast-page">
        <div className="error-state">
          <h2>Unable to load episodes</h2>
          <p>{error}</p>
          <p>Please try again later or contact support if the problem persists.</p>
        </div>
      </div>
    );
  }

  if (!seriesInfo) {
    return (
      <div className="cast-page">
        <div className="error-state">
          <h2>Series not found</h2>
          <p>The requested series could not be found.</p>
          <button onClick={() => navigate('/permacast')}>Back to Series</button>
        </div>
      </div>
    );
  }

  return (
    <div className="cast-page">
      <div className="series-header">
        <button onClick={() => navigate('/permacast')} className="back-button">
          ← Back to Series
        </button>
        <div className="series-info">
          <img src={rssImage || seriesInfo.image} alt={seriesInfo.title} className="series-cover" />
          <div>
            <h1>{seriesInfo.title}</h1>
            <p>{seriesInfo.description}</p>
            <p style={{ fontSize: '1rem', color: '#4dabf7', marginTop: '0.5rem' }}>
              <strong>Note:</strong> The contract for this series is on the <span style={{ fontWeight: 'bold' }}>Load Network</span>, and audio/data is stored on <span style={{ fontWeight: 'bold' }}>Arweave</span>.
            </p>
          </div>
        </div>
      </div>
      <div className="episodes-list-grid">
        {episodes.length === 0 ? (
          <div className="no-episodes">
            <h2>No episodes available</h2>
            <p>Check back later for new episodes.</p>
          </div>
        ) : (
          episodes.map((ep, i) => (
            <div className="episode-card-grid" key={i}>
              <div className="episode-header">
                <span className="episode-badge">Ep {episodes.length - i}</span>
                <span className="episode-title" style={{ whiteSpace: 'normal', overflow: 'visible', textOverflow: 'unset' }}>{ep.title}</span>
              </div>
              <div className="episode-meta">
                <span className="episode-pill">{ep.duration}</span>
                <span className="episode-pill">{new Date(ep.pubDate).toLocaleDateString()}</span>
              </div>
              <AudioPlayer
                src={ep.audioUrl}
                showJumpControls={false}
                customAdditionalControls={[]}
                layout="horizontal"
                style={{ borderRadius: 8, margin: '1rem 0', minHeight: 56 }}
                customProgressBarSection={[
                  RHAP_UI.PROGRESS_BAR,
                  RHAP_UI.CURRENT_TIME,
                  RHAP_UI.DURATION
                ]}
                customControlsSection={[RHAP_UI.MAIN_CONTROLS, RHAP_UI.VOLUME]}
                onPlay={() => handlePlay(i)}
                onPause={handlePause}
                onEnded={handlePause}
                autoPlayAfterSrcChange={false}
                autoPlay={currentPlayingIndex === i}
                showDownloadProgress={false}
                showFilledProgress={true}
                showFilledVolume={true}
              />
              <p className="episode-description">
                {/^Episode stored on CAST with ID/.test(ep.description)
                  ? (() => {
                      const parts = ep.link.split('/');
                      const guid = parts[parts.length - 1];
                      return `On Load Network with ID ${guid.slice(0, 5)}...${guid.slice(-4)}`;
                    })()
                  : ep.description}
              </p>
              <a href={ep.link} target="_blank" rel="noopener noreferrer" className="episode-link">
                View on CAST
              </a>
            </div>
          ))
        )}
      </div>
    </div>
  );
} 