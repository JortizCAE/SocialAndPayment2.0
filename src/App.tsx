import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import ConfirmDetails from './views/confirm-details/ConfirmDetails';
import Competition from './views/competition/Competition';
import Home from './views/home/Home';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/competition" element={<Competition />} />
          <Route path="confirm-details" element={<ConfirmDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
