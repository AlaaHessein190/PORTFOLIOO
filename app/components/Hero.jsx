/* eslint-disable @next/next/no-img-element */
'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  // فكرة رقم 2: تأثير الماوس اللي بيتحرك وراه نور خفيف (Spotlight)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="relative flex flex-col lg:flex-row items-center justify-between max-w-6xl mx-auto mt-16 px-6 gap-12 overflow-hidden py-10"
    >
      
      {/* 💡 فكرة 2: خلفية مضيئة تتبع حركة الماوس */}
      <div 
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-30 transition duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(168, 85, 247, 0.15), transparent 80%)`
        }}
      />

      {/* القسم الشمال: النصوص والزرارين */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 bg-white/80 backdrop-blur-md p-8 md:p-12 rounded-3xl shadow-xl border border-purple-50 max-w-xl flex-1"
      >
        {/* شارة المتاح للعمل */}
        <div className="inline-flex items-center gap-2 bg-[#f3edf8] text-[#2b124c] px-4 py-1.5 rounded-full text-xs font-semibold mb-6 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
          OPEN TO OPPORTUNITIES
        </div>

        {/* 💡 فكرة 3: العنوان مع تأثير الظهور السلس */}
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-3xl md:text-4xl font-serif font-bold text-[#2b124c] mb-4 leading-snug"
        >
          Crafting Modern Interfaces with <span className="italic font-normal text-amber-600">React & Code</span>
        </motion.h1>

        {/* الوصف */}
        <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8">
          Frontend Developer specializing in React.js, Next.js, and responsive web design. I build modern, user-friendly interfaces with clean code and a focus on great user experiences.
        </p>

        {/* الأزرار */}
        <div className="flex flex-wrap items-center gap-4">
          <a 
            href="#projects" 
            className="bg-[#2b124c] text-white text-sm font-semibold px-8 py-3.5 rounded-full shadow-lg hover:scale-105 transition transform"
          >
            VIEW MY PROJECTS
          </a>
          <a 
            href="#connect" 
            className="bg-white text-[#2b124c] border border-gray-200 text-sm font-semibold px-8 py-3.5 rounded-full shadow-sm hover:bg-gray-50 transition"
          >
            CONTACT ME
          </a>
        </div>
      </motion.div>

      {/* القسم اليمين: الصورة والكروت الطايرة */}
      <div className="relative flex-1 flex justify-center z-10">
        
        {/* إطار الصورة */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-72 h-80 md:w-80 md:h-96 rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-gray-200"
        >
          <img
            src="Alaa.png" 
            alt="Alaa Hessein" 
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-500"
          />
        </motion.div>

        {/* 💡 فكرة 1: الكارت الطايح الأول (React Ecosystem) */}
        <motion.div 
          animate={{ y: [0, -12, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="absolute -top-4 -left-6 md:-left-10 bg-white/90 backdrop-blur-md px-4 py-3 rounded-2xl shadow-lg border border-purple-50 flex items-center gap-3"
        >
          <span className="text-purple-600 bg-purple-50 p-2 rounded-xl font-bold text-xs">&lt;/&gt;</span>
          <div>
            <p className="text-xs font-bold text-[#2b124c]">FRONTEND DEVELOPER</p>
            <p className="text-[10px] text-gray-400">Next.js & React.js</p>
          </div>
        </motion.div>

        {/* 💡 فكرة 1: الكارت الطايح التاني (UI/UX Engineering) */}
        <motion.div 
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          className="absolute bottom-6 -right-4 md:-right-8 bg-white/90 backdrop-blur-md px-4 py-3 rounded-2xl shadow-lg border border-purple-50 flex items-center gap-3"
        >
          <span className="text-amber-600 bg-amber-50 p-2 rounded-xl text-xs">🎨</span>
          <div>
            <p className="text-xs font-bold text-[#2b124c]">MODERN WEB DEVELOPMENT</p>
            <p className="text-[10px] text-gray-400"> React & Tailwind CSS</p>
          </div>
        </motion.div>

      </div>

    </section>
  );
}