import React, { Component } from 'react';
import dataService from '../services/dataService';

class Posts extends Component {

    constructor(props) {
        super(props);

        this.state = {
            posts: []
        };
    }

    componentDidMount() {
       dataService.get('https://jsonplaceholder.typicode.com/posts').then((posts) => this.setState({ posts: posts.data.length && posts.data.length > 10 ? posts.data.slice(1,10): posts}));
    }

    render() {

        const { posts } = this.state;
        
        const PostCollection = posts.length ? posts.map((post) => {
            return (
                <div key={post.id} className="card-panel container white lighten-3">
                    <span>{post.title}</span>
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

export default Posts;