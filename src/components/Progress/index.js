import React from 'react';
import classnames from 'classnames';

import './Progress.scss';

export default function Progress({ value, isWorst, isBest }) {
    return (
        <div className="progress">
            <div
                className={classnames('progress__bar', {
                    'progress__bar_worst': isWorst,
                    'progress__bar_best': isBest,
                })}
                style={{width: `${value * 100}%`}}
            />
        </div>
    );
}
