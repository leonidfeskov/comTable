import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import Progress from '../Progress';

const useStyles = makeStyles(() => ({
    listItem: {
        display: 'block',
    },
}));

export default function Summary() {
    const classes = useStyles();

    const { summary, comparisonTable } = useSelector((state) => state);

    return (
        <Box>
            <List>
                {Object.keys(summary).map((variantId) => (
                    <ListItem key={variantId} className={classes.listItem}>
                        <Typography variant="h5" component="p">
                            {comparisonTable.variants[variantId]} ({summary[variantId]})
                        </Typography>
                        <Progress value={summary[variantId] * 100} />
                    </ListItem>
                ))}
            </List>
        </Box>
    );
}
