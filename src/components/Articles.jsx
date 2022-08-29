import {useEffect, useState} from 'react'
import {SortBy, ArticleListTile, NavArrows} from './componentList'
import {Link} from 'react-router-dom'
import {articleColumns as articleColumnsReferenceObj} from '../utils/reference-objs/referenceObjList'
import linkStyles from '../styles/link.module.css'
import articlesStyles from '../styles/articles.module.css'

export function Articles(){

    const [currentPage,setCurrentPage] = useState(1);
    const [articles,setArticles] = useState([])
    const [lastPageNumber,setLastPageNumber] = useState(1)
    const [articlesPerPage,setArticlesPerPage] = useState(4);
    const [isLoading,setIsLoading] = useState(true);
    const [sortBy,setSortBy] = useState('created_at');
    const [sortOrder,setSortOrder] = useState('DESC');

    useEffect(()=>{
        setIsLoading(true)
        fetch(`https://wc-news.herokuapp.com/api/articles?limit=${articlesPerPage}&p=${currentPage}&sort_by=${sortBy}&order=${sortOrder}`).then(res=>{
            return res.json()
        }).then(body =>{
            setArticles([...body.articles])
            //TODO this wouldn't need to be done for change of current page and sort:
            setLastPageNumber(Math.ceil(body.total_count/articlesPerPage))
            setIsLoading(false);
        })
    },[currentPage,sortBy,sortOrder])

    return (
        <div className={articlesStyles.articles}>
            <SortBy sortBy={sortBy} setSortBy={setSortBy} sortOrder={sortOrder} setSortOrder={setSortOrder} sortColumns={articleColumnsReferenceObj}/>
            <div className={articlesStyles.articlesAllTiles}>
                { isLoading ? <p>Loading...</p> : 
                    articles.map(article=>{
                        return  <Link className={linkStyles.link} to={`/articles/${article.article_id}`}>
                                    <ArticleListTile article={article}/>
                                </Link>})}
            </div>
            <NavArrows currentPage={currentPage} setCurrentPage={setCurrentPage} lastPageNumber={lastPageNumber}/>
        </div>
    )
}

