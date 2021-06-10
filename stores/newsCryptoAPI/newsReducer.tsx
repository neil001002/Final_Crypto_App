import * as newsActions from "./newsActions"

const initialState = {
    coinsnews: [],
    error: null,
    loading: false,
};

const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case newsActions.GET_COIN_NEWS_BEGIN:
            return {
                ...state,
                loading: true,
            };
        case newsActions.GET_COIN_NEWS_SUCCESS:
            return {
                ...state,
                coinsnews: action.payload.coinsnews,
            };
        case newsActions.GET_COIN_NEWS_FAILURE:
            return {
                ...state,
                error: action.payload.error,
            };
        default:
            return state;
    }
};

export default newsReducer;


