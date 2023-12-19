/*

    lvkaszusWebsite-React --- version: 4.2
    
              Core .jsx Script

        To make this project running..

      Designed and written by: @lvkaszus
             (https://lvkasz.us)
             
*/

import { React, lazy, Suspense } from "react";
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { I18nextProvider } from 'react-i18next';

import '@fontsource/fira-code/300.css';
import '@fontsource/fira-code/500.css';
import '@fontsource/fira-code/600.css';

import 'tailwindcss/tailwind.css';

import './Core.css';

import LoadingScreen from './components/LoadingScreen.jsx';

const Home = lazy(() => import("./Home.jsx"))
const AboutMe = lazy(() => import("./AboutMe.jsx"))
const Contact = lazy(() => import("./Contact.jsx"))
const PGP = lazy(() => import("./PGPKey.jsx"))
const Info = lazy(() => import("./Info.jsx"))

const Footer = lazy(() => import("./components/Footer.jsx"))

const NotFound = lazy(() => import("./components/NotFound.jsx"))

import i18n from './components/i18n.jsx';

ReactDOM.createRoot(document.getElementById('flex-container')).render(
  <I18nextProvider i18n={i18n}>
    <Router>
      <Suspense fallback={<LoadingScreen />}>
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
      </Suspense>
    </Router>
  </I18nextProvider>,
)
