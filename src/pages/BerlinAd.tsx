import { createClient } from '@supabase/supabase-js';
import { useState, useEffect } from 'react';

console.log("Supabase client:", createClient);

interface Answer {
  id: number;
  answers: string;
  campaign: string;
  created_at: string;
}

const supabase = createClient(
  'https://obhyfopieuvpnqjbgjhn.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9iaHlmb3BpZXV2cG5xamJnamhuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc1NDQ0ODgsImV4cCI6MjA2MzEyMDQ4OH0.ZMOa42K20GQrrqzc8JM4xb8HhnfjdcgEaWPnosIVcMw'
);

export default function BerlinAdPage() {
  console.log("BerlinAdPage rendered");
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  // Fetch answers on load
  useEffect(() => {
    supabase
      .from('berlin_answers')
      .select('*')
      .eq('campaign', 'ad')
      .order('created_at', { ascending: false })
      .then(({ data, error }) => {
        console.log('Fetch answers:', { data, error });
        setAnswers((data as Answer[]) || []);
      });
  }, []);

  // Submit new answer
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    setLoading(true);
    const { data, error } = await supabase
      .from('berlin_answers')
      .insert([{ campaign: 'ad', answers: input }])
      .select();
    setLoading(false);
    console.log('Insert result:', { data, error });
    if (!error && data) {
      setAnswers([(data as Answer[])[0], ...answers]);
      setInput('');
      setMessage({ type: 'success', text: 'Message sent!' });
    } else {
      setMessage({ type: 'error', text: 'Failed to send message.' });
    }
    setTimeout(() => setMessage(null), 3000);
  };

  return (
    <div className="max-w-2xl mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold mb-4">What memories should Berlin never lose?</h1>
      <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
        <input
          value={input}
          onChange={e => {
            setInput(e.target.value);
            console.log('Input changed:', e.target.value);
          }}
          placeholder="Your answer..."
          className="flex-1 border rounded px-3 py-2"
          disabled={loading}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
          disabled={loading || !input.trim()}
        >
          {loading ? 'Sending...' : 'Submit'}
        </button>
      </form>
      {message && (
        <div className={message.type === 'success' ? 'text-green-600 mb-4' : 'text-red-600 mb-4'}>
          {message.text}
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
        {answers.map(a => (
          <div key={a.id} className="p-4 border rounded shadow bg-background">
            {a.answers}
          </div>
        ))}
      </div>
    </div>
  );
} 