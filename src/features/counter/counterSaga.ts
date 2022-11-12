import { PayloadAction } from '@reduxjs/toolkit';
import { takeEvery } from 'redux-saga/effects';
import { increment } from './counterSlice';

export function* log(action: PayloadAction) {
    console.log('log', action);
    
}

export default function* counterSaga() {
    console.log('hello counter saga');

    //listen counter/increment dispatch action
    // yield takeEvery('counter/increment', log)

    //increment=> action creator => return object
    yield takeEvery(increment().type, log);

    //* listen every dispatch action
    // yield takeEvery('*', log);
    
}