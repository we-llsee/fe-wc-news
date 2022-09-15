import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import {ArticleFullCard,Comment} from './componentList'
import styles from '../styles/articlePage.module.css'

export function ArticlePage() {

    const [article,setArticle] = useState({"article_id":"","title":"","topic":"","author":"","body":"","created_at":"","votes":"","comment_count":""});
    const [isLoading,setIsLoading] = useState(true);
    const [comments,setComments] = useState([])
    const [commentsVisible,setCommentsVisible]=useState(false);

    const {article_id} = useParams();

    useEffect(()=>{
        setIsLoading(true);
        fetch(`https://wc-news.herokuapp.com/api/articles/${article_id}`).then(res=>{
            return res.json()
        }).then(body =>{
            setArticle({...body.article})
            setIsLoading(false);
        }).then(()=>{
            return fetch(`https://wc-news.herokuapp.com/api/articles/${article_id}/comments`)
        }).then(res=>{
            return res.json()
        }).then(body =>{
            setComments([...body.comments])
        });
    },[article_id])

    return (
        <div className={styles.articlePage}>
            { isLoading ? <p>Loading...</p> : <ArticleFullCard article={article}/>}
            {/*TODO add key to each comment element for when comments are deleted etc*/}
            { commentsVisible ?
                comments.map(comment=>{
                    return <Comment comment={comment}/>
                })
                :
                <p className={styles.showComments} onClick={()=>{setCommentsVisible(!commentsVisible)}}>View Comments</p>}
        </div>
        )
}

