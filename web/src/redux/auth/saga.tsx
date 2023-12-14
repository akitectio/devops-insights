import { put, takeLatest } from "redux-saga/effects";
import { loginRequest, loginFailure } from "./slice";
import { authService } from "./service";
import { PayloadAction } from "@reduxjs/toolkit";

interface LoginPayload {
  username: string;
  password: string;
}

function* handleLoginSaga(action: PayloadAction<LoginPayload>) {
  try {
    console.log("LoginPayload", action.payload);
    yield put(authService.endpoints.login.initiate(action.payload));
  } catch (error: any) {
    yield put(loginFailure("Lỗi không xác định"));
  }
}

export default function* watchLoginSaga() {
  yield takeLatest(loginRequest.type, handleLoginSaga);
}
