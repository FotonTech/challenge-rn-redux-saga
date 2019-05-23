import {
  all, takeLatest, call, put,
} from 'redux-saga/effects';
import api from '~/services/api';

import { Creators as ListActions, Types as ListTypes } from '~/store/ducks/list';

function* loadList(action) {
  try {
    const { textSearch, page } = action.payload;

    const response = yield call(
      api.get,
      `/volumes/?q=${textSearch}&startIndex=${page * 15}&maxResults=15&fields=items`,
    );

    yield put(ListActions.loadListSuccess(response.data.items));
  } catch (error) {
    yield put(ListActions.loadListFailure());
  }
}

export default function* rootSaga() {
  yield all([takeLatest(ListTypes.LOAD_REQUEST, loadList)]);
}
