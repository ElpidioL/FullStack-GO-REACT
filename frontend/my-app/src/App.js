import React from 'react';
import RegisterPage from './pages/RegisterPage.js';
import {Routes,Route} from "react-router-dom";
import LoginPage from './pages/LoginPage.js';

function App() {

  return (
   
      <Routes>
        <Route path="/" element={<LoginPage/>} exact />
        <Route path="/register" element={<RegisterPage/>} exact />
      </Routes>

  );
};

export default App;