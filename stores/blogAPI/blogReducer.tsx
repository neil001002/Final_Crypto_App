import * as blogActions from "./blogActions";

const initialState = {
    blogs: [],
    error: null,
    loading: false,
};

const blogReducer = (state = initialState, action) => {
    switch (action.type) {
        case blogActions.GET_BLOG_BEGIN:
            return {
                ...state,
                loading: true,
            };
        case blogActions.GET_BLOG_SUCCESS:
            return {
                ...state,
                blogs: action.payload.blogs,
            };
        case blogActions.GET_BLOG_FAILURE:
            return {
                ...state,
                error: action.payload.error,
            };
        default:
            return state;
    }
};

export default blogReducer;
