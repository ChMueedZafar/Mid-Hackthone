import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css'
import SignnUp from './pages/SignnUp';
import Home from './pages/Home';

function App() {

  return (
        <div className='app'>
             <BrowserRouter>
             <Routes>
             <Route path='/' element={<SignnUp></SignnUp>}></Route>
             <Route path='/Home' element={<Home></Home>}></Route>
             </Routes>
             </BrowserRouter>
        </div>
  )
}

export default App
