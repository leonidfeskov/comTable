import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const BorderLinearProgress = withStyles((theme) => ({
    root: {
        height: 20,
        borderRadius: 10,
    },
    colorPrimary: {
        backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    },
    bar: {
        borderRadius: 10,
        backgroundColor: '#1a90ff',
    },
}))(LinearProgress);

export default function Progress({ value }) {
    return (
        <BorderLinearProgress variant="determinate" value={value} />
    );
}
