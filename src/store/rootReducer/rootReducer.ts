import { applyMiddleware, combineReducers, createStore } from "redux";
import { Settings } from "../reudcers/Settings";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import { middleware } from "../middleware/middleware";


const rootReducer = combineReducers({Settings});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));