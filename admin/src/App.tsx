import React from 'react'
import Auth from './components/Auth/Auth'
import axios from 'axios'
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import SideNav from './components/side-nav/SideNav';
import './App.css'
import Test from './components/Test/Test';

const App = () => {

  axios.defaults.baseURL = 'http://localhost:8080';
  axios.defaults.headers.common['Authorization'] = `Bearer ${sessionStorage.getItem('token')}`;

  return (
    <div className='App'>
      <div className='sideNavBar'>
        <SideNav />
      </div>
      <div className='Routes'>
        <Routes>
          <Route path='' element={<Auth />} />
          <Route path='home' element={<Home />} />
          <Route path='test' element={<Test />} />
        </Routes>
      </div>
    </div>
  )
}

export default App