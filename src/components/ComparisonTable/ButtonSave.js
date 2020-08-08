import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Fab from '@material-ui/core/Fab';
import SaveIcon from '@material-ui/icons/Save';
import Tooltip from '@material-ui/core/Tooltip';

import { setLoading } from '../../reducers/loading';
// import firebaseApi from '../../modules/firebase';

export default function ButtonSave() {
    const { comparisonTable } = useSelector((state) => state);
    const dispatch = useDispatch();

    const saveComparisonTable = () => {
        // dispatch(setLoading(true));
        // const request = firebaseApi.post(`comparisonTable`, comparisonTable);
        // request.then(() => {
        //     window.history.pushState({}, '', `/?id=${request.key}`);
        //     dispatch(setLoading(false));
        // }).catch((error) => {
        //     console.error(error);
        //     dispatch(setLoading(false));
        // })
    };
    return (
        <Tooltip title="Получить ссылку на данную таблицу" placement="top">
            <Fab
                size="small"
                color="primary"
                onClick={saveComparisonTable}
            >
                <SaveIcon />
            </Fab>
        </Tooltip>
    );
}
