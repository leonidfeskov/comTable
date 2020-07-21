const INITIAL_STATE = {
    variants: {
        var_1: 'React',
        var_2: 'Angular',
        var_3: 'Vue',
    },
    properties: {
        prop_1: 'Количество вакансий',
        prop_2: 'Количество резюме',
        prop_3: 'Зарплата',
    },
    values: {
        prop_1: {
            var_1: 159,
            var_2: 120,
            var_3: 35,
        },
        prop_2: {
            var_1: 34,
            var_2: 23,
            var_3: 14,
        },
        prop_3: {
            var_1: 100000,
            var_2: 90000,
            var_3: 120000,
        }
    }
};

const comparisonTable = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.filter;
        default:
            return state
    }
};

export default comparisonTable
