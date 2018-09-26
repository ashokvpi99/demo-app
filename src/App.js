import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NavBar from './components/Nav';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <React.Fragment>
                    <NavBar />
                    <Route exact component={Home} path={'/'} />
                    <Route exact component={About} path={'/about'} />
                    <Route exact component={Contact} path={'/contact'} />
                </React.Fragment>
            </BrowserRouter>
        );
    }
}

export default App;
