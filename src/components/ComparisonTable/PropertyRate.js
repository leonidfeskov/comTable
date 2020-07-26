import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';

const PropertySlider = withStyles({
    root: {
        position: 'absolute',
        zIndex: 1,
        left: 0,
        right: 0,
        bottom: -2,
        padding: 0,
    },
    // colorPrimary: {
    //     color: '#ff5722',
    // },
    rail: {
        backgroundColor: 'transparent',
    }
})(Slider);

export default function PropertyRate({ value, onChange }) {
    return (
        <PropertySlider
            value={value}
            onChange={onChange}
            color="secondary"
            aria-labelledby="discrete-slider"
            valueLabelDisplay="auto"
            step={1}
            min={0}
            max={10}
        />
    );
}
