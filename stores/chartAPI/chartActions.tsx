import axios from "axios";

// holdings / My holdings

// coin market

export const GET_COIN_CHART_BEGIN = "GET_COIN_CHART_BEGIN";
export const GET_COIN_CHART_SUCCESS = "GET_COIN_CHART_SUCCESS";
export const GET_COIN_CHART_FAILURE = "GET_COIN_CHART_FAILURE";

export const getCoinChartBegin = () => ({
    type: GET_COIN_CHART_BEGIN,
});

export const getCoinChartSuccess = (coins) => ({
    type: GET_COIN_CHART_SUCCESS,
    payload: { coins },
});

export const getCoinChartFailure = (error) => ({
    type: GET_COIN_CHART_FAILURE,
    payload: { error },
});

export function getCoinChart(
    currency = "usd",
    id = "bitcoin",
    days = "7"
) {
    return (dispatch) => {
        dispatch(getCoinChartBegin());

        let apiUrl = `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency}&days=${days}`;

        return axios({
            url: apiUrl,
            method: "GET",
            headers: {
                Accept: "application/json",
            },
        })
            .then((response) => {
                console.log("getCoinChart");
                console.log(response);
                if (response.status == 200) {
                    dispatch(getCoinChartSuccess(response.data));
                } else {
                    dispatch(getCoinChartFailure(response.data));
                }
            })
            .catch((error) => {
                dispatch(getCoinChartFailure(error));
            });
    };
}
