import React from 'react';
import Loader from 'react-loader-spinner';

const Spinner = (props) => props.active ? <div style={{marginLeft: 500}}><Loader type="ThreeDots" color="blue" height={80} width={80} /></div>: null;


export default Spinner;