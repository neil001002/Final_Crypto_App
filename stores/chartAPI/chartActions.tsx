import axios from "axios";

export const GET_COIN_CHART_BEGIN = "GET_COIN_CHART_BEGIN";
export const GET_COIN_CHART_SUCCESS = "GET_COIN_CHART_SUCCESS";
export const GET_COIN_CHART_FAILURE = "GET_COIN_CHART_FAILURE";

export const getCoinChartBegin = () => ({
    type: GET_COIN_CHART_BEGIN,
});

export const getCoinChartSuccess = (coinschart) => ({
    type: GET_COIN_CHART_SUCCESS,
    payload: { coinschart },
});

export const getCoinChartFailure = (error) => ({
    type: GET_COIN_CHART_FAILURE,
    payload: { error },
});

export function getCoinChart(

    { ID }

) {

    return (dispatch) => {
        dispatch(getCoinChartBegin());

        let apiUrl = `https://api.coingecko.com/api/v3/coins/${ID}/market_chart?vs_currency=usd&days=1`;

        return axios({
            url: apiUrl,
            method: "GET",
            headers: {
                Accept: "application/json",
            },
        })
            .then((response) => {
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
