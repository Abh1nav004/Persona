import React, { useState } from 'react';
import { personalityQuestions } from '../data/mockData';

export default function TestSection({ onComplete }) {
  const [answers, setAnswers] = useState([]);
  
  const handleAnswerChange = (questionIndex, selectedOption) => {
    const updatedAnswers = [...answers];
    updatedAnswers[questionIndex] = selectedOption;
    setAnswers(updatedAnswers);
  };

  const handleSubmit = () => {
    const results = {
      openness: answers[0],
      conscientiousness: answers[1],
      extraversion: answers[2],
      agreeableness: answers[3],
      neuroticism: answers[4],
    };
    onComplete(results);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-10">
      <h2 className="text-4xl font-bold mb-8 text-white">Personality Test</h2>
      <div className="max-w-3xl mx-auto">
        {personalityQuestions.map((question, index) => (
          <div key={index} className="mb-8 p-6 bg-white/10 backdrop-blur-lg rounded-xl">
            <p className="text-lg font-semibold text-white mb-4">{question.text}</p>
            <div className="space-y-3">
              {question.options.map((option, i) => (
                <div key={i} className="flex items-center">
                  <input
                    type="radio"
                    name={`question-${index}`}
                    value={option}
                    onChange={() => handleAnswerChange(index, option)}
                    className="w-5 h-5 text-pink-500 border-gray-300 focus:ring-pink-500"
                  />
                  <label className="ml-3 text-gray-200">{option}</label>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <button
          onClick={handleSubmit}
          className="bg-pink-500 hover:bg-pink-600 text-white text-lg font-semibold px-8 py-3 rounded-full transition-all duration-200 transform hover:scale-105"
        >
          Submit Test
        </button>
      </div>

    </div>
  );
}
