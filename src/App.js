import React from 'react';
// import './App.css';
import {BrowserRouter, Routes,Route} from "react-router-dom"
import Homepage from './components/pages/Homepage'
import Header from './components/Header'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path = '/' element={<Homepage />}></Route>
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
