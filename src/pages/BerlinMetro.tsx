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
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://obhyfopieuvpnqjbgjhn.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9iaHlmb3BpZXV2cG5xamJnamhuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc1NDQ0ODgsImV4cCI6MjA2MzEyMDQ4OH0.ZMOa42K20GQrrqzc8JM4xb8HhnfjdcgEaWPnosIVcMw'
);

const campaignImage = '/berlin-final.png'; // Use berlin-final.png for visual consistency

const BerlinMetro: React.FC = () => {
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const handleSubmit = async () => {
    if (!input.trim()) return;
    setIsLoading(true);
    const { data, error } = await supabase
      .from("berlin_answers")
      .insert([{ campaign: "metro", answers: input }])
      .select();
    setIsLoading(false);
    if (!error && data) {
      setInput("");
      setMessage({ type: "success", text: "Message sent!" });
    } else {
      setMessage({ type: "error", text: "Failed to send message." });
    }
    setTimeout(() => setMessage(null), 3000);
  };

  return (
    <div className="berlin-campaign-page max-w-full mx-auto px-0" style={{ paddingTop: 0, paddingBottom: 0 }}>
      {/* Large, edge-to-edge campaign image */}
      <div className="w-full" style={{ marginBottom: '16px', marginTop: 0 }}>
        <img src={campaignImage} alt="Metro Ad" className="berlin-banner-img" />
      </div>
      <div className="max-w-2xl mx-auto px-4">
        {/* <h1 className="text-3xl font-bold mb-4 text-center">Metro Kampagne</h1> */}
        {/* Main question and subtitle styled like Ad page */}
        <div className="text-center font-bebas text-gray-900 dark:text-white" style={{ fontSize: '2.1rem', marginBottom: '12px', letterSpacing: '0.04em' }}>
          WIE KÖNNEN WIR BERLINS GESCHICHTEN FÜR DIE ZUKUNFT BEWAHREN?
        </div>
        <div className="text-center font-bebas" style={{ fontSize: '1.5rem', color: '#888', marginBottom: '18px', letterSpacing: '0.04em' }}>
          HOW CAN WE PRESERVE BERLIN'S STORIES FOR THE FUTURE?
        </div>
        <div className="mb-2 text-center text-lg font-bold text-gray-800 font-grotesk">
          Teile deine Geschichte
          <span style={{ fontSize: '0.95em', color: '#aaa', fontStyle: 'italic', marginLeft: 6 }}>
            / Share your story
          </span>
        </div>
        <div className="my-8 mx-auto">
          <PromptInput
            value={input}
            onValueChange={setInput}
            isLoading={isLoading}
            onSubmit={handleSubmit}
            className="prompt-input-bubble"
          >
            <PromptInputTextarea placeholder="Deine Geschichte (max. 280 Zeichen) / Your story (max. 280 chars)..." maxLength={280} />
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
          {message && (
            <div className={message.type === "success" ? "text-green-600 mb-4" : "text-red-600 mb-4"}>
              {message.text}
            </div>
          )}
        </div>
        <div className="mt-8 text-center">
          <Link to="/berlin" className="text-blue-500 hover:underline">← Zurück zur Berlin Kampagne</Link>
        </div>
      </div>
      <div className="text-center text-base font-grotesk font-bold mb-2" style={{ color: '#222', marginTop: '1.2rem' }}>
        <a href="https://arweave.org" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 font-grotesk">
          Arweave.org
        </a><br />
        <span className="font-grotesk" style={{ fontWeight: 400 }}>
          Permanente Datenspeicherung / <span style={{ color: '#888' }}>Permanent Storage</span>
        </span>
      </div>
    </div>
  );
};

export default BerlinMetro; 