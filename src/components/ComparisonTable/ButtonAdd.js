import React from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Tooltip from '@material-ui/core/Tooltip';

export default function ButtonAdd({ tooltip, onClick }) {
    return (
        <Tooltip title={tooltip} placement="top">
            <Fab
                size="small"
                color="primary"
                onClick={onClick}
            >
                <AddIcon />
            </Fab>
        </Tooltip>
    );
}
