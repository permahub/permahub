import React, { useState } from 'react';
import { aoWallet } from '../utils/aoWallet';

interface AODataViewerProps {
  processId: string;
}

export const AODataViewer: React.FC<AODataViewerProps> = ({ processId }) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState('');

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const results = await aoWallet.getResults(processId);
      setData(results);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch data');
    } finally {
      setLoading(false);
    }
  };

  const submitData = async () => {
    if (!message.trim()) return;
    
    setLoading(true);
    setError(null);
    try {
      const result = await aoWallet.sendMessage(processId, message);
      console.log('Message sent:', result);
      setMessage('');
      // Refresh data after submission
      await fetchData();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to submit data');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 max-w-2xl mx-auto bg-white rounded-xl shadow-md">
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-gray-800">AO Data Viewer</h2>
        
        {error && (
          <div className="p-3 bg-red-100 text-red-700 rounded-md">
            {error}
          </div>
        )}

        <div className="flex space-x-2">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter your message"
            className="flex-1 px-4 py-2 border rounded-md"
          />
          <button
            onClick={submitData}
            disabled={loading || !message.trim()}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:bg-gray-400"
          >
            Submit
          </button>
        </div>

        <button
          onClick={fetchData}
          disabled={loading}
          className="w-full px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 disabled:bg-gray-400"
        >
          {loading ? 'Loading...' : 'Refresh Data'}
        </button>

        {data && (
          <div className="mt-4 p-4 bg-gray-50 rounded-md">
            <pre className="whitespace-pre-wrap">
              {JSON.stringify(data, null, 2)}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}; 