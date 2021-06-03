import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/rootSaga';
import rootReducer from './stores/rootReducer';

const saga = createSagaMiddleware();
export default createStore(rootReducer, applyMiddleware(saga));
saga.run(rootSaga);
