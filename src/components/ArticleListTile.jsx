import styles from '../styles/articleListTile.module.css'

export function ArticleListTile ({article}) {
    return ( 
            <div className={styles.articleListTile}>
                <h2>{article.title}</h2>
                <div className='article-details'>
                    <p>{"Created At: " + article.created_at.slice(0,10)}</p>
                    <p>{"Author: " + article.author}</p>
                    <p>{"Topic: " + article.topic}</p>
                    <p>{"Votes: " + article.votes}</p>
                    <p>{"Comments: " + article.comment_count}</p>
                </div>
            </div>
    )
}

