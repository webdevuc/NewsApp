import axios from "axios";

import {
  TOP_HEADLINE_REQUEST,
  TOP_HEADLINE_SUCCESS,
  TOP_HEADLINE_FAIL,
  SEARCH_TEXT,
  COUNTRY_LIST,
  URL,
  API_URL,
} from "../constants/constants";

export const getHeadLines = (code) => async (dispatch) => {
  let seletedCode = code ? code : "us";
  try {
    dispatch({ type: TOP_HEADLINE_REQUEST });
    const { data } = await axios.get(
      `${API_URL}?apiKey=fcd0e80204e94043b81f10e3db685e9f&country=${seletedCode}`
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

export const searchText = (data) => async (dispatch) => {
  dispatch({
    type: SEARCH_TEXT,
    payload: data,
  });
};
export const countryCode = (data) => async (dispatch) => {
  dispatch({
    type: COUNTRY_LIST,
    payload: data,
  });
};
