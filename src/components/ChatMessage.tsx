import React from 'react';
import { CodeBlock } from './CodeBlock';

interface ChatMessageProps {
  content: string;
  isCode?: boolean;
  codeTitle?: string;
  isUser?: boolean;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ content, isCode, codeTitle, isUser }) => {
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      <div className={`max-w-3xl ${isUser ? 'bg-blue-600' : 'bg-gray-700'} rounded-lg px-4 py-2`}>
        {isCode ? (
          <CodeBlock code={content} title={codeTitle} />
        ) : (
          <p className="text-white">{content}</p>
        )}
      </div>
    </div>
  );
}
