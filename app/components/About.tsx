import {useTranslations} from 'next-intl';
import FadeIn from './FadeIn';

export default function About() {
  const t = useTranslations('about');

  return (
    <section id="about" className="py-24 lg:py-32 bg-white">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Left Column - Title */}
          <FadeIn>
            <h2 className="font-serif-italic text-4xl md:text-5xl text-[#0A0A0A] sticky top-32">
              {t('title')}
            </h2>
          </FadeIn>

          {/* Right Column - Content */}
          <div className="flex flex-col gap-8">
            <FadeIn delay={0.12}>
              <p className="font-sans text-base text-[#0A0A0A] leading-relaxed">
                {t('paragraph1')}
              </p>
            </FadeIn>
            
            <FadeIn delay={0.24}>
              <p className="font-sans text-base text-[#0A0A0A] leading-relaxed">
                {t('paragraph2')}
              </p>
            </FadeIn>
            
            <FadeIn delay={0.36}>
              <p className="font-sans text-base text-[#0A0A0A] leading-relaxed">
                {t('paragraph3')}
              </p>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}