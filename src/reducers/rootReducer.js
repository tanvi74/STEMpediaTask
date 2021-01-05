import { combineReducers } from 'redux';
import inputReducer from "./inputReducer";

const rootReducer = combineReducers({
    inputText: inputReducer
})

export default rootReducer;