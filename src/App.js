import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NavBar from './components/Nav';
import Posts from './components/Posts';
import Post from './components/Post';
import Not from './components/Notfound';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <React.Fragment>
                    <NavBar />
                    <Switch>
                        <Route exact component={Home} path={'/'} />
                        <Route component={About} path={'/about'} />
                        <Route component={Contact} path={'/contact'} />
                        <Route component={Posts} path={'/posts'} />
                        <Route component={Post} path={'/post/:postId'} />
                        <Route component={Not} path={''} />
                    </Switch>
                </React.Fragment>
            </BrowserRouter>
        );
    }
}

export default App;
