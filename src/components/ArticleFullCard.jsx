import {Thumbs} from '../componentList'

export function ArticleFullCard({article}){

    return (
        <section id='article-full-card'>
            <section>
                <p>{article.topic}</p>
                <p>{article.title}</p>
                <p>{article.author}</p>
            </section>
            <section>
                <p>{article.body}</p>
            </section>
            <section>
                <p>{article.comment_count}</p>
                <p>{article.votes}</p>
                <Thumbs patchURL={`https://wc-news.herokuapp.com/api/articles/${article.article_id}`}/>
            </section>
        </section>
    )
}