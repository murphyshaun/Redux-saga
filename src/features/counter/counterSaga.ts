import { PayloadAction } from '@reduxjs/toolkit';
import { delay, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { incrementSaga, incrementSagaSuccess } from './counterSlice';

// export function* log(action: PayloadAction) {
//     console.log('log', action);
    
// }

function* handleIncrementSaga(action: PayloadAction<number>) {
    console.log('waiting 2s');
    //wait 2s
    yield delay(2000);
    
    console.log('waiting done, dispatch action');
    
    //dispatch action success
    yield put(incrementSagaSuccess(action.payload));
}

export default function* counterSaga() {
    console.log('hello counter saga');

    //listen counter/increment dispatch action
    // yield takeEvery('counter/increment', log)

    //increment=> action creator => return object
    yield takeEvery(incrementSaga.toString(), handleIncrementSaga);
    // yield takeLatest(incrementSaga.toString(), handleIncrementSaga);

    //* listen every dispatch action
    // yield takeEvery('*', log);
    
}