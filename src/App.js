import './App.css';

import {useEffect, useState} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import {Header, NavBar, Articles} from './componentList'
import {apiGet} from './utils/apiGet'

function App() {

  const [articles,setArticles]=useState([])

  useEffect(()=>{
    fetch('https://wc-news.herokuapp.com/api/articles').then(res=>{
      return res.json()
    }).then(body =>{
      return setArticles(body.articles)
    })
  },[])

  return (
    <>
      <BrowserRouter>
        <button onClick={()=>console.log(articles)}>test</button>
        <Header></Header>
        <NavBar></NavBar>
        <Routes>
          <Route path='/articles' element={<Articles articles={articles} setArticles={setArticles}/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
