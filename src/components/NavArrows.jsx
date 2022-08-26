import styles from '../styles/navArrows.module.css'

export function NavArrows({currentPage,setCurrentPage, lastPageNumber}){

    const prevClick=()=>{
        if(currentPage>1) setCurrentPage(currentPage-1)
    }

    const nextClick=()=>{
        //TODO stop once empty pages
        if(currentPage< lastPageNumber){
            setCurrentPage(currentPage+1)
        }
    }

    return (
            // <div className={styles.navArrows}>
            //         <button className={styles.navPrev} onClick={prevClick}>{'<-'}</button>
            //         <p>{'Page ' + currentPage + ' of ' + lastPageNumber}</p>
            //         <button className={styles.navNext} onClick={nextClick}>{'->'}</button>
            // </div>
            <div className={styles.one}>
                <section className={styles.secA}>
                    <button className={styles.navPrev} onClick={prevClick}>{'<-'}</button>
                </section>
                <section className={styles.secB}>
                    <button className={styles.navNext} onClick={nextClick}>{'->'}</button>
                </section>
            </div>
    )
}