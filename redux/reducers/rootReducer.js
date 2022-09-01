import { combineReducers } from 'redux';
import weekNavSlice from '../slices/weekNavSlice';

const rootReducer = combineReducers({
    weekNav: weekNavSlice,
})

export default rootReducer;