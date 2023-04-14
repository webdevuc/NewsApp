import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  countryReducer,
  headLineReducer,
  searchReducer,
} from "./reducers/headLineReducer";

const reducer = combineReducers({
  headLines: headLineReducer,
  search: searchReducer,
  countries: countryReducer,
});

let initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
