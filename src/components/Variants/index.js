import React from 'react';
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

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Количество вакансий', 159, 6.0, 24, 4.0),
    createData('Количество резюме', 237, 9.0, 37, 4.3),
    createData('Зарплата', 262, 16.0, 24, 6.0),
];

export default function Variants() {
    const classes = useStyles();

    return (
        <TableContainer component={Paper} className={classes.container}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Признак для сравнения</TableCell>
                        <TableCell>React</TableCell>
                        <TableCell>Angular</TableCell>
                        <TableCell>Vue</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.name}>
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell>{row.calories}</TableCell>
                            <TableCell>{row.fat}</TableCell>
                            <TableCell>{row.carbs}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <Tooltip title="Добавить признак" placement="top">
                <Fab size="small" color="secondary" className={classes.buttonAddRow}>
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
