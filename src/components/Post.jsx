import React, { Component } from 'react';
import dataService from '../services/dataService';

class Post extends Component  {
    constructor(props) {
        super(props);
        
        this.state ={
            post: null
        };
    }

    componentDidMount() {
        let postId = this.props.match.params.postId;
        dataService.get('https://jsonplaceholder.typicode.com/posts/' + postId)
        .then((post) => this.setState({ post: post.data }));
    }
    render() {

        const { post } = this.state;

        const postId = post ? (<div className={'container card-panel'}>
            <p>{post.title}</p>
            <p>{post.body}</p>
        </div>): (<p>Post not found</p>)

        return(
            <React.Fragment>
                {postId}
            </React.Fragment>
        )
    }
}

export default Post;