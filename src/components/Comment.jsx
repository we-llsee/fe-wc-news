import { useState } from 'react'
import {Thumbs} from './componentList'

export function Comment({comment}){

    const [numberVotes,setNumberVotes] = useState(comment.votes)

    return (
        <section className='comment'>
            <p>{comment.body}</p>
            <p>{comment.author}</p>
            <p>{'Votes: ' + numberVotes}</p>
            <p>{'Created: ' +comment.created_at}</p>
            <Thumbs patchURL={`https://wc-news.herokuapp.com/api/comments/${comment.comment_id}`} setNumberVotes={setNumberVotes}/>
        </section>
    )
}