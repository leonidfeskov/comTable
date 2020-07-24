export const calculateSummary = (comparisonData) => {
    const { variants, properties, values } = comparisonData;

    // нормализуем степень важности признаков, по которым сравниваем
    const propertiesRateSum = properties.reduce((sum, property) => {
        return sum + property.rate;
    }, 0);

    const normalizedPropertyRates = properties.map((property) => property.rate / propertiesRateSum);

    // нормальзиуем значения
    const normalizedValues = [];
    values.forEach((row, propertyIndex) => {
        normalizedValues[propertyIndex] = [];
        const sum = row.reduce((sum, value) => sum + value, 0);
        normalizedValues[propertyIndex] = row.map((value) => value / sum);
    });

    return variants.map((variant, variantIndex) => {
        return {
            id: variant.id,
            name: variant.name,
            value: normalizedPropertyRates.reduce((result, propertyRate, propertyIndex) => {
                const value = normalizedValues[propertyIndex] ? normalizedValues[propertyIndex][variantIndex] : 0;
                return result + propertyRate * value;
            }, 0),
        }
    });
};
