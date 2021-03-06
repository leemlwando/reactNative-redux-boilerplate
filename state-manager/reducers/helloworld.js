import {HELLOWORLD} from "../actionTypes"


const initialState = {
    greeting:[]
}

export default function sayHelloWorld(state = initialState, action){
    switch(action.type){
        case HELLOWORLD:
         return {
             ...state,
             ...action.data
         }
            break;
        default:
         return state
    }
}