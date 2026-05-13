'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'motion/react';

const navItems = [
  { name: 'About', path: '/' },
  { name: 'Research', path: '/research' },
  { name: 'Memoir', path: '/memoir' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-black">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-medium tracking-tight hover:opacity-70 transition-opacity">
          Xiaoqing Sun
        </Link>
        <div className="flex gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`text-sm tracking-wide transition-colors relative py-1 ${
                (pathname === item.path || (item.path !== '/' && pathname.startsWith(item.path)))
                  ? 'text-zinc-900'
                  : 'text-zinc-500 hover:text-zinc-900'
              }`}
            >
              {item.name}
              {(pathname === item.path || (item.path !== '/' && pathname.startsWith(item.path))) && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute bottom-0 left-0 w-full h-[1px] bg-zinc-900"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
