// client/src/components/Dashboard.jsx
import React from 'react';
import { ArrowLeft, Brain, Trophy, TrendingUp, User } from 'lucide-react';

function Dashboard({ userData, testResults }) {
  const latestResults = testResults?.[testResults.length - 1];

  if (!latestResults || !userData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex flex-col justify-center items-center">
        <p className="text-white text-2xl">Loading or no data available...</p>
      </div>
    );
  }

  const traitLabels = {
    openness: "Openness",
    conscientiousness: "Conscientiousness",
    extraversion: "Extraversion",
    agreeableness: "Agreeableness",
    neuroticism: "Neuroticism",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-8 text-center">Dashboard</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Personality Profile Card */}
          <div className="lg:col-span-2 bg-white/10 backdrop-blur-lg rounded-xl p-6">
            <div className="flex items-center space-x-2 mb-6">
              <Brain className="w-6 h-6 text-pink-400" />
              <h2 className="text-xl font-bold text-white">Your Personality Profile</h2>
            </div>
            <div className="space-y-6">
              {latestResults && Object.entries(latestResults.traits).map(([trait, value]) => (
                <div key={trait}>
                  <div className="flex justify-between text-gray-300 mb-2">
                    <span className="capitalize">{traitLabels[trait] || trait}</span> {/* Use label or trait name */}
                    <span>{Math.round(value)}%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full">
                    <div
                      className="h-full bg-pink-500 rounded-full transition-all duration-300"
                      style={{ width: `${value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* User Information Card */}
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
            <div className="flex items-center space-x-2 mb-6">
              <User className="w-6 h-6 text-pink-400" />
              <h2 className="text-xl font-bold text-white">User Information</h2>
            </div>
            <div className="text-gray-300">
              <p>Name: {userData.name}</p>
              {/* Add other user information here */}
            </div>
          </div>

          {/* Test History Card (Example) */}
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
            <div className="flex items-center space-x-2 mb-6">
              <TrendingUp className="w-6 h-6 text-pink-400" />
              <h2 className="text-xl font-bold text-white">Test History</h2>
            </div>
            <div className="text-gray-300">
              {testResults.map((result, index) => (
                <div key={index} className="mb-4">
                  <p>Date: {new Date(result.date).toLocaleDateString()}</p>
                  {/* ... (Display other history details) */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;