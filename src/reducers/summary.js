const INITIAL_STATE = {
    var_1: 0.5,
    var_2: 0.3,
    var_3: 0.2,
}

const summary = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.filter;
        default:
            return state
    }
};

export default summary
