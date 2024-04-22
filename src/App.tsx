import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './client/pages/Home';
import Signup from './client/pages/SignUp';

// import './scss/app.scss';


export default function App(): JSX.Element {

  return (
    <Router>
      <div id='app'>
        <div>
          <Routes>
            <Route
              path='/'
              element={<Home />}
            />
            <Route
              path='/signup'
              element={<Signup />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
};
