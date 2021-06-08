import * as chartActions from "./chartActions";

const initialState = {
    coins: [],
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
                coins: action.payload.coins,
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
