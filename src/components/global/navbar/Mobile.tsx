import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import Pages from './pages/Pages';
import Search from './Search';
import Status from './Status';

import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';

interface MobileProps {
  toggleDrawer: () => void;
  drawer: boolean;
}

export default function Mobile({ toggleDrawer, drawer }: MobileProps) {
  return (
    <div className="flex lg:hidden gap-8 justify-between container items-center">
      <Link to="/">
        <img src="/images/img (2).png" className="w-9 h-9" alt="" />
      </Link>
      <div className="sm:hidden">
        <Logo />
      </div>
      <div className="flex-grow hidden sm:block">
        <div className="max-w-[300px]">
          <Search />
        </div>
      </div>
      <div className="hidden sm:block">
        <Status />
      </div>
      <button type="button" onClick={toggleDrawer}>
        <img src="/images/Group 158.svg" alt="" />
      </button>

      <div className="absolute">
        <Drawer style={{ width: 275 }} open={drawer} onClose={toggleDrawer} direction="left">
          <div className="h-full px-4 py-6 flex flex-col justify-between">
            <div>
              <div className="flex justify-between gap-4 pt-2">
                <div onClick={toggleDrawer}>
                  <Logo />
                </div>
                <button type="button" onClick={toggleDrawer}>
                  <img src="/images/Group 158 (1).svg" alt="" />
                </button>
              </div>
              <hr className="my-8 border-gray-50" />
              <div className="px-2 mb-8">
                <Pages toggleDrawer={toggleDrawer} mobile />
              </div>
            </div>
            <footer className="flex flex-col gap-8 pb-4"></footer>
          </div>
        </Drawer>
      </div>
    </div>
  );
}
