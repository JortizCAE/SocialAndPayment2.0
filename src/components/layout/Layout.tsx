import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../global/navbar/Navbar';

export default function Layout() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}
