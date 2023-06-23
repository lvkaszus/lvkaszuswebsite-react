/*

    lvkaszusWebsite-React --- version: 4.1
    
              Core .jsx Script

        To make this project running..

      Designed and written by: @lvkaszus
             (https://lvkasz.us)
             
*/

// import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import '@fontsource/fira-code/300.css';
import '@fontsource/fira-code/500.css';
import '@fontsource/fira-code/600.css';

import 'tailwindcss/tailwind.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

import './Core.css';

import Home from './Home.jsx';
import AboutMe from './AboutMe.jsx';
import Contact from './Contact.jsx';
import PGP from './PGPKey.jsx';
import Info from './Info.jsx';

import Footer from './components/Footer.jsx';

import NotFound from './components/NotFound.jsx';

library.add(fab, fas, far);

ReactDOM.createRoot(document.getElementById('flex-container')).render(
  // <React.StrictMode>
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
    </Router>,
  //</React.StrictMode>,
)