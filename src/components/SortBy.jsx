import { useState } from "react"

export function SortBy(){

    const [currentItem,setCurrentItem]=useState()

    const dropdownChange=(value) =>{
        setCurrentItem(value);
    }

    return (
            <section id='sort-by'>
                <label htmlFor="sort-by">Sort By</label>
                <select onChange={(event)=>dropdownChange(event.target.value)} 
                value={currentItem} name="sort-by" id="sort-by">
                    <option value="author">Author</option>
                    <option value="topic">Topic</option>
                </select>
            </section>
    )
}