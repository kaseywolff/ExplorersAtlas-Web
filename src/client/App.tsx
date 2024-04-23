import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import NavBar from './components/NavBar';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

// import './scss/app.scss';


export default function App(): JSX.Element {

  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/login'
          element={<Login />}
        />
        <Route
          path='/signup'
          element={<SignUp />}
        />
        <Route
          path='/test'
          element={<h1>test</h1>}
        />
      </Routes>
    </>
  );
};
