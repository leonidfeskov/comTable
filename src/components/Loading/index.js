import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import './Loading.scss';

export default function Loading() {
    return (
        <div className="loading">
            <CircularProgress color="secondary"/>
        </div>
    );
}
