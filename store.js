/**
 * Created by zheng on 2017/8/22.
 */
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware  from 'redux-thunk';

import rootReducer from './reducers';

const createStroreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

export default function configureStore(initialState) {
    const store = createStroreWithMiddleware(rootReducer,initialState);
    return store;
}