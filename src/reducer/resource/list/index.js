import { combineReducers } from 'redux';
import ids from './ids';
import params from './params';
import total from './total';

export default (resource, res) => combineReducers({
    ids: ids(resource, res),
    params: params(resource, res),
    total: total(resource),
});
