const initState = {
    posts: []
};

const postReducer = (state = initState, action) => {

    switch (action.type) {
        case 'GET_POST': {
            return {
                ...state,
                posts: action.data
            }
        }
        default:
            return {
                ...state
            }
    }
};

export default postReducer;