import * as types from '../types'


const initialState ={
    postsList:[]
}


export default function(state = initialState, action){

    switch(action.type){

        case types.GET_POSTS:
        return {
            ...state,
            postsList:action.payload

        }
        default: return state
    }

}