import React, { useState } from 'react';
import { Send, Paperclip } from 'lucide-react';

export const ChatInput = () => {
  const [message, setMessage] = useState('');

  return (
    <div className="border-t border-gray-700 p-4 bg-gray-800">
      <div className="flex items-center space-x-2">
        <button className="text-gray-400 hover:text-white">
          <Paperclip size={20} />
        </button>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Send a message..."
          className="flex-1 bg-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="text-gray-400 hover:text-white">
          <Send size={20} />
        </button>
      </div>
    </div>
  );
}
