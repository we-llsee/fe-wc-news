import {Link} from 'react-router-dom';

export function ArticleListTile ({article}) {
    return ( 
            <section id='article-list-tile'>
                <h1 id='article-list-title'>{article.title}</h1>
                <section className='article-details'>
                    <p>{"Created At: " + article.created_at.slice(0,10)}</p>
                    <p>{"Author: " + article.author}</p>
                    <p>{"Topic: " + article.topic}</p>
                    <p>{"Votes: " + article.votes}</p>
                    <p>{"Comments: " + article.comment_count}</p>
                </section>
            </section>
    )
}

