import { legacy_createStore as createStore,combineReducers } from "redux";
import {loginReducer,menuReducer} from "./redcuers/login"
const rootReducer = combineReducers({
    loginReducer,
    menuReducer
})

export default createStore(rootReducer)

