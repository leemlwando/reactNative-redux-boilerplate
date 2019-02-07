import {HELLOWORLD} from "../actionTypes"




export function helloword(data){
    return {
        type:HELLOWORLD,
        data
    }
}

export function fetchGreeting(url){
    return fetch(url || "http://jsonplaceholder.typicode.com/posts")
}

export function displayHelloWorldError(err){
    return {
        type:"Error",
        err
    }
}
export function asyncHelloWorld(url){
    return dispatch =>{
        //dispatch an action e.g fetch_started()

        //async operation
        fetchGreeting()
            .then(res=>res.success ? dispatch(helloword(true)) : dispatch(helloword(false)))
                .catch(err=>dispatch(displayHelloWorldError(err)))
    }
}