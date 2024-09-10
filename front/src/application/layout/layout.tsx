import { Outlet } from 'react-router-dom';

import { Navigation } from '../naviagtion';

import css from './layout.module.css';

export function Layout() {
  const links = [
    {
      text: 'Все котики',
      path: '/',
    },
    {
      text: 'Любимые котики',
      path: '/favorite',
    },
  ];

  return (
    <div>
      <header className={css.header}>
        <Navigation links={links} />
      </header>
      <div className={css.content}>
        <Outlet />
      </div>
    </div>
  );
}
