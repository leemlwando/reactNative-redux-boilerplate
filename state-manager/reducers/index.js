import {combineReducers} from "redux"
import HelloWorldReducer from "./helloworld"
import push from "./push"

const rootReducer = combineReducers({
   HelloWorldReducer,
   push
})

export default rootReducer;