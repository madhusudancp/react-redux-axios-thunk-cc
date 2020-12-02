import * as types from '../types'


const initialState ={
    searchResult:{}
}


export default function(state = initialState, action){

    switch(action.type){

        case types.GET_SEARCH_RESULT:
        return {
            ...state,
            searchResult:action.payload

        }
        default: return state
    }

}