'use client';

import {useTranslations} from 'next-intl';
import {motion} from 'framer-motion';
import FadeIn from './FadeIn';

export default function Topics() {
  const t = useTranslations('topics');
  const tags = t.raw('tags');

  return (
    <section id="topics" className="py-24 lg:py-32 bg-[#F8F7F4]">
      <div className="container-site">
        <FadeIn>
          <h2 className="font-serif-italic text-4xl md:text-5xl text-[#0A0A0A] mb-16 lg:mb-24">
            {t('title')}
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tags.map((tag: string, index: number) => (
            <FadeIn key={index} delay={index * 0.08}>
              <motion.div
                whileHover={{x: 8}}
                transition={{duration: 0.3, ease: [0.22, 1, 0.36, 1]}}
                className="group cursor-pointer bg-white p-6 border border-transparent hover:border-[#0A0A0A] transition-colors duration-300"
              >
                <span className="font-sans text-sm text-[#0A0A0A] group-hover:text-[#6B6B6B] transition-colors duration-300">
                  {tag}
                </span>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}