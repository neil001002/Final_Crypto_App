import { combineReducers } from "redux";
import chartReducer from "./chartAPI/chartReducer";
import marketReducer from "./marketAPI/marketReducer";

export default combineReducers({
  marketReducer,
  chartReducer
});
