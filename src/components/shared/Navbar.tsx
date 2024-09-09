import { getRelativeLocaleUrl } from 'astro:i18n';
import { BsGithub } from 'react-icons/bs';
import { GoHomeFill } from 'react-icons/go';
import { MdTranslate } from 'react-icons/md';
import { GiHamburgerMenu } from 'react-icons/gi';
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
    {
      label: 'Home',
      href: homePagePath,
      icon: <GoHomeFill className="size-6 fill-primary-foreground" />,
    },
    {
      label: 'GitHub',
      href: Socials.GitHub,
      icon: <BsGithub className="size-6 fill-primary-foreground" />,
    },
    {
      label: oppositeLang === 'en' ? 'English' : 'বাংলা',
      href: getAlternateLanguagePath(path),
      icon: <MdTranslate className="size-6 fill-primary-foreground" />,
    },
  ];
}

export const LargeNavbar = ({ path }: Props) => {
  const currentLang = getCurrentLanguage(path);
  const navItems = generateNavItems(path, currentLang);

  return (
    <nav className="flex flex-col gap-4 p-2">
      {navItems.map((item, index) => (
        <a
          key={index}
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

export const MobileHamburgerNavbar = ({ path }: Props) => {
  const currentLang = getCurrentLanguage(path);
  const navItems = generateNavItems(path, currentLang);

  return (
    <>
      <button className="outline-none mobile-menu-button mt-5">
        <GiHamburgerMenu className="h-5 w-5" />
      </button>

      <div className="hidden">
        {navItems.map((item, index) => (
          <a
            key={index}
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
      </div>
    </>
  );
};
