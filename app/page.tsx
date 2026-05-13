'use client';

import Image from 'next/image';
import { Mail, Linkedin, GraduationCap, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function AboutPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0 }
  };

  const education = [
    { 
      date: 'Sep. 2024 — Now', 
      institution: 'Beijing Institute of Technology\nShanghai Innovation Institute', 
      detail: 'PhD candidate, focusing on AI and HCI' 
    },
    { 
      date: 'Sep. 2022 — Jun. 2024', 
      institution: 'Beijing Institute of Technology', 
      detail: "Master's student" 
    },
    { 
      date: 'Sep. 2018 — Jun. 2022', 
      institution: 'Beijing Institute of Technology', 
      detail: 'B.Eng in Industrial Design' 
    },
  ];

  return (
    <motion.div 
      className="pb-24 pt-12"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-24 px-2">
        {/* Left Column: Portrait & Education */}
        <motion.aside variants={itemVariants} className="space-y-20">
          <div className="group relative">
            <div className="relative aspect-[3/4] w-full rounded-3xl overflow-hidden transition-all duration-1000 z-10 bg-zinc-100 shadow-sm">
              <Image
                src="/avatar.jpg"
                alt="Xiaoqing Sun"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-zinc-200 rounded-3xl -z-0 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500" />
          </div>
          
          <div className="space-y-12 pl-1">
            <div className="space-y-8">
              <div className="space-y-10">
                {education.map((edu, idx) => (
                  <div key={idx} className="space-y-1 font-afacad text-[17px] leading-snug">
                    <p className="font-bold text-zinc-900">{edu.date}</p>
                    <p className="text-zinc-600 font-medium whitespace-pre-line">{edu.institution}</p>
                    <p className="text-zinc-500 whitespace-pre-line">{edu.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.aside>

        {/* Right Column: Bio & Text-only Publications */}
        <div className="space-y-32">
          {/* Biography */}
          <motion.section variants={itemVariants} className="space-y-8">
            <div className="flex items-center gap-4">
              <h2 className="text-xl font-bold text-zinc-900 uppercase tracking-tighter">About</h2>
              <div className="h-[2px] w-12 bg-zinc-900" />
            </div>
            <div className="prose prose-zinc prose-xl max-w-none text-zinc-500 font-normal leading-relaxed font-afacad text-justify">
              <p>
              I am a PhD student jointly supervised by Beijing Institute of Technology and Shanghai Innovation Institute, conducting research at the AniThing Robotics Lab in Shanghai. My research sits at the intersection of design and Human-Computer Interaction (HCI), with a particular focus on ethology-inspired social robots.
              </p>
              <p>
              By observing and understanding how animals interact with the world, I uncover patterns of communication, emotion, and social dynamics that can inform social robot design. Through iterative prototyping and user studies, I translate these insights into robotic systems that not only perform tasks but also engage people in meaningful, empathetic ways.
              </p>
            </div>
          </motion.section>

          {/* Text-only Publications */}
          <motion.section variants={itemVariants} className="space-y-12">
            <div className="flex items-center gap-4 font-afacad">
              <h2 className="text-xl font-bold text-zinc-900 tracking-tighter uppercase">Publication</h2>
              <div className="h-[1px] flex-grow bg-zinc-100" />
            </div>

            <div className="space-y-14">
              {[
                {
                  title: "ATRU: A Stage-based Framework for Designing Ethology-Inspired Social Robots",
                  authors: "Xiaoqing Sun, Yanheng Li, Zhen Yin, Xinyan Zhao, Xipei Ren",
                  venue: "ACM CHI (full paper)",
                  link: "#"
                },
                {
                  title: "Nurture Robotic Things: Speculating Future of Human Robot Interaction through Creative Designs with Everyday Objects",
                  authors: "Yanheng Li, Xiaoqing Sun, Mingyang Xu, Zhen Yin, Xipei Ren, Ray LC",
                  venue: "ACM DIS (workshop)",
                  link: "https://sites.google.com/view/dis26-nurture-robotic-things"
                },
                {
                  title: "ZooWear: Animal-Inspired Head-Mounted Haptic Interfaces to Augment the Zoo Experience",
                  authors: "Pingting Chen, Bin Yu, Xiaoqing Sun, Jiangnan Xia, Xinyu Liu, Xipei Ren",
                  venue: "International Journal of Human-Computer Interaction (IJHCI)",
                  link: "#"
                },
                {
                  title: "Tuning into urban birdsong: enhancing nature connectedness with an AI-powered wearable",
                  authors: "Zhuying Li, Si Cheng, Xiaoqing Sun, Xipei Ren, Yan Wang, Min-Ling Zhang",
                  venue: "Scientific Reports",
                  link: "#"
                },
                {
                  title: "Dogs Need Friends Too: Unleashing the Potential of Dog Wearables in Enhancing Canine Social Well-Being",
                  authors: "Xiaoqing Sun, Lan Yuan, Xipei Ren",
                  venue: "ACM ACI (emerging)",
                  link: "#"
                },
                {
                  title: "InfecBlock: Investigating the Effects of a Tower-Defense Serious Game for Increasing Epidemic-Related Health Literacy",
                  authors: "Xiaoqing Sun, Tianyi Li, Kexin Miao, Mengchi Zhang, Xipei Ren",
                  venue: "International Journal of Human-Computer Interaction (IJHCI)",
                  link: "#"
                },
                {
                  title: "CO-Coffee: A Technology Probe Study to Facilitate Coffee Breaks in Open Offices",
                  authors: "Xiaoqing Sun, Jingyi Wang, Yan Zhou, Suhan Wang, Yixuan Li, Xipei Ren",
                  venue: "ACM CHI (late-breaking work)",
                  link: "#"
                },
                {
                  title: "Hicclip: Sonification of Augmented Eating Sounds to Intervene Snacking Behaviors",
                  authors: "Xinyue Liu, Xipei Ren, Xinrui Ren, Xiaoqing Sun",
                  venue: "ACM DIS (full paper)",
                  link: "#"
                },
                {
                  title: "Research on Children's Intelligent Innovative Learning Toys from the Perspective of Human-Computer Interaction (in Chinese)",
                  authors: "Siyu Zha, Xiaoqing Sun, Yi Zhang, Yaqing Hou, Meng Li",
                  venue: "Packaging Engineering",
                  link: "#"
                },



              ].map((pub, idx) => (
                <div key={idx} className="group space-y-2">
                  <h3 className="text-xl font-bold text-zinc-900 transition-colors font-afacad text-justify">
                    {pub.title}
                  </h3>
                  <div className="space-y-1">
                    <p className="text-lg text-zinc-500 font-medium font-afacad text-justify">
                      {pub.authors.split(', ').map((name, i) => (
                        <span key={i}>
                          {name === "Xiaoqing Sun" ? (
                            <span className="text-zinc-900 font-bold underline decoration-zinc-200 decoration-2 underline-offset-4">Xiaoqing Sun</span>
                          ) : name}
                          {i < pub.authors.split(', ').length - 1 ? ', ' : ''}
                        </span>
                      ))}
                    </p>
                    <p className="text-zinc-500 whitespace-pre-line">{pub.venue}</p>
                  </div>
                </div>
              ))}
              
              <div className="pt-8" />
            </div>
          </motion.section>
        </div>
      </div>
    </motion.div>
  );
}