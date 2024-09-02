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

function generateNavItems(path: string, currentLang: 'en' | 'bn'): Array<NavItem> {
  const oppositeLang = getAlternateLanguage(currentLang);
  console.log('incoming path=', getAlternateLanguagePath(path));

  return [
    { label: 'Home', href: currentLang === 'bn' ? '/bn' : '/', icon: <HomeIcon /> },
    {
      label: 'GitHub',
      href: 'https://github.com/Pujo-Atlas-Kolkata/PujoAtlasKol-Web',
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
    <nav className="flex flex-col gap-4 p-2">
      {navItems.map((item, index) => (
        <a
          key={index}
          href={item.href}
          data-active={(path === '/bn' || item.href === '/') && index === 0}
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
