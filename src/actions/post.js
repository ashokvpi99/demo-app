import dataService from '../services/dataService';

export const getPost = (url) =>  (dispatch) =>  {
    dataService.get(url).then(data => dispatch({type: 'GET_POST', data: data.data})).catch(err => dispatch({type: 'GET_POST_ERROR', data: err}))
};

export const getOnePost = (url) => (dispatch) => {
    dataService.get(url).then(data => dispatch({type: 'GET_ONE_POST', data: data.data})).catch(err => dispatch({type: 'GET_ONE_POST_ERROR', data: err}))
};