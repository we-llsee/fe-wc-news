import {Thumbs} from './componentList'
import styles from '../styles/itemDetails.module.css'

export function ItemDetails({patchURL,author,numVotes,setNumberVotes}){

    return (
        <div className={styles.itemDetails}> 
            <p>By: {author}</p>
            <p>Votes: {numVotes}</p>
            <div className={styles.itemThumbs}>
                <Thumbs patchURL={patchURL} setNumberVotes={setNumberVotes}/>
            </div>
        </div>
    )

}