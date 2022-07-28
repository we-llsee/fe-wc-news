export function apiGet(url,setter){
    //currently unused

    return fetch(url).then(res=>{
        return res.json()
    }).then(body =>{
        return setter(body.articles)
    })
}