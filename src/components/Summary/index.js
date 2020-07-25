import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import Progress from '../Progress';
import { setSummaryAction } from '../../reducers/summary';
import { calculateSummary } from '../../modules/calculate';

const useStyles = makeStyles(() => ({
    listItem: {
        display: 'block',
    },
}));

export default function Summary() {
    const classes = useStyles();

    const dispatch = useDispatch();
    const { summary, comparisonTable } = useSelector((state) => state);

    useEffect(() => {
        const summary = calculateSummary(comparisonTable);
        dispatch(setSummaryAction(summary))
        console.log('CALC')
    }, [comparisonTable]);

    return (
        <Box>
            <List>
                {summary.map((variant) => (
                    <ListItem key={variant.id} className={classes.listItem}>
                        <Typography variant="h5" component="p">
                            {variant.name} ({variant.value.toFixed(2)})
                        </Typography>
                        <Progress value={variant.value * 100} />
                    </ListItem>
                ))}
            </List>
        </Box>
    );
}
