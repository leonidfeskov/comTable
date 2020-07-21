import { combineReducers } from 'redux'

import comparisonTable from './comparisonTable';
import summary from './summary';

export default combineReducers({
    comparisonTable,
    summary
})
