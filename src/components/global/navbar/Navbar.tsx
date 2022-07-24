import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useNavbarEffect from '../../../hooks/useNavbarEffect';
import Logo from './Logo';
import Pages from './pages/Pages';
import Search from './Search';
import Status from './Status';
import Username from './username/Username';

import Mobile from './Mobile';

export default function Navbar() {
  const [drawer, setDrawer] = useState(false);
  const toggleDrawer = () => setDrawer((v) => !v);
  const navbar = useNavbarEffect('py-8 md:py-11', 'py-4 shadow-6xl', 70);

  return (
    <nav className={`bg-white z-[1020] sticky top-0 duration-200 ${navbar}`}>
      <div className="hidden lg:flex gap-12 justify-between container items-center">
        <Logo />
        <div className="flex gap-8 items-center flex-grow">
          <Search />
          <Pages />
        </div>
        <div className="flex gap-8 items-center">
          <Status />
          <div className="hidden xl:block">
            <Username />
          </div>
        </div>
      </div>
      <Mobile toggleDrawer={toggleDrawer} drawer={drawer} />
      <div className="fixed bottom-2 right-2 sm:bottom-3 sm:right-3 md:bottom-5 md:right-5 lg:bottom-8 lg:right-8 xl:hidden">
        <button type="button">
          <img className="w-14 h-14" src="/images/Group 157.svg" alt="" />
        </button>
      </div>
    </nav>
  );
}
