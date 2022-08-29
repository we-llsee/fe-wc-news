import './App.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Header, NavBar, Articles, ArticlePage, Topics, TopicPage} from './components/componentList'
import React from 'react';
import styles from './styles/app.module.css'

function App() {

  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Header/>
        <NavBar/>
        <Routes>
          <Route path='/articles' element={<Articles/>}/>
          <Route path='/articles/:article_id' element={<ArticlePage/>}/>
          <Route path='/topics' element={<Topics/>}/>
          <Route path='/topics/:slug' element={<TopicPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
