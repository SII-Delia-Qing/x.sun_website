'use client';

import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

const publications = [
  {
    title: "ATRU: A Stage-based Framework for Designing Ethology-Inspired Social Robots",
    authors: "x.sun et al.",
    venue: "ACM CHI 2026",
    tags: ["Design Framework", "Review", "Ethology"],
    img: "/research_1.jpg"
  },
  {
    title: "Tuning into urban birdsong: enhancing nature connectedness with an AI-powered wearable",
    authors: "z.li et al.",
    venue: "Scientific Reports",
    tags: ["Nature connection","wearable"],
    img: "/research_2.jpg"
  },
  {
    title: "ZooWear: Animal-Inspired Head-Mounted Haptic Interfaces to Augment the Zoo Experience",
    authors: "p.chen et al.",
    venue: "IJCHI",
    tags: ["Zoo experience","wearable"],
    img: "/research_3.jpg"
  },

];

export default function ResearchPage() {
  return (
    <motion.div 
      className="pb-24 pt-24 max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="text-center space-y-2 mb-20">
        <h1 className="text-xl font-light tracking-tight">「 Animals are good to think with 」</h1>
        <p className="text-zinc-400 text-sm">Claude Lévi-Strauss</p>
      </div>

      {/* Vision Section */}
      <section className="mb-40 flex flex-col items-center">
        <div className="max-w-3xl w-full space-y-20">
          <div className="flex flex-col items-center">
            {[
              { src: '/vision_1.png', maxWidth: 'max-w-[200px]', marginBottom: 'mb-[10px]' },
              { src: '/vision_2.png', maxWidth: 'max-w-[800px]', marginBottom: 'mb-[10px]' },
              { src: '/vision_3.png', maxWidth: 'max-w-[800px]', marginBottom: 'mb-[10px]' },
              { src: '/vision_4.png', maxWidth: 'max-w-[800px]', marginBottom: 'mb-[10px]' },
              { src: '/vision_5.png', maxWidth: 'max-w-[200px]', marginBottom: 'mb-[10px]' },
            ].map((img, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`w-full ${img.maxWidth} ${img.marginBottom} overflow-hidden`}
              >
                <img
                  src={img.src}
                  alt={`Vision ${idx + 1}`}
                  className="w-full h-auto block"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="space-y-32">
        {publications.map((pub, idx) => (
          <motion.div 
            key={idx} 
            className="group space-y-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: idx * 0.1 }}
          >
            <div className="relative aspect-[16/9] w-full rounded-[2rem] overflow-hidden bg-zinc-50 ring-1 ring-zinc-100 shadow-sm transition-all duration-700 group-hover:ring-zinc-900/10 group-hover:shadow-2xl">
              <Image
                src={pub.img}
                alt={pub.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-zinc-900/0 group-hover:bg-zinc-900/5 transition-colors duration-700" />
            </div>
            
            <div className="space-y-6">
              <div className="flex flex-wrap gap-2">
                {pub.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-black uppercase tracking-widest py-1 px-4 bg-zinc-900 text-white rounded-full">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-start">
                <div className="space-y-4">
                  <h3 className="text-4xl font-bold leading-none tracking-tight text-zinc-900 hover:text-zinc-600 transition-colors font-afacad flex items-start gap-3">
                    {pub.title}
                    <ArrowUpRight className="w-8 h-8 opacity-20 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                  </h3>
                  <p className="text-xl text-zinc-500 font-medium leading-relaxed font-afacad">
                    {pub.authors.split(', ').map((name, i) => (
                      <span key={i}>
                        {name === "Xiaoqing Sun" ? (
                          <span className="text-zinc-900 font-bold underline decoration-zinc-300 decoration-2 underline-offset-4">Xiaoqing Sun</span>
                        ) : name}
                        {i < pub.authors.split(', ').length - 1 ? ', ' : ''}
                      </span>
                    ))}
                  </p>
                </div>
                <div className="md:text-right">
                  <p className="text-sm font-black uppercase tracking-[0.2em] text-zinc-400 group-hover:text-zinc-900 transition-colors">{pub.venue}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}