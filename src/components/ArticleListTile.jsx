export function ArticleListTile ({article}) {

    return (
        <>  
            <section className='article-list-tile'>
                <section>
                    <h2>{article.title}</h2>
                </section>
                <section>
                    <p>{article.created_at.slice(0,10)}</p>
                    <p>{article.author}</p>
                    <p>{article.topic}</p>
                    <p>{"Votes: " + article.votes}</p>
                    <p>{"Comments: " + article.comment_count}</p>
                </section>
            </section>
        </>
    )
}