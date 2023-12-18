import { call, put, takeLatest, takeLeading } from "redux-saga/effects";
import {
  loginRequest,
  loginSuccess,
  loginFailure,
  refreshTokenSuccess,
  refreshTokenFailure,
} from "@redux/auth/slice";
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

function* refreshTokenSaga() {
  // try {
  //   const refreshToken = localStorage.getItem("refresh_token");
  //   const response = yield call(axios.post, "/refresh-token", { refreshToken });
  //   localStorage.setItem("access_token", response.data.access_token);
  //   yield put(refreshTokenSuccess(response.data.access_token));
  // } catch (error) {
  //   yield put(refreshTokenFailure(error.message));
  // }
}

export default function* watchLoginSaga() {
  yield takeLatest(loginRequest.type, handleLogin);
  yield takeLeading("auth/refreshToken", refreshTokenSaga);
}
