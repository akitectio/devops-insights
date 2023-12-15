import { put, takeLatest } from "redux-saga/effects";
import { loginRequest, loginFailure } from "@redux/auth/slice";
import { authService } from "@redux/auth/service";
import { PayloadAction } from "@reduxjs/toolkit";
import { LoginPayload } from "@_types/auth";

function* handleLoginSaga(action: PayloadAction<LoginPayload>) {
  try {
    yield put(authService.endpoints.login.initiate(action.payload));
  } catch (error: any) {
    yield put(loginFailure("Lỗi không xác định"));
  }
}

export default function* watchLoginSaga() {
  yield takeLatest(loginRequest.type, handleLoginSaga);
}
