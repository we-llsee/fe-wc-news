import './App.css';

import {useEffect, useState} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import {Header, NavBar, Articles} from './componentList'

function App() {

  return (
    <>
    <section id="app">
      <BrowserRouter>
        <Header></Header>
        <NavBar></NavBar>
        <Routes>
          <Route path='/articles' element={<Articles/>}/>
        </Routes>
      </BrowserRouter>
    </section>
    </>
   
  );
}

export default App;
