import axios from "axios";

// holdings / My holdings

// coin market

export const GET_BLOG_BEGIN = "GET_BLOG_BEGIN";
export const GET_BLOG_SUCCESS = "GET_BLOG_SUCCESS";
export const GET_BLOG_FAILURE = "GET_BLOG_FAILURE";

export const getBlogBegin = () => ({
  type: GET_BLOG_BEGIN,
});

export const getBlogSuccess = (blogs) => ({
  type: GET_BLOG_SUCCESS,
  payload: { blogs },
});

export const getBlogFailure = (error) => ({
  type: GET_BLOG_FAILURE,
  payload: { error },
});

export function getBlog() {
  return (dispatch) => {
    dispatch(getBlogBegin());

    let apiUrl = "https://maglux-tech.herokuapp.com/api/blogs/";

    return axios({
      url: apiUrl,
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        console.log("getBlog");
        console.log(response);
        if (response.status == 200) {
          dispatch(getBlogSuccess(response.data));
        } else {
          dispatch(getBlogFailure(response.data));
        }
      })
      .catch((error) => {
        dispatch(getBlogFailure(error));
      });
  };
}
