import axios from "axios";

// holdings / My holdings

// coin market

export const GET_GLOBAL_BEGIN = "GET_GLOBAL_BEGIN";
export const GET_GLOBAL_SUCCESS = "GET_GLOBAL_SUCCESS";
export const GET_GLOBAL_FAILURE = "GET_GLOBAL_FAILURE";

export const getGlobalBegin = () => ({
    type: GET_GLOBAL_BEGIN,
});

export const getGlobalSuccess = (globaldata) => ({
    type: GET_GLOBAL_SUCCESS,
    payload: { globaldata },
});

export const getGlobalFailure = (error) => ({
    type: GET_GLOBAL_FAILURE,
    payload: { error },
});

export function getGlobalMarket(

) {
    return (dispatch) => {
        dispatch(getGlobalBegin());

        let apiUrl = "https://api.coingecko.com/api/v3/global";

        return axios({
            url: apiUrl,
            method: "GET",
            headers: {
                Accept: "application/json",
            },
        })
            .then((response) => {
                console.log("getGlobalMarket");
                console.log(response.data);

                if (response.status == 200) {
                    dispatch(getGlobalSuccess(response.data));
                } else {
                    dispatch(getGlobalFailure(response.data));
                }
            })
            .catch((error) => {
                dispatch(getGlobalFailure(error));
            });
    };
}
