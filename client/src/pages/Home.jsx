import React from 'react';
import { Brain, ChevronRight } from 'lucide-react';

export default function Home({ onStartTest }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      <div className="container mx-auto px-4 py-12 pt-32 text-center">
        <div className="flex justify-center mb-6">
          <Brain className="w-20 h-20 text-pink-400" />
        </div>
        <h1 className="text-6xl font-bold text-white mb-4">PERSONA</h1>
        <p className="text-xl text-gray-300 mb-8">Discover Your True Self Through Science</p>

        <button
          onClick={onStartTest}
          className="group bg-pink-500 hover:bg-pink-600 text-white text-lg font-semibold px-8 py-4 rounded-full inline-flex items-center space-x-2"
        >
          <span>Start Your Journey</span>
          <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}
