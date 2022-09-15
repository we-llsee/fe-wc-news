import {useState} from 'react'
import {patchVote} from '../utils/utilList'
import styles from '../styles/thumbs.module.css'

export function Thumbs({patchURL,setNumberVotes}){

    const [clickedThumb,setClickedThumb] = useState(null);

    const voteClick=(thumbDirection) =>{

        if(thumbDirection===clickedThumb){
            setNumberVotes((currVotes)=>currVotes + (-1*thumbDirection))

            return patchVote(-1*thumbDirection,patchURL).then(()=>{
                setClickedThumb(null)
            }).catch(()=>{
                setNumberVotes((currVotes)=>currVotes - (-1*thumbDirection))
            })
        }

        if(clickedThumb===null){
            setNumberVotes((currVotes)=>currVotes + thumbDirection)

            return patchVote(thumbDirection,patchURL).then(()=>{
                setClickedThumb(thumbDirection)
            }).catch(()=>{
                setNumberVotes((currVotes)=>currVotes - thumbDirection)
            })
        }

        if(thumbDirection===clickedThumb * -1){
            setNumberVotes((currVotes)=>currVotes + (2*thumbDirection))

            return patchVote(2*thumbDirection,patchURL).then(()=>{
                setClickedThumb(thumbDirection)
            }).catch(()=>{
                setNumberVotes((currVotes)=>currVotes - (2*thumbDirection))
            })
        }
    }

    return (
        <>  
            <p className={clickedThumb===1 ? styles.active : styles.inactive} onClick={()=>{voteClick(1)}}>👍</p>
            <p className={clickedThumb===-1 ? styles.active : styles.inactive} onClick={()=>{voteClick(-1)}}>👎</p>
        </>
          
        
    )
}