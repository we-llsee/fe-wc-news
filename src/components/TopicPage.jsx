import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { ArticleListTile, TopicTile, NavArrows, SortBy } from './componentList'

export function TopicPage(){

    const [topic, setTopic] = useState({})
    const [currentPage, setCurrentPage]=useState(1);
    const [topicArticles,setTopicArticles] = useState([])
    const [lastPageNumber,setLastPageNumber] = useState(1);
    const [isLoading,setIsLoading] = useState(true);
    const [sortBy,setSortBy] = useState('created_at');
    const [sortOrder,setSortOrder] = useState('DESC');
    const {slug}= useParams();
    
    useEffect(()=>{
        fetch(`https://wc-news.herokuapp.com/api/topics/${slug}`).then(res =>{
            return res.json()
        }).then(({topic})=>{
            setTopic({...topic});
        })
    },[slug])

    useEffect(()=>{
        setIsLoading(true);
        fetch(`https://wc-news.herokuapp.com/api/articles/?topic=${slug}&limit=3&p=${currentPage}&sort_by=${sortBy}&order=${sortOrder}`).then(res =>{
            return res.json()
        }).then(({articles,total_count})=>{
            setTopicArticles([...articles]);
            setLastPageNumber(Math.ceil(total_count/3))
            setIsLoading(false);
        })
    },[slug,currentPage,sortBy,sortOrder])

    return (
        <section>
            <TopicTile topic={topic}/>
            <SortBy sortBy={sortBy} setSortBy={setSortBy} sortOrder={sortOrder} setSortOrder={setSortOrder}/>
            { isLoading ?   <p>Loading...</p> :
                            topicArticles.map(article=>{
                                return (
                                    <Link to={`/articles/${article.article_id}`}>
                                        <ArticleListTile article={article}/>
                                    </Link>
                                )    
            })}
            
            <NavArrows currentPage={currentPage} setCurrentPage={setCurrentPage} lastPageNumber={lastPageNumber}/>
        </section>
        
    )
}
