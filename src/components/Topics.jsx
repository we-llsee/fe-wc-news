import { useEffect, useState } from "react"
import { NavArrows, TopicTile } from "./componentList"
import { Link } from 'react-router-dom'
import linkStyles from '../styles/link.module.css'
import topicStyles from '../styles/topics.module.css'

export function Topics(){

    const [topics, setTopics] = useState([]);
    const [currentPage, setCurrentPage]= useState(1);
    const [lastPageNumber,setLastPageNumber] =useState(1);
    const [isLoading,setIsLoading] =useState(true);

    useEffect(()=>{
        setIsLoading(true);
        fetch(`https://wc-news.herokuapp.com/api/topics?limit=10&p=${currentPage}`).then(res=>{
            return res.json();
        }).then(body=>{
            setTopics([...body.topics]);
            //hardcoded this for now
            setLastPageNumber(1)
            setIsLoading(false);
        })
    },[currentPage])

    return (
        <div className={topicStyles.topic}>
            <div id='topics-all-tiles'>
                { isLoading ? <p>Loading...</p> : topics.map(topic=>{
                    return  <Link className={linkStyles.link} to={`/topics/${topic.slug}`}>
                                <TopicTile topic={topic}/>
                            </Link>                       
                })}
            </div>
                
            {/*TODO  why is this NavArrows picking up style without it specified in a className */}
            <NavArrows currentPage={currentPage} setCurrentPage={setCurrentPage} lastPageNumber={lastPageNumber}></NavArrows>
        </div>
        
    )
}