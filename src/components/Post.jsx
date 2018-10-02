import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getOnePost } from '../actions/post';

class Post extends Component  {

    componentDidMount() {
        let postId = this.props.match.params.postId;
        this.props.getOnePost('https://jsonplaceholder.typicode.com/posts/' + postId);
    }

    render() {

        const { post } = this.props;

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

const propsFromState = (state, props) => {
    return {
        post: state.postState.post
    }
};

export default connect(propsFromState, { getOnePost })(Post);