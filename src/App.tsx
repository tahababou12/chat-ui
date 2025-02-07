import React, { useState, KeyboardEvent, useRef, useEffect } from 'react';
import { CodeBlock } from './components/CodeBlock';

interface ChatMessage {
  content: string;
  isUser: boolean;
  isCode?: boolean;
  codeTitle?: string;
  isUpdate?: boolean;
}

function App() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      content: "Would you like me to help you with the Fibonacci sequence implementation now, or do you want to make any specific requests regarding it?",
      isUser: false
    },
    {
      content: "Yes, please show me a Fibonacci implementation",
      isUser: true
    },
    {
      content: `# Generate Fibonacci sequence up to n terms
def fibonacci(n):
    sequence = [] # List to store Fibonacci numbers
    a, b = 0, 1 # Starting values

    for _ in range(n):
        sequence.append(a) # Append current number to the sequence
        a, b = b, a + b # Update values for next iteration

    return sequence

# Generate Fibonacci sequence for the first 10 terms
fibonacci_sequence = fibonacci(10)
print(f"Fibonacci sequence (first 10 terms): {fibonacci_sequence}")`,
      isUser: false,
      isCode: true,
      codeTitle: "Fibonacci Sequence"
    },
    {
      content: "Fibonacci Sequence",
      isUser: false,
      isUpdate: true
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && inputMessage.trim()) {
      setMessages([...messages, { content: inputMessage, isUser: true }]);
      setInputMessage('');
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header Spacing */}
      <div className="h-16 flex-shrink-0"></div>

      {/* Main Content */}
      <div 
        ref={scrollContainerRef}
        className="flex-1 overflow-y-auto"
        style={{ 
          height: 'calc(100vh - 144px)',
          paddingBottom: '80px'
        }}
      >
        <div className="max-w-3xl mx-auto p-4">
          {/* Messages */}
          {messages.map((message, index) => (
            <div key={index}>
              {message.isCode ? (
                <CodeBlock 
                  code={message.content}
                  title={message.codeTitle}
                />
              ) : message.isUpdate ? (
                // Update Message
                <button className="flex items-center gap-2 text-gray-700 text-sm border border-gray-200 rounded-full px-4 py-2 mb-4">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                  </svg>
                  Updated "{message.content}"
                </button>
              ) : (
                // Regular Message
                <div className={`flex ${message.isUser ? 'justify-end' : 'justify-start'} mb-4`}>
                  <div className={`${message.isUser ? 'bg-black text-white' : 'text-gray-700'} px-4 py-2 ${message.isUser ? 'rounded-full' : ''} text-sm`}>
                    {message.content}
                  </div>
                </div>
              )}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Area */}
      <div className="fixed bottom-0 w-full p-4 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto flex items-center gap-4">
          <button className="text-gray-400">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/>
            </svg>
          </button>
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Send a message..."
            className="flex-1 text-gray-600 bg-transparent outline-none"
          />
          <button className="text-gray-400">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 19V5M5 12l7-7 7 7"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
