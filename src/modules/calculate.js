export const calculateSummary = (comparisonData) => {
    const { variants, properties, values } = comparisonData;

    const calculatedVariants = {};
    const normalizedProperties = {};
    const normalizedValues = {};

    // нормализуем степень важности признаков, по которым сравниваем
    const propertiesRateSum = Object.keys(properties).reduce((sum, property) => {
        return sum + properties[property].rate;
    }, 0);

    console.log(propertiesRateSum);
    Object.keys(properties).forEach((propertyId) => {
        normalizedProperties[propertyId] = {
            rate: properties[propertyId].rate / propertiesRateSum,
        };
    });

    // нормальзиуем значения
    Object.keys(values).forEach((propertyId) => {
        normalizedValues[propertyId] = {};

        const sum = Object.values(values[propertyId]).reduce((sum, value) => {
            return sum + value;
        }, 0);

        Object.keys(values[propertyId]).forEach((variantId) => {
            normalizedValues[propertyId][variantId] = values[propertyId][variantId] / sum;
        });
    });



    Object.keys(variants).forEach((variantId) => {
        calculatedVariants[variantId] = {
            name: variants[variantId].name,
            value: Object.keys(normalizedProperties).reduce((result, propertyId) => {
                return result + normalizedProperties[propertyId].rate * normalizedValues[propertyId][variantId]
            }, 0),
        }
    });

    return calculatedVariants;
};
