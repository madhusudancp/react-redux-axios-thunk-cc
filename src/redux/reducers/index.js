
import {combineReducers} from 'redux'
import searchReducer from './searchReducer'
import postsReducer   from  './postsReducer'


export default combineReducers({
    searchdata:searchReducer,
    postsdata:postsReducer
})