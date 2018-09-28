import React from 'react';
import Hoc from './HOC';

const Contact = (props) => {
    return (
        <React.Fragment>
            <p className={'center'}>Contact Component</p>
        </React.Fragment>
    )
}

export default Hoc(Contact);