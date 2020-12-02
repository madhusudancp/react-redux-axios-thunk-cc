import * as types from '../types'
import axios from 'axios'


export function getPosts(){

    
        return function (dispatch) {
         
            axios.get(`https://jsonplaceholder.typicode.com/posts`)
            .then(res => {
              const posts = res.data;
              dispatch({type:types.GET_POSTS,payload:posts})
            })

           
        };
       
}