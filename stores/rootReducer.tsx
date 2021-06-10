import { combineReducers } from "redux";
import chartReducer from "./chartAPI/chartReducer";
import marketReducer from "./marketAPI/marketReducer";
import newsReducer from "./newsCryptoAPI/newsReducer";

export default combineReducers({
  marketReducer,
  chartReducer,
  newsReducer
});
