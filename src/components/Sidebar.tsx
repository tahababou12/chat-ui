import React from 'react';
import { Menu, Plus } from 'lucide-react';

export const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-900 h-screen flex flex-col">
      <div className="p-4 flex items-center justify-between border-b border-gray-700">
        <button className="text-gray-300 hover:text-white">
          <Menu size={20} />
        </button>
        <button className="text-gray-300 hover:text-white">
          <Plus size={20} />
        </button>
      </div>
      <div className="flex-1 overflow-y-auto">
        {/* Chat history would go here */}
      </div>
    </div>
  );
}
