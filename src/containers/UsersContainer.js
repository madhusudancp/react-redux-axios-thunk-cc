import React, { Component } from 'react'
//import axios from 'axios'
import {connect} from 'react-redux'
import {getSearchResult} from '../redux/actions/searchActions'
 class UsersContainer extends Component {

    constructor(props) {
        super(props);
        // this.state = {date: new Date(),
        //               personsObj: {}
        //               };
        console.log('INSIDE CONSTRUCTOR');
      }

  componentDidMount(){
    console.log('INSIDE COMPONENT DID MOUNT');
    // axios.get(`https://hn.algolia.com/api/v1/search?query=redux`)
    // .then(res => {
    //   const persons = res.data;
    //   console.log("INSIDE WILL MOUNT"+persons);
    //   this.setState({ personsObj :persons});
    // })
    // {this.state.personsObj.nbHits}
    // {this.state.personsObj.hits && this.state.personsObj.hits.map(hit=>{
    //        return <h2 key={hit.title}>{hit.title}</h2>
    // })}
    this.props.getSearchResult()
  }


    render() {
        console.log("RENDER "+JSON.stringify(this.props.searchResults))
       
       
        return (
            <div>
            {this.props.searchResults.hits && this.props.searchResults.hits.map(hit=>{
           return <h2 key={hit.title}>{hit.title}</h2>
             })}
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        searchResults: state.searchdata.searchResult
    };
  }

export default connect(mapStateToProps, {getSearchResult})(UsersContainer)