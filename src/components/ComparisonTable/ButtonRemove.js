import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

export default function ButtonRemove({ onClick }) {
    return (
        <IconButton aria-label="delete" onClick={onClick}>
            <DeleteIcon fontSize="small" />
        </IconButton>
    );
}
