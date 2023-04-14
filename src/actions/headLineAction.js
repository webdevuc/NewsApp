import axios from "axios";

import {
  // PRODUCT_DETAILS_REQUEST,
  // PRODUCT_DETAILS_FAIL,
  // PRODUCT_DETAILS_SUCCESS,
  TOP_HEADLINE_REQUEST,
  TOP_HEADLINE_SUCCESS,
  TOP_HEADLINE_FAIL,
  CLEAR_ERRORS,
} from "../constants/constants";

export const getHeadLines = () => async (dispatch) => {
  try {
    dispatch({ type: TOP_HEADLINE_REQUEST });

    const { data } = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=fcd0e80204e94043b81f10e3db685e9f`
    );

    dispatch({
      type: TOP_HEADLINE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: TOP_HEADLINE_FAIL,
      payload: error.response?.data?.message,
    });
  }
};

// export const getProductDetails = (id) => async (dispatch) => {
//   try {
//     dispatch({ type: PRODUCT_DETAILS_REQUEST });

//     const { data } = await axios.get(`/api/v1/product/${id}`);

//     dispatch({
//       type: PRODUCT_DETAILS_SUCCESS,
//       payload: data.product,
//     });
//   } catch (error) {
//     dispatch({
//       type: PRODUCT_DETAILS_FAIL,
//       payload: error.response.data.message,
//     });
//   }
// };
// Clearing Errors
// export const clearErrors = () => async (dispatch) => {
//   dispatch({ type: CLEAR_ERRORS });
// };
