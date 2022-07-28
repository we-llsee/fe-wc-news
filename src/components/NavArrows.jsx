export function NavArrows({currentPage,setCurrentPage, numberResults}){

    const prevClick=()=>{
        if(currentPage>1) setCurrentPage(currentPage-1)
    }

    const nextClick=()=>{
        //TODO stop once empty pages
        if(currentPage< Math.ceil(numberResults/5)){
            setCurrentPage(currentPage+1)
        }
    }

    return (
        <>
            <section id="nav-arrows">
                <button className="nav-arrows" id="nav-prev" onClick={prevClick}>{'<-'}</button>
                <p>{'Page ' + currentPage + ' of ' + Math.ceil(numberResults/5)}</p>
                <button className="nav-arrows" id="nav-next" onClick={nextClick}>{'->'}</button>
            </section>
        </>
    )
}