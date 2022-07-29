import { useEffect, useState } from "react"
import { NavArrows, TopicTile } from "../componentList"
import {Link} from 'react-router-dom'

export function Topics(){

    const [topics, setTopics] = useState([]);
    const [currentPage, setCurrentPage]= useState(1);
    const [lastPageNumber,setLastPageNumber] =useState(1);

    useEffect(()=>{
        fetch(`https://wc-news.herokuapp.com/api/topics?limit=10&p=${currentPage}`).then(res=>{
            return res.json();
        }).then(body=>{
            setTopics([...body.topics]);
            //hardcoded this for now
            setLastPageNumber(1)
        })
    },[currentPage])

    return (
        <section id='topics'>
            <section id='topics-all-tiles'>
                {topics.map(topic=>{
                    return  (
                        <Link to={`/topics/${topic.slug}`}>
                            <TopicTile topic={topic}/>
                        </Link>
                    )
                })}
            </section>
           
            <NavArrows currentPage={currentPage} setCurrentPage={setCurrentPage} lastPageNumber={lastPageNumber}></NavArrows>
        </section>
        
    )
}