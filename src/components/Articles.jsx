import {useEffect, useState} from 'react'
import {SortBy, ArticleListTile, NavArrows} from '../componentList'
import {Link} from 'react-router-dom'

export function Articles(){

    const [currentPage,setCurrentPage] = useState(1);
    const [articles,setArticles] = useState([])
    const [lastPageNumber,setLastPageNumber] = useState(1)

    useEffect(()=>{
        fetch(`https://wc-news.herokuapp.com/api/articles?limit=5&p=${currentPage}`).then(res=>{
            return res.json()
        }).then(body =>{
            setArticles([...body.articles])
            setLastPageNumber(Math.ceil(body.total_count/5))
        })
    },[currentPage])

    return (
        <section id='articles'>
            <SortBy />
            <section id='articles-all-tiles'>
                 {articles.map(article=>{
                    return  <Link to={`/articles/${article.article_id}`}>
                                <ArticleListTile article={article}/>
                            </Link>
                 })}
            </section>
            <NavArrows currentPage={currentPage} setCurrentPage={setCurrentPage} lastPageNumber={lastPageNumber}/>
        </section>
    )
}