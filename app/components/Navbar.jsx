import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="w-full flex justify-center pt-6 px-4">
      {/* الكبسولة البيضاء */}
      <nav className="w-full max-w-5xl bg-white/90 backdrop-blur-md px-8 py-3 rounded-full shadow-lg flex items-center justify-between border border-purple-50">
        
        {/* اللوجو */}
        <div className="font-serif italic font-bold text-xl tracking-wider text-[#2b124c]">
          <Link href="/">Alaa Hessein</Link>
        </div>

        {/* الروابط في النصف */}
        <ul className="hidden md:flex items-center gap-8 text-xs font-semibold tracking-widest text-gray-400">
          <li>
            <Link href="#home" className="text-[#2b124c] relative pb-1 border-b-2 border-amber-400">
              Home
            </Link>
          </li>
         <li><Link href="#about" className="hover:text-[#2b124c] transition">About</Link></li>
        <li><Link href="#projects" className="hover:text-[#2b124c] transition">Projects</Link></li>

          <li><Link href="#expertise" className="hover:text-[#2b124c] transition">EXPERTISE</Link></li>
          <li><Link href="#connect" className="hover:text-[#2b124c] transition">CONNECT</Link></li>
        </ul>

        {/* زرار الـ Resume */}
        <div>
          <a 
            href="#resume" 
            className="bg-[#2b124c] text-white text-xs font-semibold px-6 py-2.5 rounded-full shadow-md hover:scale-105 transition transform tracking-wider inline-block"
          >
            RESUME
          </a>
        </div>

      </nav>
    </header>
  );
}