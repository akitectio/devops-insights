// function* handlGetList({ payload }) {
//   try {
//     const resultsListMedicalRecordPrevNextPage = yield call(getListNoti, payload);
//     if (resultsListNoti) {
//       yield put({
//         type: notiActions.getNotiSuccess.type,
//         payload: resultsListNoti,
//       });
//     }
//   } catch (e) {
//     yield put({
//       type: notiActions.getNotiFailed.type,
//     });
//   }
// }

// export default function* authSaga() {
//     yield fork(watchLoginFlow);
// }

export {};
