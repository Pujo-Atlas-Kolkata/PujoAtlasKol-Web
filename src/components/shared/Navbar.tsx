import { getRelativeLocaleUrl } from 'astro:i18n';
import { HomeIcon, GitHubIcon, TranslateIcon } from '@/icons';
import {
  cn,
  getAlternateLanguage,
  getAlternateLanguagePath,
  getCurrentLanguage,
} from '@/libs/utils';
import { Socials } from '@/constants';

type NavItem = {
  label: string;
  href: string;
  icon: React.JSX.Element;
};

type Props = {
  path: string;
};

function generateNavItems(path: string, currentLang: 'en' | 'bn'): Array<NavItem> {
  const homePagePath =
    currentLang === 'en'
      ? getRelativeLocaleUrl(currentLang)
      : getRelativeLocaleUrl(currentLang).replace(/\/$/, '');
  const oppositeLang = getAlternateLanguage(currentLang);

  return [
    { label: 'Home', href: homePagePath, icon: <HomeIcon /> },
    {
      label: 'GitHub',
      href: Socials.GitHub,
      icon: <GitHubIcon />,
    },
    {
      label: oppositeLang === 'en' ? 'English' : 'বাংলা',
      href: getAlternateLanguagePath(path),
      icon: <TranslateIcon />,
    },
  ];
}

export const Navbar = ({ path }: Props) => {
  const currentLang = getCurrentLanguage(path);
  const navItems = generateNavItems(path, currentLang);

  return (
    <nav
      className="flex flex-col gap-4 p-2 <mark>md:flex-row md:justify-between md:items-center</mark>" // Adjusted breakpoint to 'md'
    >
      {navItems.map((item, index) => (
        <a
          key={index}
          target={item.href.startsWith('http') ? '_blank' : '_self'}
          rel="noopener noreferrer"
          href={item.href}
          data-active={(item.href === path || item.href === '/bn') && index === 0} // hotfix for netlify hidden trailing slash issue
          className={cn(
            'outline outline-primary-foreground outline-1 bg-primary-background',
            'data-[active=true]:outline-2 data-[active=true]:bg-[#fed7aa]',
            'p-2 grid place-items-center rounded-lg w-16',
          )}
        >
          {item.icon}
          <span className="font-work text-xs font-semibold">{item.label}</span>
        </a>
      ))}
    </nav>
  );
};

export default Navbar;
