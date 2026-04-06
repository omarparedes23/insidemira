import {useTranslations} from 'next-intl';
import FadeIn from './FadeIn';

export default function Services() {
  const t = useTranslations('services');

  const services = [
    {key: 'individual', title: t('individual.title'), duration: t('individual.duration'), price: t('individual.price'), description: t('individual.description')},
    {key: 'package', title: t('package.title'), duration: t('package.duration'), price: t('package.price'), description: t('package.description')},
    {key: 'group', title: t('group.title'), duration: t('group.duration'), price: t('group.price'), description: t('group.description')},
  ];

  return (
    <section id="services" className="py-24 lg:py-32 bg-white">
      <div className="container-site">
        <FadeIn>
          <h2 className="font-serif-italic text-4xl md:text-5xl text-[#0A0A0A] mb-16 lg:mb-24">
            {t('title')}
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <FadeIn key={service.key} delay={index * 0.12}>
              <div className="border-t border-[#0A0A0A] pt-8 h-full flex flex-col">
                <h3 className="font-serif-italic text-2xl text-[#0A0A0A] mb-2">
                  {service.title}
                </h3>
                <p className="font-sans text-sm text-[#6B6B6B] mb-4">
                  {service.duration}
                </p>
                <p className="font-serif-italic text-3xl text-[#0A0A0A] mb-6">
                  {service.price}
                </p>
                <p className="font-sans text-sm text-[#6B6B6B] leading-relaxed flex-grow">
                  {service.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}