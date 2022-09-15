import { useState } from 'react'
import {Thumbs} from './componentList'
import styles from '../styles/articleFullCard.module.css'

export function ArticleFullCard({article}){

    const [numberVotes,setNumberVotes]=useState(article.votes)

    return (
        <div className={styles.articleFullCard}>
            <p className={styles.articleMainText}><strong>{article.title}</strong></p>
          
            <img src={window.screen.availWidth<600 ? 'http://placekitten.com/300/300' : 'http://placekitten.com/600/600'} 
            alt={article.altText || "Article Main Image"}
            height={window.screen.availWidth<600 ? '300' : '600'}
            width={window.screen.availWidth<600 ? '300' : '600'}/>

    
            <p className={styles.articleMainText}>{article.body}</p>
            <div className={styles.articleDetails}> 
                <p>By {article.author}</p>
                {/* <p>{article.topic}</p> */}
                <p>Votes: {numberVotes}</p>
                <div className={styles.articleThumbs}>
                     <Thumbs patchURL={`https://wc-news.herokuapp.com/api/articles/${article.article_id}`} setNumberVotes={setNumberVotes}/>
                </div>
            </div>
        </div>
    )
}