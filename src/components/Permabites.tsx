import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { formatDistanceToNow } from 'date-fns';

interface Permabite {
  id: string;
  author: string;
  title: string;
  content: string;
  timestamp: number;
  comments: string[];
}

const PERMABITES_PROCESS_ID = 'GMMejKCd-NNESBauFsf4RXBniYb5Yzwa_1WTrshiJZc'; // Replace with your actual process ID

export function Permabites() {
  const [permabites, setPermabites] = useState<Permabite[]>([]);
  const [newPermabite, setNewPermabite] = useState({ title: '', content: '', author: '' });
  const [loading, setLoading] = useState(false);

  const fetchPermabites = async () => {
    try {
      const response = await fetch(`https://arweave.net/${PERMABITES_PROCESS_ID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          Action: 'GetPermabites'
        })
      });
      const data = await response.json();
      console.log('Fetched permabites:', data); // Debug log
      setPermabites(data);
    } catch (error) {
      console.error('Error fetching permabites:', error);
    }
  };

  const submitPermabite = async () => {
    if (!newPermabite.title || !newPermabite.content) return;
    
    setLoading(true);
    try {
      const response = await fetch(`https://arweave.net/${PERMABITES_PROCESS_ID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          Action: 'CreatePermabite',
          Data: JSON.stringify({
            title: newPermabite.title,
            content: newPermabite.content,
            author: newPermabite.author || 'anon'
          })
        })
      });
      const data = await response.json();
      if (data.Status === 'success') {
        setNewPermabite({ title: '', content: '', author: '' });
        fetchPermabites();
      }
    } catch (error) {
      console.error('Error submitting permabite:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPermabites();
  }, []);

  return (
    <div className="container mx-auto py-8 max-w-4xl">
      <h2 className="text-4xl font-bold mb-8 text-center">Community Permabites</h2>
      
      {/* New Permabite Form */}
      <Card className="mb-12 border-2 border-primary/20 shadow-lg">
        <CardHeader className="bg-gradient-to-r from-primary/10 to-secondary/10">
          <CardTitle className="text-2xl font-bold text-center">Share Your Permabite</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="space-y-6">
            <Input
              placeholder="Your name (optional)"
              value={newPermabite.author}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
                setNewPermabite({ ...newPermabite, author: e.target.value })
              }
            />
            <Input
              placeholder="Give your permabite a title"
              value={newPermabite.title}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
                setNewPermabite({ ...newPermabite, title: e.target.value })
              }
              className="text-lg"
            />
            <Textarea
              placeholder="Share your thoughts with the community..."
              value={newPermabite.content}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => 
                setNewPermabite({ ...newPermabite, content: e.target.value })
              }
              className="min-h-[150px] text-base"
            />
            <Button 
              onClick={submitPermabite} 
              disabled={loading || !newPermabite.title || !newPermabite.content}
              className="w-full py-6 text-lg font-semibold"
            >
              {loading ? 'Submitting...' : 'Share Your Permabite'}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Permabites List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {permabites.map((permabite) => (
          <div
            key={permabite.id}
            className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:border-primary/40 transition-all h-full flex flex-col"
          >
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-bold text-xl mb-1 line-clamp-2 force-black-text">{permabite.title}</h3>
                <div className="text-gray-600 text-sm">
                  By {permabite.author || 'Anonymous'} • {formatDistanceToNow(permabite.timestamp * 1000)} ago
                </div>
              </div>
            </div>
            <div className="prose max-w-none mb-4 flex-grow">
              <p className="whitespace-pre-wrap text-gray-800 line-clamp-4">{permabite.content}</p>
            </div>
            {permabite.comments && permabite.comments.length > 0 && (
              <div className="mt-4 pt-4 border-t border-gray-200">
                <h4 className="font-semibold mb-2">Comments ({permabite.comments.length})</h4>
                <div className="space-y-3">
                  {permabite.comments.map((comment, index) => (
                    <div key={index} className="pl-4 border-l-2 border-gray-200">
                      <p className="text-gray-700 line-clamp-2">{comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
} 