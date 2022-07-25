export function NavArrows({currentPage,setCurrentPage}){

    const prevClick=()=>{
        if(currentPage>0) setCurrentPage(currentPage-1)
    }

    const nextClick=()=>{
        alert('hello')
    }

    return (
        <>
            <section id="nav-arrows">
                <button onClick={prevClick} id="nav-prev">{'<-'}</button>
                <button onClick={nextClick} id="nav-next">{'->'}</button>
            </section>
        </>
    )
}