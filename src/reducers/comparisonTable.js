const DEFAULT_RATE = 5;
const DEFAULT_VALUE = 1;

const COMPARISON_TABLE_SET_PROPERTY_VALUE = 'COMPARISON_TABLE_SET_PROPERTY_VALUE';
const COMPARISON_TABLE_ADD_PROPERTY = 'COMPARISON_TABLE_ADD_PROPERTY';

export const INITIAL_STATE = {
    variants: [
        {
            id: '1',
            name: 'React',
        },
        {
            id: '2',
            name: 'Angular',
        },
        {
            id: '3',
            name: 'Vue',
        },
    ],
    properties: [
        {
            id: '1',
            name: 'Количество вакансий',
            rate: DEFAULT_RATE,
        },
        {
            id: '2',
            name: 'Количество резюме',
            rate: DEFAULT_RATE,
        },
        {
            id: '3',
            name: 'Зарплата',
            rate: DEFAULT_RATE,
        },
    ],
    values: [
        [159, 120, 100],
        [34, 23, 20],
        [100000, 90000, 120000],
    ],
};

export const setPropertyValue = (propertyIndex, variantIndex, value) => ({
    type: COMPARISON_TABLE_SET_PROPERTY_VALUE,
    propertyIndex,
    variantIndex,
    value,
});

export const addProperty = () => ({
    type: COMPARISON_TABLE_ADD_PROPERTY,
});

const comparisonTable = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case COMPARISON_TABLE_SET_PROPERTY_VALUE:
            return {
                ...state,
                values: state.values.map((row, propertyIndex) => {
                    if (propertyIndex === action.propertyIndex) {
                        return row.map((value, variantIndex) => {
                            if (variantIndex === action.variantIndex) {
                                return action.value;
                            }
                            return value
                        })
                    }
                    return row;
                }),
            };
        case COMPARISON_TABLE_ADD_PROPERTY:
            return {
                ...state,
                properties: [
                    ...state.properties,
                    {
                        id: new Date().getTime(),
                        name: 'Новый признак',
                        rate: DEFAULT_RATE,
                    }
                ],
                values: [
                    ...state.values,
                    state.variants.map(() => DEFAULT_VALUE),
                ]
            };
        default:
            return state
    }
};

export default comparisonTable
