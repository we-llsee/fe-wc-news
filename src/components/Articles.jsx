import {useEffect, useState} from 'react'
import {SortBy, ArticleListTile, NavArrows} from '../componentList'

export function Articles(){

    const [currentPage,setCurrentPage] = useState(1);
    const [articles,setArticles] = useState([])
    const [numberResults,setNumberResults] = useState(1)

    useEffect(()=>{
        fetch(`https://wc-news.herokuapp.com/api/articles?limit=5&p=${currentPage}`).then(res=>{
            return res.json()
        }).then(body =>{
            //TODO will these benefit from being in thens?
            console.log(body.articles)
            setArticles([...body.articles])
            setNumberResults(body.total_count)
        })
    },[currentPage])

    return (
        <section id='articles'>
            <SortBy />
            {articles.map(article=>{
                return <ArticleListTile article={article}/>
            })}
            <NavArrows currentPage={currentPage} setCurrentPage={setCurrentPage} numberResults={numberResults}/>
        </section>
    )
}