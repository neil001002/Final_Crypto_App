import * as chartActions from "./chartActions";

const initialState = {
    coinschart: [],
    error: null,
    loading: false,
};

const chartReducer = (state = initialState, action) => {
    switch (action.type) {
        case chartActions.GET_COIN_CHART_BEGIN:
            return {
                ...state,
                loading: true,
            };
        case chartActions.GET_COIN_CHART_SUCCESS:
            return {
                ...state,
                coinschart: action.payload.coinschart,
            };
        case chartActions.GET_COIN_CHART_FAILURE:
            return {
                ...state,
                error: action.payload.error,
            };
        default:
            return state;
    }
};

export default chartReducer;
