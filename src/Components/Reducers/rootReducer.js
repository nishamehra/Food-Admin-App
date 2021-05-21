import { combineReducers } from "redux";
import AdminReducer from "./AdminReducer";
import {firebaseReducer} from "react-redux-firebase";


const DEFAULT_REDUCER = (initstate, action) => {
    return {
        key: "HELLO WORLD",
    };
};

const rootReducer = combineReducers({
    DEFAULT: DEFAULT_REDUCER,
    nutrition: AdminReducer,
});

export default rootReducer;