import { takeLatest, call, put, all } from "redux-saga/effects";

import postNewTask from "./actions";

export function* signUp({ payload }) {
  try {
    const { name } = payload;

    yield put(postNewTask(name));
  } catch (err) {
    console.log(err);
  }
}
