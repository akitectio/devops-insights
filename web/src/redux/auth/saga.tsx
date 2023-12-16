import { put, takeLatest, call, select, take } from "redux-saga/effects";
import { loginRequest, loginFailure, loginSuccess } from "@redux/auth/slice";
import { authService } from "@redux/auth/service";
import { PayloadAction } from "@reduxjs/toolkit";
import { LoginPayload } from "@_types/auth";

function* handleLoginSaga(action: PayloadAction<LoginPayload>) {
  try {
    yield put(authService.endpoints.login.initiate(action.payload));
    const result = yield take(authService.endpoints.login.matchFulfilled);
    console.log("result", result);

    if (result.payload) {
      // Handle HTTP 200
    } else {
      // Handle other HTTP status codes
    }
    // Handle success response if needed
  } catch (error: any) {
    console.log("error", error);
    // const errorResponse: ErrorState = {
    //   status: true,
    //   code: error.response.status,
    //   error_description: error.response.data.error_description,
    // };
    // console.log(errorResponse);
    // yield put(loginFailure(errorResponse));
  }
}

export default function* watchLoginSaga() {
  yield takeLatest(loginRequest.type, handleLoginSaga);
}
