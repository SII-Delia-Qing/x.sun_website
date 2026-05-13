'use client';

import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

const photos = [
  { id: 1, url: '/memoir_1.jpg', caption: 'Graduation day with friends' },
  { id: 2, url: '/memoir_2.jpg', caption: 'My parrot' },
  { id: 3, url: '/memoir_3.jpg', caption: 'Hawaii' },
  { id: 4, url: '/memoir_4.jpg', caption: 'High school' },
  { id: 5, url: '/memoir_5.jpg', caption: 'Graduation' },
  { id: 6, url: '/memoir_6.jpg', caption: 'CHI 26 presentation' },
  { id: 7, url: '/memoir_7.jpg', caption: 'Puppy in my memory' },
  { id: 8, url: '/memoir_8.jpg', caption: 'My puppy' },
  { id: 9, url: '/memoir_9.jpg', caption: 'Our lab' },
  { id: 11, url: '/memoir_11.jpg', caption: 'Happy Birthday 🎂' },
];

export default function MemoirPage() {
  return (
    <div className="space-y-12">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-light tracking-tight">Memoir</h1>
        <p className="text-zinc-400 text-sm">A collection of moments and captures</p>
      </div>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {photos.map((photo) => (
          <MemoirPhoto key={photo.id} photo={photo} />
        ))}
      </div>
    </div>
  );
}

function MemoirPhoto({ photo }: { photo: typeof photos[0] }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative break-inside-avoid rounded-2xl overflow-hidden bg-zinc-50 border border-zinc-100 group cursor-pointer lg:mb-6 mb-6"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Image
        src={photo.url}
        alt={photo.caption || 'Memoir photo'}
        width={800}
        height={1000}
        className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
        referrerPolicy="no-referrer"
      />
      
      {photo.caption && (
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-x-0 bottom-0 p-8 pt-16 bg-gradient-to-t from-white/90 via-white/40 to-transparent pointer-events-none"
            >
              <p className="text-zinc-900 text-sm font-medium tracking-tight">
                {photo.caption}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </motion.div>
  );
}
