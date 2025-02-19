import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; // Import Navigate
import TestSection from './components/TestSection';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import { fetchUserData, submitTestResults, getTestHistory } from './api'; // Import API functions

function App() {
  const [userData, setUserData] = useState(null); // Initialize to null
  const [testResults, setTestResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchInitialData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const fetchedUser = await fetchUserData("656683526620542385627f0d"); // Replace with actual user ID
        setUserData(fetchedUser);
        const history = await getTestHistory("656683526620542385627f0d");
        setTestResults(history);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchInitialData();
  }, []);

  const handleTestComplete = async (results) => {
    try {
      const updatedUser = await submitTestResults("656683526620542385627f0d", results); // Replace with actual user ID
      setUserData(updatedUser);
      setTestResults((prevResults) => [...prevResults, results]);
    } catch (err) {
      console.error("Error submitting test:", err);
      setError(err.message);
    }
  };

  if (isLoading) {
    return <div className="text-center text-white py-20">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500 py-20">Error: {error}</div>;
  }

  if (!userData) { // Handle the case where userData is still null after loading
    return <div className="text-center text-white py-20">User data not found.</div>; // Or redirect, etc.
  }


  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home onStartTest={() => <Navigate to="/test" replace={true} />} />} /> {/* Navigate to /test */}
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/test" element={<TestSection onComplete={handleTestComplete} />} />
          <Route path="/dashboard" element={<Dashboard userData={userData} testResults={testResults} />} />
          <Route path="*" element={<Navigate to="/" replace={true} />} /> {/* Catch-all route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;