import React from 'react';
import './App.css';
import {BrowserRouter, Routes,Route} from "react-router-dom"
import Homepage from './components/pages/Homepage'
import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path = '/' element={<Homepage />}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
