import { combineReducers } from 'redux';
import data from './data';
import list from './list';

export default (resource, options, res) => combineReducers({
    data: data(resource),
    list: list(resource, res),
});
