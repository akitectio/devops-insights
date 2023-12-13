import { all } from "redux-saga/effects";
import { authSaga } from "../features/auth/authSaga";
// import other sagas

export default function* rootSaga() {
  yield all([
    authSaga(),
    // other sagas
  ]);
}
