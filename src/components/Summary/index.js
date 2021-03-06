import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classnames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';

import Progress from '../Progress';
import { setSummaryAction } from '../../reducers/summary';
import { calculateSummary } from '../../modules/calculate';

import './Summary.scss';

const useStyles = makeStyles(() => ({
    root: {
        padding: 0,
    },
    listItem: {
        display: 'block',
    },
}));

export default function Summary() {
    const classes = useStyles();

    const dispatch = useDispatch();
    const { summary, comparisonTable } = useSelector((state) => state);

    let bestValue = 0;
    let worstValue = 1;
    summary.forEach((variant) => {
        if (variant.value > bestValue) {
            bestValue = variant.value;
        }
        if (variant.value < worstValue) {
            worstValue = variant.value;
        }
    });

    useEffect(() => {
        const summary = calculateSummary(comparisonTable);
        dispatch(setSummaryAction(summary));
    }, [comparisonTable]);

    return (
        <div className="summary-list">
            {summary.map((variant) => (
                <div key={variant.id} className="summary-list-item">
                    <div className={classnames('summary-text', {
                        'summary-text_best': variant.value === bestValue,
                    })}>
                        <span>
                            {variant.name}
                        </span>
                        <span>
                            {variant.value.toFixed(3)}
                        </span>
                    </div>
                    <Progress
                        value={variant.value}
                        isWorst={variant.value === worstValue}
                        isBest={variant.value === bestValue}
                    />
                </div>
            ))}
        </div>
    );
}
