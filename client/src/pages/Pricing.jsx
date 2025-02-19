// client/src/pages/Pricing.jsx
import React from 'react';

export default function Pricing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-8 text-center">Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Basic Plan */}
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 text-center transition-transform hover:scale-105">
            <h3 className="text-2xl font-semibold text-white mb-4">Basic</h3>
            <p className="text-gray-300 mb-6">Free</p>
            <ul className="text-gray-300 space-y-2 mb-6">
              <li>Limited personality insights</li>
              <li>Basic data visualization</li>
              <li>Community forum access</li>
            </ul>
            <button className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-6 py-3 rounded-full transition-all duration-200">
              Get Started
            </button>
          </div>

          {/* Premium Plan */}
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 text-center transition-transform hover:scale-105">
            <h3 className="text-2xl font-semibold text-white mb-4">Premium</h3>
            <p className="text-gray-300 mb-6">$9.99/month</p>
            <ul className="text-gray-300 space-y-2 mb-6">
              <li>Detailed personality report</li>
              <li>Advanced data visualization</li>
              <li>Priority support</li>
              <li>Personalized recommendations</li>
            </ul>
            <button className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-6 py-3 rounded-full transition-all duration-200">
              Subscribe Now
            </button>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 text-center transition-transform hover:scale-105">
            <h3 className="text-2xl font-semibold text-white mb-4">Enterprise</h3>
            <p className="text-gray-300 mb-6">Contact Us</p>
            <ul className="text-gray-300 space-y-2 mb-6">
              <li>Customized solutions</li>
              <li>Dedicated account manager</li>
              <li>API access</li>
              <li>Onboarding and training</li>
            </ul>
            <button className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-6 py-3 rounded-full transition-all duration-200">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}