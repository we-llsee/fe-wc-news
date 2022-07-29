import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ArticleListTile, TopicTile, NavArrows, SortBy } from '../componentList'

export function TopicPage(){

    const [topic, setTopic] = useState({})
    const [currentPage, setCurrentPage]=useState(1);
    const [topicArticles,setTopicArticles] = useState([])
    const [lastPageNumber,setLastPageNumber] = useState(1);
    const {slug}= useParams();
    
    useEffect(()=>{
        fetch(`https://wc-news.herokuapp.com/api/topics/${slug}`).then(res =>{
            return res.json()
        }).then(({topic})=>{
            setTopic({...topic});
        })
    },[slug])

    useEffect(()=>{
        fetch(`https://wc-news.herokuapp.com/api/articles/?topic=${slug}&limit=3&p=${currentPage}`).then(res =>{
            return res.json()
        }).then(({articles,total_count})=>{
            setTopicArticles([...articles]);
            setLastPageNumber(Math.ceil(total_count/3))
        })
    },[slug,currentPage])

    return (
        <section>
            <TopicTile topic={topic}/>
            <SortBy/>
            {topicArticles.map(article=>{
                return <ArticleListTile article={article}/>
            })}
            <NavArrows currentPage={currentPage} setCurrentPage={setCurrentPage} lastPageNumber={lastPageNumber}/>
        </section>
        
    )
}
