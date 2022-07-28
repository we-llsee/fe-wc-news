import './App.css';

import {useEffect, useState} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import {Header, NavBar, Articles, ArticlePage} from './componentList'

function App() {

  return (
    <>
    <section id="app">
      <BrowserRouter>
        <Header></Header>
        <NavBar></NavBar>
        <Routes>
          <Route path='/articles' element={<Articles/>}/>
          <Route path='/articles/:article_id' element={<ArticlePage/>}/>
        </Routes>
      </BrowserRouter>
    </section>
    </>
   
  );
}

export default App;
