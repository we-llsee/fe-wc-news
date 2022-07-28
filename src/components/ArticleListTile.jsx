import {Link} from 'react-router-dom';

export function ArticleListTile ({article}) {

    return ( 
            <a id='article-list-tile' href={`/articles/${article.article_id}`}>
                <h1 id='article-list-title'>{article.title}</h1>
                <section className='article-details'>
                    <p>{"Created At: " + article.created_at.slice(0,10)}</p>
                    <p>{"Author: " + article.author}</p>
                    <p>{"Topic: " + article.topic}</p>
                    <p>{"Votes: " + article.votes}</p>
                    <p>{"Comments: " + article.comment_count}</p>
                </section>
            </a>
    )
}

