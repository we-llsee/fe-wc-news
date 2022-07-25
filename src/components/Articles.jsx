import { useEffect, useState } from 'react'
import {SortBy, ArticleListTile, NavArrows} from '../componentList'

export function Articles({articles,setArticles}){

    const [currentPage,setCurrentPage]=useState(0);
    const articlesCopy = [...articles]

    useEffect(()=>{
        fetch('https://wc-news.herokuapp.com/api/articles').then(res=>{
            return res.json()
        }).then(body =>{
            return setArticles(body.articles)
        })
    },[])

    return (
        <>
            <SortBy></SortBy>
            {articlesCopy.map(article=>{
                return <ArticleListTile article={article}/>
            })}
            <NavArrows currentPage={currentPage} setCurrentPage={setCurrentPage}/>
        </>
    )
}