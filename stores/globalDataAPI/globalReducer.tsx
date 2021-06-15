import * as globalActions from './globalActions';

const initialState = {
    globaldata: [],
    error: null,
    loading: false,
};

const globalReducer = (state = initialState, action) => {
    switch (action.type) {
        case globalActions.GET_GLOBAL_BEGIN:
            return {
                ...state,
                loading: true,
            };
        case globalActions.GET_GLOBAL_SUCCESS:
            return {
                ...state,
                globaldata: action.payload.globaldata,
            };
        case globalActions.GET_GLOBAL_FAILURE:
            return {
                ...state,
                error: action.payload.error,
            };
        default:
            return state;
    }
};

export default globalReducer;
