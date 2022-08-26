import styles from '../styles/sortBy.module.css'

export function SortBy({sortBy, setSortBy, sortOrder,setSortOrder,sortColumns={}}){

    //Considered adding a prop called sortColumns which would be - Object.keys(article[0]) - for example.
    //problem with this is that when you map out the sortColumns array and create <option> tags you will have to set their 
    //innerHTML using the SQL column names... which isn't very pretty. I could pass through a reference object too as a prop
    //{'created_at':'Date','comment_count':'Comment Count} etc. But this would get forgotten about over time and newly added SQL column
    //names would creep into the frontend. Hmmmm. Hardcoding for now. 

    const changeSortOrder=()=>{
        const sortRefObj=  {'ASC':'DESC',
                            'DESC':'ASC'}
        setSortOrder(sortRefObj[sortOrder])
    }

    return (
            <div className={styles.sortBy}>
                <label htmlFor="sort-dropdown">Sort By</label>
                <select onChange={(event)=>setSortBy(event.target.value)} 
                value={sortBy} name="sort-by" id="sort-dropdown">

                    {Object.keys(sortColumns).map(key =>{
                        return <option value={key}> {sortColumns[key]} </option>
                    })}

                </select>
                <p onClick={(event)=>{changeSortOrder()}}>{sortOrder==='ASC' ? '📈':'📉'}</p>
            </div>
    )
}