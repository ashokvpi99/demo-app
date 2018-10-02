import dataService from '../services/dataService';

export const getPost = (url) =>  (dispatch) =>  {
    dataService.get(url).then(data => dispatch({type: 'GET_POST', data: data.data}))
};