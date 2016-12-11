import { SORT_DESC } from './queryReducer';
import { CRUD_CHANGE_LIST_PARAMS } from '../../../actions/listActions';

const defaultState = {
    sort: 'id',
    order: SORT_DESC,
    page: 1,
    perPage: 10,
    filter: {},
};

export default (resource, res) => (previousState = defaultState, { type, payload, meta }) => {
    if (!meta || meta.resource !== resource) {
        return previousState;
    }
    switch (type) {
    case CRUD_CHANGE_LIST_PARAMS:
        if (res && res.customId) {
            if (payload.sort == 'id') {
                payload.sort = res.customId;
            }
        }
        return payload;
    default:
        return previousState;
    }
};
