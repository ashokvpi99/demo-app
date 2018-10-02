const initState = {
    posts: [],
    post: {},
    isError: false,
    isLoading: false,
    error: null
};

const postReducer = (state = initState, action) => {

    switch (action.type) {
        case 'GET_POST': {
            return {
                ...state,
                posts: action.data
            }
        }
        case 'GET_ONE_POST': {
            return {
                ...state,
                post: action.data
            }
        }
        case 'GET_POST_ERROR': {
            return {
                ...state,
                error: action.data
            }
        }
        case 'GET_ONE_POST_ERROR': {
            return {
                ...state,
                error: action.data
            }
        }
        default:
            return {
                ...state
            }
    }
};

export default postReducer;