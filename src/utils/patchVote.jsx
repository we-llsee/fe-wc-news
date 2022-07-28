export function patchVote(changeBy,apiURL){

    if(!apiURL) return;

    return fetch(apiURL, {
        method:'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ inc_votes: changeBy }),
      }).then((res) => {
        return res.json();
      }).then(body=>{
        console.log(body)
      })
      
}