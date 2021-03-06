import axios from 'axios';

const dataService = {
    get: (url) => {
        const options = {};
        options.headers = {
            "Content-type": "application/json; charset=UTF-8",
            "Access-Control-Allow-Origin": '*'
        };
        
        return new Promise((resolve, reject) => axios.get(url, options).then((data) => resolve(data)).catch((err) => reject(err)));
    },

    post: (url, data) => {
        const options = {};
        options.body = data;
        options.method = 'POST';
        options.headers = {
            "Content-type": "application/json; charset=UTF-8",
            "Access-Control-Allow-Origin": '*'
        };
        options.body = options.body ? JSON.stringify(options.body) : {};
       
        return new Promise((resolve, reject) => axios.post(url, options).then((data) => resolve(data)).catch((err) => reject(err)));
        
    },

    put: (url, data) => {
        const options = {};
        options.body = data;
        options.method = 'PUT';
        options.headers = {
            "Content-type": "application/json; charset=UTF-8",
            "Access-Control-Allow-Origin": '*'
        };
        options.body = options.body ? JSON.stringify(options.body) : {};

        return new Promise((resolve, reject) => axios.put(url, options).then((data) => resolve(data)).catch((err) => reject(err)));
    },

    delete: (url) => {
        const options = {};
        options.method = 'DELETE';
        options.headers = {
            "Access-Control-Allow-Origin": '*'
        };  

        return new Promise((resolve, reject) => axios.delete(url, options).then((data) => resolve(data)).catch((err) => reject(err)));
    }
};

export default dataService;