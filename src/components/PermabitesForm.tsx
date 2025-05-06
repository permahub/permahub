import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { message, createSigner } from '@permaweb/aoconnect';
import './PermabitesForm.css';
import * as React from 'react';

interface Notification {
  id: string;
  message: string;
  type: 'success' | 'error';
}

const PERMABITES_PROCESS_ID = 'GMMejKCd-NNESBauFsf4RXBniYb5Yzwa_1WTrshiJZc';

interface PermabitesFormProps {
  onPermabiteCreated?: () => void;
}

export function PermabitesForm({ onPermabiteCreated }: PermabitesFormProps) {
  const [formData, setFormData] = React.useState({
    title: '',
    author: '',
    content: '',
    twitter: ''
  });
  const [loading, setLoading] = React.useState(false);
  const [notifications, setNotifications] = React.useState<Notification[]>([]);

  const addNotification = (message: string, type: 'success' | 'error') => {
    const id = Date.now().toString();
    setNotifications(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      setNotifications(prev => prev.filter(n => n.id !== id));
    }, 3000);
  };

  const handleSubmit = async () => {
    if (!formData.title || !formData.content) return;
    
    setLoading(true);
    try {
      // Create a signer using the Arweave wallet
      const signer = createSigner(window.arweaveWallet);

      const messageData = {
        process: PERMABITES_PROCESS_ID,
        signer,
        tags: [
          { name: 'Action', value: 'CreatePermabite' }
        ],
        data: JSON.stringify({
          title: formData.title,
          author: formData.author || 'anon',
          content: formData.content,
          twitter: formData.twitter || ''
        })
      };

      console.log('Sending message:', messageData); // Debug log

      const messageId = await message(messageData);
      console.log('Message ID:', messageId); // Debug log
      
      // If we get here, the message was sent successfully
      setFormData({ title: '', author: '', content: '', twitter: '' });
      addNotification('Permabite created successfully! 🎉', 'success');
      if (onPermabiteCreated) onPermabiteCreated();
    } catch (error) {
      console.error('Error submitting permabite:', error);
      addNotification('An error occurred. Please try again.', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative">
      <Card className="w-full max-w-2xl mx-auto bg-white/95 backdrop-blur-sm border border-amber-200 shadow-xl rounded-xl overflow-hidden transform hover:shadow-2xl transition-all duration-300">
        <CardHeader className="bg-gradient-to-r from-amber-500/40 to-amber-400/30 pb-4 border-b border-amber-200/50 relative">
          <CardTitle className="text-gray-800 text-2xl md:text-3xl font-extrabold tracking-tight">Share Your Permabite</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="flex flex-col gap-4">
            <div className="mb-4 input-row">
              <div className="input-field">
                <label htmlFor="author" className="block text-sm font-medium text-gray-700">
                  Alias
                </label>
                <Input
                  id="author"
                  value={formData.author}
                  onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                  className="bg-white border border-gray-300 text-gray-800 rounded-md px-4 py-2 h-10 text-base focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition-all w-full shadow-input"
                  placeholder="LTO"
                />
              </div>
              <div className="flex gap-4 w-full">
                <div className="input-field">
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                    Country
                  </label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="bg-white border border-gray-300 text-gray-800 rounded-md px-4 py-2 h-10 text-base focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition-all w-full shadow-input"
                    placeholder="USA"
                  />
                </div>
                <div className="input-field">
                  <label htmlFor="twitter" className="block text-sm font-medium text-gray-700">
                    X Handle
                  </label>
                  <Input
                    id="twitter"
                    value={formData.twitter}
                    onChange={(e) => setFormData({ ...formData, twitter: e.target.value })}
                    className="bg-white border border-gray-300 text-gray-800 rounded-md px-4 py-2 h-10 text-base focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition-all w-full shadow-input"
                    placeholder="@handleClick"
                  />
                </div>
              </div>
            </div>
            
            <div className="mt-6">
              <div>
                <label htmlFor="content" className="block text-xl font-semibold text-gray-800 mb-4 tracking-tight">
                  Share About Your Permabites Event
                </label>
                <Textarea
                  id="content"
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  className="min-h-[120px] bg-white border border-gray-300 text-gray-800 rounded-md px-4 py-2 text-base focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition-all w-full shadow-input"
                  placeholder="Share about your Permabites event..."
                />
              </div>
            </div>
            
            <div className="mt-2">
              <Button 
                onClick={handleSubmit} 
                disabled={loading || !formData.title || !formData.content}
                className="w-full md:w-auto share-permabite-btn"
              >
                {loading ? 'Creating...' : 'Share Permabite'}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Notifications */}
      <AnimatePresence>
        {notifications.map((notification) => (
          <motion.div
            key={notification.id}
            initial={{ opacity: 0, y: 50, scale: 0.3 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
            className={`fixed bottom-4 right-4 p-4 rounded-lg shadow-lg ${
              notification.type === 'success' 
                ? 'bg-green-500/90 text-white' 
                : 'bg-red-500/90 text-white'
            }`}
          >
            {notification.message}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
