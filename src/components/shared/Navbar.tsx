import { getRelativeLocaleUrl } from 'astro:i18n';
import { BsGithub } from 'react-icons/bs';
import { GoHomeFill } from 'react-icons/go';
import { MdTranslate } from 'react-icons/md';
import { GrGroup } from 'react-icons/gr';
import { BiDonateHeart } from 'react-icons/bi';
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

  const supportPath = currentLang === 'en' ? '/support/' : '/bn/support/';

  const teamPath = currentLang === 'en' ? '/team/' : '/bn/team/';

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
      label: 'Support',
      href: supportPath,
      icon: <BiDonateHeart className="size-6 fill-primary-foreground" />,
    },
    {
      label: 'Team',
      href: teamPath,
      icon: <GrGroup className="size-6 fill-primary-foreground" />,
    },
    {
      label: oppositeLang === 'en' ? 'English' : 'বাংলা',
      href: getAlternateLanguagePath(path),
      icon: <MdTranslate className="size-4 lg:size-6 fill-primary-foreground" />,
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
          target={item.href === Socials.GitHub ? '_blank' : '_self'}
          rel={item.href === Socials.GitHub ? 'noopener noreferrer' : ''}
          data-active={item.href === path}
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
      <a href="https://www.netlify.com">
        <img
          src="https://www.netlify.com/v3/img/components/netlify-light.svg"
          alt="Deploys by Netlify"
        />
      </a>
    </nav>
  );
};

export const MobileHeaders = ({ path }: Props) => {
  const currentLang = getCurrentLanguage(path);
  const navItems = generateNavItems(path, currentLang);

  return (
    <nav className="flex gap-2">
      {navItems.slice(2, 5).map((item, index) => (
        <a
          key={index}
          href={item.href}
          data-active={item.href === path}
          className={cn(
            'outline outline-primary-foreground outline-1 bg-primary-background',
            'flex items-center justify-center rounded-md p-2 w-8 h-8',
            'data-[active=true]:bg-[#fed7aa]',
          )}
          aria-label={item.label}
        >
          {item.icon}
        </a>
      ))}
    </nav>
  );
};
