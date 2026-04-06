import {useTranslations} from 'next-intl';
import FadeIn from './FadeIn';

export default function Methods() {
  const t = useTranslations('methods');

  const methods = [
    {key: 'eot', title: t('eot.title'), description: t('eot.description')},
    {key: 'regression', title: t('regression.title'), description: t('regression.description')},
    {key: 'gestalt', title: t('gestalt.title'), description: t('gestalt.description')},
    {key: 'simboldrama', title: t('simboldrama.title'), description: t('simboldrama.description')},
  ];

  return (
    <section id="methods" className="py-24 lg:py-32 bg-[#F8F7F4]">
      <div className="container-site">
        <FadeIn>
          <h2 className="font-serif-italic text-4xl md:text-5xl text-[#0A0A0A] mb-16 lg:mb-24">
            {t('title')}
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {methods.map((method, index) => (
            <FadeIn key={method.key} delay={index * 0.12}>
              <div className="bg-white p-8 lg:p-10 h-full">
                <h3 className="font-serif-italic text-2xl text-[#0A0A0A] mb-4">
                  {method.title}
                </h3>
                <p className="font-sans text-sm text-[#6B6B6B] leading-relaxed">
                  {method.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}