import { NavigationItem } from '@/shared/navigationItem';

import css from './navigation.module.css';

export type LinkType = {
  text: string;
  path: string;
};

export function Navigation({ links }: { links: LinkType[] }) {
  return (
    <nav className={css.navigation}>
      {links.map((link) => (
        <NavigationItem  key={link.path} link={link} />
      ))}
    </nav>
  );
}
