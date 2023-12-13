import { combineReducers } from "redux";
import authReducer from "../features/auth/authSlice";
// import other reducers

const rootReducer = combineReducers({
  auth: authReducer,
  // other reducers
});

export default rootReducer;
