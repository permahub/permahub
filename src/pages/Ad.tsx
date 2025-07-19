import React, { useState, useEffect } from 'react';
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

const campaignImage = '/floor-graphics.png'; // Use berlin-final.png as the image for all ad tiles for now

const supabase = createClient(
  'https://obhyfopieuvpnqjbgjhn.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9iaHlmb3BpZXV2cG5xamJnamhuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc1NDQ0ODgsImV4cCI6MjA2MzEyMDQ4OH0.ZMOa42K20GQrrqzc8JM4xb8HhnfjdcgEaWPnosIVcMw'
);

interface Answer {
  id: number;
  answers: string;
  campaign: string;
  created_at: string;
}

const Ad: React.FC = () => {
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  // Fetch answers on load
  useEffect(() => {
    supabase
      .from("berlin_answers")
      .select("*")
      .eq("campaign", "ad")
      .order("created_at", { ascending: false })
      .then(({ data }) => {
        setAnswers((data as Answer[]) || []);
      });
  }, []);

  // Submit new answer
  const handleSubmit = async () => {
    if (!input.trim()) return;
    setIsLoading(true);
    const { data, error } = await supabase
      .from("berlin_answers")
      .insert([{ campaign: "ad", answers: input }])
      .select();
    setIsLoading(false);
    if (!error && data) {
      setAnswers([(data as Answer[])[0], ...answers]);
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
        <img src={campaignImage} alt="Ad Campaign" className="berlin-banner-img" />
      </div>
      <div className="max-w-2xl mx-auto px-4">
        {/* Main question and subtitle styled like Berlin page */}
        <div className="text-center font-bebas text-gray-900 dark:text-white" style={{ fontSize: '2.1rem', marginBottom: '12px', letterSpacing: '0.04em' }}>
          STEH EIN FÜR DEIN RECHT, ERINNERT ZU WERDEN. WELCHE BERLIN-GESCHICHTE WÜRDEST DU BEWAHREN?
        </div>
        <div className="text-center font-bebas" style={{ fontSize: '1.5rem', color: '#888', marginBottom: '18px', letterSpacing: '0.04em' }}>
          STAND FOR YOUR RIGHT TO BE REMEMBERED. WHICH BERLIN STORY WOULD YOU PRESERVE?
        </div>
        <div className="mb-2 text-center text-lg font-bold text-gray-800 font-grotesk">
          Dein Recht auf Erinnerung
          <span style={{ fontSize: '0.95em', color: '#aaa', fontStyle: 'italic', marginLeft: 6 }}>
            / Your right to be remembered
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
          {message && (
            <div className={message.type === "success" ? "text-green-600 mb-4" : "text-red-600 mb-4"}>
              {message.text}
            </div>
          )}
        </div>
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
          {answers.map((a) => (
            <div key={a.id} className="p-4 border rounded shadow bg-background">
              {a.answers}
            </div>
          ))}
        </div> */}
        <div className="mt-8 text-center">
          <Link to="/berlin" className="text-blue-500 hover:underline">← Zurück zur Berlin Kampagne</Link>
        </div>
      </div>
      {/* Arweave.org explainer at the very bottom, always above the footer */}
      <div className="text-center text-base font-grotesk font-bold mb-4" style={{ color: '#222', marginTop: '2.5rem' }}>
        <a href="https://arweave.org" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 font-grotesk">
          Arweave.org
        </a><br />
        <span className="font-grotesk" style={{ fontWeight: 400 }}>
          When they want you to forget, we help you be remembered
        </span>
      </div>
    </div>
  );
};

export default Ad; 