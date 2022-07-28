import {useState,useEffect} from 'react'
import {patchVote} from '../utilList'

export function Thumbs({patchURL}){

    const [thumbUpActive,setThumbUpActive] =useState();
    const [thumbDownActive,setThumbDownActive] = useState();

    useEffect(()=>{
        if(thumbUpActive===undefined) {
            return;
        } 
        
        if(!thumbUpActive){
            patchVote(-1,patchURL)
        }

        if(thumbUpActive && thumbDownActive) {
            patchVote(1,patchURL)
            setThumbDownActive(false);
        } 
        
        if(thumbUpActive && !thumbDownActive){
            patchVote(1,patchURL)
        }
    },[thumbUpActive])


    useEffect(()=>{
        if(thumbDownActive===undefined){
            return;
        }

        if(!thumbDownActive){
            patchVote(1,patchURL)
        }

        if(thumbDownActive && thumbUpActive) {
            patchVote(-1,patchURL)
            setThumbUpActive(false)
        }

        if(thumbDownActive && !thumbUpActive){
            patchVote(-1,patchURL)
        }
    },[thumbDownActive])



    return (
        <section>
            <p className={thumbUpActive ? 'active' : ''} onClick={()=>{setThumbUpActive(!thumbUpActive)}}>👍</p>
            <p>{String(thumbUpActive)}</p>
            <p className={thumbDownActive ? 'active' : ''} onClick={()=>{setThumbDownActive(!thumbDownActive)}}>👎</p>
            <p>{String(thumbDownActive)}</p>
        </section>
        
    )
}