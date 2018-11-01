import * as types from '../actions/types';

const INITIAL_STATE = {
    loading: true
};
// TODO: create spinner for fetching employees state
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.EMPLOYEES_FETCH_SUCCESS:
            return {...state, employees: action.payload, loading: false};
        default:
            return state;
    }
};