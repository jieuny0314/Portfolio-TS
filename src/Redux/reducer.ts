import { createReducer, combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storageSession from "redux-persist/lib/storage/session";
import { setNaviValue, setPopUp } from "./action";

type OwnState = {
  naviValue: number;
  popUp: boolean;
};

const initialState: OwnState = {
  naviValue: 0,
  popUp: false,
};

const naviValueReducer = createReducer(initialState.naviValue, (builder) => {
  builder.addCase(setNaviValue, (state, action) => action.payload);
});

const popUpReducer = createReducer(initialState.popUp, (builder) => {
  builder.addCase(setPopUp, (state, action) => action.payload);
});

const rootReducer = combineReducers({
  naviValue: naviValueReducer,
  popUp: popUpReducer,
});

const persistConfig = {
  key: "root",
  storage: storageSession,
  whitelist: ["naviValue", "popUp"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
