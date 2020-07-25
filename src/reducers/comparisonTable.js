const DEFAULT_RATE = 5;
const DEFAULT_VALUE = 1;

const COMPARISON_TABLE_SET_PROPERTY_VALUE = 'COMPARISON_TABLE_SET_PROPERTY_VALUE';
const COMPARISON_TABLE_SET_PROPERTY_NAME = 'COMPARISON_TABLE_SET_PROPERTY_NAME';
const COMPARISON_TABLE_SET_VARIANT_NAME = 'COMPARISON_TABLE_SET_VARIANT_NAME';
const COMPARISON_TABLE_ADD_PROPERTY = 'COMPARISON_TABLE_ADD_PROPERTY';
const COMPARISON_TABLE_ADD_VARIANT = 'COMPARISON_TABLE_ADD_VARIANT';

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

export const setPropertyName = (propertyId, name) => ({
    type: COMPARISON_TABLE_SET_PROPERTY_NAME,
    propertyId,
    name,
});

export const setVariantName = (variantId, name) => ({
    type: COMPARISON_TABLE_SET_VARIANT_NAME,
    variantId,
    name,
});

export const addProperty = () => ({
    type: COMPARISON_TABLE_ADD_PROPERTY,
});

export const addVariant = () => ({
    type: COMPARISON_TABLE_ADD_VARIANT,
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
        case COMPARISON_TABLE_SET_PROPERTY_NAME:
            return {
                ...state,
                properties: state.properties.map((property) => {
                    if (property.id ===action.propertyId) {
                        return {
                            ...property,
                            name: action.name,
                        }
                    }
                    return property;
                })
            };
        case COMPARISON_TABLE_SET_VARIANT_NAME:
            return {
                ...state,
                variants: state.variants.map((variant) => {
                    if (variant.id ===action.variantId) {
                        return {
                            ...variant,
                            name: action.name,
                        }
                    }
                    return variant;
                })
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
        case COMPARISON_TABLE_ADD_VARIANT:
            return {
                ...state,
                variants: [
                    ...state.variants,
                    {
                        id: new Date().getTime(),
                        name: 'Новый вариант',
                    }
                ],
                values: state.values.map((row) => {
                    return [...row, DEFAULT_VALUE]
                }),
            };
        default:
            return state
    }
};

export default comparisonTable
