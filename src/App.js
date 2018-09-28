import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NavBar from './components/Nav';
import Post from './components/Posts';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <React.Fragment>
                    <NavBar />
                    <Route exact component={Home} path={'/'} />
                    <Route  component={About} path={'/about'} />
                    <Route  component={Contact} path={'/contact'} />
                    <Route  component={Post} path={'/posts'} />
                </React.Fragment>
            </BrowserRouter>
        );
    }
}

export default App;
