import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store.js';
import App from './App.jsx';
import DetailPage from './components/detailPage/DetailPage.jsx';
import './index.scss';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/:id" element={<DetailPage />} />
    </Routes>
    </BrowserRouter>
  </Provider>,
);
