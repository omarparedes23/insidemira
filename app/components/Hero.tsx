'use client';

import {useTranslations} from 'next-intl';
import {motion} from 'framer-motion';

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <section className="min-h-screen pt-20 bg-white">
      <div className="container-site h-full">
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] min-h-[calc(100vh-80px)] items-center gap-8 lg:gap-16 py-12 lg:py-0">
          {/* Left Content */}
          <motion.div
            initial={{opacity: 0, y: 30}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.8, ease: [0.22, 1, 0.36, 1]}}
            className="flex flex-col justify-center order-2 lg:order-1"
          >
            <motion.p
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.6, delay: 0.2}}
              className="font-serif-italic text-lg text-[#6B6B6B] mb-4"
            >
              {t('subtitle')}
            </motion.p>
            
            <motion.h1
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.6, delay: 0.3}}
              className="font-serif-italic text-6xl md:text-7xl lg:text-8xl text-[#0A0A0A] mb-8"
            >
              {t('title')}
            </motion.h1>
            
            <motion.p
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.6, delay: 0.4}}
              className="font-sans text-base text-[#6B6B6B] leading-relaxed max-w-md mb-10"
            >
              {t('description')}
            </motion.p>
            
            <motion.a
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.6, delay: 0.5}}
              href="https://t.me/Mirapsy_life"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-fit px-8 py-4 border border-[#0A0A0A] text-[#0A0A0A] font-sans text-sm hover:bg-[#0A0A0A] hover:text-white transition-all duration-300"
            >
              {t('cta')}
            </motion.a>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{opacity: 0, scale: 0.95}}
            animate={{opacity: 1, scale: 1}}
            transition={{duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1]}}
            className="relative order-1 lg:order-2 h-[400px] lg:h-[600px]"
          >
            <div className="relative w-full h-full bg-[#F8F7F4] overflow-hidden">
              <img
                src="/images/mira-photo.jpg"
                alt="Mira - Psicologa"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}