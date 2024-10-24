'use client'
import React, { useState } from 'react';

const PartnerWithUsForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: '',
    telegramId: '',
    partnershipType: ''
  });

  const [loading, setLoading] = useState(false); // For loading state
  const [error, setError] = useState<string | null>(null); // For error state
  const [success, setSuccess] = useState(false);

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch('/api/auth/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess(true);
        console.log('Form Data Submitted:', formData);
        // Reset form data on success
        setFormData({
          name: '',
          email: '',
          organization: '',
          message: '',
          telegramId: '',
          partnershipType: ''
        });
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Something went wrong!');
      }
    } catch (err: any) {
      setError(err.message || 'Error submitting form');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-yellow-50 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl mx-auto">
        <div className="backdrop-blur-lg bg-white/70 p-8 rounded-xl shadow-2xl border border-yellow-100">
          <h1 className="text-3xl font-bold text-black mb-8 text-center">
            Partner with Us - BTC India
          </h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <label className="block text-black font-medium">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 border border-yellow-200 rounded-lg bg-white/50 backdrop-blur-sm 
                           focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-transparent
                           text-black placeholder-gray-400"
                  placeholder="Enter your name"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label className="block text-black font-medium">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border border-yellow-200 rounded-lg bg-white/50 backdrop-blur-sm
                           focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-transparent
                           text-black placeholder-gray-400"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
                <label className="block text-black font-medium">Telegram Id</label>
                <input
                  type="text"
                  name="telegramId"
                  value={formData.telegramId}
                  onChange={handleChange}
                  className="w-full p-3 border border-yellow-200 rounded-lg bg-white/50 backdrop-blur-sm
                           focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-transparent
                           text-black placeholder-gray-400"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="space-y-2">
  <label className="block text-black font-medium">Partnership Type</label>
  <select
    name="partnershipType"
    value={formData.partnershipType}
    onChange={handleChange}
    className="w-full p-3 border border-yellow-200 rounded-lg bg-white/50 backdrop-blur-sm
               focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-transparent
               text-black placeholder-gray-400"
    required
  >
    <option value="" disabled>Select a partnership type</option>
    <option value="Sponsorship">Sponsorship</option>
    <option value="Media Partner">Media Partner</option>
    <option value="Community Partner">Community Partner</option>
    <option value="Other">Other</option>
  </select>
</div>

              </div>

            <div className="space-y-2">
              <label className="block text-black font-medium">Organization</label>
              <input
                type="text"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                className="w-full p-3 border border-yellow-200 rounded-lg bg-white/50 backdrop-blur-sm
                         focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-transparent
                         text-black placeholder-gray-400"
                placeholder="Enter your organization name"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-black font-medium">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full p-3 border border-yellow-200 rounded-lg bg-white/50 backdrop-blur-sm
                         focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-transparent
                         text-black placeholder-gray-400 resize-none"
                placeholder="Enter your message"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-3 px-6 rounded-lg font-semibold
                       hover:bg-gray-800 transform hover:scale-[1.02] transition-all duration-300
                       focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PartnerWithUsForm;
