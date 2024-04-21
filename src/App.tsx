import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import './scss/app.scss';


export default function App(): JSX.Element {

  return (
    <Router>
      <div id="app">
        <div>Hello, Hiker!</div>
        <div>
          <Routes>
            <Route
              path="/"
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
};
