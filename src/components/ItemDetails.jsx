import {Thumbs} from './componentList'
import styles from '../styles/itemDetails.module.css'

export function ItemDetails({patchURL,author,numberVotes,setNumberVotes}){

    return (
        <div className={styles.itemDetails}> 
            <p>By: {author}</p>
            <p>Votes: {numberVotes}</p>
            <div className={styles.itemThumbs}>
                <Thumbs patchURL={patchURL} setNumberVotes={setNumberVotes}/>
            </div>
        </div>
    )

}