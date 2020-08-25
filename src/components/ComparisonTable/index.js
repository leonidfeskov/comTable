import React, { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classnames from 'classnames';
import ContentEditable from 'react-contenteditable'

import PropertyRate from './PropertyRate';
import ButtonAdd from './ButtonAdd';
import ButtonRemove from './ButtonRemove';
import ButtonSave from './ButtonSave';
import {
    setPropertyValue,
    setPropertyName,
    setVariantName,
    addProperty,
    removeProperty,
    addVariant,
    removeVariant,
    setPropertyRate,
    setComparisonTable
} from '../../reducers/comparisonTable';
import { setLoading } from '../../reducers/loading';
// import firebaseAPI from '../../modules/firebase';

import './ComparisonTable.css';

const selectText = (element) => {
    const range = document.createRange();
    const textNode = element.childNodes[0];
    if (textNode) {
        range.selectNode(textNode);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
    }
};

export default function ComparisonTable() {
    const dispatch = useDispatch();
    const comparisonTable = useSelector(({ comparisonTable }) => comparisonTable);
    const { variants, properties, values } = comparisonTable;

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const tableId = urlParams.get('id');

    useEffect(() => {
        if (tableId) {
            // firebaseAPI.get(
            //     `comparisonTable/${tableId}`,
            //     (response) => {
            //         dispatch(setComparisonTable(response));
            //         dispatch(setLoading(false));
            //     },
            //     (error) => {
            //         console.error(error);
            //         dispatch(setLoading(false));
            //     }
            // );
        } else {
            dispatch(setLoading(false));
        }
    }, []);

    useEffect(() => {
        if (!tableId) {
            localStorage.setItem('comparisonTable', JSON.stringify(comparisonTable));
        }
    }, [comparisonTable]);

    const lastPropertyOrVariantName = useRef('');

    const handleChangeValue = ({ target, currentTarget }) => {
        dispatch(setPropertyValue(
            Number(currentTarget.dataset.propertyIndex),
            Number(currentTarget.dataset.variantIndex),
            Number(target.value) || 0)
        )
    };

    const handleChangePropertyName = ({ target }) => {
        lastPropertyOrVariantName.current = target.value;
    };

    const handleFocusCell = ({ target }) => {
        selectText(target);
        lastPropertyOrVariantName.current = target.innerText;
    };

    const handleBlurPropertyName = ({ target }) => {
        dispatch(setPropertyName(target.dataset.propertyId, lastPropertyOrVariantName.current));
    };

    const handleBlurVariantName = ({ target }) => {
        dispatch(setVariantName(target.dataset.variantId, lastPropertyOrVariantName.current));
    };

    const handleChangePropertyRate = (propertyId, rate) => {
        const property = properties.find((property) => property.id === propertyId);
        if (property.rate !== rate) {
            dispatch(setPropertyRate(propertyId, rate))
        }
    };

    return (
        <div className="comparison-table-container">
            <table className="comparison-table">
                <thead>
                    <tr>
                        <th className="comparison-table__cell comparison-table__cell_head">
                            <div className="comparison-table-save">
                                <ButtonSave />
                            </div>
                        </th>
                        {variants.map((variant) => (
                            <th className="comparison-table__cell comparison-table__cell_head" key={variant.id}>
                                <ContentEditable
                                    className="comparison-table__cell-editable"
                                    data-variant-id={variant.id}
                                    html={variant.name}
                                    onChange={handleChangePropertyName}
                                    onFocus={handleFocusCell}
                                    onBlur={handleBlurVariantName}
                                />
                                <div className="comparison-table-remove-variant">
                                    <ButtonRemove onClick={() => {dispatch(removeVariant(variant.id))}} />
                                </div>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {properties.map((property, propertyIndex) => (
                        <tr
                            className={classnames('comparison-table__row', {
                                'comparison-table__row_disabled': !property.rate,
                            })}
                            key={property.id}
                        >
                            <th className="comparison-table__cell comparison-table__cell_property">
                                <ContentEditable
                                    className="comparison-table__cell-editable"
                                    data-property-id={property.id}
                                    html={property.name}
                                    onChange={handleChangePropertyName}
                                    onFocus={handleFocusCell}
                                    onBlur={handleBlurPropertyName}
                                />
                                <PropertyRate
                                    value={property.rate}
                                    onChange={(event, value) => handleChangePropertyRate(property.id, value)}
                                />
                                <div className="comparison-table-remove-property">
                                    <ButtonRemove onClick={() => {dispatch(removeProperty(property.id))}} />
                                </div>
                            </th>
                            {values[propertyIndex] && values[propertyIndex].map((value, variantIndex) => {
                                return (
                                    <td className="comparison-table__cell" key={variants[variantIndex].id}>
                                        <ContentEditable
                                            className="comparison-table__cell-editable"
                                            data-property-index={propertyIndex}
                                            data-variant-index={variantIndex}
                                            html={String(value)}
                                            onChange={handleChangeValue}
                                            onFocus={handleFocusCell}
                                        />
                                    </td>
                                )
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="comparison-table-add-row">
                <ButtonAdd tooltip="Добавить признак" onClick={() => dispatch(addProperty())} />
            </div>
            <div className="comparison-table-add-column">
                <ButtonAdd tooltip="Добавить вариант" onClick={() => dispatch(addVariant())} />
            </div>
        </div>
    );
}
