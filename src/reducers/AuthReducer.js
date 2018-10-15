const INITIAL_STATE = { email: 'some text' };

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        default:
            return state;
    }
}
