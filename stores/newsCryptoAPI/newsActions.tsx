import axios from "axios";

// holdings / My holdings

// coin market

export const GET_COIN_NEWS_BEGIN = "GET_COIN_NEWS_BEGIN";
export const GET_COIN_NEWS_SUCCESS = "GET_COIN_NEWS_SUCCESS";
export const GET_COIN_NEWS_FAILURE = "GET_COIN_NEWS_FAILURE";
// const apiKey1 = "f08f0a610915445b89739684b1217bc4"
// const apiKey2 = "8e4d3bae661342c79dcbb9ad683a7095"


export const getCoinNewsBegin = () => ({
    type: GET_COIN_NEWS_BEGIN,
});

export const getCoinNewsSuccess = (coinsnews) => ({
    type: GET_COIN_NEWS_SUCCESS,
    payload: { coinsnews },
});

export const getCoinNewsFailure = (error) => ({
    type: GET_COIN_NEWS_FAILURE,
    payload: { error },
});

export function getCoinNews(
    { ID }
) {
    return (dispatch) => {
        dispatch(getCoinNewsBegin());

        let apiUrl = `https://newsapi.org/v2/everything?q=${ID}&sortBy=publishedAt&language=en&apiKey=f08f0a610915445b89739684b1217bc4`;

        return axios({
            url: apiUrl,
            method: "GET",
            headers: {
                Accept: "application/json",
            },
        })
            .then((response) => {
                console.log("getCoinNews");
                console.log(response);
                if (response.status == 200) {
                    dispatch(getCoinNewsSuccess(response.data));
                } else {
                    dispatch(getCoinNewsFailure(response.data));
                }
            })
            .catch((error) => {
                dispatch(getCoinNewsFailure(error));
            });
    };
}
