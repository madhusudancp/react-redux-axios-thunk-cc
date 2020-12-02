import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getPosts} from '../redux/actions/postsAction'

 class PostsList extends Component {

constructor(props){
    super(props);
    console.log('INSIDE CONSTRUCTOR POSTSLIST');
}

componentDidMount(){

    this.props.getPosts();
}

    render() {
        return (
            <div>
                POST
                {this.props.posts && this.props.posts.map(p=>(
                    <h6 key={p.id}>{p.title}</h6>
                ))}
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        posts: state.postsdata.postsList
    };
  }

export default connect(mapStateToProps, {getPosts})(PostsList)