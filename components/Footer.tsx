import { Mail, Linkedin, GraduationCap } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full py-12 border-t border-zinc-100 mt-20">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-zinc-400 font-light">
          Copyright © Xiaoqing Sun
        </p>
        <div className="flex gap-6">
          <a 
            href="https://scholar.google.com/citations?hl=en&user=QiwKlCEAAAAJ" 
            className="text-zinc-400 hover:text-zinc-900 transition-colors" 
            title="Google Scholar" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <GraduationCap className="w-5 h-5" strokeWidth={1.5} />
          </a>
          <a 
            href="mailto:x.sun@bit.edu.cn" 
            className="text-zinc-400 hover:text-zinc-900 transition-colors" 
            title="Email"
          >
            <Mail className="w-5 h-5" strokeWidth={1.5} />
          </a>
          <a 
            href="https://www.linkedin.com/in/xiaoqing-sun-809938312" 
            className="text-zinc-400 hover:text-zinc-900 transition-colors" 
            title="LinkedIn" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Linkedin className="w-5 h-5" strokeWidth={1.5} />
          </a>
        </div>
      </div>
    </footer>
  );
}