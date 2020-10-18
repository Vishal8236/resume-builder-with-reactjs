import {createStore} from 'redux';
import {r_reducer} from './resume_reducer';
export const store = createStore(r_reducer);