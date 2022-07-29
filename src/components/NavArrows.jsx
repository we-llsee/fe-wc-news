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
        <>
            <section id="nav-arrows">
                <button className="nav-arrows" id="nav-prev" onClick={prevClick}>{'<-'}</button>
                <p>{'Page ' + currentPage + ' of ' + lastPageNumber}</p>
                <button className="nav-arrows" id="nav-next" onClick={nextClick}>{'->'}</button>
            </section>
        </>
    )
}