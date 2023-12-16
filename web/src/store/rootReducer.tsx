import { combineReducers } from "redux";
import authReducer from "../redux/auth/slice";
import { authService } from "@redux/auth/service";

const rootReducer = combineReducers({
  auth: authReducer,
  [authService.reducerPath]: authService.reducer,
});

export default rootReducer;
