import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';

import { styles } from '@shared/styles/styles';
import { navLinks } from '@features/portfolio/data/portfolioData';
import type { NavLink } from '@features/portfolio/data/portfolioData';
import { logo } from '@assets';
import { LanguageSwitcher } from '@shared/i18n';

const navIcons: Record<string, JSX.Element> = {
  about: (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
      <circle cx="12" cy="8" r="3.25" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M5.5 18.5c1.7-2.65 4.1-3.95 6.5-3.95s4.8 1.3 6.5 3.95"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  ),
  work: (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
      <rect x="3.5" y="6.5" width="17" height="12" rx="2.25" stroke="currentColor" strokeWidth="1.8" />
      <path d="M9 6.5V5.4A1.4 1.4 0 0 1 10.4 4h3.2A1.4 1.4 0 0 1 15 5.4v1.1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M3.5 11.5h17" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  ),
  contact: (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
      <rect x="3.5" y="5.5" width="17" height="13" rx="2.25" stroke="currentColor" strokeWidth="1.8" />
      <path d="m5.2 7.2 6.1 4.8a1.15 1.15 0 0 0 1.4 0l6.1-4.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

const profileLinks: Array<{
  id: 'linkedin' | 'github';
  href: string;
  label: string;
  tooltip: string;
  icon: JSX.Element;
}> = [
  {
    id: 'linkedin',
    href: 'https://www.linkedin.com/in/lambdaily/',
    label: 'LinkedIn profile',
    tooltip: "Let's connect on LinkedIn",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
        <path d="M7 9.5V17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="7" cy="6.7" r="1.15" fill="currentColor" />
        <path d="M11 17v-4.2c0-1.9 1.2-3.3 3.1-3.3 1.7 0 2.9 1.2 2.9 3V17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <rect x="3.5" y="3.5" width="17" height="17" rx="4" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    ),
  },
  {
    id: 'github',
    href: 'https://github.com/lambdaily',
    label: 'GitHub profile',
    tooltip: 'Explore my GitHub repos',
    icon: (
      <svg viewBox="0 0 24 24" className="h-[22px] w-[22px] shrink-0" fill="currentColor" aria-hidden="true">
        <path d="M12 .75a11.25 11.25 0 0 0-3.56 21.92c.56.11.77-.24.77-.54 0-.27-.01-.98-.02-1.92-3.13.68-3.79-1.51-3.79-1.51-.51-1.3-1.25-1.64-1.25-1.64-1.03-.7.08-.69.08-.69 1.14.08 1.74 1.18 1.74 1.18 1.01 1.73 2.66 1.23 3.31.94.1-.73.4-1.23.72-1.51-2.5-.28-5.14-1.25-5.14-5.57 0-1.23.44-2.23 1.17-3.01-.12-.29-.51-1.45.11-3.03 0 0 .95-.31 3.11 1.15a10.8 10.8 0 0 1 5.66 0c2.16-1.46 3.11-1.15 3.11-1.15.62 1.58.23 2.74.11 3.03.73.78 1.17 1.78 1.17 3.01 0 4.33-2.65 5.29-5.18 5.57.41.35.77 1.04.77 2.1 0 1.52-.02 2.74-.02 3.11 0 .3.2.66.78.54A11.25 11.25 0 0 0 12 .75Z" />
      </svg>
    ),
  },
];

const ProfileLink = ({
  href,
  label,
  tooltip,
  icon,
  compact = false,
}: {
  href: string;
  label: string;
  tooltip: string;
  icon: JSX.Element;
  compact?: boolean;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    aria-label={label}
    className={`group relative flex items-center justify-center overflow-visible rounded-xl border border-white/10 bg-black-100 text-white-100 shadow-[0_8px_20px_rgba(0,0,0,0.25)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#eebbc3]/40 hover:bg-[#eebbc3] hover:text-black focus-visible:-translate-y-0.5 focus-visible:border-[#eebbc3]/40 focus-visible:bg-[#eebbc3] focus-visible:text-black ${
      compact ? 'h-11 w-11' : 'h-10 w-10'
    }`}
  >
    {icon}
    <span className="pointer-events-none absolute right-[calc(100%+12px)] top-1/2 z-20 hidden w-max -translate-y-1/2 translate-x-1 rounded-md border border-[#eebbc3]/40 bg-primary px-2 py-1 text-[10px] font-semibold text-[#eebbc3] opacity-0 shadow-[0_10px_24px_rgba(0,0,0,0.35)] transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100 md:block">
      {tooltip}
      <span className="absolute left-full top-1/2 h-2 w-2 -translate-x-1 -translate-y-1/2 rotate-45 border-r border-t border-[#eebbc3]/40 bg-primary" />
    </span>
  </a>
);

const Navbar = () => {
  const { t } = useTranslation();
  const [active, setActive] = useState('');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`${
          styles.paddingX
        } w-full flex items-center py-5 fixed top-0 z-20 ${
          scrolled ? 'bg-primary' : 'bg-transparent'
        }`}
      >
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
          <Link
            to="/"
            className="flex items-center gap-2"
            onClick={() => {
              setActive('');
              window.scrollTo(0, 0);
            }}
          >
            <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
            <p className="text-white text-[18px] font-bold cursor-pointer flex ">
              &lt; Pablo Espinoza
              <span className="sm:block hidden"> /&gt; </span>
            </p>
          </Link>

          <ul className="list-none hidden sm:flex flex-row gap-10">
            {navLinks.map((nav: NavLink) => (
              <li
                key={nav.id}
                className={`${
                  active === nav.id ? 'text-white' : 'text-secondary'
                } hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive(nav.id)}
              >
                <a href={`#${nav.id}`}>{t(nav.titleKey)}</a>
              </li>
            ))}
          </ul>

          <div className="hidden sm:flex items-center gap-3">
            <LanguageSwitcher />
          </div>
        </div>
      </nav>

      <aside className="hidden lg:flex fixed right-5 top-1/2 -translate-y-1/2 z-30">
        <div className="flex flex-col items-center gap-2 rounded-2xl border border-white/10 bg-black-100/80 p-2 backdrop-blur-md shadow-[0_14px_34px_rgba(0,0,0,0.35)]">
          {profileLinks.map((profile) => (
            <ProfileLink
              key={profile.id}
              href={profile.href}
              label={profile.label}
              tooltip={profile.tooltip}
              icon={profile.icon}
            />
          ))}
        </div>
      </aside>

      <div className="sm:hidden fixed inset-x-0 bottom-0 z-30 px-4 pb-3">
        <div
          className="mx-auto max-w-md rounded-2xl border border-white/10 bg-black-100/85 backdrop-blur-md shadow-[0_16px_40px_rgba(0,0,0,0.45)]"
          style={{ paddingBottom: 'calc(0.75rem + env(safe-area-inset-bottom))' }}
        >
          <div className="px-3 pt-3">
            <LanguageSwitcher />
          </div>

          <div className="px-3 pt-2">
            <div className="rounded-xl border border-white/10 bg-tertiary/70 p-2">
              <ul className="flex items-center justify-center gap-2">
                {profileLinks.map((profile) => (
                  <li key={profile.id}>
                    <ProfileLink
                      href={profile.href}
                      label={profile.label}
                      tooltip={profile.tooltip}
                      icon={profile.icon}
                      compact
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <ul className="grid grid-cols-3 gap-2 p-2">
            {navLinks.map((nav: NavLink) => {
              const isActive = active === nav.id;

              return (
                <li key={nav.id}>
                  <a
                    href={`#${nav.id}`}
                    className={`flex items-center justify-center gap-1.5 rounded-xl px-3 py-2 text-[13px] font-semibold transition-colors ${
                      isActive
                        ? 'bg-[#eebbc3] text-black'
                        : 'bg-tertiary text-white-100'
                    }`}
                    onClick={() => setActive(nav.id)}
                  >
                    {navIcons[nav.id]}
                    {t(nav.titleKey)}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
