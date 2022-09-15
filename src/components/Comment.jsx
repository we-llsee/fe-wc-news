import { useState } from 'react'
import { ItemDetails } from './componentList'
import styles from '../styles/comment.module.css'
import formatDateTime from '../utils/formatDateTime';

export function Comment({comment,styleName}){

    const [numberVotes,setNumberVotes] = useState(comment.votes)

    return (
        <div className={ styleName==='light' ? styles.commentLight : styles.commentDark}>
            <p className={styles.dateTime}>{formatDateTime(comment.created_at)}</p>
            <p>{comment.body}</p>
            <ItemDetails patchURL={`https://wc-news.herokuapp.com/api/comments/${comment.comment_id}`} author={comment.author} numberVotes={numberVotes} setNumberVotes={setNumberVotes}/>
       </div>
    )
}