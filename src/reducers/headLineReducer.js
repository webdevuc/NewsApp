import {
  NEW_PRODUCT_REQUEST,
  NEW_PRODUCT_SUCCESS,
  NEW_PRODUCT_FAIL,
  NEW_PRODUCT_RESET,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_SUCCESS,
  CLEAR_ERRORS,
  TOP_HEADLINE_REQUEST,
  TOP_HEADLINE_SUCCESS,
  TOP_HEADLINE_FAIL,
} from "../constants/constants";

// export const newProductReducer = (state = { product: {} }, action) => {
//   switch (action.type) {
//     case NEW_PRODUCT_REQUEST:
//       return {
//         ...state,
//         loading: true,
//       };
//     case NEW_PRODUCT_SUCCESS:
//       return {
//         loading: false,
//         success: action.payload.success,
//         product: action.payload.product,
//       };
//     case NEW_PRODUCT_FAIL:
//       return {
//         ...state,
//         loading: false,
//         error: action.payload,
//       };
//     case NEW_PRODUCT_RESET:
//       return {
//         ...state,
//         success: false,
//       };
//     case CLEAR_ERRORS:
//       return {
//         ...state,
//         error: null,
//       };
//     default:
//       return state;
//   }
// };

export const headLineReducer = (state = { headLines: [] }, action) => {
  switch (action.type) {
    case TOP_HEADLINE_REQUEST:
      return {
        loading: true,
        ...state,
      };
    case TOP_HEADLINE_SUCCESS:
      return {
        loading: false,
        product: action.payload,
      };
    case TOP_HEADLINE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    // case CLEAR_ERRORS:
    //   return {
    //     ...state,
    //     error: null,
    //   };
    default:
      return state;
  }
};
