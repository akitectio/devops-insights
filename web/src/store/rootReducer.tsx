import { combineReducers } from "redux";
import authReducer from "../redux/auth/slice";

const rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer;
