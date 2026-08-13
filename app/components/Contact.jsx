/* eslint-disable react/jsx-no-comment-textnodes */
'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="connect" className="relative max-w-6xl mx-auto mt-40 px-6 py-16">
      
      {/* 1. عنوان القسم */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center gap-2 text-xs font-mono text-amber-600 mb-2">
          
          <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
          // get-in-touch / let&apos;s-connect
        </div>
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#2b124c]">
          Let&apos;s Build Something <span className="italic text-amber-600">Extraordinary</span>
        </h2>
        <p className="text-gray-500 text-sm mt-2 max-w-md mx-auto">
Have a project in mind or want to work together? Feel free to reach out — I&apos;d love to hear from you and discuss how I can help.        </p>
      </motion.div>

      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
        
        
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 bg-white/90 backdrop-blur-xl p-8 md:p-10 rounded-4xl shadow-xl border border-purple-50 flex flex-col justify-between"
        >
          <div>
            <h3 className="text-xl font-serif font-bold text-[#2b124c] mb-6">
              Contact Information
            </h3>

            <div className="space-y-6">
              {/* الإيميل */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-purple-50 text-[#2b124c] flex items-center justify-center text-lg shadow-sm">
                  ✉️
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium">Email</p>
                  <a href="mailto:alaahessein23@gmail.com" className="text-sm font-semibold text-[#2b124c] hover:text-amber-600 transition">
                    alaahessein23@gmail.com
                  </a>
                </div>
              </div>

              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-purple-50 text-[#2b124c] flex items-center justify-center text-lg shadow-sm">
                  📞
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium">Phone</p>
                  <a href="tel:+201061899428" className="text-sm font-semibold text-[#2b124c] hover:text-amber-600 transition">
                    +20 106 189 9428
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-purple-50 text-[#2b124c] flex items-center justify-center text-lg shadow-sm">
                  📍
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium">Location</p>
                  <p className="text-sm font-semibold text-[#2b124c]">
                    Zagazig, Egypt
                  </p>
                </div>
              </div>
            </div>
          </div>

          
          <div className="mt-10 pt-6 border-t border-purple-100">
            <p className="text-xs text-gray-400 font-medium mb-4">Follow me on social media</p>
            <div className="flex items-center gap-3">
              <a 
                href="https://github.com/AlaaHessein190" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#2b124c] text-white flex items-center justify-center hover:scale-110 transition shadow-md"
              >
                🐙
              </a>
              <a 
                href="https://www.linkedin.com/in/alaa-hessein-20b404357/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#2b124c] text-white flex items-center justify-center hover:scale-110 transition shadow-md"
              >
                💼
              </a>
            </div>
          </div>
        </motion.div>

        
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 bg-white/90 backdrop-blur-xl p-8 md:p-10 rounded-4xl shadow-xl border border-purple-50 flex flex-col justify-between"
        >
          <div>
            <h3 className="text-xl font-serif font-bold text-[#2b124c] mb-6">
              Send a Message
            </h3>

            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-6 rounded-2xl text-center space-y-2">
                <p className="font-serif font-bold text-lg">Transmission Successful! 🚀</p>
                <p className="text-xs">Thank you for reaching out. I&apos;ll get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Name</label>
                  <input 
                    type="text" 
                    required
                    placeholder="John Doe"
                    className="w-full bg-[#f8f6fb] border border-purple-100 rounded-2xl px-4 py-3.5 text-sm text-[#2b124c] focus:outline-none focus:border-purple-400 transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Email</label>
                  <input 
                    type="email" 
                    required
                    placeholder="john@example.com"
                    className="w-full bg-[#f8f6fb] border border-purple-100 rounded-2xl px-4 py-3.5 text-sm text-[#2b124c] focus:outline-none focus:border-purple-400 transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Message / Brief</label>
                  <textarea 
                    rows="4" 
                    required
                    placeholder="Describe the architectural requirements..."
                    className="w-full bg-[#f8f6fb] border border-purple-100 rounded-2xl px-4 py-3.5 text-sm text-[#2b124c] focus:outline-none focus:border-purple-400 transition resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-[#2b124c] text-white py-4 rounded-2xl font-semibold text-xs tracking-widest uppercase shadow-lg hover:bg-[#3d1a6b] transition transform hover:scale-[1.01] flex items-center justify-center gap-2"
                >
                  TRANSMIT ↗
                </button>
              </form>
            )}
          </div>

          <div className="mt-8 pt-4 border-t border-purple-100 text-center">
            <p className="text-[11px] text-gray-400 font-mono">
              DESIGNED & ENGINEERED BY ALAA HESSEIN © 2026
            </p>
          </div>
        </motion.div>

      </div>

    </section>
  );
}