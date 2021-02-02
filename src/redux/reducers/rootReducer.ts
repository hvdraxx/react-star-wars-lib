import { appReducer } from './appReducer';
import { combineReducers } from "redux";
import { dataReducer } from "./dataReducer";

export const rootReducer = combineReducers({
  data: dataReducer,
  app: appReducer
})