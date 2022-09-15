import { useState } from 'react'
import { ItemDetails } from './componentList'
import styles from '../styles/comment.module.css'
import formatDateTime from '../utils/formatDateTime';

export function Comment({comment}){

    const [numberVotes,setNumberVotes] = useState(comment.votes)

    return (
        <div className={styles.comment}>
            <p>{formatDateTime(comment.created_at)}</p>
            <p>{comment.body}</p>
            <ItemDetails patchURL={`https://wc-news.herokuapp.com/api/comments/${comment.comment_id}`} author={comment.author} numVotes={numberVotes} setNumberVotes={setNumberVotes}/>
       </div>
    )
}