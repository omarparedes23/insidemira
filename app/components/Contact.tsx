import {useTranslations} from 'next-intl';
import FadeIn from './FadeIn';

export default function Contact() {
  const t = useTranslations('contact');

  return (
    <section id="contact" className="py-24 lg:py-32 bg-[#0A0A0A]">
      <div className="container-site">
        <div className="max-w-2xl mx-auto text-center">
          <FadeIn>
            <h2 className="font-serif-italic text-4xl md:text-5xl text-white mb-8">
              {t('title')}
            </h2>
          </FadeIn>

          <FadeIn delay={0.12}>
            <p className="font-sans text-base text-[#6B6B6B] leading-relaxed mb-12">
              {t('description')}
            </p>
          </FadeIn>

          <FadeIn delay={0.24}>
            <a
              href={t('telegramUrl')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-5 border border-white text-white font-sans text-sm hover:bg-white hover:text-[#0A0A0A] transition-all duration-300"
            >
              {t('cta')}
            </a>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}