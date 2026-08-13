/* eslint-disable react/jsx-no-comment-textnodes */
'use client';
import { motion } from 'framer-motion';

export default function Skills() {
  const techStack = [
    { name: "React.js", level: "95%", category: "Frontend" },
    { name: "Next.js", level: "90%", category: "Framework" },
    { name: "TypeScript", level: "85%", category: "Language" },
    { name: "Tailwind CSS", level: "95%", category: "Styling" },
    { name: "Redux & Toolkit", level: "90%", category: "State" },
    { name: "Firebase", level: "85%", category: "Backend" },
    { name: "Git & GitHub", level: "90%", category: "Tools" },
    { name: "Framer Motion", level: "88%", category: "Animation" }
  ];

  return (
    <section id="expertise" className="relative max-w-6xl mx-auto mt-36 px-6 py-12">
      
      {/* 1. العنوان الرئيسي */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center gap-2 text-xs font-mono text-amber-600 mb-2">
          <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
          // technical-toolkit / expertise
        </div>
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#2b124c]">
          Technical <span className="italic text-amber-600">Toolkit</span>
        </h2>
        <p className="text-gray-500 text-sm mt-2 max-w-md mx-auto">
        A selection of technologies and tools I use to build modern, responsive, and user-friendly web experiences.
        </p>
      </motion.div>

      {/* 2. المكس الفخم (مقسم جزأين: الكبسولات التفاعلية + كارت الكود والخبرات) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* الجزء الشمال: كبسولات التقنيات التفاعلية (مستوحى من التصميم الأول والثاني) */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 bg-white/90 backdrop-blur-xl p-8 md:p-10 rounded-4xl shadow-xl border border-purple-50 flex flex-col justify-between"
        >
          <div>
            <h3 className="text-xl font-serif font-bold text-[#2b124c] mb-3">
              Core Technologies
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-8">
              Building responsive interfaces and interactive web experiences using modern frontend technologies.</p>

            {/* الـ Pills المتحركة */}
            <div className="flex flex-wrap gap-3">
              {techStack.map((tech, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -3 }}
                  className="px-4 py-2.5 bg-[#f3edf8] text-[#2b124c] border border-purple-100/60 rounded-2xl text-xs font-semibold shadow-sm flex items-center gap-2 cursor-pointer transition"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                  <span>{tech.name}</span>
                  <span className="text-[10px] text-purple-400 font-mono">({tech.level})</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-purple-100/60 flex items-center justify-between text-xs text-gray-500 font-mono">
            <span>Core Stack & Ecosystem</span>
            <span className="text-emerald-600 font-semibold">● Production Ready</span>
          </div>
        </motion.div>

        {/* الجزء اليمين: كارت الكود البرمجي الفخم (مستوحى من التصميم الثاني) */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 bg-[#17092b] text-white p-8 md:p-10 rounded-4xl shadow-2xl border border-purple-900/50 flex flex-col justify-between"
        >
          <div>
            {/* شريط المتصفح أو الـ IDE */}
            <div className="flex items-center justify-between mb-6 pb-3 border-b border-purple-900/40">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-amber-500 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block"></span>
              </div>
              <span className="text-[11px] font-mono text-gray-400">architecture.ts</span>
            </div>

            <h3 className="text-lg font-serif font-bold mb-2">Clean Code & Architecture</h3>
            <p className="text-gray-300 text-xs leading-relaxed mb-6">
              Writing clean, reusable components with organized structure and maintainable code.
            </p>
          </div>

          {/* صندوق الكود */}
          <div className="bg-[#0e041b] border border-purple-900/60 p-4 rounded-2xl font-mono text-xs shadow-inner space-y-1">
  <p className="text-purple-300">
    const <span className="text-amber-300">frontendSkills</span> = [
  </p>

  <p className="pl-4 text-cyan-300">
    &quot;React.js&quot;,
  </p>

  <p className="pl-4 text-cyan-300">
    &quot;Next js&quot;,
  </p>

  <p className="pl-4 text-cyan-300">
    &quot;Tailwind CSS&quot;,
  </p>

  <p className="pl-4 text-cyan-300">
    &quot;Redux Toolkit&quot;,
  </p>

  <p className="text-purple-300">
    ];
  </p>

  <p className="text-gray-300">
    const <span className="text-amber-300">goal</span> ={" "}
    <span className="text-emerald-300">
      &quot;Build clean &amp; user-friendly experiences&quot;
    </span>
    ;
  </p>
</div>

        </motion.div>

      </div>

    </section>
  );
}