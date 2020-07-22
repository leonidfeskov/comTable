const SET_PROPERTY_VALUE = 'SET_PROPERTY_VALUE';

export const INITIAL_STATE = {
    variants: {
        var_1: {
            name: 'React',
        },
        var_2: {
            name: 'Angular',
        },
        var_3: {
            name: 'Vue',
        },
    },
    properties: {
        prop_1: {
            name: 'Количество вакансий',
            rate: 5,
        },
        prop_2: {
            name: 'Количество резюме',
            rate: 5,
        },
        prop_3: {
            name: 'Зарплата',
            rate: 10,
        },
    },
    values: {
        prop_1: {
            var_1: 159,
            var_2: 120,
            var_3: 100,
        },
        prop_2: {
            var_1: 34,
            var_2: 23,
            var_3: 20,
        },
        prop_3: {
            var_1: 100000,
            var_2: 90000,
            var_3: 120000,
        }
    }
};

export const setPropertyValue = (propertyId, variantId, value) => ({
    type: SET_PROPERTY_VALUE,
    propertyId,
    variantId,
    value,
});

const comparisonTable = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_PROPERTY_VALUE:
            return {
                ...state,
                values: {
                    ...state.values,
                    [action.propertyId]: {
                        ...state.values[action.propertyId],
                        [action.variantId]: action.value,
                    }
                }
            };
        default:
            return state
    }
};

export default comparisonTable
