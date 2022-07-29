import {useState} from 'react'
import {patchVote} from '../utilList'

export function Thumbs({patchURL}){

    const [thumbUpActive,setThumbUpActive] =useState(false);
    const [thumbDownActive,setThumbDownActive] = useState(false);

    const thumbUpClick = function(){  
        //if thumb up is currently active then now deactivate and -1 vote
        if(thumbUpActive===true){
            return patchVote(-1,patchURL).then(()=>{
                setThumbUpActive(false)
            })
        }

        //if it's inactive then....
        //...if thumb down is also inactive we can just activate thumb up and +1 vote
        if(thumbUpActive===false && thumbDownActive===false){
            return patchVote(1,patchURL).then(()=>{
                setThumbUpActive(true)
            })
        }

        //if thumb down is already active then:
        //deactivate thumb down
        //activate thumb up
        //change the vote by +2
        if(thumbUpActive===false && thumbDownActive===true){}
            return patchVote(2,patchURL).then(()=>{
                setThumbUpActive(true)
                setThumbDownActive(false)
            })
    }

    const thumbDownClick = function(){
        if(thumbDownActive===true){
            return patchVote(1,patchURL).then(()=>{
                setThumbDownActive(false)
            });
        }

        if(thumbDownActive===false && thumbUpActive===false){
            return patchVote(-1,patchURL).then(()=>{
                setThumbDownActive(true);
            })
        }

        if(thumbDownActive===false && thumbUpActive===true){
            return patchVote(-2,patchURL).then(()=>{
                setThumbDownActive(true);
                setThumbUpActive(false);
            })
        }
    }
    
    return (
        <section>
            <p className={thumbUpActive ? 'active' : ''} onClick={()=>{thumbUpClick()}}>👍</p>
            <p>{String(thumbUpActive)}</p>
            <p className={thumbDownActive ? 'active' : ''} onClick={()=>{thumbDownClick()}}>👎</p>
            <p>{String(thumbDownActive)}</p>
        </section>
        
    )
}