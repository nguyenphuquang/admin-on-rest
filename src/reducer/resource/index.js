import { combineReducers } from 'redux';
import data from './data';
import list from './list';

export default (resource, options, res) =>  {
    var reducers = {
        data: data(resource),
        list: list(resource, res),
    };

    // quang's add middleware for resource reducer
    if (res.middleware && res.middleware.reducer) {
        reducers = res.middleware.reducer(reducers, {resource, options, res});
    }

    return combineReducers(reducers);
}
