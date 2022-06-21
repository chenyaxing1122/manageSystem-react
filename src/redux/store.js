import { legacy_createStore as createStore,combineReducers } from "redux";
import {loginRedcuer,menuRedcuer} from "./redcuers/login"
const rootReducer = combineReducers({
    loginRedcuer,
    menuRedcuer
})

export default createStore(rootReducer)

