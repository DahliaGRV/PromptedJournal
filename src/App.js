import React, {useState,useEffect} from 'react';
import {BrowserRouter, Routes,Route} from "react-router-dom"
import Homepage from './components/pages/Homepage'
import Login from './components/pages/Login'
import Journals from './components/pages/Journals'
import Header from './components/Header'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/homepage.css'
import API from './utils/API'


const App = () => {
  const shouldRedirect = true;

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(null);
  const [token,setToken] = useState(null)
  useEffect(()=>{
    const savedToken = localStorage.getItem("token");
    if(savedToken){
      setToken(savedToken)
    }
  },[])
  useEffect(()=>{
   if(token){
    API.verify(token).then(userData=>{
        if(userData.userId){
          setIsLoggedIn(true);
          setUserId(userData.userId)
        } else {
          setIsLoggedIn(false);
          setUserId(null)
        }
      }) 
    }else {
      setIsLoggedIn(false);
      setUserId(null)
    }
  },[token])

  const handleLoginSubmit=loginData =>{
    console.log("handle login",loginData)
    API.login(loginData).then(data=>{
      if(data.token){
        setToken(data.token)
        localStorage.setItem("token",data.token)
        window.location= "/journals"
      }
    })
  }

  const handleSignupSubmit=signupData =>{
    API.signup(signupData).then(data=>{
      if(data.token){
        setToken(data.token)
        localStorage.setItem("token",data.token)
        window.location= "/journals"
      }
    })
  }

  return (
    <BrowserRouter forceRefresh={true}>
    <Header/>
    <Routes>
      <Route path = '/' element={<Homepage />}></Route>
      <Route path = '/login' element ={<Login userLogin={handleLoginSubmit} signup={handleSignupSubmit} />}></Route>
      <Route path = '/journals' element={<Journals />}></Route>
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
