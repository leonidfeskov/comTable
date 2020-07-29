const SET_LOADING = 'SET_LOADING';

export const setLoading = (isLoading) => ({
    type: SET_LOADING,
    isLoading,
});

const loading = (state = true, action) => {
    switch (action.type) {
        case SET_LOADING:
            return action.isLoading;
        default:
            return state
    }
};

export default loading
