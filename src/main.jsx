/*

    lvkaszusWebsite-React --- version: 4.2
    
              Core .jsx Script

        To make this project running..

      Designed and written by: @lvkaszus
             (https://lvkasz.us)
             
*/

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { I18nextProvider } from 'react-i18next';

import '@fontsource/fira-code/300.css';
import '@fontsource/fira-code/500.css';
import '@fontsource/fira-code/600.css';

import 'tailwindcss/tailwind.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

import './Core.css';

import Home from './Home';
import AboutMe from './AboutMe';
import Contact from './Contact';
import PGP from './PGPKey';
import Info from './Info';

import Footer from './components/Footer';

import NotFound from './components/NotFound';

import i18n from './components/i18n';

library.add(fab, fas, far);

ReactDOM.createRoot(document.getElementById('flex-container')).render(
  <I18nextProvider i18n={i18n}>
    <Router>
      <Routes>
        <Route exact path="/" element={<>
          <Home />
          <Footer />
        </>} />
        <Route path="/about_me" element={<>
          <AboutMe />
          <Footer />
        </>} />
        <Route path="/contact" element={<>
          <Contact />
          <Footer />
        </>} />
        <Route path="/pgp" element={<>
          <PGP />
          <Footer />
        </>} />
        <Route path="/info" element={<>
          <Info />
        </>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  </I18nextProvider>,
)
