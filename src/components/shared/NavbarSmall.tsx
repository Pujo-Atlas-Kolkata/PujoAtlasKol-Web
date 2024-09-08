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

export default function Navbar({ path }: Props) {
  const currentLang = getCurrentLanguage(path);
  const navItems = generateNavItems(path, currentLang);

  return (
    <nav className="flex justify-between items-center gap-8 border-2 border-neutral-900 rounded-full p-3 w-72 fixed bottom-20">
      {navItems.map((item, index) => (
        <a
          key={index}
          target={item.href.startsWith('http') ? '_blank' : '_self'}
          rel="noopener noreferrer"
          href={item.href}
          data-active={(item.href === path || item.href === '/bn') && index === 0} // hotfix for netlify hidden trailing slash issue
          className={cn(
            'outline outline-primary-foreground outline-1 bg-[active=true]:bg-[#fed7aa]',
            'data-[active=true]:outline-2 data-[active=true]:bg-[#fed7aa]',
            'flex justify-center items-center p-4 border-2 border-black rounded-full',
          )}
        >
          {item.icon}
        </a>
      ))}
    </nav>
  );
}
