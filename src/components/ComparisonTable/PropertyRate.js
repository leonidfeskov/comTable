import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles(() => ({
    root: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: -1,
        padding: 0,
    },
}));

export default function PropertyRate({ value, onChange }) {
    const classes = useStyles();

    return (
        <Slider
            className={classes.root}
            value={value}
            onChange={onChange}
            aria-labelledby="discrete-slider"
            valueLabelDisplay="auto"
            step={1}
            marks
            min={0}
            max={10}
        />
    );
}
