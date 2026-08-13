'use client';
import { motion } from 'framer-motion';
import { JetBrains_Mono, Inter } from 'next/font/google';

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-mono',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sans',
});

export default function About() {
  return (
    <section
      id="about"
      className={`${jetbrains.variable} ${inter.variable} relative max-w-6xl mx-auto mt-28 px-6 py-12`}
    >
      {/* عنوان القسم */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#2b124c]">
          About <span className="italic text-amber-600">Me</span>
        </h2>
        <div className="w-16 h-1 bg-amber-500 mx-auto mt-3 rounded-full"></div>
      </motion.div>

      {/* نافذة الـ Code Editor */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="rounded-[18px] overflow-hidden border border-[#1e2330] shadow-[0_30px_60px_-20px_rgba(0,0,0,0.5)] bg-[#0d1017]"
        style={{ fontFamily: 'var(--font-sans)' }}
      >
        {/* شريط عنوان النافذة */}
        <div className="flex items-center gap-2 px-4 py-3 bg-[#10131b] border-b border-[#1e2330]">
          <span className="w-[11px] h-[11px] rounded-full bg-[#ff5f57]" />
          <span className="w-[11px] h-[11px] rounded-full bg-[#febc2e]" />
          <span className="w-[11px] h-[11px] rounded-full bg-[#28c840]" />
          <span
            className="ml-3 text-[12px] text-[#5b6270]"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            alaa-portfolio — about.tsx
          </span>
        </div>

        {/* تابز الملفات */}
        <div className="flex bg-[#0d1017] border-b border-[#1e2330] overflow-x-auto">
          <div
            className="flex items-center gap-[7px] text-[12.5px] px-[18px] py-[11px] text-[#d7dae0] bg-[#12161f] border-r border-[#1e2330] border-t-2 border-t-[#7aa2f7] whitespace-nowrap"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            <span className="w-[7px] h-[7px] rounded-full bg-[#7aa2f7]" />
            about.tsx
          </div>
          <div
            className="flex items-center gap-[7px] text-[12.5px] px-[18px] py-[11px] text-[#565d6b] border-r border-[#1e2330] whitespace-nowrap"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            <span className="w-[7px] h-[7px] rounded-full bg-[#e0af68]" />
            skills.json
          </div>
          <div
            className="flex items-center gap-[7px] text-[12.5px] px-[18px] py-[11px] text-[#565d6b] whitespace-nowrap"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            <span className="w-[7px] h-[7px] rounded-full bg-[#9ece6a]" />
            philosophy.md
          </div>
        </div>

        {/* جسم الكود */}
        <div className="grid grid-cols-[32px_1fr] sm:grid-cols-[46px_1fr]">
          {/* أرقام السطور */}
          <div
            className="bg-[#0d1017] text-[#363c48] text-right pr-2 py-7 leading-[1.9] select-none border-r border-[#171b25] text-[11px] sm:text-[12.5px]"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            {Array.from({ length: 14 }, (_, i) => (
              <div key={i}>{String(i + 1).padStart(2, '0')}</div>
            ))}
          </div>

          {/* المحتوى */}
          <div className="px-[18px] sm:px-8 py-7 pb-9">
            <div
              className="text-[#565d6b] italic text-[12px] sm:text-[13.5px] mb-1"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              // frontend developer · egypt
            </div>

            <div
              className="text-[12px] sm:text-[13.5px] leading-[1.9] mb-4"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              <span className="text-[#c792ea]">import</span>{' '}
              {'{ '}
              <span className="text-[#7dcfff]">React</span>,{' '}
              <span className="text-[#7dcfff]">NextJS</span>,{' '}
              <span className="text-[#7dcfff]">Tailwind</span>,{' '}
              <span className="text-[#7dcfff]">FramerMotion</span>
              {' }'}{' '}
              <span className="text-[#c792ea]">from</span>{' '}
              <span className="text-[#9ece6a]">'./stack'</span>;
            </div>

            <h3
              className="font-extrabold text-[#f2f4f8] leading-[1.25] mb-4 text-[26px] sm:text-[32px] md:text-[40px] tracking-tight"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Building the web with{' '}
              <span className="text-[#7dcfff]">passion</span> &{' '}
              <span className="text-[#e0af68]">precision.</span>
            </h3>

           <p className="text-[#9aa1af] text-[13px] sm:text-[14.5px] leading-[1.85] mb-3 max-w-[640px]">
  I&apos;m a{' '}
  <b className="text-[#dfe2e8] font-semibold">
    Frontend Developer
  </b>{' '}
   graduate of{' '}
  <b className="text-[#dfe2e8] font-semibold">
    Zagazig University
  </b>{' '}
  with a degree in Information Systems. I build modern, responsive
  interfaces using React.js, Next.js, and Tailwind CSS.
</p>

<p className="text-[#9aa1af] text-[13px] sm:text-[14.5px] leading-[1.85] mb-6 max-w-[640px]">
  I enjoy turning ideas into clean, intuitive, and{' '}
  <b className="text-[#dfe2e8] font-semibold">
    high-performance web experiences
  </b>{' '}
  with attention to detail, clean code, and user experience.
</p>

            {/* شرائح الـ Stack */}
            <div
              className="flex flex-wrap gap-[9px] mb-6"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              {[
                { label: 'React.js', color: 'text-[#8fd3ff]' },
                { label: 'Next.js', color: 'text-[#8fd3ff]' },
                { label: 'Tailwind CSS', color: 'text-[#c3e88d]' },
                { label: 'Framer Motion', color: 'text-[#c3e88d]' },
                { label: 'TypeScript', color: 'text-[#ffcb6b]' },
              ].map((item) => (
                <span
                  key={item.label}
                  className={`text-[12px] px-[13px] py-[6px] rounded-[7px] bg-[#151a24] border border-[#232a38] ${item.color}`}
                >
                  {item.label}
                </span>
              ))}
            </div>

            <div
              className="text-[12px] sm:text-[13.5px]"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              <span className="text-[#c792ea]">export default</span>{' '}
              <span className="text-[#7aa2f7]">AlaaHessein</span>;
            </div>
          </div>
        </div>

        {/* شريط الحالة */}
        <div
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0 px-[18px] sm:px-8 py-3 bg-[#10131b] border-t border-[#1e2330] text-[10.5px] sm:text-[11px] text-[#565d6b]"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          <span className="flex items-center gap-[7px] text-[#9ece6a]">
            <span className="w-[7px] h-[7px] rounded-full bg-[#9ece6a] animate-pulse" />
            always learning &amp; building things
          </span>
          <span>UTF-8 · TSX · Ln 14, Col 1</span>
        </div>
      </motion.div>
    </section>
  );
}