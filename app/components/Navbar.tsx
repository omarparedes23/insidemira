'use client';

import {useState, useEffect} from 'react';
import {useTranslations, useLocale} from 'next-intl';
import {Link, usePathname} from '@/app/i18n/routing';
import {motion, AnimatePresence} from 'framer-motion';

export default function Navbar() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    {href: '/#about', label: t('about')},
    {href: '/#methods', label: t('methods')},
    {href: '/#services', label: t('services')},
    {href: '/#topics', label: t('topics')},
    {href: '/#thoughts', label: t('thoughts')},
    {href: '/#contact', label: t('contact')},
  ];

  const switchLocale = locale === 'ru' ? 'en' : 'ru';

  return (
    <motion.nav
      initial={{opacity: 0, y: -20}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 0.6, ease: [0.22, 1, 0.36, 1]}}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="container-site">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="font-serif-italic text-2xl tracking-wide text-[#0A0A0A]">
            Мира
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{opacity: 0, y: -10}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.4, delay: index * 0.08}}
                className="text-sm font-sans text-[#0A0A0A] hover:text-[#6B6B6B] transition-colors duration-300"
              >
                {link.label}
              </motion.a>
            ))}
          </div>

          {/* Language Toggle */}
          <div className="flex items-center gap-4">
            <Link
              href={pathname}
              locale={switchLocale}
              className="text-sm font-sans text-[#6B6B6B] hover:text-[#0A0A0A] transition-colors duration-300"
            >
              {locale === 'ru' ? 'EN' : 'RU'}
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2"
              aria-label="Toggle menu"
            >
              <div className="w-5 h-0.5 bg-[#0A0A0A] mb-1.5 transition-all duration-300"></div>
              <div className="w-5 h-0.5 bg-[#0A0A0A] transition-all duration-300"></div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{opacity: 0, height: 0}}
            animate={{opacity: 1, height: 'auto'}}
            exit={{opacity: 0, height: 0}}
            transition={{duration: 0.3}}
            className="md:hidden bg-white border-t border-[#F8F7F4]"
          >
            <div className="container-site py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-base font-sans text-[#0A0A0A] hover:text-[#6B6B6B] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}