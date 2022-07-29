import {useState} from 'react'
import {patchVote} from '../utilList'

export function Thumbs({patchURL}){

    const [thumbUpHasBeenClicked,setthumbUpHasBeenClicked] =useState(false);
    const [thumbDownHasBeenClicked,setthumbDownHasBeenClicked] = useState(false);

    const thumbUpClick = function(){  
        //if thumb up is currently active then now deactivate and -1 vote
        if(thumbUpHasBeenClicked===true){
            return patchVote(-1,patchURL).then(()=>{
                setthumbUpHasBeenClicked(false)
            })
        }

        //if it's inactive then....
        //...if thumb down is also inactive we can just activate thumb up and +1 vote
        if(thumbUpHasBeenClicked===false && thumbDownHasBeenClicked===false){
            return patchVote(1,patchURL).then(()=>{
                setthumbUpHasBeenClicked(true)
            })
        }

        //if thumb down is already active then:
        //deactivate thumb down
        //activate thumb up
        //change the vote by +2
        if(thumbUpHasBeenClicked===false && thumbDownHasBeenClicked===true){}
            return patchVote(2,patchURL).then(()=>{
                setthumbUpHasBeenClicked(true)
                setthumbDownHasBeenClicked(false)
            })


            //useEffect(()=>{}, [thumbUpHasBeenClicked,thumbDownHasBeenClicked])
    }


    const thumbDownClick = function(){
        if(thumbDownHasBeenClicked===true){
            return patchVote(1,patchURL).then(()=>{
                setthumbDownHasBeenClicked(false)
            });
        }

        if(thumbDownHasBeenClicked===false && thumbUpHasBeenClicked===false){
            return patchVote(-1,patchURL).then(()=>{
                setthumbDownHasBeenClicked(true);
            })
        }

        if(thumbDownHasBeenClicked===false && thumbUpHasBeenClicked===true){
            return patchVote(-2,patchURL).then(()=>{
                setthumbDownHasBeenClicked(true);
                setthumbUpHasBeenClicked(false);
            })
        }
    }
    
    return (
        <section>
            <p className={thumbUpHasBeenClicked ? 'active' : ''} onClick={()=>{thumbUpClick()}}>👍</p>
            <p>{String(thumbUpHasBeenClicked)}</p>
            <p className={thumbDownHasBeenClicked ? 'active' : ''} onClick={()=>{thumbDownClick()}}>👎</p>
            <p>{String(thumbDownHasBeenClicked)}</p>
        </section>
        
    )
}