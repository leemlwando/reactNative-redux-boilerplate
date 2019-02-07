import {FETCH_TOKEN_ERROR,FETCH_TOKEN_SUCCESS,FETCH_TOKEN_FAIL, FETCH_TOKEN_START, FETCH_TOKEN_STOP, SEND_TOKEN_TO_SERVER_START,SEND_TOKEN_TO_SERVER_ERROR,SEND_TOKEN_TO_SERVER_FAIL,SEND_TOKEN_TO_SERVER_SUCCESS,SEND_TOKEN_TO_SERVER_STOP} from "../actionTypes"


/**
 * @{TODO} ADD MESSAGES
 *  */

const initialState = {
        senderID:undefined,
        registrationToken:undefined,
        fcmRegistred:false,
        notifications:[],
        fetch_token_start:false,
        fetch_token_error:false,
        fetch_token_success:false,
        fetch_token_message:[],
        fetch_token_failure:false,
        fetch_token_stop:false,
        send_token_to_server_start:false,
        send_token_to_server_error:false,
        send_token_to_server_success:false,
        send_token_to_server_failure:false,
        send_token_to_server_stop:false,
        send_token_to_server_message:[]
}


export default function(state = initialState , action){
    switch(action.type){
        case FETCH_TOKEN_START:
            break;
        case FETCH_TOKEN_SUCCESS:
            break;
        case FETCH_TOKEN_FAIL:
            break;
        case FETCH_TOKEN_ERROR:
            break;
        case FETCH_TOKEN_STOP:
            break;
        case SEND_TOKEN_TO_SERVER_START:
            break;
        case SEND_TOKEN_TO_SERVER_ERROR:
            break;
        case SEND_TOKEN_TO_SERVER_FAIL:
            break;
        case  SEND_TOKEN_TO_SERVER_SUCCESS:
            break;
        case  SEND_TOKEN_TO_SERVER_STOP:
            break;
        default:
        return state
    }
}