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

const campaignImage = '/design01-hires.png'; // Placeholder, replace with Rental Poster image if available

const Ad: React.FC = () => {
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
        <img src={campaignImage} alt="Rental Poster Ad" className="berlin-banner-img" />
      </div>
      <div className="max-w-2xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-4 text-center">Rental Poster Kampagne</h1>
        <div className="mb-4 text-center text-xl font-semibold text-gray-800">
          Steh ein für dein Recht, erinnert zu werden. Welche Berlin-Geschichte würdest du bewahren?
          <div style={{ fontSize: '0.95em', color: '#aaa', fontStyle: 'italic', marginTop: 2 }}>
            Stand for your right to be remembered. Which Berlin story would you preserve?
          </div>
        </div>
        <div className="mb-2 text-center text-lg font-bold text-gray-800">
          Dein Recht auf Erinnerung
          <span style={{ fontSize: '0.95em', color: '#aaa', fontStyle: 'italic', marginLeft: 6 }}>
            / Your right to be remembered
          </span>
        </div>
        <div className="mb-2 text-center text-base font-semibold text-gray-700">
          {/* Removed Arweave: Gegen Löschung, für immer / Arweave: Against deletion, forever */}
        </div>
        <div className="mb-2 text-center text-base text-blue-700 font-bold">
          <a href="https://arweave.org" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
            Arweave.org: When they want you to forget, we help you be remembered
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
            <PromptInputTextarea placeholder="Deine Berlin-Erinnerung (max. 280 Zeichen) / Your Berlin memory (max. 280 chars)..." maxLength={280} />
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

export default Ad; 