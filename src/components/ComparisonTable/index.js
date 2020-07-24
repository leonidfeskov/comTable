import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ContentEditable from 'react-contenteditable'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Tooltip from '@material-ui/core/Tooltip';

import { setPropertyValue, addProperty } from '../../reducers/comparisonTable';

const useStyles = makeStyles({
    container: {
        position: 'relative',
        overflow: 'visible',
    },
    buttonAddRow: {
        position: 'absolute',
        left: 0,
        top: '100%',
        transform: 'translate(-50%, -50%)',
    },
    buttonAddColumn: {
        position: 'absolute',
        left: '100%',
        top: 0,
        transform: 'translate(-50%, -50%)',
    }
});

export default function ComparisonTable() {
    const classes = useStyles();

    const dispatch = useDispatch();
    const comparisonTable = useSelector(({ comparisonTable }) => comparisonTable);
    const { variants, properties, values } = comparisonTable;

    const handleChange = ({ target, currentTarget }) => {
        dispatch(setPropertyValue(
            Number(currentTarget.dataset.propertyIndex),
            Number(currentTarget.dataset.variantIndex),
            Number(target.value) || 0)
        )
    };

    return (
        <TableContainer component={Paper} className={classes.container}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell />
                        {variants.map((variant) => (
                            <TableCell key={variant.id}>{variant.name}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {properties.map((property, propertyIndex) => (
                        <TableRow key={property.id}>
                            <TableCell component="th" scope="row">
                                {property.name}
                            </TableCell>
                            {values[propertyIndex] && values[propertyIndex].map((value, variantIndex) => {
                                return (
                                    <TableCell key={variants[variantIndex].id}>
                                        <ContentEditable
                                            data-property-index={propertyIndex}
                                            data-variant-index={variantIndex}
                                            html={String(value)}
                                            onChange={handleChange}
                                        />
                                    </TableCell>
                                )
                            })}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <Tooltip title="Добавить признак" placement="top">
                <Fab size="small" color="secondary" className={classes.buttonAddRow} onClick={() => dispatch(addProperty())}>
                    <AddIcon />
                </Fab>
            </Tooltip>
            <Tooltip title="Добавить вариант для сравнения" placement="top">
                <Fab size="small" color="secondary" className={classes.buttonAddColumn}>
                    <AddIcon />
                </Fab>
            </Tooltip>
        </TableContainer>
    );
}
