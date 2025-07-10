import React from 'react';
import { Sparkles } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Sparkles className="w-8 h-8" />
          <h1 className="text-4xl font-bold">AI Media Studio</h1>
        </div>
        <p className="text-center text-lg opacity-90">
          Transform your ideas into stunning visuals and dynamic videos
        </p>
      </div>
    </header>
  );
}