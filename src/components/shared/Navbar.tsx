import { HomeIcon, GitHubIcon, TranslateIcon } from '@/icons';
import clsx from 'clsx';

type NavItem = {
  label: string;
  href: string;
  icon: React.JSX.Element;
};

const navItems: Array<NavItem> = [
  { label: 'Home', href: '/', icon: <HomeIcon /> },
  {
    label: 'GitHub',
    href: 'https://github.com/Pujo-Atlas-Kolkata/PujoAtlasKol-Web',
    icon: <GitHubIcon />,
  },
  { label: 'EN/BN', href: '/bn', icon: <TranslateIcon /> },
];

type Props = {
  path: string;
};

export const Navbar = ({ path }: Props) => {
  return (
    <nav className="flex flex-col gap-4 p-2">
      {navItems.map((item, index) => (
        <a
          key={index}
          href={item.href}
          data-active={item.href === path}
          className={clsx(
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
