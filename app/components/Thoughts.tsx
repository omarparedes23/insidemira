import {useTranslations} from 'next-intl';
import FadeIn from './FadeIn';

export default function Thoughts() {
  const t = useTranslations('thoughts');

  const quotes = [
    t('quote1'),
    t('quote2'),
    t('quote3'),
  ];

  return (
    <section id="thoughts" className="py-24 lg:py-32 bg-white">
      <div className="container-site">
        <FadeIn>
          <h2 className="font-serif-italic text-4xl md:text-5xl text-[#0A0A0A] mb-16 lg:mb-24">
            {t('title')}
          </h2>
        </FadeIn>

        <div className="flex flex-col gap-16 lg:gap-24 max-w-4xl">
          {quotes.map((quote, index) => (
            <FadeIn key={index} delay={index * 0.12}>
              <blockquote className="relative">
                <span className="absolute -top-8 -left-4 font-serif-italic text-6xl text-[#F8F7F4]">
                  &ldquo;
                </span>
                <p className="font-serif-italic text-xl md:text-2xl text-[#0A0A0A] leading-relaxed relative z-10">
                  {quote}
                </p>
              </blockquote>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}