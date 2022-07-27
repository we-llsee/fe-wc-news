import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ArticleListTile, TopicTile,NavArrows,SortBy } from '../componentList'

export function TopicPage(){

    
    const [topic, setTopic] = useState({})
    const [currentPage, setCurrentPage]=useState(1);
    const [topicArticles,setTopicArticles] = useState([])
    const [numberArticles,setNumberArticles] = useState(1);
    const {slug}= useParams();
    
    useEffect(()=>{
        fetch(`https://wc-news.herokuapp.com/api/topics/${slug}`).then(res =>{
            return res.json()
        }).then(({topic})=>{
            setTopic({...topic});
        })
    },[])

    useEffect(()=>{
        fetch(`https://wc-news.herokuapp.com/api/articles/?topic=${slug}`).then(res =>{
            return res.json()
        }).then(({articles})=>{
            setTopicArticles([...articles]);
        })
    },[topic])

    useEffect(()=>{
        setNumberArticles(topicArticles.length)
    },[topicArticles])

    return (
        <section>
            <TopicTile topic={topic}/>
            <SortBy/>
            {topicArticles.map(article=>{
                return <ArticleListTile article={article}/>
            })}
            <NavArrows currentPage={currentPage} setCurrentPage={setCurrentPage} numberResults={numberArticles}/>
        </section>
        
    )
}
