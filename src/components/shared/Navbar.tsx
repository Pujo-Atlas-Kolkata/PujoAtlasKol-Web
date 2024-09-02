import { HomeIcon, GitHubIcon, TranslateIcon } from '@/icons';
import {
  cn,
  getAlternateLanguage,
  getAlternateLanguagePath,
  getCurrentLanguage,
} from '@/libs/utils';

type NavItem = {
  label: string;
  href: string;
  icon: React.JSX.Element;
};

type Props = {
  path: string;
};

/**
 * Generates an array of navigation items based on the current language.
 *
 * @param {'en' | 'bn'} currentLang - The current language code, either 'en' for English or 'bn' for Bengali.
 * @returns {Array<NavItem>} An array of navigation items where each item contains a label, href, and icon.
 */
function generateNavItems(path: string, currentLang: 'en' | 'bn'): Array<NavItem> {
  const oppositeLang = getAlternateLanguage(currentLang);

  return [
    { label: 'Home', href: currentLang === 'bn' ? '/bn' : '/', icon: <HomeIcon /> },
    {
      label: 'GitHub',
      href: 'https://github.com/Pujo-Atlas-Kolkata/PujoAtlasKol-Web',
      icon: <GitHubIcon />,
    },
    {
      label: oppositeLang === 'en' ? 'EN' : 'BN',
      href: getAlternateLanguagePath(path),
      icon: <TranslateIcon />,
    },
  ];
}

export const Navbar = ({ path }: Props) => {
  const currentLang = getCurrentLanguage(path);
  const navItems = generateNavItems(path, currentLang);

  return (
    <nav className="flex flex-col gap-4 p-2">
      {navItems.map((item, index) => (
        <a
          key={index}
          href={item.href}
          data-active={item.href === path}
          className={cn(
            'outline outline-primary-foreground outline-1',
            'data-[active=true]:outline-2 bg-primary-background',
            'p-2 grid place-items-center rounded-lg',
          )}
        >
          {item.icon}
          <span className="font-work text-xs font-medium">{item.label}</span>
        </a>
      ))}
    </nav>
  );
};

export default Navbar;
