import React, { useState } from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs';
import 'prismjs/components/prism-python';
import 'prismjs/themes/prism-tomorrow.css';

interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ code, title }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <div 
      className={`rounded-lg bg-white border border-gray-200 transition-all duration-300 ease-in-out ${
        isFullscreen 
          ? 'fixed top-0 left-0 w-full h-full z-50 rounded-none' 
          : 'max-h-[500px]'
      }`}
    >
      <div className="flex items-center justify-between p-3 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
          </svg>
          <span className="text-gray-700 text-sm font-medium">{title}</span>
        </div>
        <button 
          className="text-gray-500 hover:text-gray-700 transition-colors"
          onClick={toggleFullscreen}
        >
          {isFullscreen ? (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"></path>
            </svg>
          ) : (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"></path>
            </svg>
          )}
        </button>
      </div>
      <div 
        className={`overflow-auto ${
          isFullscreen 
            ? 'h-[calc(100vh-57px)]' 
            : 'max-h-[calc(500px-57px)]'
        }`}
      >
        <Editor
          value={code}
          onValueChange={() => {}}
          highlight={code => highlight(code, languages.python, 'python')}
          padding={10}
          style={{
            fontFamily: '"Fira code", "Fira Mono", monospace',
            fontSize: 14,
            backgroundColor: 'transparent',
          }}
          readOnly
          className="min-h-full"
        />
      </div>
    </div>
  );
};
