import React from 'react';
import classnames from 'classnames';

import './ButtonIcon.css';

export default function ButtonIcon({ kind, text, size, onClick }) {
    return (
        <button
            className={classnames(`button-icon button-icon_${kind}`, {
                [`button-icon_${size}`]: size,
            })}
            onClick={onClick}
        >
            {text}
        </button>
    );
}
