// client/src/pages/Features.jsx
import React from 'react';
import { Brain, BarChart3, Users, Sparkles, User, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: <Brain className="w-6 h-6" />,
    title: 'AI-Powered Insights',
    description: 'Advanced personality analysis using cutting-edge AI.',
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: 'Data Visualization',
    description: 'Beautiful charts to track your progress and understand your traits.',
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Community',
    description: 'Connect with others on similar journeys and share your experiences.',
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: 'Personalized Growth',
    description: 'Tailored recommendations for personal development and improvement.',
  },
  {
    icon: <User className="w-6 h-6" />,
    title: 'User-Friendly Interface',
    description: 'Intuitive and easy-to-navigate platform for a seamless experience.',
  },
    {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: 'Private & Secure',
    description: 'Your data is always protected with the highest security standards.',
  },
];

export default function Features() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-8 text-center">Key Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 transform hover:scale-105 transition-all"
            >
              <div className="text-pink-400 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}