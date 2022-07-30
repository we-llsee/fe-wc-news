import './App.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

import {Header, NavBar, Articles, ArticlePage, Topics, TopicPage} from './components/componentList'

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
          <Route path='/topics' element={<Topics/>}/>
          <Route path='/topics/:slug' element={<TopicPage/>}/>
        </Routes>
      </BrowserRouter>
    </section>
    </>
   
  );
}

export default App;
