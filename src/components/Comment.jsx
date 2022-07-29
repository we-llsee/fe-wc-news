import {Thumbs} from '../componentList'

export function Comment({comment}){

    return (
        <section className='comment'>
            <p>{comment.body}</p>
            <p>{comment.author}</p>
            <p>{'Votes: ' + comment.votes}</p>
            <p>{'Created: ' +comment.created_at}</p>
            <Thumbs/>
        </section>
    )
}