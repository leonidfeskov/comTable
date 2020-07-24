const SET_SUMMARY = 'SET_SUMMARY';

export const setSummaryAction = (summary) => ({
    type: SET_SUMMARY,
    summary,
});

const summary = (state = [], action) => {
    switch (action.type) {
        case SET_SUMMARY:
            return action.summary;
        default:
            return state
    }
};

export default summary
