import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  PromptInput,
  PromptInputTextarea,
  PromptInputActions,
  PromptInputAction,
} from '@/components/ui/prompt-input';
import { Button } from '@/components/ui/button';
import { ArrowUp, Square } from 'lucide-react';
import '@/components/ui/prompt-input.css';

const campaignImage = '/design01-hires.png'; // Placeholder, replace with Floor Graphics image if available

const BerlinFloorGraphics: React.FC = () => {
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = () => {
    setIsLoading(true);
    // TODO: Integrate AO/Arweave submission here
    setTimeout(() => {
      setIsLoading(false);
      setInput("");
    }, 1200);
  };

  return (
    <div className="berlin-campaign-page max-w-full mx-auto px-0" style={{ paddingTop: 0, paddingBottom: 0 }}>
      {/* Large, edge-to-edge campaign image */}
      <div className="w-full" style={{ marginBottom: '16px', marginTop: 0 }}>
        <img src={campaignImage} alt="Floor Graphics Ad" className="berlin-banner-img" />
      </div>
      <div className="max-w-2xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-4 text-center">Floor Graphics Kampagne</h1>
        <div className="mb-4 text-center text-xl font-semibold text-gray-800">
          Was verbirgt sich unter Berlins Oberfläche?
          <div style={{ fontSize: '0.95em', color: '#aaa', fontStyle: 'italic', marginTop: 2 }}>
            What lies beneath Berlin's surface?
          </div>
        </div>
        <div className="mb-2 text-center text-lg font-bold text-gray-800">
          Entdecke es
          <span style={{ fontSize: '0.95em', color: '#aaa', fontStyle: 'italic', marginLeft: 6 }}>
            / Discover it → Arweave.org
          </span>
        </div>
        <div className="mb-2 text-center text-base text-blue-700 font-bold">
          <a href="https://arweave.org" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
            Arweave.org: Permanente Datenspeicherung
          </a>
        </div>
        <div className="my-8 mx-auto">
          <PromptInput
            value={input}
            onValueChange={setInput}
            isLoading={isLoading}
            onSubmit={handleSubmit}
            className="prompt-input-bubble"
          >
            <PromptInputTextarea placeholder="Was verbirgt sich unter Berlins Oberfläche? / What lies beneath Berlin's surface?..." maxLength={280} />
            <PromptInputActions>
              <PromptInputAction tooltip={isLoading ? "Senden..." : "Absenden"}>
                <Button
                  variant="default"
                  size="icon"
                  onClick={handleSubmit}
                  disabled={isLoading || !input.trim()}
                >
                  {isLoading ? (
                    <Square className="size-5 fill-current" />
                  ) : (
                    <ArrowUp className="size-5" />
                  )}
                </Button>
              </PromptInputAction>
            </PromptInputActions>
          </PromptInput>
        </div>
        <div className="mt-8 text-center">
          <Link to="/berlin" className="text-blue-500 hover:underline">← Zurück zur Berlin Kampagne</Link>
        </div>
      </div>
    </div>
  );
};

export default BerlinFloorGraphics; 