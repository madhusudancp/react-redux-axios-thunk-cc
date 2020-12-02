import * as types from '../types'
import axios from 'axios'


export function getSearchResult(){

    
        return function (dispatch) {
         
            axios.get(`https://hn.algolia.com/api/v1/search?query=redux`)
            .then(res => {
              const searchresults = res.data;
              dispatch({type:types.GET_SEARCH_RESULT,payload:searchresults})
            })

           
        };
       
}

