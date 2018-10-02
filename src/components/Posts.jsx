import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getPost } from '../actions/post';
import { connect } from 'react-redux';

class Posts extends Component {

    constructor(props) {
        super(props);

        this.state = {
            posts: []
        };
    }

    componentDidMount() {
        this.props.getAllPost('https://jsonplaceholder.typicode.com/posts');
    }

    render() {

        const { posts } = this.props;
        const PostCollection = posts.length ? posts.map((post) => {
            return (
                <div key={post.id} className="card-panel container white lighten-3">
                    <Link to={ '/post/' + post.id }><span>{post.title}</span></Link>
                </div>
            )
        }): (<p className={'center'}>No Posts available</p>);
            

        return(
            <React.Fragment>
                { PostCollection }
            </React.Fragment>
        )
    }
}

const stateToProps = (state, ownProps) => {
    return {
        posts: state.postState.posts
    }
};

const triggerAction = () => {
    return {
        getAllPost: (url)=> getPost(url)
    }
};

export default connect(stateToProps, triggerAction())(Posts);