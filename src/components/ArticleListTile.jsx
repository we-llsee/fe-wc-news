import styles from '../styles/articleListTile.module.css'

export function ArticleListTile ({article}) {
    return ( 
            // <div className={styles.articleListTile}>
            //     <img src='http://placekitten.com/100/100'></img>
            //     <h2>{article.title}</h2>
            //     <div className={styles.articleCoreDetails}>
            //         <p>{"Created: " + article.created_at.slice(0,10)}</p>
            //         <p>{"Author: " + article.author}</p>
            //         <p>{"Topic: " + article.topic}</p>
            //     </div>
            //     <div className={styles.articleVotesComments}>
            //         <p>{"Votes: " + article.votes}</p>
            //         <p>{"Comments: " + article.comment_count}</p>
            //     </div>
            // </div>
    <div className={styles.articleListTile}>
        <div className={styles.articleTitleBar}>
            <img src='http://placekitten.com/100/100' alt='Article thumbnail' width='100' height='100'></img>
            <p>{article.title}</p>
        </div>    
        <div className={styles.articleCoreDetails}>
            <p>{"Created: " + article.created_at.slice(0,10)}</p>
            <p>{"Author: " + article.author}</p>
            <p>{"Topic: " + article.topic}</p>
        </div>
        <div className={styles.articleVotesComments}>
            <p>{"Votes: " + article.votes}</p>
            <p>{"Comments: " + article.comment_count}</p>
        </div>
    </div>
    )
}

