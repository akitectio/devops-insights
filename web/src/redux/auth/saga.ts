import { call, put, takeLatest } from "redux-saga/effects";
import { loginRequest, loginSuccess, loginFailure } from "@redux/auth/slice";
import { LoginPayload, LoginResponse } from "@_types/auth";

import { authService } from "@redux/auth/service";
import { PayloadAction } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";

function* handleLogin(action: PayloadAction<LoginPayload>) {
  try {
    const response: AxiosResponse<LoginResponse> = yield call(
      authService.login,
      action.payload.username,
      action.payload.password
    );
    if (response.status == 401) {
      console.log("401");
      yield put(
        loginFailure({
          status: true,
          data: {
            message: "Username or password is incorrect",
          },
        })
      );
    } else {
      yield put(loginSuccess(response.data));
    }
  } catch (error: any) {
    yield put(loginFailure(error));
  }
}

export default function* watchLoginSaga() {
  yield takeLatest(loginRequest.type, handleLogin);
}
