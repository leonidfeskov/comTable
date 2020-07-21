import React from 'react';
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

    return (
        <Box>
            <List>
                <ListItem className={classes.listItem}>
                    <Typography variant="h5" component="p">
                        React (0.5)
                    </Typography>
                    <Progress value={50} />
                </ListItem>
                <ListItem className={classes.listItem}>
                    <Typography variant="h5" component="p">
                        Angular (0.2)
                    </Typography>
                    <Progress value={20} />
                </ListItem>
                <ListItem className={classes.listItem}>
                    <Typography variant="h5" component="p">
                        Vue (0.3)
                    </Typography>
                    <Progress value={30} />
                </ListItem>
            </List>
        </Box>
    );
}
