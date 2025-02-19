// client/src/pages/Contact.jsx
import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle form submission, e.g., sending an email
    console.log('Form submitted:', formData);
    // You might want to reset the form after successful submission
    setFormData({ name: '', email: '', message: '' });

    // In a real application, you would send the form data to your backend
    // using fetch or Axios, and then your backend would handle sending the email.
    // Example (using fetch):
    // fetch('/api/contact', {  // Replace with your backend endpoint
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(formData),
    // })
    // .then(response => response.json())
    // .then(data => {
    //   console.log('Success:', data);
    //   // Show a success message to the user
    // })
    // .catch((error) => {
    //   console.error('Error:', error);
    //   // Show an error message to the user
    // });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-8 text-center">Contact Us</h2>
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-4">
          <div>
            <label htmlFor="name" className="block text-white mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-white/10 backdrop-blur-lg rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-white mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-white/10 backdrop-blur-lg rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-white mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className="w-full bg-white/10 backdrop-blur-lg rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-6 py-3 rounded-full transition-all duration-200 transform hover:scale-105"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}