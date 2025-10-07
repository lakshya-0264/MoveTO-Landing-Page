import React, { useState } from 'react';

const QuoteForm = () => {
    const [currentZip, setCurrentZip] = useState('');
    const [newZip, setNewZip] = useState('');
  return (
    <div className="max-w-7xl mx-auto px-4 -mt-16 relative z-20">
    <div className="bg-white rounded-xl shadow-2xl p-8 md:p-10">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <h2 className="text-3xl font-bold text-gray-800 md:w-80 flex-shrink-0">Get Your Free Moving Estimate Here</h2>
            <div className="flex flex-col md:flex-row gap-5 items-end flex-1 w-full">
              <div className="flex-1 w-full">
                <label className="block text-xs text-gray-600 font-bold uppercase mb-2 tracking-wide">Current Zip/Postal Code</label>
                <input
                  type="text"
                  placeholder="Current Zip/Postal Code"
                  value={currentZip}
                  onChange={(e) => setCurrentZip(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-700"
                />
              </div>
              <div className="flex-1 w-full">
                <label className="block text-xs text-gray-600 font-bold uppercase mb-2 tracking-wide">New Zip/Postal Code</label>
                <input
                  type="text"
                  placeholder="New Zip/Postal Code"
                  value={newZip}
                  onChange={(e) => setNewZip(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-700"
                />
              </div>
              <button className="bg-gradient-to-r from-orange-500 to-orange-400 text-white px-10 py-3 rounded-full font-semibold uppercase text-sm hover:shadow-lg transition whitespace-nowrap">
                Submit
              </button>
            </div>
          </div>
        </div>
        </div>
  )
}

export default QuoteForm
