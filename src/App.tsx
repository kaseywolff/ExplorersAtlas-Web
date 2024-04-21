import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './client/pages/Home';

// import './scss/app.scss';


export default function App(): JSX.Element {

  return (
    <Router>
      <div id="app">
        <div>
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
};
