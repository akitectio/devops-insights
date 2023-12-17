import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { loginRequest, loginSuccess, loginFailure } from "@redux/auth/slice";
import { LoginPayload } from "@/src/types/auth";

function* handleLogin(action: LoginPayload) {
  try {
    const response = yield call(axios.post, "/api/login", action.payload);
    yield put(loginSuccess(response.data));
    // Xử lý chuyển hướng ở đây (nếu cần)
  } catch (error) {
    yield put(loginFailure(error.message));
  }
}

export default function* watchLoginSaga() {
  yield takeLatest(loginRequest.type, handleLogin);
}
