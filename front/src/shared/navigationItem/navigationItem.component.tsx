import { Link, useLocation } from 'react-router-dom';

import { LinkType } from '@/application/naviagtion';

import css from './navigationItem.module.css';

export function NavigationItem({ link }: { link: LinkType }) {
  const { pathname } = useLocation();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <div
      key={link.path}
      className={
        isActive(link.path) ? `${css.activeNavigation} ${css.navigationItem}` : css.navigationItem
      }
    >
      <Link to={link.path} className={isActive(link.path) ? css.active : ''}>
        {link.text}
      </Link>
    </div>
  );
}
