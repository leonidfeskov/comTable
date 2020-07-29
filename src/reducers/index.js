import { combineReducers } from 'redux'

import comparisonTable from './comparisonTable';
import summary from './summary';
import loading from './loading';

export default combineReducers({
    comparisonTable,
    summary,
    loading,
})
