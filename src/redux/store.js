import { legacy_createStore as createStore,combineReducers } from "redux";
import {loginRedcuer} from "./redcuers/login"
const rootReducer = combineReducers({
    loginRedcuer
})

export default createStore(rootReducer)

