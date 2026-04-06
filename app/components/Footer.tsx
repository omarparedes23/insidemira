import {useTranslations} from 'next-intl';
import {Link} from '@/app/i18n/routing';

export default function Footer() {
  const t = useTranslations('footer');
  const navT = useTranslations('nav');

  return (
    <footer className="py-16 bg-[#F8F7F4]">
      <div className="container-site">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Column 1 - Logo & Tagline */}
          <div>
            <Link href="/" className="font-serif-italic text-2xl text-[#0A0A0A]">
              Мира
            </Link>
            <p className="font-sans text-sm text-[#6B6B6B] mt-2">
              {t('tagline')}
            </p>
          </div>

          {/* Column 2 - Navigation */}
          <div className="flex flex-col gap-3">
            <a href="#about" className="font-sans text-sm text-[#6B6B6B] hover:text-[#0A0A0A] transition-colors">
              {navT('about')}
            </a>
            <a href="#methods" className="font-sans text-sm text-[#6B6B6B] hover:text-[#0A0A0A] transition-colors">
              {navT('methods')}
            </a>
            <a href="#services" className="font-sans text-sm text-[#6B6B6B] hover:text-[#0A0A0A] transition-colors">
              {navT('services')}
            </a>
            <a href="#contact" className="font-sans text-sm text-[#6B6B6B] hover:text-[#0A0A0A] transition-colors">
              {navT('contact')}
            </a>
          </div>

          {/* Column 3 - Contact */}
          <div className="flex flex-col gap-3">
            <a
              href="https://t.me/Mirapsy_life"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-sm text-[#6B6B6B] hover:text-[#0A0A0A] transition-colors"
            >
              {t('telegram')}
            </a>
            <p className="font-sans text-xs text-[#6B6B6B] mt-4">
              {t('rights')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}