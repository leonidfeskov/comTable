import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

export default function ButtonRemove({ onClick }) {
    return (
        <IconButton aria-label="delete" onClick={onClick} tabIndex="-1">
            <DeleteIcon fontSize="small" color="action" />
        </IconButton>
    );
}
