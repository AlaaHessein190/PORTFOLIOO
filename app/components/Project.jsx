'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getProjects } from '@/sanity/schemaTypes/queries';
import { urlFor } from '@/sanity/schemaTypes/client';

export default function Projects() {
  // المشاريع الافتراضية (لو لسه مفيش حاجة في Sanity)
  const defaultProjects = [
    {
      id: "01",
      title: "Maison de Beauté",
      category: "E-COMMERCE / UI ENGINEERING",
      description: "A high-performance storefront for a luxury cosmetics brand. Built with Next.js and Shopify headless architecture, featuring fluid page transitions and bespoke cart animations.",
      tags: ["Next.js", "Framer Motion", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop",
      link: "#",
      file: "maison-de-beaute.tsx"
    },
    {
      id: "02",
      title: "Aura FinTech Dashboard",
      category: "FINTECH / SAAS PLATFORM",
      description: "A bespoke analytics dashboard for high-net-worth portfolio management. Translating complex data streams into elegant, readable components with dark mode support.",
      tags: ["React.js", "Redux", "TypeScript"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
      link: "#",
      file: "aura-fintech.tsx"
    },
    {
      id: "03",
      title: "Estesharaty Platform",
      category: "FULL-STACK / CONSULTATION",
      description: "Multi-role consultation platform developed using React and Redux, fully integrated with RESTful APIs, JWT-based authentication, and protected routes.",
      tags: ["React", "Redux", "RESTful APIs"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
      link: "#",
      file: "estesharaty.tsx"
    }
  ];

  const [projects, setProjects] = useState(defaultProjects);
  const [activeProject, setActiveProject] = useState(0);

  // جلب البيانات الحقيقية من Sanity
  useEffect(() => {
    async function fetchSanityProjects() {
      try {
        const data = await getProjects();
        if (data && data.length > 0) {
          // بنحول بيانات Sanity لنفس شكل الـ Array بتاعتك عشان التصميم يشتغل بنفس الكفاءة
          const formatted = data.map((item, index) => ({
            id: `0${index + 1}`,
            title: item.title,
            category: item.category,
            description: item.description,
            tags: item.tags || [],
            image: item.image ? urlFor(item.image).url() : "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop",
            link: item.link || "#",
            file: `${item.title?.toLowerCase().replace(/\s+/g, '-')}.tsx`
          }));
          setProjects(formatted);
        }
      } catch (error) {
        console.error("Using default projects due to fetch error:", error);
      }
    }
    fetchSanityProjects();
  }, []);

  const currentProj = projects[activeProject] || projects[0];

  return (
    <section id="projects" className="relative max-w-6xl mx-auto mt-36 px-6 py-12">
      
      {/* 1. العنوان مع لمسة الـ Terminal الهادئة */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col md:flex-row md:items-end justify-between mb-14"
      >
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-amber-600 mb-2">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
            // portfolio-builds / active-projects
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#2b124c]">
            Featured <span className="italic text-amber-600">Projects</span>
          </h2>
        </div>
        <p className="text-gray-500 text-sm mt-2 md:mt-0 max-w-sm font-sans">
          A selection of web projects built with React.js, Next.js, Redux and modern frontend technologies.
        </p>
      </motion.div>

      {/* 2. شريط التبويب التفاعلي */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 border-b border-purple-100">
        {projects.map((proj, idx) => (
          <button
            key={idx}
            onClick={() => setActiveProject(idx)}
            className={`px-5 py-2.5 rounded-2xl text-xs font-mono transition-all duration-300 flex items-center gap-2 shadow-sm ${
              activeProject === idx 
                ? 'bg-[#2b124c] text-white shadow-md scale-105' 
                : 'bg-white/80 text-gray-500 hover:bg-purple-50 hover:text-[#2b124c]'
            }`}
          >
            <span className="opacity-60">{proj.id}</span>
            <span>{proj.file}</span>
          </button>
        ))}
      </div>

      {/* 3. صندوق عرض المشروع الحالي */}
      <AnimatePresence mode="wait">
        <motion.div 
          key={activeProject}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="bg-white/90 backdrop-blur-xl rounded-[32px] p-6 md:p-12 shadow-2xl border border-purple-50 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
        >
          
          {/* تفاصيل المشروع */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-[11px] font-semibold tracking-widest text-amber-600 uppercase block mb-2">
                {currentProj.category}
              </span>
              <h3 className="text-3xl font-serif font-bold text-[#2b124c]">
                {currentProj.title}
              </h3>
            </div>

            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              {currentProj.description}
            </p>

            {/* التقنيات المستخدمة */}
            <div className="flex flex-wrap gap-2 pt-2">
              {currentProj.tags.map((tag, i) => (
                <span key={i} className="px-3.5 py-1.5 bg-[#f3edf8] text-[#2b124c] text-xs font-semibold rounded-full border border-purple-100/60">
                  {tag}
                </span>
              ))}
            </div>

            {/* الزرار */}
            <div className="pt-4">
              <a 
                href={currentProj.link}
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#2b124c] text-white px-7 py-3 rounded-full text-xs font-semibold tracking-wider hover:bg-[#3d1a6b] transition shadow-lg hover:scale-105 transform"
              >
                VIEW LIVE PROJECT ↗
              </a>
            </div>
          </div>

          {/* صورة المشروع */}
          <div className="lg:col-span-6">
            <div className="bg-[#161b22] rounded-2xl p-3 shadow-xl border border-gray-800">
              <div className="flex items-center justify-between pb-3 px-2 border-b border-gray-800">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500 inline-block"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block"></span>
                </div>
                <div className="bg-[#0d1117] text-gray-400 text-[11px] px-4 py-1 rounded-md font-mono border border-gray-800">
                  https://{currentProj.file.replace('.tsx', '')}.vercel.app
                </div>
                <div className="text-[10px] text-emerald-400 font-mono">● deployed</div>
              </div>

              <div className="mt-3 rounded-xl overflow-hidden bg-gray-900 h-64 md:h-72 relative group">
                <img 
                  src={currentProj.image} 
                  alt={currentProj.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
            </div>
          </div>

        </motion.div>
      </AnimatePresence>

    </section>
  );
}