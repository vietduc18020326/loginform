import {createStore, applyMiddleware} from 'redux';
//import createSagaMiddleware from 'redux-saga';
//import rootSaga from './sagas/rootSaga';
import rootReducer from './stores/rootReducer';
import Reduxthunk from 'redux-thunk';

//const saga = createSagaMiddleware();
export default createStore(rootReducer, applyMiddleware(Reduxthunk));
//saga.run(rootSaga);
